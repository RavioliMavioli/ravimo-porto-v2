<script>

  import { window_controls } from "../nav_and_links.svelte"
  import { set_darkmode } from "../color_manager.svelte"
  import { darkmode, window_closed} from "../store/store"
  import { onMount } from "svelte"

  var the_window, window_taksbar = null

  export var overlay = ""
  export var anim_init = ""

  const darkmode_text = {text: "Dark", icon: "fa-moon"}  
  const change_darkmode_text = () => {
    darkmode_text.text = $darkmode ? "Dark" : "Light"
    darkmode_text.icon = $darkmode ? "fa-moon" : "fa-sun"
  }

  function window_control(obj){
    obj.active = !obj.active

    switch (obj.index) {
      case (0):
        $window_closed = !$window_closed
        if (obj.active){
          the_window.classList.add('minimize')
          window_taksbar.classList.add('window-taskbar-show')
        }
        else {
          the_window.classList.remove('minimize')
          window_taksbar.classList.remove('window-taskbar-show')
        }
        break

      case (1):
        if (obj.active) the_window.classList.add('maximize')
        else the_window.classList.remove('maximize')
        break

      case (2):
        $window_closed = !$window_closed
        if (obj.active) {
          the_window.classList.add('close')
          window_taksbar.classList.add('window-taskbar-show')
        }
        else {
          the_window.classList.remove('close')
          window_taksbar.classList.remove('window-taskbar-show')
        }
        break
    }

  }

  function open_window(){
    window_controls[0].active = false
    window_controls[2].active = false
    $window_closed = false
    window_taksbar.classList.remove('window-taskbar-show')
    the_window.classList.remove('minimize', 'close')
    
  }

  onMount(() => {
    // Init
    change_darkmode_text()
  })

</script>

<!----------------------------------- Window Container ----------------------------------->
<div class="absolute flex justify-center items-center top-0 left-0 h-screen w-screen"  >

    <!-- Window -->
    <div class="translucent-round {anim_init} relative flex justify-start items-center flex-col duration-300
                h-[70%] w-[60%] 3xl:min-w-[40%] 3xl:h-[50%] max-xl:min-w-[70%] max-md:min-w-[90%]"
                bind:this={the_window}>
      <!-- Window Container -->
      <div class="relative no-scrollbar overflow-y-scroll mt-14 mb-6 px-[30px] h-full w-full
                  max-md:mt-10">
      
        <!-- Window Content -->
        <slot />
        <!-------------------->

      </div>

      <!----------------------------------- Window Controls Section ----------------------------------->
      {#if overlay}
        <div class={overlay}/>
      {/if}
      <!-- Window Control Container -->
      <div class="absolute w-full px-[20px] h-6 top-4 overflow-y-hidden
                  max-md:top-2 max-sm:px-[14px]">
        
        <div class="relative flex-middle justify-end gap-2">
          <!-- Dark Mode Button -->
          <button class="absolute left-0 flex-middle flex-row w-auto border-[--theme-nord] border-2 rounded-full group
                         hover:border-[--theme-white] hover:bg-[--theme-white] hover:glow"
                         on:click={() => {$darkmode = !$darkmode; set_darkmode($darkmode); change_darkmode_text()}}>
            <p2 class="text-[--theme-white] p-1 ml-2 group-hover:text-[--theme-black]">{darkmode_text.text}</p2>
            <i class="{darkmode_text.icon} fa-solid text-sm p-1 mr-2 group-hover:text-[--theme-black]"/>
          </button>
          <!-- Window Control Buttons -->
            {#each window_controls as bar}
              <button on:click={() => {window_control(bar)}}>
                <i class="fa-solid fa-circle text-xl
                          {bar.color} 
                          max-lg:text-lg
                          hover:opacity-75"></i>
              </button>
            {/each}
        </div>
      </div>
    </div>
    <!-- Taskbar Icon Button -->
    <button class=" absolute scale-0 opacity-0 rotate-45 translucent-round bottom-10 rounded-full duration-300
                    w-[100px] h-[100px]
                    max-xl:h-[90px] max-xl:w-[90px]
                    max-lg:h-[80px] max-lg:w-[80px]" bind:this={window_taksbar} on:click={() => {open_window()}}>
      <i class="fa-solid fa-window-restore text-[--theme-white]
                text-2xl  
                max-xl:text-xl
                max-lg:text-lg"></i>
    </button>
</div>

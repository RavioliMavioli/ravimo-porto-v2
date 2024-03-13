<script>

  import { window_controls } from "$lib/etc/nav_and_links.svelte"
  import { set_darkmode } from "$lib/etc/color_manager.svelte"
  import { darkmode, window_closed, open_previewer, can_maximize} from "$lib/store/store"
  import { onMount } from "svelte"

  let the_window, window_taskbar = null
  let last_maximize = false
  
  export function toggle_window(close, minimize = false){
    $window_closed = !$window_closed
    if (close){
        the_window.classList.add(minimize ? 'minimize' : 'close')
        window_taskbar.classList.add('window-taskbar-show')
      }
    else {
        the_window.classList.remove(minimize ? 'minimize' : 'close')
        window_taskbar.classList.remove('window-taskbar-show')
      }
  }

  export function maximize_window(maximize, override = false){
    if (!$can_maximize && !override) return
    if (maximize) the_window.classList.add('maximize')
    else the_window.classList.remove('maximize')
  }

  export function return_to_last_maximize(){
      maximize_window(last_maximize, true)
      window_controls[1].active = last_maximize
    }

  export function disable_maximize(){
    $can_maximize = false
    last_maximize = window_controls[1].active
    window_controls[1].active = true
    maximize_window(window_controls[1].active, true)
  }

  export let overlay = ""
  export let anim_init = ""

  const darkmode_text = {text: "Dark", icon: "fa-moon"}  
  const change_darkmode_text = () => {
    darkmode_text.text = $darkmode ? "Dark" : "Light"
    darkmode_text.icon = $darkmode ? "fa-moon" : "fa-sun"
  }

  function window_control(obj){
    obj.active = !obj.active

    switch (obj.index) {
      case (0):
        toggle_window(obj.active, true)
        break

      case (1):
        maximize_window(obj.active)
        four_k_manager()
        break

      case (2):
        toggle_window(obj.active)
        break
    }

  }

  function four_k_manager(){
      if (window_controls[1].active === false) the_window.classList.add("3xl:w-[40%]", "3xl:h-[50%]")
      else the_window.classList.remove("3xl:w-[40%]", "3xl:h-[50%]")
    }

  function open_window(){
    window_controls[0].active = false
    window_controls[2].active = false
    $window_closed = false
    window_taskbar.classList.remove('window-taskbar-show')
    the_window.classList.remove('minimize', 'close')

    $open_previewer = false
    
  }

  onMount(() => {
    // Init
    change_darkmode_text()
    four_k_manager()
  })

  $:{
    // Hide taskbar when previewer is active
    if (window_taskbar){
      if ($window_closed){
        if ($open_previewer) window_taskbar.classList.remove('window-taskbar-show')
        else window_taskbar.classList.add('window-taskbar-show')
      }
    }
  }
</script>

<!----------------------------------- Window Container ----------------------------------->
<div class="absolute flex justify-center items-center top-0 left-0 h-screen w-screen pointer-events-none"  >

  <!-- Window -->
  <div class="translucent-round {anim_init} relative flex justify-start items-center flex-col duration-300 pointer-events-auto
            h-[70%] w-[60%]

            3xl:min-w-[40%] 3xl:min-h-[50%]
            max-2xl:min-w-[67%] max-2xl:max-2xl:min-h-[75%]
            max-xl:min-w-[70%] max-xl:min-h-[80%]
            max-md:min-w-[90%] max-md:min-h-[85%]"
            bind:this={the_window}>
    <!-- Window Container -->
    <div class="relative scroll-smooth no-scrollbar overflow-y-scroll mt-14 mb-6 px-[30px] h-full w-full
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
            <button class={$can_maximize ? "" : bar.custom}
                    on:click={() => {window_control(bar)}}>
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
  <button class=" pointer-events-auto fixed scale-0 opacity-0 rotate-45 translucent-round bottom-10 rounded-full duration-300
                  w-[100px] h-[100px]
                  max-xl:h-[80px] max-xl:w-[80px] max-xl:bottom-7
                  max-lg:h-[70px] max-lg:w-[70px] max-lg:bottom-4
                  hover:-translate-y-1
                  active:translate-y-0 active:bg-[--theme-white]
                  "
                  bind:this={window_taskbar} on:click={() => {open_window()}}>
    <i class="fa-solid fa-window-restore text-[--theme-white]
              text-2xl  
              max-xl:text-xl
              max-lg:text-lg"></i>
    <div class="absolute w-full h-full top-0 left-0 rounded-full bg-white duration-500
                {$window_closed ? "opacity-0" : "opacity-100"}" />
  </button>

</div>

<style>
  :global(.blocked){
    @apply pointer-events-none opacity-30 cursor-not-allowed
  }
</style>
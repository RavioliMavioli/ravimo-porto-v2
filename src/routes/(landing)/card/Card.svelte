<script>
  import acchan from "../../../assets/img/acchan.png"
  import QuarterCircle from "../../../lib/circularbar.svelte"
  import LinedTitle from "../../../lib/lined_title.svelte"
  import Tide from "../../../lib/tide.svelte"
  import { nav_list, links, title_bar } from "../../../lib/nav_and_links.svelte"
  import { set_darkmode } from "../../../lib/color_manager.svelte"

  import { tweened } from 'svelte/motion'
  import { quadOut } from 'svelte/easing'

  export var darkmode = true
  export var intro_ended = false
  export var window_closed = false

  //intro_ended = true

  var the_window = null

  const darkmode_text = {text: "Dark", icon: "fa-moon"}
  var value = tweened(0.0, {
    duration: 2000,
    easing: quadOut
  })
  
  const change_darkmode_text = () => {
    darkmode_text.text = darkmode ? "Dark" : "Light"
    darkmode_text.icon = darkmode ? "fa-moon" : "fa-sun"
  }

  $: {
    if (intro_ended){
      setTimeout(()=> {
        value.set(75.0)
        }, 300)
    }
  }
  var window_taksbar = null

  function window_control(obj){
    obj.active = !obj.active

    switch (obj.index) {
      case (0):
        window_closed = !window_closed
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
        window_closed = !window_closed
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
    title_bar[0].active = false
    title_bar[2].active = false
    window_closed = false
    window_taksbar.classList.remove('window-taskbar-show')
    the_window.classList.remove('minimize', 'close')
    
  }




  
    

</script>

<!----------------------------------- Window Container ----------------------------------->
<div class="absolute flex justify-center items-center top-0 left-0 h-screen w-screen" >
  <!-- Check if backdrop animation is completed -->
  {#if intro_ended}
    <!-- Window -->
    <div class="translucent-round anim relative flex justify-start items-center flex-col duration-300
                h-[70%] w-[60%] 3xl:min-w-[40%] 3xl:h-[50%] max-xl:min-w-[70%] max-md:min-w-[90%]"
                bind:this={the_window}>
      <!-- Window Container -->
      <div class="relative no-scrollbar overflow-y-scroll mt-14 mb-6 px-[30px] h-full w-full
                  max-md:mt-10">
        <!---------------------- Upper Section ---------------------->
        <div class="flex-middle h-auto gap-2 mt-6
                    max-lg:flex-col max-lg:items-center">

          <!-- Arch-chan Container -->
          <div class="max-w-[16rem]
                      max-xl:max-w-[13rem]
                      max-lg:max-w-[12rem]
                      max-sm:max-w-[10rem]">

            <!-- Arch-chan Pic Border Container (position absolute goes wank if the width and height is not redefined) -->
            <div class="absolute rounded-full
                        w-[16rem] h-[16rem]
                        max-xl:w-[13rem] max-xl:h-[13rem]
                        max-lg:w-[12rem] max-lg:h-[12rem]
                        max-sm:w-[10rem] max-sm:h-[10rem]">

              <!-- Arch-chan Pic Border Quarter Circle -->
              <div class="absolute -scale-x-100 w-full h-full">
                <section class="animate-[spin_3s]">
                  <QuarterCircle bind:value={$value} info="" color="var(--theme-white)" trackColor="transparent" thickness=4px/>
                </section>
              </div>
              <!-- Arch-chan Pic Border Dotted -->
              <div class="absolute animate-[spin_30s_linear_infinite] rounded-full w-full h-full outline-dashed outline-[--theme-white] outline-offset-[-5px] outline-2"/>
            </div>
            <!-- Arch-chan Image -->
            <img src={acchan} class="rounded-full scale-[90%]" alt="">
          </div>

          <!-- Biodata -->
          <div class="flex-middle flex-col gap-5 ms-10 text-justify
                      max-lg:mx-10 max-lg:my-8">
              <!-- First Line -->
              <LinedTitle title="Ravimo"/>
              <!-- Introduction -->
              <div class="mx-[1rem]">
                <p1>
                  Hello! I am Ravimo, an illustrator,
                  front end developer, game developer, and open-source enthusiast.
                  Welcome to my web page!
                </p1>
              </div>
              <!-- Second Line -->
              <LinedTitle/>
              <!-- Links list -->
              <div class="flex-middle flex-row gap-2 max-sm:gap-0">

                {#each links as link}
                  <a href={link.link} target="_blank" class="group hover:bg-[--theme-white] hover:glow">
                    <div class="flex-middle group-hover:bg-[--theme-white]">
                      <i class={link.icon + " text-3xl px-2 group-hover:text-[--theme-black]"}/>  
                      <p3 class=" absolute translate-y-6 text-transparent duration-200 group-hover:text-[--theme-white]
                                  group-hover:translate-y-9
                                  max-sm:group-hover:translate-y-7">{link.name}</p3>
                    </div>
                  </a>
                {/each}

              </div>
          </div>
        </div>
        <!---------------------- Mid Section ---------------------->
        <div class="relative flex-middle flex-col items-start gap-2 h-auto my-10">
          <!---------------------- Mid Line ---------------------->
          <Tide />
          <!---------------------- Nav Section ---------------------->
          <div class="flex-middle gap-3 my-2">
            {#each nav_list as nav}
              <a href={nav.link} target="_blank">
                <button class=" border-[--theme-nord] py-2 px-8 border-2 rounded-full group
                                hover:bg-[--theme-white] hover:border-[--theme-white] hover:glow
                                max-xl:px-5
                                max-md:px-2
                                max-sm:px-1">
                  <p1 class="group-hover:text-[--theme-black]">{nav.text}</p1>
                </button>
              </a>
            {/each}
          </div>
          <!--
          <div class="flex-middle min-h-10"/>-->
        </div>
        <!---------------------- Bottom Section ---------------------->
        <div class="flex-middle w-full h-[1px]"></div>
      </div>
      <!----------------------------------- Window Controls Section ----------------------------------->

      <!-- White window loading -->
      <div class="absolute top-0 opacity-0 card-opacity-animate bg-[--theme-white] translucent h-full w-full max-sm:w-[90%] rounded-3xl pointer-events-none"/>
      <!-- Window Control Container -->
      <div class="absolute w-full px-[20px] h-6 top-4 overflow-y-hidden
                  max-md:top-2 max-sm:px-[10px]">
        
        <div class="relative flex-middle justify-end gap-2">
          <!-- Dark Mode Button -->
          <button class="absolute left-0 flex-middle flex-row w-auto border-[--theme-nord] border-2 rounded-full group
                         hover:border-[--theme-white] hover:bg-[--theme-white] hover:glow"
                         on:click={() => {darkmode = !darkmode; set_darkmode(darkmode); change_darkmode_text()}}>
            <p2 class="text-[--theme-white] p-1 ml-2 group-hover:text-[--theme-black]">{darkmode_text.text}</p2>
            <i class="{darkmode_text.icon} fa-solid text-sm p-1 mr-2 group-hover:text-[--theme-black]"/>
          </button>
          <!-- Window Control Buttons -->
            {#each title_bar as bar}
              <button on:click={() => {window_control(bar)}}>
                <i class="fa-solid fa-circle text-xl
                          {bar.color} 
                          max-lg:text-lg
                          max-md:text-sm
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

  {/if}

</div>

<style>

  .card-opacity-animate{
    animation-name: opacity;
    animation-duration: 1s;
  }

  .anim {
    animation-name: card;
    animation-duration: 1s;
    animation-timing-function: e;
    
  }

  @keyframes card {
    0% {
      opacity: 0%;
      scale: 120%;
    }

    50% {
      opacity: 100%;
      scale: 90%;
    }
    70% {
      scale: 110%;
    }
    100% {
      scale: 100%;
    }
  }
  @keyframes opacity {
    0% {
      opacity: 1;
      width: 100%;
    }
    50% {
      opacity: 1;
      width: 100%;
    }
    100% {
      opacity: 0;
      width: 100%;
    }

  }
  
</style>
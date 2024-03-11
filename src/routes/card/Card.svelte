<script>
  import acchan from "$lib/assets/img/acchan.png"
  import Window from "../../lib/components/Window.svelte"
  import QuarterCircle from "../../lib/circularbar.svelte"
  import LinedTitle from "../../lib/lined_title.svelte"
  import Tide from "../../lib/tide.svelte"
  import { nav_list, links } from "../../lib/nav_and_links.svelte"
  
  import { tweened } from 'svelte/motion'
  import { quadOut } from 'svelte/easing'
  
  export let intro_ended = false
  let main_window = null
  let overlay = "absolute top-0 opacity-0 card-opacity-animate bg-white translucent h-full w-full max-sm:w-[90%] rounded-3xl pointer-events-none"
  let anim_init = "anim"
  //intro_ended = true
  
  let value = tweened(0.0, {
    duration: 2000,
    easing: quadOut
  })

  $: {
    if (intro_ended){
      setTimeout(()=> {
        value.set(75.0)
        }, 300)
    }
  }

  function process_nav(txt){
    console.log("ASDASD")
    if (main_window === null) return
    switch (txt){
      case "Portfolio":
        main_window.toggle_window(true)
        break
    }
  }

</script>

<!----------------------------------- Window Container ----------------------------------->
<div class="absolute w-screen h-screen pointer-events-none" >
  <!-- Check if backdrop animation is completed -->
  {#if intro_ended}
    <!-- Window -->
      <Window bind:overlay bind:anim_init bind:this={main_window}>
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
          <div class="flex-middle flex-col gap-5 ms-10 text-center
                      max-lg:mx-10 max-lg:my-8
                      max-sm:text-justify">
              <!-- First Line -->
              <LinedTitle title="Ravimo"/>
              <!-- Introduction -->
              <div class="mx-[1rem]">
                <p1>
                  Hello! I am Ravimo, an illustrator, developer, and Linux enthusiast.
                  Welcome to my web page!
                </p1>
                <div class="flex-middle gap-4 pt-5 max-sm:flex-col max-sm:items-start">
                  <i class="fa-solid fa-paintbrush text-[--theme-green] flex flow-row gap-2"><p2>illustrator</p2></i>
                  <i class="fa-solid fa-gamepad text-[--theme-purple] flex flow-row gap-2"><p2>Game Dev</p2></i>
                  <i class="fa-solid fa-globe text-[--theme-blue] flex flow-row gap-2"><p2>Front End Dev</p2></i>
                </div>
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
              <!-- <a href={nav.link} target="_blank"> -->
                <button class=" border-[--theme-nord] py-2 px-8 border-2 rounded-full group
                                hover:bg-[--theme-white] hover:border-[--theme-white] hover:glow
                                max-xl:px-5
                                max-md:px-2
                                max-sm:px-1"
                        on:click={() => {process_nav(nav.text)}}>
                  <p1 class="group-hover:text-[--theme-black]">{nav.text}</p1>
                </button>
              <!-- </a> -->
            {/each}
          </div>
          <!--
          <div class="flex-middle min-h-10"/>-->
        </div>
        <!---------------------- Bottom Section ---------------------->
        <div class="flex-middle w-full h-[1px]"></div>

      </Window>
      
    
  {/if}

</div>

<style>

  :global(.card-opacity-animate) {
    animation-name: opacity;
    animation-duration: 1s;
  }

  :global(.anim) {
    animation-name: card;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    
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
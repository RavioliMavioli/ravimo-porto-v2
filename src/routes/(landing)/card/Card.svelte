<script>
  import acchan from "../../../assets/img/acchan.png"
  import QuarterCircle from "../../../lib/circularbar.svelte"
  import LinedTitle from "../../../lib/lined_title.svelte"
  import {nav_list, links, title_bar} from "../../../lib/nav_and_links.svelte"

  import { tweened } from 'svelte/motion'
  import { quadOut } from 'svelte/easing'

  export var intro_ended = false
  //intro_ended = true
  
  var value = tweened(0.0, {
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
    

</script>

<!----------------------------------- Window Container ----------------------------------->
<div class="absolute flex justify-center items-center top-0 left-0 h-screen w-screen">
  <!-- Check if backdrop animation is completed -->
  {#if intro_ended}
    <!-- Window -->
    <div class="translucent-round anim relative flex justify-start items-center flex-col duration-200
                min-h-[70%] max-w-[60%]
                3xl:min-w-[40%] 3xl:min-h-[50%]
                max-xl:max-w-[80%]
                max-md:max-w-[90%]">

        <!---------------------- Upper Section ---------------------->
        <div class="flex-middle items-start gap-2 px-10 mt-20
                    max-lg:flex-col max-lg:items-center">

          <!-- Arch-chan Container -->
          <div class="max-w-[16rem]
                      max-xl:max-w-[14rem]
                      max-lg:max-w-[12rem]
                      max-sm:max-w-[10rem]">

            <!-- Arch-chan Pic Border Container (position absolute goes wank if the width and height is not redefined) -->
            <div class="absolute rounded-full
                        w-[16rem] h-[16rem]
                        max-xl:w-[14rem] max-xl:h-[14rem]
                        max-lg:w-[12rem] max-lg:h-[12rem]
                        max-sm:w-[10rem] max-sm:h-[10rem]">

              <!-- Arch-chan Pic Border Quarter Circle -->
              <div class="absolute -scale-x-100 w-full h-full">
                <section class="animate-[spin_3s]">
                  <QuarterCircle bind:value={$value} info="" color="white" textColor="transparent" trackColor="transparent" thickness=4px/>
                </section>
              </div>
              <!-- Arch-chan Pic Border Dotted -->
              <div class="absolute animate-[spin_30s_linear_infinite] rounded-full w-full h-full outline-dashed outline-white outline-offset-[-5px] outline-2"/>
            </div>
            <!-- Arch-chan Image -->
            <img src={acchan} class="rounded-full scale-[90%]" alt="">
          </div>

          <!-- Biodata -->
          <div class="flex-middle flex-col gap-5 ms-10 text-justify
                      max-lg:mx-10 max-lg:my-10">
              <!--First Line-->
              <LinedTitle title="Ravimo"/>
              <!--Introduction-->
              <div class="mx-[1rem]">
                <p1>
                  Hello! I am Ravimo, an illustrator,
                  front end developer, game developer, and open-source enthusiast.
                  Welcome to my web page!
                </p1>
              </div>
              <!--Second Line-->
              <LinedTitle/>
              <!--Links list-->
              <div class="flex-middle flex-row gap-2 max-sm:gap-0">
                {#each links as link}
                  <a href={link.link} target="_blank" class="group hover:bg-white">
                    <div class="flex-middle group-hover:bg-white">
                      <i class={link.icon + " text-3xl px-2 group-hover:text-black"}/>  
                      <p3 class="absolute text-transparent duration-200 translate-y-6 group-hover:translate-y-9 group-hover:text-white">{link.name}</p3>
                    </div>
                  </a>
                {/each}
              </div>
          </div>
        </div>
        <!---------------------- Mid Section ---------------------->
        <div class="relative flex-middle flex-col gap-2 px-10 mt-10
                    max:xl=mt-5
                    max-lg:mt-0">
          <!---------------------- Mid Line ---------------------->
          <div class="flex-middle items-start opacity-30">
            <!-- Wanky Rounded Left -->
            <div class="corner-border-l translate-x-5 translate-y-[9px] rounded-tl-xl"/>
            <div class="border-l-only translate-x-5 translate-y-[28px]"/>
            <div class="corner-border-l translate-x-5 translate-y-[48px] -scale-y-100 rounded-tl-xl"/>
            <!-- Line Section -->
            <div class="flex-middle">
              <!-- Start -->
              <div class="flex flex-row text-black">
                <div class="bg-white pl-2 flex-middle">
                  <p2 class="mx-2">$Navigation~</p2>
                </div>
                <div class="border-t-[10px] border-b-[10px] border-t-transparent border-l-[15px] border-l-white border-b-transparent
                            max-sm:border-t-[8px] max-sm:border-b-[8px]"/>
              </div>
              <!-- Line -->
              <div class="h-[2px] w-full bg-white"/>
              <!-- End -->
              <div class="flex flex-row text-black">
                <div class="border-t-[10px] border-b-[10px] border-t-transparent border-r-[15px] border-r-white border-b-transparent
                            max-sm:border-t-[8px] max-sm:border-b-[8px]"/>
                <div class="bg-white pr-2 flex-middle">
                  <p2 class="mx-2">0s</p2>
                </div>
              </div>  
            </div>
          </div>
          <!---------------------- Nav Section ---------------------->
          <div class="flex-middle gap-3 mt-3
                      max-md:gap-1 max-md:mt-2">
            {#each nav_list as nav}
              <a href={nav.link} class="hover:bg-white hover:text-black py-1 px-5 border-2 border-white border-opacity-30
                                        max-md:px-2
                                        max-sm:px-1">
                <p1>{nav.text}</p1>
              </a>
            {/each}
          </div>
          <div class="flex-middle min-h-10"/>
        </div>
      <!----------------------------------- Window Decoration Section ----------------------------------->

      <!-- White window -->
      <div class="absolute top-0 opacity-0 card-opacity-animate bg-white translucent h-full w-full max-sm:w-[90%] rounded-3xl pointer-events-none"/>
      <!-- Window Menu -->
      <div class="absolute w-[95%] h-6 top-4
                  max-sm:top-2 max-sm:w-[93%]">
        <div class="relative flex-middle justify-start gap-2">
          {#each title_bar as bar}
            <i class="fa-solid fa-circle text-xl
                      {bar.color} 
                      max-lg:text-lg
                      max-md:text-sm"></i>
          {/each}
        </div>
      </div>
      
    </div>
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
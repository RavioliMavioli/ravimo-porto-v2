<script>
  import acchan from "../../../assets/img/acchan.png"
  import QuarterCircle from "../../../lib/circularbar.svelte"
  import LinedTitle from "../../../lib/lined_title.svelte"
  import {nav_list, links} from "../../../lib/nav_and_links.svelte"

  import { tweened } from 'svelte/motion'
  import { quadOut } from 'svelte/easing'

  export var intro_ended = false
  //intro_ended = true
  
  var window = null
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
                      <p3 class="absolute text-transparent duration-200 translate-y-5 group-hover:translate-y-9 group-hover:text-white">{link.name}</p3>
                    </div>
                  </a>
                {/each}
              </div>
          </div>
        </div>
        <!---------------------- Mid Section ---------------------->
        <div class="flex-middle items-start gap-2 px-10 mt-5">
          <div class="h-10 w-full">

          </div>
        </div>

      <!----------------------------------- Window Decoration Section ----------------------------------->

      <!-- White window -->
      <div class="absolute top-0 opacity-0 opacity-animate bg-white translucent h-full w-full max-sm:w-[90%] rounded-3xl pointer-events-none"/>
      <!-- Window Menu -->
      <div class="absolute w-[95%] h-6 top-4">
        <div class="relative flex-middle justify-start gap-2">
          <i class="fa-solid fa-circle text-xl text-red-400"></i>
          <i class="fa-solid fa-circle text-xl text-green-300"></i>
          <i class="fa-solid fa-circle text-xl text-yellow-200"></i>
          <div class="bg-white h-[2px] w-full opacity-30"/>
        </div>
      </div>
      
    </div>
  {/if}
</div>

<style>

  .opacity-animate{
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
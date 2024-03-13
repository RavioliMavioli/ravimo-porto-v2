<script>
  import Window from "$lib/components/etc/Window.svelte"
  import Up from "$lib/components/card/sections/Up.svelte"
  import Mid from "$lib/components/card/sections/Mid.svelte"
  import About from "$lib/components/card/sections/content/About.svelte"
  import Portfolio from "$lib/components/card/sections/content/Portfolio.svelte"
  import Commission from "$lib/components/card/sections/content/Commission.svelte"
  import Contact from "$lib/components/card/sections/content/Contact.svelte"

  export let intro_ended = false
  
  let overlay = "absolute top-0 opacity-0 card-opacity-animate bg-white translucent h-full w-full max-sm:w-[90%] rounded-3xl pointer-events-none"
  let anim_init = "anim"
  let h_full = false
  let main_window = null
  //intro_ended = true

</script>

<!----------------------------------- Window Container ----------------------------------->
<div class="absolute w-screen h-screen pointer-events-none" >
  <!-- Check if backdrop animation is completed -->
  {#if intro_ended}
    <!-- Window -->
      <Window bind:overlay bind:anim_init bind:this={main_window}>
        <!---------------------- Upper Section ---------------------->
        <Up bind:intro_ended/>
        <!---------------------- Mid Section ---------------------->
        <Mid bind:main_window bind:h_full />
        <!---------------------- Content ---------------------->
        <!-- Content Container-->
        <div class="relative flex-middle overflow-hidden
                    {h_full ?
                    "h-full":
                    "h-auto"}">
          <About />
          <Portfolio />
          <Commission />
          <Contact />
        </div>
        

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
      scale: 105%;
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
<script>
  import { onMount } from "svelte"
  import { quartOut } from "svelte/easing"
  import { slide } from "svelte-legos"
  import { darkmode, window_closed } from "../../../lib/store/store"
  import { images, portfolio } from "../../../lib/portfolio_images.svelte"

  import { tweened } from 'svelte/motion'
  import { quadOut } from 'svelte/easing'

  export var intro_ended = false
  
  let page_loaded = false
  let darken_overlay, b_container, b_grid = null
  let grad_element = []
  let current_finished_anim = 0
  
  let Xval = 0
  let MAX_LENGTH = 0
  let SCROLL_LENGTH = 0

  const anim_duration = 500
  const total_duration = 1000
  
  let scrollX = tweened(0.0, {
    duration: 500,
    easing: quadOut
  })

  let buttons = [
    { left: true,
      icon: "fa-solid fa-arrow-right"},
    { left: false,
      icon: "fa-solid fa-arrow-right"},
  ]

  onMount(() => {
    // Chrome went apes when the delay is not set
    setTimeout(() => {
      page_loaded = true

    }, 500)
    // Init max length and scroll length
    set_scroll_and_max_length()
    window.addEventListener("resize", () => {
      set_scroll_and_max_length()
    })
    // Horizontal Scroll
    document.addEventListener("wheel" || "scroll", (event) => {
      if ($window_closed){
        Xval += event.deltaY < 0.0 ? SCROLL_LENGTH : -SCROLL_LENGTH
        xval_set_limit()
      }
    })    
  })

  function set_anim_state() {
    current_finished_anim += 1
    if (current_finished_anim === 4){
      intro_ended = true
    }
  }

  function set_scroll_and_max_length(){
    SCROLL_LENGTH = window.innerWidth / 4
    MAX_LENGTH = window.innerWidth * 2
    if (window.innerWidth < 768) {
      SCROLL_LENGTH = window.innerWidth
      MAX_LENGTH = window.innerWidth * 11
    }
    Xval = Xval <= -MAX_LENGTH ? -MAX_LENGTH : Xval
  }

  function xval_set_limit(){
    Xval = Xval >= 0.0 ? 0.0 : Xval
    Xval = Xval <= -MAX_LENGTH ? -MAX_LENGTH : Xval
  }

	$: {
    
    // Apply first scale animation
    if (page_loaded && b_container){
      b_container.classList.add("scale-anim-1")
    }
    // Scroll things
    if (b_grid && intro_ended){
      if (!$window_closed) Xval = 0.0
      scrollX.set(Xval)
      b_grid.style.transform = `translate(${$scrollX}px, 0px)`
      // Snap to grid
      Xval = Math.round(Xval / SCROLL_LENGTH) * SCROLL_LENGTH
    }
    // Add dark effect
    if(darken_overlay) {
      // Apply second scale animation
      if (intro_ended && b_grid) {
        b_grid.classList.add("scale-anim-2")
        b_grid.classList.remove("scale-[115%]")

        // Apply darken image animation
        darken_overlay.classList.add('opacity-30')
        if ($window_closed) darken_overlay.classList.remove('opacity-30')
        else darken_overlay.classList.add('opacity-30')
      }
      
		}
    // Apply custom grid when the card is closed
    if (b_grid && b_container){
      if ($window_closed) b_grid.classList.add('grid-porto')
      else b_grid.classList.remove('grid-porto')
    }
    // Remove gradients when the card is closed
    if (grad_element) {
      grad_element.forEach(element => {
        if ($window_closed) element.classList.remove('opacity-20')
        else element.classList.add('opacity-20')
      })
    }

	}


</script>

<!-- Main container -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="fixed flex justify-center items-center" bind:this={b_container}>
  <!-- Grid container -->
  <div class="relative grid grid-flow-col grid-normal h-screen scale-[115%]" bind:this={b_grid}>
    <!-- Elements inside the grid -->
    
    <!-- 4 main background images -->
    {#each images as image}
      {#if page_loaded}
        <div class="{image.img} relative bg-cover bg-center bg-repeat"
          transition:slide = {
            {
              direction: (image.direction),
              delay: (
                image.delay === 0 ?
                  0 :
                  total_duration / image.delay
                ),
              easing: quartOut,
              duration: anim_duration}
          }
          on:introend = {()=> (set_anim_state())}>

          <!-- Dark Mode Gradients -->
          <div class="{image.bg_color} relative h-full w-full opacity-0 duration-500" bind:this={grad_element[image.index]}/>

          <!-- Light Mode Images -->
          {#if $darkmode === false || $darkmode === "false"} <!-- Js moment -->
            <div class="{image.img_light} relative bg-cover bg-center bg-repeat w-full h-full mt-[-100vh]"
            transition:slide = {
              {
                direction: (image.direction),
                delay: (
                  image.delay === 0 ?
                    0 :
                    total_duration / image.delay / 4
                  ),
                easing: quartOut,
                duration: anim_duration
              }}/>
          {/if}
        </div>
      {/if}
    {/each}

    <!-- Portfolio background images -->

    {#if intro_ended}
      {#each portfolio as portfols}
        <div class="{portfols.img} relative bg-cover bg-center bg-repeat w-full h-full" />
        {#if $darkmode === false || $darkmode === "false"}
          <div class="{portfols.img_light} relative bg-cover bg-center bg-repeat w-full h-full" />
        {/if}
      {/each}
    {/if}
    
  </div>
  <!-- Dark overlay -->
  <div class="absolute bg-black opacity-0 w-full h-full duration-500 pointer-events-none" bind:this={darken_overlay}/>
  <!-- Buttons -->
  
  {#each buttons as button}
    <button class="fixed translucent-round rounded-full m-5 duration-300 flex-middle pointer-events-auto cursor-pointer
                w-24 h-24
                max-xl:w-20 max-xl:h-20
                max-lg:w-16 max-lg:h-16
                hover:-translate-y-2
                active:translate-y-0 active:bg-[--theme-white]
                {button.left ? "rotate-180 left-0" : "right-0"}
                {$window_closed ? "scale-100 opacity-100": "opacity-0 scale-[300%] -rotate-180"}
                "
          on:click={
            button.left ?
             () => {Xval += SCROLL_LENGTH; xval_set_limit()}:
             () => {Xval -= SCROLL_LENGTH; xval_set_limit()}
          }
                
                >
      <h2>
        <i class="relative {button.icon}"/>
      </h2>
      
    </button>

  {/each}

</div>

<style>
  /* Svelte doesn't compile these class without :global() lmao */

  :global(.scale-anim-1) {
    animation-name: bscale-1;
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    
  }

  :global(.scale-anim-2) {
    animation-name: bscale-2;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    
  }

  :global(.grid-normal){
    @apply  w-[100vw]
            grid-cols-4
            max-md:grid-cols-3
  }

  :global(.grid-porto){
    @apply  grid-cols-12
            w-[300vw]
            max-md:grid-cols-12
            max-md:w-[1200vw]

  }

  @keyframes bscale-1 {
    from {
      scale: 120%;
      animation-timing-function: ease-out;
    }

    to {
      scale: 100%;
    }
  }
  @keyframes bscale-2 {
    from {
      scale: 115%;
    }
    to {
      scale: 100%;
    }
  }
  
</style>
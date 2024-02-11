<script>
  import { onMount } from "svelte"
  import { quartOut } from "svelte/easing"
  import { slide} from "svelte-legos"
  import { darkmode, window_closed } from "../../../lib/store/store"

  export var intro_ended = false

  var page_loaded = false
  var darken_overlay, b_container, b_grid = null
  var grad_element = []
  var current_finished_anim = 0
  
  const anim_duration = 500
  const total_duration = 1000
  const images = [

    { img: " bg-backdrop2",
      img_light: " bg-light1",
      bg_color: "bg-gradient-to-br from-cyan-500 to-sky-900",
      delay: total_duration * 0,
      direction: "top",
      index: 0},

    { img: " bg-backdrop1",
      img_light: " bg-light2",
      bg_color: "bg-gradient-to-b from-sky-500 to-indigo-900",
      delay: total_duration / 3,
      direction: "bottom",
      index: 1},

    { img: " bg-backdrop4",
      img_light: " bg-light3",
      bg_color: "bg-gradient-to-bl from-blue-500 to-violet-900",
      delay: total_duration / 1.5, direction: "top",
      index: 2},

    { img: " bg-backdrop3",
      img_light: " bg-light4",
      bg_color: "bg-gradient-to-bl from-indigo-600 to-purple-900",
      delay: total_duration / 1,
      direction: "bottom",
      index: 3},
  ]

  onMount(() => {
    // Chrome went apes when the delay is not set
    setTimeout(() => {
      page_loaded = true

    }, 500)
  })

  function set_anim_state() {
    current_finished_anim += 1
    if (current_finished_anim === 4){
      intro_ended = true
    }
  }

	$: {
    if (page_loaded && b_container){
      b_container.classList.add("scale-anim")

    }
    if(darken_overlay) {
      if (intro_ended) {
      
        darken_overlay.classList.add('opacity-30')

        if ($window_closed) darken_overlay.classList.remove('opacity-30')
        else darken_overlay.classList.add('opacity-30')
      }
      
		}
    if (b_grid){
      if ($window_closed) b_grid.classList.add('grid-porto')
      else b_grid.classList.remove('grid-porto')
    }

    if (grad_element) {
      grad_element.forEach(element => {
        if ($window_closed) element.classList.remove('opacity-20')
        else element.classList.add('opacity-20')
        })
    }
    
	}


</script>

<div class="fixed flex justify-center items-center overflow-hidden" bind:this={b_container}>
  <div class="grid grid-flow-col grid-normal w-screen h-screen gap-2 overflow-hidden" bind:this={b_grid}>
    
    {#each images as image}

      {#if page_loaded}
        <div class="{image.img} relative bg-cover bg-center bg-repeat"
          transition:slide = {{direction: (image.direction), delay: (image.delay), easing: quartOut, duration: anim_duration}}
          on:introend = {()=> (set_anim_state())}>

          <!-- Dark Mode Gradients -->
          <div class="{image.bg_color} relative h-full w-full opacity-0 duration-500" bind:this={grad_element[image.index]}/>

          <!-- Light Mode Images -->
          {#if $darkmode === false || $darkmode === "false"} <!-- Js moment -->
            <div class="{image.img_light} relative bg-cover bg-center bg-repeat w-full h-full mt-[-100vh]"
            transition:slide = {{direction: (image.direction), delay: (image.delay/4), easing: quartOut, duration: anim_duration}}/>
          {/if}
        </div>
      {/if}

    {/each}
    
  </div>
  <div class="absolute bg-black opacity-0 w-full h-full duration-500" bind:this={darken_overlay}/>
</div>

<style>
  /* Svelte doesn't compile these class without :global() lmao */

  :global(.scale-anim) {
    animation-name: bscale;
    animation-duration: 2.0s;
    animation-timing-function: ease-in-out;
    
  }

  :global(.grid-normal){
    @apply max-md:grid-cols-3 max-md:gap-0
  }

  :global(.grid-porto){
    @apply  max-md:grid-flow-row
            max-md:grid-rows-3
            max-md:grid-cols-1
  }

  @keyframes bscale {
    0% {
      scale: 140%;
      animation-timing-function: ease-out;
    }

    70% {
      scale: 120%;
    }
    100%{
      scale: 100%;
    }
  }
  
</style>
<script>
  import { onMount, } from "svelte"
  import { quartOut} from "svelte/easing"
  import { slide} from "svelte-legos"
  import { useLazyImage as lazyImage, useLazyImage } from "svelte-lazy-image"

  export var intro_ended = false
  var page_loaded, anim_finished = false
  var multiply_opacity, b_container = null
  var current_finished_anim = 0

  const anim_duration = 500
  const total_duration = 1000
  const images = [

    {img: " bg-backdrop2",
    bg_color: "bg-gradient-to-br from-cyan-500 to-sky-900",
    delay: total_duration * 0,
    direction: "top"},

    {img: " bg-backdrop1",
    bg_color: "bg-gradient-to-b from-sky-500 to-indigo-900",
    delay: total_duration / 3,
    direction: "bottom"},

    {img: " bg-backdrop4",
    bg_color: "bg-gradient-to-bl from-blue-500 to-violet-900",
    delay: total_duration / 1.5, direction: "top"},

    {img: " bg-backdrop3",
    bg_color: "bg-gradient-to-bl from-indigo-600 to-purple-900",
    delay: total_duration / 1,
    direction: "bottom"}
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
      anim_finished = true
    }
  }

	$: {
    if (page_loaded && b_container){
      b_container.classList.add("scale-anim")
    }
    if(multiply_opacity) {
      if (intro_ended){
			  multiply_opacity.classList.add('opacity-animate')
        multiply_opacity.classList.add('bg-black')
      }
      if (anim_finished){
        multiply_opacity.classList.add('opacity-30')
      }
		}
	}

</script>

<div class="fixed flex justify-center items-center overflow-hidden" bind:this={b_container}>
  <div class="grid grid-flow-col grid-cols-4 w-screen h-screen gap-2 overflow-hidden
              max-sm:grid-cols-3 max-sm:gap-0">
    
    {#each images as image}
      {#if page_loaded}
        <div class={image.img + " bg-cover bg-center bg-repeat"}
          transition:slide = {{direction: (image.direction), delay: (image.delay), easing: quartOut, duration: anim_duration}}
          on:introend = {()=> (set_anim_state())}>

          <div class={image.bg_color + " h-full w-full opacity-25"}/>
        </div>
      {/if}
    {/each}
    
  </div>
  <div class="absolute w-full h-full" bind:this={multiply_opacity}/>
</div>

<style>
  /* Svelte doesn't compile these class without :global() lmao */
  :global(.opacity-animate) {
    animation-name: opacity-anim;
    animation-duration: 0.5s;
    animation-timing-function: linear;
  }
  :global(.scale-anim) {
    animation-name: bscale;
    animation-duration: 2.0s;
    animation-timing-function: ease-in-out;
    
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
  @keyframes opacity-anim{
    0% {
      opacity: 0;
    }
    100%{
      opacity: 0.3;
    }
  }
  
</style>
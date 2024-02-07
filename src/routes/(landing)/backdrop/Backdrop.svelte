<script>

  import { quartOut} from "svelte/easing"
  import { slide } from "svelte-legos"


  export var intro_ended = false
  var init, anim_finished = false
  var backdrop, opacity = null
  var current_finished_anim = 0

  const duration = 500
  const total_duration = 1000
  const bg_class = " bg-cover bg-center bg-repeat"
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

  // Somehow the animation won't execute when not inside the #if block
  setTimeout(() => {init = true}, 1)

  function set_anim_state() {
    current_finished_anim += 1
    console.log("ASDASD")
    if (current_finished_anim === 4){
      intro_ended = true
      anim_finished = true
    }
  }

	$: {
		if(backdrop) {
      if (init){
			  backdrop.classList.add('scale-anim')
      }
		}
    if(opacity) {
      if (intro_ended){
			  opacity.classList.add('opacity-animate', 'bg-black')
      }
      if (anim_finished){
        opacity.classList.add('opacity-30')
      }
		}
	}

</script>

<div class="fixed flex justify-center items-center overflow-hidden" bind:this={backdrop}>
  <div class="grid grid-flow-col grid-cols-4 w-screen h-screen gap-2 overflow-hidden
              max-sm:grid-cols-3 max-sm:gap-0">
    {#each images as image}
      {#if init}
        <div class={image.img + bg_class}
          transition:slide = {{direction: (image.direction), delay: (image.delay), easing: quartOut, duration: duration}}
          on:introend = {()=> (set_anim_state())}>

          <div class={image.bg_color + " h-full w-full opacity-25"}/>
        </div>
      {/if}
    {/each}
  </div>
  <div class="absolute w-full h-full" bind:this={opacity}/>
</div>

<style>
  .opacity-animate {
    animation-name: opacity-anim;
    animation-duration: 0.5s;
  }
  .scale-anim {
    animation-name: card;
    animation-duration: 2.0s;
    animation-timing-function: ease-in-out;
    
  }

  @keyframes card {
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
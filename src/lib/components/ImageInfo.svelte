<script>
  import { window_closed, current_element, open_previewer } from "../store/store"
  import { darkmode } from "../store/store"

  export let current_image_object = null

  let top, bottom = null
  let metadata_index = 0
  let can_hover = false
  
  function show(){
    if (!$window_closed || !can_hover) return
    top.classList.add("top-show")
    bottom.classList.add("bottom-show")
  }

  function hide(){
    if (!$window_closed || !can_hover) return
    top.classList.remove("top-show")
    bottom.classList.remove("bottom-show")
  }

  $:{
    if ($darkmode === false || $darkmode === "false") metadata_index = 1
    else metadata_index = 0

    if ($window_closed){
      setTimeout(()=>{
        can_hover = true
      }, 299)
    }
    else can_hover = false
  }

</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="absolute overflow-hidden h-full w-full flex justify-between flex-col cursor-pointer"
  on:mouseenter={() => {show()}}
  on:mouseleave={() => {hide()}}
  on:click={() => {
    $current_element = current_image_object
    $open_previewer = true
    
    }}>
  <!-- Top section -->
  <div class = "opacity-0 translucent bg-[#00000040] h-auto w-full flex-middle justify-between flex-row px-4 gap-2 top-hide duration-500"
    bind:this={top}>
    <p1 class="text-white">{current_image_object.metadata.description[metadata_index]}</p1>
    <p2 class="text-white">{current_image_object.metadata.date[metadata_index]}</p2>
  </div>
  <!-- Bottom section -->
  <div class = "h-auto w-full flex-middle justify-between flex-row p-4 bottom-hide duration-500 text-white"
    bind:this={bottom}>
    <h3 class="text-white flex flex-col drop-shadow-2xl shadow-white">{current_image_object.metadata.description[metadata_index]}
      <p1 class="text-white py-1">{current_image_object.metadata.resolution[metadata_index]}</p1>
    
    </h3>
    <i class="fa-solid fa-magnifying-glass text-[--p1-size] text-white"></i>
  </div>
  
</div>

<style>
  :global(.top-hide){
    transform: translateY(-100%);
  }
  :global(.top-show){
    transform: translateY(0%);
  }

  :global(.bottom-hide){
    transform: translateY(100%);
  }
  :global(.bottom-show){
    transform: translateY(0%);
  }
</style>
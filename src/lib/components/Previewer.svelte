<script>
  import { open_previewer, current_element, darkmode } from "../store/store"
  import { swirl } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { hd_images } from "../hd_images.svelte"
  
  let bg_low = null
  let index = 0

  $:{
    // Change HD image to current image pressed
    if ($current_element !== null){
      if ($darkmode === true || $darkmode === "true") bg_low = $current_element.img
      else bg_low = $current_element.img_light
      
      index = Math.abs(parseInt(bg_low.slice(-2))) - 1
    }
    console.log(index)
  }
</script>

<div class="absolute left-0 top-0 w-screen h-screen pointer-events-none flex-middle">
  <!-- Image Container -->
  <div class="
      {$open_previewer ? "show":"hide"}
      pointer-events-auto 
      backdrop-blur-2xl
      relative h-screen duration-500 overflow-hidden flex-middle">
    <!-- Image -->
    <img class="fixed max-h-screen max-w-screen h-screen object-center object-cover"
      src={hd_images[index]} alt="Loading...">
  </div>
  <!-- Close Button -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#if $open_previewer}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="fixed h-32 w-32 right-0 top-0 pointer-events-auto cursor-pointer flex-middle"
    on:click={()=>{$open_previewer = false}}
    transition:swirl = {
      {
        delay: 0,
        easing: quartOut,
        duration: 1000}
    }>
    <h2>
      <i class="fa-solid fa-x text-white" />
    </h2>
    
    </div>
  {/if}
</div>

<style>
 :global(.show){
  width: 100vw;
 }
 :global(.hide){
  width: 0vw;
 }
</style>
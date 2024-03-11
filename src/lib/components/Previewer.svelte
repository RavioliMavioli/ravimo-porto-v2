<script>
  import { lazy } from "../lazy"
  import { open_previewer, current_element, darkmode } from "../store/store"
  import { swirl } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { hd_url } from "../hd_images.svelte"
  
  let bg_low = null
  let bg_low_index = 1

  $:{
    // Change HD image to current image pressed
    if ($current_element !== null){
      if ($darkmode === true || $darkmode === "true") bg_low = $current_element.img
      else bg_low = $current_element.img_light

      bg_low_index = Math.abs(parseInt(bg_low.slice(-2))) - 1
      console.log(hd_url[bg_low_index].link)
    }
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
      src={hd_url[bg_low_index].link} alt="Loading..."
      use:lazy>
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
<script>
  import { open_previewer, current_element, darkmode } from "$lib/store/store"
  import { swirl } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { hd_images } from "$lib/etc/hd_images.svelte"
  import Win10Loading from "$lib/components/etc/Win10Loading.svelte";
  
  let bg_low = null
  let index = 0
  let show_image = false

  function img_download(img, index = 0) {
    let name
    if ($darkmode === true || $darkmode === "true") name = $current_element.metadata.description[0]
    else name = $current_element.metadata.description[1]

    const downloadLink = document.createElement("a")
    downloadLink.href = img
    downloadLink.download = name
    downloadLink.click()
  }

  $:{
    // Change HD image to current image pressed
    if ($current_element !== null){
      if ($darkmode === true || $darkmode === "true") bg_low = $current_element.img
      else bg_low = $current_element.img_light
      
      index = Math.abs(parseInt(bg_low.slice(-2))) - 1
    }
    // Show image
    if ($open_previewer){
      show_image = true
    }
    else {
      setTimeout(() => {
        if (!$open_previewer) show_image = false // Prevent image from yeeting when the user is too quick
        else {
          show_image = false
          setTimeout(() => {show_image = true}, 100) // Refresh image when the user is too quick
        }
      }, 700)
    }
  }
</script>

<div class="absolute left-0 top-0 w-screen h-screen pointer-events-none flex-middle">
  <!-- Image Container -->
  <div class="
      {$open_previewer ? "show":"hide"}
      pointer-events-auto 
      backdrop-blur-2xl
      relative h-screen duration-700 overflow-hidden flex-middle">
    <!-- Loading animation -->
    <Win10Loading />
    <p1 class="absolute translate-y-16 text-white">Loading image</p1>
    <!-- Image -->
    {#if show_image}
      <img class="absolute max-h-screen max-w-screen h-screen object-center object-cover"
      src={hd_images[index]} alt="Loading..."/>
      <!-- TODO: Put this in loop -->
      <!-- Download button -->
      <button class="pointer-events-auto absolute translucent-round bg-[--theme-absolute-white] bottom-10 right-10 rounded-full duration-300
                    w-[90px] h-[90px]
                    max-xl:h-[80px] max-xl:w-[80px] max-xl:bottom-7 max-xl:right-7
                    max-lg:h-[60px] max-lg:w-[60px] max-lg:bottom-4 max-lg:right-4
                    hover:-translate-y-1
                    active:translate-y-0 active:bg-[--theme-nord] group
                    "
                    on:click={() => {img_download(hd_images[index], index)}}>
        <h3><i class="fa-solid fa-download text-[--theme-nord] group-active:text-white"></i></h3>
      </button>
      <!-- Zoom button -->
      <a class="pointer-events-auto flex-middle absolute translucent-round bg-[--theme-absolute-white] bottom-10 right-10 rounded-full duration-300
                    w-[90px] h-[90px] translate-y-[-130%]
                    max-xl:h-[80px] max-xl:w-[80px] max-xl:bottom-7 max-xl:right-7
                    max-lg:h-[60px] max-lg:w-[60px] max-lg:bottom-4 max-lg:right-4
                    hover:translate-y-[-135%]
                    active:translate-y-[-130%] active:bg-[--theme-nord] group
                    "
                    href={hd_images[index]} target="_blank">
        <h3><i class="fa-solid fa-magnifying-glass text-[--theme-nord] group-active:text-white"></i></h3>
      </a>
    {/if}
  </div>
  <!-- Close Button -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  {#if $open_previewer}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="fixed h-32 w-32 right-0 top-0 cursor-pointer flex-middle pointer-events-auto z-10"
    on:click={()=>{$open_previewer = false}}
    transition:swirl = {
      {
        delay: 0,
        easing: quartOut,
        duration: 1000}
    }>
    <h2>
      <i class="fa-solid fa-x text-white drop-shadow-xl" />
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
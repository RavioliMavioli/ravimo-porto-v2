<script>
  import {window_element} from "$lib/store/store.js"
  import { onMount } from "svelte"
  let this_element = null
  onMount(() => {
    if (this_element === null) return
    $window_element.scroll({
      top: 1000,
      behavior: "smooth"
    })
  })
</script>

<a class="" href="https://raviolimavioli.github.io/" target = "_blank" bind:this={this_element}>
  <button class="button-theme group">
    <p1 class="color-[--theme--white] group-hover:text-[--theme-black]">
      Please visit the older site here
    </p1>
  </button>
</a>
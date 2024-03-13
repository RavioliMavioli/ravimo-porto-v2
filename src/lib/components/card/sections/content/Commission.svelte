<script>
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_commission } from "$lib/store/store.js"
  import { nav_list } from "$lib/etc/nav_and_links.svelte"
  
</script>


{#if $toggle_commission}
<!-- svelte-ignore missing-declaration -->
<div id={nav_list[2].text} class="absolute flex-middle bg-white"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  
</div>
{/if}
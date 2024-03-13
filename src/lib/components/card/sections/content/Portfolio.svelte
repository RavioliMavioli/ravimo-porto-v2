<script>
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_portfolio } from "$lib/store/store.js"
  import { nav_list } from "$lib/etc/nav_and_links.svelte"
</script>


{#if $toggle_portfolio}
<!-- svelte-ignore missing-declaration -->
<div id={nav_list[1].text} class="absolute flex-middle bg-yellow-300"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  
</div>
{/if}
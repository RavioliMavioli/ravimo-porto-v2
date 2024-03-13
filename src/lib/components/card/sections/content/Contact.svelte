<script>
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_contact } from "$lib/store/store.js"
  import { nav_list } from "$lib/etc/nav_and_links.svelte"
</script>


{#if $toggle_contact}
<!-- svelte-ignore missing-declaration -->
<div id={nav_list[3].text} class="absolute flex-middle bg-black"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  
</div>
{/if}
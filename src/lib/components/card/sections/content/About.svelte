<script>
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_about } from "$lib/store/store.js"
  import { nav_list } from "$lib/etc/nav_and_links.svelte"

</script>


{#if $toggle_about}
<!-- svelte-ignore missing-declaration -->
<div id={nav_list[0].text} class="absolute flex-middle bg-teal-500"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  
</div>
{/if}
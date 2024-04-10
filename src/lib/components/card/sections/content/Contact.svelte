<script>
  import ContentAll from "$lib/components/card/sections/content/Content_All.svelte"
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_contact } from "$lib/store/store.js"
  import { nav_list } from "$lib/etc/nav_and_links.svelte"

  let backg_color = "bg-red-300"
  backg_color = ""

</script>


{#if $toggle_contact}
<!-- svelte-ignore missing-declaration -->
<div id={nav_list[3].text} class="absolute flex-middle {backg_color}"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  <ContentAll/>  
</div>
{/if}
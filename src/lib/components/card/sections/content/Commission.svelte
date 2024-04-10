<script>
  import ContentAll from "$lib/components/card/sections/content/Content_All.svelte"
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_commission } from "$lib/store/store.js"
  import { nav_list } from "$lib/etc/nav_and_links.svelte"
  
  let backg_color = "bg-yellow-400"
  backg_color = ""

</script>


{#if $toggle_commission}
<!-- svelte-ignore missing-declaration -->
<div id={nav_list[2].text} class="absolute flex-middle {backg_color}"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  <ContentAll/>
</div>
{/if}
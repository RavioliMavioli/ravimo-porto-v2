<script>
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_portfolio } from "$lib/store/store.js"

</script>


{#if $toggle_portfolio}
<!-- svelte-ignore missing-declaration -->
<div class="absolute flex-middle bg-yellow-300"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  
</div>
{/if}
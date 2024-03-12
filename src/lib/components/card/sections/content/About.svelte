<script>
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_about } from "$lib/store/store.js"

</script>


{#if $toggle_about}
<!-- svelte-ignore missing-declaration -->
<div class="absolute flex-middle bg-teal-500"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  
</div>
{/if}
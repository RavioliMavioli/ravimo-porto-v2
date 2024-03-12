<script>
  import { slide } from "svelte-legos"
  import { quartOut } from "svelte/easing"
  import { toggle_contact } from "$lib/store/store.js"

</script>


{#if $toggle_contact}
<!-- svelte-ignore missing-declaration -->
<div class="absolute flex-middle bg-black"
  transition:slide = {
  {
    direction: "top",
    easing: quartOut,
    duration: 500}
}>
  
</div>
{/if}
<script>

  import "../../app.css"
  import Backdrop from "./backdrop/Backdrop.svelte"
  import Card from "./card/Card.svelte"
  
  var intro_ended
  var darkmode
  var window_closed

</script>

<Backdrop bind:intro_ended bind:darkmode bind:window_closed />
<Card bind:intro_ended bind:darkmode bind:window_closed />

<svelte:window/>
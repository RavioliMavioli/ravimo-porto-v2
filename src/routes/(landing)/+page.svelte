<script>

  import "../../app.css"
  import Backdrop from "./backdrop/Backdrop.svelte"
  import Card from "./card/Card.svelte"
  
  var intro_ended
  var darkmode

</script>

<Backdrop bind:intro_ended bind:darkmode/>
<Card bind:intro_ended bind:darkmode />

<svelte:window/>
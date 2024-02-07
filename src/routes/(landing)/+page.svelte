<script>

  import "../../app.css"
  import Backdrop from "./backdrop/Backdrop.svelte"
  import Card from "./card/Card.svelte"
  
  var intro_ended

</script>

<Backdrop bind:intro_ended/>
<Card bind:intro_ended/>
<script>

  import "../../app.css"
  import Backdrop from "./backdrop/Backdrop.svelte"
  import Card from "./card/Card.svelte"
  
  var intro_1_ended
  var intro_2_ended

</script>

<Backdrop bind:intro_1_ended/>
<Card bind:intro_1_ended/>
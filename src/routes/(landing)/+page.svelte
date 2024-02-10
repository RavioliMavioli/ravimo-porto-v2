<script>
  import "../../app.css"
  import Backdrop from "./backdrop/Backdrop.svelte"
  import Card from "./card/Card.svelte"
  import { onMount } from "svelte"
  import { darkmode } from "../../lib/store/store"
	import { set_darkmode } from "../../lib/color_manager.svelte"

  var intro_ended

  onMount(() => {
    $darkmode = !($darkmode === "false") // Js moment
    set_darkmode($darkmode)
  })

</script>

<Backdrop bind:intro_ended />
<Card bind:intro_ended />

<svelte:window/>
<script>
  import "../app.css"
  import License from "$lib/components/license/License.svelte"
  import Backdrop from "$lib/components/backdrop/Backdrop.svelte"
  import Card from "$lib/components/card/Card.svelte"
  import { onMount } from "svelte"
  import { darkmode } from "$lib/store/store"
	import { set_darkmode } from "$lib/etc/color_manager.svelte"

  let intro_ended

  onMount(() => {
    $darkmode = !($darkmode === "false") // Js moment
    set_darkmode($darkmode) // Init dark mode
  })

</script>

<Backdrop bind:intro_ended />
<Card bind:intro_ended />
<License bind:intro_ended />

<svelte:window/>

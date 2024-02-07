<script>
  import "../../../app.css"

  let y
  let innerHeight = 0
  let innerWidth = 0

  function go_top(){
    document.body.scrollIntoView()
  }

</script>
<svelte:window bind:scrollX={y} bind:innerHeight bind:innerWidth />
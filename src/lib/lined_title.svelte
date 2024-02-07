<script>
  export var title = ""
  var head_div = null

  $:{
    if (title != "" && head_div != null){
      head_div.classList.add('gap-4')
    }
  }

</script>

<div class="relative flex-middle" bind:this={head_div}>
  <div class="flex-middle">
    <div class="bg-white h-[2px] w-full"/>
  </div>
  <h3 class="leading-none">{title}</h3>
  <div class="bg-white h-[2px] w-full"/>
</div>
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
  <div class="flex-middle ms-[20px]">
    <div class="corner-border-l opacity-30 left-0 translate-y-[9px] rounded-tl-xl"/>
    <div class="opacity-30 bg-[--theme-white] h-[2px] w-full"/>
  </div>
  <h3 class="leading-none">{title}</h3>
  <div class="flex-middle me-[20px]">
    <div class="opacity-30 bg-[--theme-white] h-[2px] w-full"/>
    <div class="corner-border-r opacity-30 right-0 translate-y-[9px] rounded-tr-xl"/>
  </div>
</div>
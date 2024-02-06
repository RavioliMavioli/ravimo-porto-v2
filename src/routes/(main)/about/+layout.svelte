<script>
  import "../../app.css"
  import Navbar from "../../lib/Navbar.svelte"
  import Footer from "../../lib/Footer.svelte"

  let y
  let innerHeight = 0
  let innerWidth = 0

  function go_top(){
    document.body.scrollIntoView()
  }

</script>

<div class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen">
  <div class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10] "
  + (y > 0 ? "opacity-100 pointer-events-auto":"opacity-0 pointer-events-none")}>
    <button on:click={go_top} class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer ">
      <i class="fa-solid fa-arrow-up grid place-items-center aspect-square " />
    </button>
  </div>
  <Navbar y={y}/>
  <slot />
  <Footer />
</div>

<svelte:window bind:scrollX={y} bind:innerHeight bind:innerWidth />
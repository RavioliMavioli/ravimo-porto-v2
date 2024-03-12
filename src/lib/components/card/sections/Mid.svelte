<script>
  import Tide from "$lib/etc/tide.svelte"
  import { nav_list } from "$lib/etc/nav_and_links.svelte"
  import {toggle_about, toggle_portfolio, toggle_commission, toggle_contact} from "$lib/store/store.js"

  export let h_full = false
  export let main_window = null

  let toggles = [toggle_about, toggle_portfolio, toggle_commission, toggle_contact]

  function toggle_nav(txt){
    if (main_window === null) return
    // Set all to false
    toggles.forEach((t) => {t.set(false)})
    switch (txt){
      case "About":
        $toggle_about = true
        break
      case "Portfolio":
        $toggle_portfolio = true
        break
      case "Commission":
        $toggle_commission = true
        break
      case "Contact":
        $toggle_contact = true
        break
    }
  }
</script>

<div class="relative flex-middle flex-col items-start gap-2 h-auto my-10">
  <!---------------------- Mid Line ---------------------->
  <Tide />
  <!---------------------- Nav Section ---------------------->
  <div class="flex-middle gap-3 my-2">
    {#each nav_list as nav}
      <!-- <a href={nav.link} target="_blank"> -->
        <button class=" border-[--theme-nord] py-2 px-8 border-2 rounded-full group
                        hover:bg-[--theme-white] hover:border-[--theme-white] hover:glow
                        max-xl:px-5
                        max-md:px-2
                        max-sm:px-1"
                on:click={() => {toggle_nav(nav.text); h_full = true}}>
          <p1 class="group-hover:text-[--theme-black]">{nav.text}</p1>
        </button>
      <!-- </a> -->
    {/each}
  </div>
  <!--
  <div class="flex-middle min-h-10"/>-->
</div>
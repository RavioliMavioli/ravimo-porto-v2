<script>
  import "./components/app.css"
  import EmuachAudio from "./components/emuach_audio.svelte"
  import { play_emuach } from "./components/emuach_audio.svelte"
  import { emuach_num } from "$lib/store/store.js"
  import { fly } from './components/fly'
  import acchan from "$lib/assets/img/acchan.png"
  import emuach_img from "../emuach/emuach.jpg"
  
  let emuach_num_int = 0
  let emuaches = 0
  let emuached = false
  let mute = false

  let emuach_arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  function increment_emuach(){
    emuach_num_int += 1
    emuaches += 1
    $emuach_num = emuach_num_int

    if (emuaches >= emuach_arr.length - 1){
      emuaches = 0
    }
  }
  function onpress(){
    increment_emuach()
    emuached = true
    setTimeout(()=>{
      emuached = false
    }, 25)
  
    if (!mute){
      play_emuach()
    }
    
  }

  $: {
    emuach_num_int = parseInt($emuach_num)
  }

</script>

<div class="flex-middle w-screen h-screen flex-col gap-5">
  <EmuachAudio />
  <p class="text-[#ffffff65] z-50 h-0" >emuaches</p>
  <h1 class="text-white flex-middle flex-row h-auto w-auto z-50" >{$emuach_num}
    <span>
      {#each emuach_arr as em}
        {#if emuaches === em && emuached}
          <h2 class="absolute -translate-y-8"
          out:fly={{ y: '-50%' }}>
          +1
          </h2>
        {/if}
      {/each}
    </span>
  </h1>
  <div class="flex-middle h-[300px] w-[300px]">
    <img src={acchan} width="200px" alt="">
    {#each emuach_arr as em}
      {#if emuaches === em && emuached}
        <img class="absolute" src={emuach_img} width="250px" alt=""
        out:fly={{ y: '-20%' }}
        >
      {/if}
    {/each}
  </div>
  <button class="button-theme bg-[--theme-nord] p-6 rounded-xl group"
  on:click={() => {onpress()}}>
    <p class="text-[--theme-white] group-hover:text-[--theme-black]">
      EMUACH
    </p>
  </button>

  <button class="absolute top-0 left-0 m-2"
  on:click={() => {$emuach_num = 0}}>
    <p2 class="text-[--theme-white]">
      Reset Emuach
    </p2>
  </button>

  <button class="button-theme px-3 {mute ? "bg-white" : ""}"
  on:click={() => {mute = !mute}}>
    <p1>
      🔇
    </p1>
  </button>
</div>


<style>

</style>

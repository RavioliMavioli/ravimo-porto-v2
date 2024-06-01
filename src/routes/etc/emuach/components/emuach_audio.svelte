<script context="module">
  import emuach_mp3 from "./emuach.mp3"

  let index = 0
  let audios = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  export function play_emuach(){
    
    if (index >= audios.length - 1) {
      index = 0
    }
    index += 1

    let aud = document.getElementById(`audio-${index}`)
    aud.pause()
    aud.currentTime = 0
    aud.volume = 0.2
    aud.play()
    
  }

</script>

<span class="absolute">
  {#each audios as aud}
    <audio id="audio-{aud}">
      <source src={emuach_mp3} type="audio/mpeg">
    </audio>
  {/each}
</span>
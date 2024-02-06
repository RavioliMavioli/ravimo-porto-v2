<script>
  import acchan from "../../../assets/img/acchan.png"


  export var intro_1_ended = false
  const nav_list = [
    {text: "Home", link:"", icon: "fa-house"},
    {text: "About", link:"", icon: "fa-address-card"},
    {text: "Portfolio", link:"", icon: "fa-image"},
    {text: "Blog", link:"", icon: "fa-address-book"},
  ]
</script>

<div class="absolute flex justify-center items-center top-0 left-0 h-screen w-screen">
  {#if intro_1_ended}
    <div class="relative translucent anim h-[60%] w-[55%] max-sm:w-[90%] rounded-3xl flex justify-center items-center">
    <div class="opacity-0 opacity-animate bg-white absolute translucent h-full w-full max-sm:w-[90%] rounded-3xl pointer-events-none"/>
      <div class="flex flex-col h-full w-full gap-10 py-12 max-md:p-6 ">
        <div class="w-full h-full">
          <div class="grid grid-flow-col gap-4 w-full h-full">
            <div class="flex flex-col justify-center items-center w-full h-full ">
              <div class="w-full h-full flex justify-start p-2 px-10">
                <div class ="absolute">
                  <p1>[ravimo@ravimo ~]$ Hello, welcome to my page!</p1>
                </div>
              </div>
              <img src={acchan} class="max-sm:size-24 py-5 mt-10 object-contain h-80 w-80">
            </div>
            <div class=" flex p-2 flex-col justify-start items-center">
              <p1>Navigation</p1>
              <div class="h-[1px] w-[50%] bg-white my-2"></div>
              {#each nav_list as list}
                <a href={list.link} class="flex flex-row justify-center items-center w-1/2 p-1 mx-10">
                  <i class="fa-solid mx-3 text-lg {list.icon}"></i>
                  <div class="flex flex-col justify-center items-center w-full p-1 m-3
                  hover:bg-white hover:text-black">
                    <p1>{list.text}</p1>
                  </div>
                </a>
              {/each}
            </div>
          </div>
        </div>

        <div class="relative grid grid-cols-5 w-full h-full">
            <div class="col-span-2">
              <div class="flex justify-center items-center w-full h-full">
                <div class="bg-white w-[80%] h-[1px]"/>
              </div>
            </div>
            <button href="/" class="relative border-white border-solid border-2 group rounded-full text-center align-middle">
              <div
                class="absolute top-0 left-0 w-0 h-full bg-white opacity-50 z-0 rounded-full group-hover:w-full duration-200"/>
              <p1 class=" z-10">&darr; Portfolio &darr;</p1>
            </button>
            <div class="col-span-2 col-start-4">
              <div class="flex justify-center items-center w-full h-full">
                <div class="bg-white w-[80%] h-[1px]"/>
              </div>
            </div>
        </div>
      </div>

      <div class="absolute w-[97%] h-6 top-4">
        <div class="relative flex justify-start align-middle items-center w-full h-full gap-2">
          <i class="fa-solid fa-circle text-xl text-red-400"></i>
          <i class="fa-solid fa-circle text-xl text-green-300"></i>
          <i class="fa-solid fa-circle text-xl text-yellow-200"></i>
          <div class="bg-white h-[1px] w-full opacity-30"/>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>

  .opacity-animate{
    animation-name: opacity;
    animation-duration: 1s;
  }

  .anim {
    animation-name: card;
    animation-duration: 1s;
    animation-timing-function: e;
    
  }

  @keyframes card {
    0% {
      opacity: 0%;
      scale: 120%;
    }

    50% {
      opacity: 100%;
      scale: 90%;
    }
    70% {
      scale: 110%;
    }
    100% {
      scale: 100%;
    }
  }
  @keyframes opacity {
    0% {
      opacity: 1;
      width: 100%;
    }
    50% {
      opacity: 1;
      width: 100%;
    }
    100% {
      opacity: 0;
      width: 0%;
    }

  }
  
</style>
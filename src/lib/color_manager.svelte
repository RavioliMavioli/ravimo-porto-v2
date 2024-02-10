<script context="module">

  const colors = [
    {name:"dark-color", dark: "#242b39bb", light: "#eceff4bb"},

    {name:"theme-nord", dark: "#4c566a", light: "#4c566a"},
    {name:"theme-red", dark: "#bf616a", light: "#bf616a"},
    {name:"theme-green", dark: "#a3be8c", light: "#68a84c"},
    {name:"theme-yellow", dark: "#ebcb8b", light: "#ebcb8b"},
    {name:"theme-blue", dark: "#5e81ac", light: "#5e81ac"},
    {name:"theme-purple", dark: "#b48ead", light: "#b48ead"},
    {name:"theme-cyan", dark: "#81a1c1", light: "#81a1c1"},
    {name:"theme-white", dark: "#eceff4", light: "#2e3440"},
    {name:"theme-black", dark: "#2e3440", light: "#eceff4"},

    {name:"theme-glow", dark:"rgba(255,255,255,0.2)", light:"rgba(0,0,0,0.2)"}
  ] 

  export const set_darkmode = (bool) => {
    if (bool){
      colors.forEach(col => {
        document.documentElement.style.setProperty(`--${col.name}`, col.dark)
      })
    }
    else{
      colors.forEach(col => {
        document.documentElement.style.setProperty(`--${col.name}`, col.light)
      })
    }
  }

</script>

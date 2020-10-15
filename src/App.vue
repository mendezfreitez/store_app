<template>
  <div id="app">
    <BarraLateral />
    <Navegador />
    <router-view style="margin-top:65px!important;" />
  </div>
</template>

<script>
import 'typeface-dosis'
import Navegador from './components/Navegador'
import BarraLateral from './components/BarraLateral'
// import SidebarMenu from './components/BarraLateral'
export default {
  components:{
    Navegador,
    BarraLateral
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
@font-face {
font-family: ‘Dosis’;
   src: url('./Fonts/DosisFonts/semiBold/Dosis-SemiBold.eot');
   src: url('./Fonts/DosisFonts/semiBold/Dosis-SemiBold.eot?#iefix') format('embedded-opentype'),
        url('./Fonts/DosisFonts/semiBold/Dosis-SemiBold.woff') format('woff'),
        url('./Fonts/DosisFonts/semiBold/Dosis-SemiBold.ttf') format('truetype'),
        url('./Fonts/DosisFonts/semiBold/Dosis-SemiBold.svg#adlerRegular') format('svg');
  font-weight:900;
  font-style:italic;
}
html,body{
  background-color: #fff!important;
  font-family:'Dosis'!important; 
  size:20px!important;
}

</style>

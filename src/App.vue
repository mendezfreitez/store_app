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
html,body{
  background-color: #fff!important;
  /* font-family:'Dosis,sans-serif'!important;  */
}
@font-face {
  font-family: Gentium!important;
  src: url(http://example.com/fonts/Gentium.woff);
}
</style>

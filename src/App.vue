<template>
  <div id="app" style="width:100%!importaant;">
    <BarraLateral />
    <Navegador />
    <router-view style="padding-top:65px!important; background-color:ffa!important;" />
    <!-- <Footer />  -->
  </div>
</template>

<script>
import 'typeface-dosis'
import Navegador from './components/Navegador'
import BarraLateral from './components/BarraLateral'
import Footer from './components/Footer'
// import SidebarMenu from './components/BarraLateral'
export default {
  components:{
    Navegador,
    BarraLateral,
    Footer
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
body{
  background-color: transparent!important;
}
html{
  background-color: #f9f9f9cf!important;
  padding-left: 0px!important;
  padding-right: 0px!important;
  size:20px!important;
}
h4, h5{
  font-family: 'OverpassLight'; font-weight:700!important;
  
}
/* f9c3c3cf */
</style>

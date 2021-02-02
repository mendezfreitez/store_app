<template>
  <div id="app" style="width:100%!importaant;">
    <BarraLateral />
    <!-- <Navegador /> -->
    <router-view style="padding-top:0px!important;" />
  </div>
</template>

<script>
import 'typeface-dosis'
import { mapMutations } from 'vuex'
import Navegador from './components/Navegador'
import BarraLateral from './components/BarraLateral'
import Footer from './components/Footer'
export default {
  components:{
    Navegador, BarraLateral, Footer
  },
  methods:{
    ...mapMutations(['getUsuario'])
  },
  mounted(){
    // localStorage.setItem("productosCarro", [])
    this.getUsuario()
  }
}
</script>

<style>
html::-webkit-scrollbar {   
  display: none; 
}

  #app {
    width: 100%!important;
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
    padding-left: 0px!important;
    padding-right: 0px!important;
  }
  html{
    background-color: #d0d0d075!important;
    padding-left: 0px!important;
    padding-right: 0px!important;
    size:20px!important;
  }
  h4, h5{
    font-family: 'OverpassLight'; font-weight:700!important;
  }
</style>

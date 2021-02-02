<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      title="Categorías"
      :backdrop-variant="variant"
      text-variant="light"
      shadow
      backdrop
      style="font-family:'OverpassLight';font-weight:900!important;"
    >
      <b-navbar-nav class="text-left color-light" text-variant="light">
        <b-nav-item v-b-toggle.sidebar-backdrop href="#" to="/" @click="traerporCategorias('')" class="pl-2 ddd pt-1" style="font-size:25px!important;font-family:'OverpassLight';font-weight:700!important;">
          Inicio<b-img height="40" right class="mr-4" :src="require('../editor/img/categorias/Inicio2.svg')" alt=""></b-img>
        </b-nav-item>

        <b-nav-item v-b-toggle.sidebar-backdrop v-for="categoria in categoriasTodas" :key="categoria._id" href="#" @click="traerporCategorias(categoria._id, categoria.nombre)" class="pl-2 pt-1 ddd" style="font-size:25px!important;font-family:'OverpassLight';font-weight:400!important;">
          {{ categoria.nombre }}
          <b-img height="40" right class="mr-4" :src="require('../editor/img/categorias/' + categoria.nombre + '.svg')" alt=""></b-img>
        </b-nav-item>

        <b-nav-item href="#" to="/personalizado" class="pl-2 pt-1 ddd" style="font-size:25px!important;font-family:'OverpassLight';font-weight:700!important;">
          Personalizado
          <b-img height="36" right class="mr-4" :src="require('../editor/img/categorias/Personalizar2.svg')" alt=""></b-img>
        </b-nav-item>
      </b-navbar-nav>

    </b-sidebar>
  </div>
</template>

<script>
// let url = 'http://localhost:3000/';
let url = 'https://storeapp-back-end.herokuapp.com/';
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      categoriasTodas:[],
      variant: 'dark',
      // variants: [
      //   'transparent',
      //   'black',
      //   'light',
      //   'dark',
      //   'primary',
      //   'secondary',
      //   'success',
      //   'danger',
      //   'warning',
      //   'info',
      // ]
    }
  },
  mounted(){
    axios.get(`${url}traerCategorias`).then(function (resp) {
      this.categoriasTodas = resp.data;
    }.bind(this));
  },
  methods:{
    ...mapMutations(['traerProductosTodos']),
    traerporCategorias: function(idCategoria, nombreCategoria){
      this.traerProductosTodos(idCategoria)
      if(idCategoria === ''){
        document.querySelector('#textoOfertas').textContent = 'OFERTAS'
      }
      else{
        document.querySelector('#textoOfertas').textContent = `OFERTAS EN ${nombreCategoria.toUpperCase()}`
      }
    }
  }
}
</script>

<style>
.ddd:hover{
  background: #272727 !important;
  border-bottom: 1px solid #e0e40e;
}
.b-sidebar-header{
  background:#272727 !important;
  height: 66px!important;
  padding-right: 5px!important;
  padding-left: 7px!important;
}
#sidebar-backdrop{
  width:290px!important;
}
.b-sidebar-header > button{
  padding: 10px!important;
  border:solid 0px #ce3333!important;
  float:right!important;
}
.b-sidebar-body{
  background:#b13535 !important;
}
.ddd > a {
  height:60px;
  display: block!important;
  align-items: center!important;
}
.ddd{
  transition: all .3s ease 0s; 
  -webkit-transition: all .3s ease 0s;
}
</style>
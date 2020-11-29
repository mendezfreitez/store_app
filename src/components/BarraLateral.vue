<template>
  <div>
    <!-- <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button> -->

    <b-sidebar
      id="sidebar-backdrop"
      title="Categorías"
      :backdrop-variant="variant"
      text-variant="light"
      shadow
      backdrop
      style="font-family:'OverpassLight';font-weight:900!important;"
    >
      <b-nav-form class="pl-2 pt-1 pb-1"> 
        <b-form-input size="sm" class="mr-1 ml-0 w-50" placeholder="Búsqueda"></b-form-input>
        <b-button size="sm" class="ml-1" variant="dark">Buscar</b-button>
      </b-nav-form>
      
      <b-navbar-nav class="text-left color-light" text-variant="light">
        <b-nav-item v-b-toggle.sidebar-backdrop href="#" to="/" @click="traerProductosTodos('')" class="pl-2 ddd" style="font-size:18px!important;font-family:'OverpassLight';font-weight:700!important;">
          Inicio<b-img height="40" right class="mr-4" :src="require('../editor/img/categorias/Inicio2.svg')" alt=""></b-img>
        </b-nav-item>

        <b-nav-item v-b-toggle.sidebar-backdrop v-for="categoria in categoriasTodas" :key="categoria._id" href="#" @click="traerProductosTodos(categoria._id)" class="pl-2 pt-1 ddd" style="font-size:18px!important;font-family:'OverpassLight';font-weight:400!important;">
          {{ categoria.nombre }}
          <b-img height="42" right class="mr-4" :src="require('../editor/img/categorias/' + categoria.nombre + '.svg')" alt=""></b-img>
        </b-nav-item>

        <b-nav-item href="#" to="/personalizado" class="pl-2 pt-1 ddd" style="font-size:18px!important;font-family:'OverpassLight';font-weight:700!important;">
          Personalizado
          <b-img height="38" right class="mr-4" :src="require('../editor/img/categorias/Personalizar2.svg')" alt=""></b-img>
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
    ...mapMutations(['traerProductosTodos'])
  }
}
</script>

<style>
.ddd:hover{
  background: #343a40 !important;
}
.b-sidebar-header{
  background:#343a40 !important;
  height: 75px!important;
}
#sidebar-backdrop{
  width:290px!important;
}
.b-sidebar-header > button{
  padding: 10px!important;
  margin-left: 68px!important;
  border:solid 0px #ce3333!important;
  border-radius: 4px;
}
.b-sidebar-body{
  background:#b13535 !important;
}

/* .b-sidebar-header {
    background-color: #ce3333!important;
} */
</style>
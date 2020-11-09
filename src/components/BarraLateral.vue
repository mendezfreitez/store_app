<template>
  <div>
    <!-- <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button> -->

    <b-sidebar
      id="sidebar-backdrop"
      title="Categorías"
      :backdrop-variant="variant"
      bg-variant="dark"
      text-variant="light"
      shadow
      backdrop
      style="font-family:'Dosis';font-weight:900!important;"
    >

      <b-nav-form class="pl-2"> 
        <b-form-input size="sm" class="mr-1 ml-0 w-50" placeholder="Búsqueda"></b-form-input>
        <b-button size="sm" class="ml-1" variant="outline-warning">Buscar</b-button>
      </b-nav-form>
      
      <b-navbar-nav class="text-left color-light" text-variant="light">
        <b-nav-item v-b-toggle.sidebar-backdrop href="#" to="/" @click="traerProductosTodos('')" class="pl-2 ddd" style="font-size:21px!important;font-family:'Dosis';font-weight:700!important;">
          Inicio <b-icon scale="1.5" icon="shop" style="float:right!important;" aria-hidden="true" class="mr-4"></b-icon>
        </b-nav-item>

        <b-nav-item v-b-toggle.sidebar-backdrop v-for="categoria in categoriasTodas" :key="categoria._id" href="#" @click="traerProductosTodos(categoria._id)" class="pl-2 ddd" style="font-size:21px!important;font-family:'Dosis';font-weight:700!important;">
          {{ categoria.nombre }}
          <b-img height="40" right class="mr-4" :src="require('../editor/img/categorias/' + categoria.nombre + '.svg')" alt=""></b-img>
        </b-nav-item>

        <b-nav-item href="#" to="/personalizaTuCamiseta" class="pl-2" style="font-size:21px!important;font-family:'Dosis';font-weight:700!important;">
          Personalizado
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
  background: #35815b!important;
}
.b-sidebar-header{
  background:#343a40 !important;
  margin-bottom: 5px!important;
  height: 63px!important;
}
#sidebar-backdrop{
  width:260px!important;
}
.b-sidebar-header > button{
  padding: 10px!important;
  margin-left: 76px!important;
  background:#343a40 !important;
  border:solid 1px #fff!important;
  border-radius: 5px;
}
</style>
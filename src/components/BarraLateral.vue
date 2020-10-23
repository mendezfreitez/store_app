<template>
  <div>
    <!-- <b-button v-b-toggle.sidebar-backdrop>Toggle Sidebar</b-button> -->

    <b-sidebar
      id="sidebar-backdrop"
      title="Barra lateral"
      :backdrop-variant="variant"
      bg-variant="success"
      text-variant="light"
      no-header-close
      shadow
      backdrop
    >

      <b-nav-form class="pl-2"> 
        <b-form-input size="sm" class="mr-1 ml-0 w-50" placeholder="Búsqueda"></b-form-input>
        <b-button size="sm" class="ml-1" variant="outline-warning">Buscar</b-button>
      </b-nav-form>
      
      <b-navbar-nav class="text-left color-light" text-variant="light">
        <b-nav-item v-b-toggle.sidebar-backdrop href="#" to="/" @click="traerProductosTodos('')" class="pl-2 ddd">
          Inicio <b-icon scale="1.5" icon="shop" style="float:right!important;" aria-hidden="true" class="mr-3"></b-icon>
        </b-nav-item>

        <b-nav-item v-b-toggle.sidebar-backdrop v-for="categoria in categoriasTodas" :key="categoria._id" href="#" @click="traerProductosTodos(categoria._id)" class="pl-2 ddd">
        {{ categoria.nombre }} <b-icon scale="1.3" icon="caret-right-fill" style="float:right!important;" aria-hidden="true" class="mr-3"></b-icon>
        </b-nav-item>

        <!-- <b-nav-item href="#" to="/productosTodos" class="pl-2">
          Productos Todos
        </b-nav-item> -->
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
      variant: 'transparent',
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
</style>
<template>
  <div>
  <b-navbar toggleable="md" type="dark" style="background-color:#1fa02e!important;" fixed="top">
    <!-- <b-navbar-toggle v-b-toggle.sidebar-backdrop target="nav-collapse"></b-navbar-toggle> -->
    <b-button size="md" class="ml-1 my-sm-0 botonToggler" variant="outline-secondary" v-b-toggle.sidebar-backdrop>
      <span class="navbar-toggler-icon" style="color:#fff!important;" ></span>
    </b-button>

    <b-link @click="traerProductosTodos('')" style="color: #fff;" to="/">
      <b-icon icon="shop" style=" width:35px!important; height:35px!important;" aria-hidden="true" class="ml-3 botonHome"></b-icon>
    </b-link>

    <b-collapse id="nav-collapse mr-2" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav right>
          <div style="margin-top:6px!important;">
            <b-button size="sm" class="mr-2 my-sm-0 registroIngreso" variant="outline-light" to="/Admin">
              Ingresar
            </b-button>
          </div>

          <!-- <b-icon animation="animation" icon="cart" variant="light" style="width:40px!important; height:40px!important;" shift-h = "12">
          </b-icon>
          
          <b-nav-item class="carroEnlace" href="#" @click="modalProductos" style="color: #FFC107!important; margin-right:25px!important; font-size:14px!important; padding-top:1px!important;">
            {{cantidadCarro}}
          </b-nav-item> -->
        </b-navbar-nav>

        <b-nav-item-dropdown hidden>
          <template v-slot:button-content>
            <em>User</em>
          </template>

          <b-dropdown-item href="#">
            Profile
          </b-dropdown-item>
          
          <b-dropdown-item href="#">
            Sign Out
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

    <div class="justify-content-center">
      <b-link class="carroEnlace" href="#" @click="modalProductos" style="color: #FFC107!important; font-size:14px!important;position:relative;left:22px;bottom:14px;">
        {{cantidadCarro}}
      </b-link>
      <b-icon animation="animation" icon="cart" variant="light" style="width:40px!important; height:40px!important;" shift-h = "-3">

      </b-icon>
    </div>
  </b-navbar>
  
  <ModalCarro ref="unModalDeCarro" />

</div>  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ModalCarro from './ModalCarroCompras'
export default {
    name:'Navegador',
    components:{
      ModalCarro
    },
    data(){
      return{
      }
    },
    computed:{
      ...mapState(['cantidadCarro'])
    },
    methods:{
      ...mapMutations(['traerProductosTodos']),
      modalProductos(){
        this.$bvModal.show('ModalCarroCompras');
      }
    },
    mounted(){
      // alert()
      // this.cantidadCarro = localStorage.setItem('cantProductosCarro');
    }
}
</script>

<style>
  a.nav-link{
    /* color: #FFC107!important; */
    color: #f8f9fa!important;
  }
  a.nav-link:hover, .carroEnlace:hover{
    color: white!important;
  }
  .registroIngreso{
    height: 30px!important;
  }
  .botonToggler, .botonToggler:hover{
    border-color: rgba(255, 255, 255, 0.1)!important;
    /* border-color:#fff!important; */
    background-color: transparent!important;
  }
  .botonHome:hover{
    color: rgb(255, 193, 7) !important;
  }
  .carroEnlace:hover{
    color: #fff!important;
  }
</style>
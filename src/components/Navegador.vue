<template>
  <div>
  <b-navbar toggleable="md" type="dark" fixed="top" id="navegadorArriba">
    <b-button size="md" variant="dark" class="ml-1 my-sm-0 botonToggler"  v-b-toggle.sidebar-backdrop>
      <b-icon class="pt-1" scale="1.6" icon="list"></b-icon>
      <!-- <span class="navbar-toggler-icon" style="color:#fff!important;" ></span> -->
    </b-button>

    <b-link @click="traerProductosTodos('')" style="color: #fff!important;" to="/">
      <!-- <b-icon icon="shop" style=" width:35px!important; height:35px!important;" aria-hidden="true" class="ml-3 botonHome"></b-icon> -->
      <b-img height="42" right class="mr-4 ml-4" :src="require('../editor/img/categorias/Inicio2.svg')" alt=""></b-img>
    </b-link>

    <b-collapse id="nav-collapse mr-2" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav right>
          <div style="margin-top:6px!important;">
            <b-button size="sm" class="mr-2 my-sm-0 registroIngreso" variant="outline-light" to="/user">
              Ingresar
            </b-button>
          </div>
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

    <!-- <div style="width:57px;"> -->
        <div class="text-center" @click="modalProductos">
        <b-badge variant="dark" class="carroEnlace" href="#" style="width:30px; text-align:center; display:inline-block!important;color: #343a40!important;position:relative; top:10px; left:34px; font-size:22px!important;font-family:'ubuntuTitleFr';">
          {{cantidadCarro}}
        </b-badge>
        <b-img style="position:relative;" height="38"  :src="require('../editor/img/categorias/BolsaCompra2.svg')" alt=""></b-img></div>
    
      <!-- <b-icon animation="animation" icon="bag" variant="light" style="color: #fff!important;width:40px!important; height:40px!important;" shift-h="-3">

      </b-icon> -->
    <!-- </div> -->
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
    }
}
</script>

<style>
  .registroIngreso{
    height: 30px!important;
  }
  .botonToggler, .botonToggler:hover{
    border-color: rgba(255, 255, 255, 0.1)!important;
    background-color: transparent!important;
  }
  .carroEnlace:hover, .botonHome:hover,a.nav-link, a.nav-link:hover{
    color: #fff!important;
  }
  #navegadorArriba, .carroEnlace{
    background-color: #ce3333!important;
  }
  .botonToggler, .botonToggler:hover {
    border:solid 1px#fff!important;
    background-color: #ce3333!important;
}
.navbar-toggler-icon{
    color: #000!important;
}
</style>
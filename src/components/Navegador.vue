<template>
  <div id="contenedorDeNavegador">
  <b-navbar type="dark"  id="navegadorArriba">
    <b-button size="md" variant="dark" class="ml-1 my-sm-0 botonToggler"  v-b-toggle.sidebar-backdrop>
      <b-icon class="pt-1" scale="1.6" icon="list"></b-icon>
    </b-button>

    <b-link @click="traerProductosTodos('')" style="color: #fff!important;" to="/">
      <b-img height="42" right class="mr-4 ml-4" :src="require('../editor/img/categorias/Inicio2.svg')" alt=""></b-img>
    </b-link>

    <b-collapse id="nav-collapse mr-2" is-nav>
      <b-navbar-nav class="ml-auto">

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


        <div style="margin-top:6px!important;">
          <b-link size="sm" class="mr-4 my-sm-0 registroIngreso" variant="outline-light" to="/user" style="font-family: 'OverpassLight'; font-size:18px!important;">
            Ingresar
          </b-link>
        </div>

        <div style="width:46px;height:46px;" @click="modalProductos">
          <b-badge variant="dark" class="carroEnlace" href="#" style="width:30px; text-align:center; display:inline-block!important;color: #FFF!important;position:relative; top:13px; left:0px; font-size:20px!important;font-family:'ubuntuTitleFr';">
            {{cantidadCarro}}
          </b-badge>

          <b-img style="position:relative; top:-30px;" height="42"  :src="require('../editor/img/categorias/BolsaCompra2.svg')" alt=""></b-img>
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
    }
}
</script>

<style>
  .registroIngreso{
    height: 30px!important;
    color:#FFF!important;
  }
  .botonToggler, .botonToggler:hover{
    border-color: rgba(255, 255, 255, 0.1)!important;
    background-color: transparent!important;
  }
  .botonToggler, .botonToggler:hover {
    border:solid 1px#fff!important;
    background-color: #ce3333!important;
  }
  .navbar-toggler-icon{
      color: #000!important;
  }
  #contenedorDeNavegador{
    text-align: center!important;
  }
</style>
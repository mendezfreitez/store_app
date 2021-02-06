<template>
  <div id="contenedorDeNavegador">
  <b-navbar type="dark"  id="navegadorArriba" style="background-color:#272727!important; border-bottom:4px solid #ce3333!important;">
    <b-button size="md" variant="transparent" class="ml-1 my-sm-0 botonToggler" style="border:solid 0px#fff!important; background-color: #ce3333!important;" v-b-toggle.sidebar-backdrop>
      <b-icon style="color:#272727!important;" class="pt-1" scale="1.8" icon="list"></b-icon>
    </b-button>

    <b-link @click="traerProductosTodos('')" style="color: #fff!important;" to="/">
      <b-img height="38" right class="mr-4 ml-4" :src="require('../editor/img/categorias/Inicio2.svg')" alt=""></b-img>
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

    <div style="margin-top:5px!important;">
      <b-link :hidden="!esVisible" size="sm" class="mr-4 my-sm-0 registroIngreso" variant="outline-light" @click="modalIngresar" style="font-family: 'OverpassLight'; font-size:16px!important;">
        Ingresar
      </b-link> 

      <div :hidden="esVisible">
        <b-dropdown id="dropdown-right" right :text="sesionUsuario" variant="dark" class="m-0 mr-3">
          <b-dropdown-item class="text-right" id="sessionItem" style="background-color:#1d2124; font-family:OverpassLight!important;" variant="dark" href="#" @click="dropUsuario">
            Cerrar Sessión
            <b-img style="position:relative; margin-bottom:3px!important;" class="pl-1 mr-2" height="18"  :src="require('../assets/off.png')" alt=""></b-img>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </div>

    <div style="width:46px; height:46px; cursor:pointer!important;" @click="modalProductos">
      <b-badge class="carroEnlace" href="#" style="cursor:pointer!important; width:30px; text-align:center; display:inline-block!important;color: #FFF!important;position:relative; top:15px; left:0px; font-size:20px!important;font-family:'OverpassLight';">
        {{cantidadCarro}}
      </b-badge>

      <b-img style="position:relative; top:-30px;" height="42"  :src="require('../editor/img/categorias/BolsaCompra2.svg')" alt=""></b-img>
    </div>
  </b-navbar>

  <ModalCarro ref="unModalDeCarro" />
  <ModalIngresar/>

</div>  
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ModalCarro from './ModalCarroCompras'
import ModalIngresar from './ModalIngresar'
export default {
  name:'Navegador',
  components:{
    ModalCarro, ModalIngresar
  },
  data(){
    return{
    }
  },
  computed:{
    ...mapState(['cantidadCarro', 'esVisible', 'sesionUsuario', 'ProductosCarro'])
  },
  methods:{
    ...mapMutations(['traerProductosTodos', 'dropUsuario']),
    modalProductos(){
      if(this.ProductosCarro.length > 0){
        this.$bvModal.show('ModalCarroCompras')
      }
    },
    modalIngresar(){
      this.$bvModal.show('modal_ingreso')
    }
  }
}
</script>

<style>
  .registroIngreso{
    height: 30px!important;
    color:#FFF!important;
  }
  .navbar-toggler-icon{
      color: #000!important;
  }
  #contenedorDeNavegador{
    text-align: center!important;
  }
  #sessionItem{
    color:#FFF!important;
    font-size: 13px!important;
    padding-top: 7px!important;
  }
  #sessionItem:hover{
    background-color: #2c3e50;
    font-size: 13px!important;
  }
  #dropdown-right__BV_toggle_{
    font-family: 'OverpassLight'!important;
    color: #FFF;
    padding-bottom: 0px!important;
    padding-top: 1px!important;
  }
</style>
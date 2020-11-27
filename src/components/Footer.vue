<template>
  <b-navbar class="w-100" style="background:#272727!important;width:100%!imporant;">
    <b-collapse id="nav-collapse mr-1" is-nav>
        <b-navbar-nav class="text-center">
    <b-link  href="https://www.facebook.com" target="_blank">
      <b-img height="30" right class="mr-3" :src="require('../editor/img/Redes/Facebook.svg')" alt=""></b-img>
    </b-link>
    <b-link href="https://www.instagram.com" target="_blank">
      <b-img height="30" right class="mr-3 ml-1" :src="require('../editor/img/Redes/Instagram2.svg')" alt=""></b-img>
    </b-link>
    <b-link>
      <b-img height="30" right class="mr-3 ml-1" :src="require('../editor/img/Redes/WhatsApp.svg')" alt=""></b-img>
    </b-link>
    <b-link href="https://www.pinterest.com" target="_blank">
      <b-img height="30" right class="mr-3 ml-1" :src="require('../editor/img/Redes/Pinterest.svg')" alt=""></b-img>
    </b-link>
    <b-link >
      <b-img height="30" right class="mr-1 ml-1" :src="require('../editor/img/Redes/Telefono.svg')" alt=""></b-img>
    </b-link>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
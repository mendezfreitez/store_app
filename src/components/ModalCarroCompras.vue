<template>
  <div>
    <b-modal id="ModalCarroCompras"
    title="Carro de Compras"
    scrollable
    header-bg-variant="success"
    header-text-variant="light"
    cancel-variant="outline-danger"
    ok-variant="outline-primary"
    size="md"
    button-size="sm"
    centered>
    
      <ListaProductos />
      
      <template v-slot:modal-footer>
        <div class="w-100" style="margin:0px!important;">
          <b-badge variant="success" class="text-right mb-2" id="footerModal" style="width:190px!important; font-size:16px!important; margin-top:4px!important;">
            Total: {{textoTotalCarro | currency}}
          </b-badge>
        </div>
        <div class="w-100 text-center" style="margin:0px!important;">
          <b-button :active="btnActivo" variant="danger" class="w-25" @click="vaciarCarro">
            Vaciar Carro
          </b-button> 

          <b-button :active="btnActivo" variant="primary" class="ml-4 w-25" style=" padding-left:9px;" @click="procesarPago">
            Pagar <b-icon scale="1.2" icon="credit-card" aria-hidden="true" class="ml-1"></b-icon>
          </b-button>
        </div>
       
      </template>
    </b-modal>
  </div>
</template>

<script>
import ListaProductos from './ListaProductos'
import { mapMutations, mapState } from 'vuex';
export default {
  data(){
    return{
      tituloDelModal:'',
      arrayImagenes: [],
      currentId:null,
      arrayProductos:[],
      arrayNuevo:[],
      producto: ''
    }
  },
  components:{
    ListaProductos
  },
  props:{
        tituloModal:String,
        textoModal:String,
        precio:Number,
        btnActivo:true
  },
  computed:{
    ...mapState(['ProductosCarro','textoTotalCarro'])
  },
  methods:{
    ...mapMutations(['modificarCarro']),
    procesarPago(){
        console.log(this.ProductosCarro);
    },
    vaciarCarro(){
      localStorage.removeItem("cantProductosCarro")
      localStorage.removeItem("productosCarro")
      this.modificarCarro([])
      this.$bvModal.hide('ModalCarroCompras')
    }
  },
}
</script>

<style>
.card-body{
  padding: 5px!important;
}
.modal-footer{
  padding: 10px 8px!important;
}
</style>
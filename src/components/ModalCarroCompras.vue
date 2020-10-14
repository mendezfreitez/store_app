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

          <b-badge variant="success" class="text-right" id="footerModal" style="width:170px!important; font-size:14px!important; margin-top:4px!important;">
            Total: {{textoTotalCarro | currency}}
          </b-badge>

          <b-button variant="outline-primary" size="sm" class="float-right ml-1 w-80" style="width:80px; padding-left:5px;" @click="procesarPago">
            Pagar <b-icon scale="1.2" icon="credit-card" aria-hidden="true" class="ml-1"></b-icon>
          </b-button>

          <b-button variant="outline-danger" size="sm" class="float-right" @click="vaciarCarro">
            Vaciar Carro
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
        precio:Number
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
  }
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
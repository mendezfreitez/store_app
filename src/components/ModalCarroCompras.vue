<template>
  <div>
    <b-modal id="ModalCarroCompras"
    title="Carro de Compras"
    scrollable
    header-bg-variant="dark"
    header-text-variant="light"
    cancel-variant="outline-danger"
    ok-variant="outline-primary"
    size="md"
    button-size="sm"
    centered>
    
      <ListaProductos />
      
      <template v-slot:modal-footer>
        <div class="w-100 text-right" style="margin:0px!important;">
          <b-badge variant="dark" class="text-right mb-2" id="footerModal" style="width:190px!important; font-size:16px!important; margin-top:4px!important;">
            Total: {{textoTotalCarro | currency}}
          </b-badge>
        </div>
        <div class="w-100 text-center" style="margin:0px!important;">
          <b class="row">
            <b-col>
              <b-button :active="btnActivo" variant="danger" class="w-100" @click="vaciarCarro" style=" font-size:19px!important;font-family: 'Dosis'; font-weight:600!important;">
                Vaciar Carro
              </b-button> 
            </b-col>
            <b-col>
              <b-button :active="btnActivo" variant="primary" class="w-100" style=" font-size:19px!important;font-family: 'Dosis'; font-weight:600!important;padding-left:9px;" @click="procesarPago">
                Pagar <b-icon scale="1.2" icon="credit-card" aria-hidden="true" class="ml-1"></b-icon>
              </b-button>
            </b-col>
          </b>
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
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
      
      <template v-slot:modal-footer class="pb-0">
        <div class="w-100 text-right" style="margin:0px!important;">
          <b-badge variant="dark" class="text-right mb-2" id="footerModal" style="background-color: #343a40!important; border-bottom:2px solid #ce3333!important; font-family: 'UbuntuMonoR'; width:70%!important; font-size:18px!important; margin-top:4px!important;">
            Total: {{textoTotalCarro | currency}}
          </b-badge>
        </div>
        <div class="w-100 text-center" style="margin:0px!important;">
          <b class="row">
            <b-col class="pl-0 pr-0">
              <b-button :active="btnActivo" size="lg" squared variant="warning" class="w-100" @click="vaciarCarro" style="height:48px; font-size:19px!important; font-family:'OverpassLight'; font-weight:600!important; padding-left:30px!important; padding-top:11px!important;">
                Vaciar Carro
              </b-button> 
            </b-col>
            <b-col class="pl-0 pr-0">
              <b-button size="lg" squared :active="btnActivo" variant="dark" class="w-100" style="height: 48px;font-size:19px!important;font-family: 'OverpassLight'; font-weight:600!important;padding-left:9px;" @click="procesarPago">
                Pagar <b-icon scale="1.5" style="padding-top:2px!important;" icon="credit-card" aria-hidden="true" class="ml-2"></b-icon>
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
      alert("En desarrollo")
    },
    vaciarCarro(){
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
#ModalCarroCompras___BV_modal_content_{
  border-width: 0px!important;
}
#ModalCarroCompras___BV_modal_title_{
  padding-top: 6px!important;
}
#ModalCarroCompras___BV_modal_footer_{
  padding-bottom: 0px!important;
  padding-left: 0px!important;
}
</style>
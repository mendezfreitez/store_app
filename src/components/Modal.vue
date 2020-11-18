<template>
  <div>
    <b-modal id="modal_1"
    style="border: 0px solid rgba(0, 0, 0, 0.2)!important;"
    :title="tituloModal"
    header-close-variant="light"
    header-bg-variant="dark"
    header-text-variant="light"
    cancel-variant="transparent"
    ok-variant="outline-primary"
    ok-title="Agregar al Carro"
    cancel-title="Cerrar"
    @ok="agregarAlCarro"
    centered>
    
      <lingallery :iid.sync="currentId" :width="600" :height="400" :items="arrayImagenes"/>
        <template v-slot:modal-footer>
        <div class="w-100" style="margin:0px!important;">
          <b-badge variant="dark" class="text-right" id="footerModal" style="font-family: 'UbuntuMonoR';width:170px!important; font-size:18px!important; margin-top:4px!important;">
            {{producto.precioProducto | currency}}
          </b-badge>

          <b-button variant="outline-dark" size="sm" class="float-right ml-1" style=" padding-left:8px;font-family: 'OverpassLight';font-weight:600!important;" @click="agregarAlCarro">
            Agregar al Carro <b-icon scale="1" icon="cart-check" aria-hidden="true"></b-icon>
          </b-button>

          <!-- <b-button variant="outline-danger" size="sm" class="float-right" @click="cerrarmodal">
            Cerrar
          </b-button> -->
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import galeria from 'lingallery'
import { mapMutations, mapState } from 'vuex';
export default {
  data(){
    return{
      tituloDelModal:'',
      arrayImagenes: [],
      currentId:null,
      arrayProductos:[],
      arrayNuevo:[],
      producto: '',
      prod:{
        nom:String,
        cuer:String,
        cant:String,
        id:String
      }
    }
  },
  components:{
    // Lingallery
  },
  props:{
        tituloModal:String,
        textoModal:String,
        precio:Number
  },
  computed:{
    ...mapState(['ProductosCarro'])
  },
  methods:{
    ...mapMutations(['modificarCarro','modifPuraCantidad']),
    agregarAlCarro(){
      let that = this;
      let suma = true;
      this.ProductosCarro.map(function(elemento){
        if(elemento.idProducto === that.producto.idProducto){
          suma = false;
          return;
        }
       });
      if(suma === true){
        this.ProductosCarro.push({ 'tituloProducto':this.producto.tituloProducto, 'textoProducto':this.producto.textoProducto, 'idProducto':this.producto.idProducto, 'laCantidad':this.producto.laCantidad, 'precio':this.producto.precioProducto, 'imagen':`https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes/${this.producto.idProducto}/${this.producto.arrayImagenes[0]}` });
        console.log(this.ProductosCarro);
        this.modificarCarro(this.ProductosCarro);        
      }
      // console.log(this.ProductosCarro);
      this.$bvModal.hide('modal_1');
    },
    cerrarmodal(){
      this.$bvModal.hide('modal_1');
    }
  }
}
</script>

<style>
  .modal-body{
    padding: 0px!important;
  }
  .close{
    opacity:1!important;
    font-weight: 900!important;
    font-size: 40px!important;
    padding-top:9px!important; 
    background-color: transparent!important;
  }
  .modal-header{
    border-bottom: 0px!important;
  }
  #modal_1___BV_modal_content_{
    border-width: 0px!important;
  }
  #modal_1___BV_modal_title_{
    padding-top: 5px!important;
  }
</style>
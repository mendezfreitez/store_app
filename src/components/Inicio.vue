<template>
  <b-container>
      <div>
          <b-col cols="12" lg="12">
              <Producto v-for="t in productos" :key="t._id"
              :arrayImagenes="t.nombreImagenes"
              
              :srcImagen="urlImagen + '/' + t._id + '/' + t.nombreImagenes[0]"
              :precioProducto="t.precio"
              :tituloProducto="t.nombre.substr(0, 25)"
              :textoProducto="t.descripcion.substr(0, 65)"
              :bodyProducto="t.descripcion"
              :laCantidad="1"
              :idProducto="t._id"
              @mostrar-modal="mostrarModal"/>
          </b-col>
      </div>
      <Modal ref="elModal" :tituloModal="unProducto.tituloProducto" :textoModal="unProducto.bodyProducto" :precio="unProducto.precioProducto"></Modal>
  </b-container>
</template>

<script>
import Producto from './Producto'
import Modal from './Modal'
import axios from 'axios'
import Galeria from './galeria'
import { mapMutations, mapState } from 'vuex'

// let urlImagenes = 'http://127.0.0.1:8887/imagenes';
// let url = 'http://localhost:3000/';
let url = 'https://storeapp-back-end.herokuapp.com/';
export default {
    name:'Inicio',
    components:{
        Producto, Modal
    },
    data(){
        return{
            productos:{},
            unProducto:{},
            // propsImg:{
            //     id:Number,
            //     src:String,
            //     thumbnail:String
            // },
            arregloFinal: Array,
            urlImagen:'https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes'
            // urlImagen:'http://127.0.0.1:8887/imagenes'
        }
    },
    computed:{
        ...mapState(['productosTodos'])
    },
    created: function(){
        this.traerProductosTodos('')
    },
    mounted(){
        this.cantidadCarro = localStorage.getItem('cantProductosCarro');
        var productosLocales =JSON.parse(localStorage.getItem('productosCarro'));
        // console.log("unavaina");
        // console.log(productosLocales);
        if(productosLocales != null){
            this.modificarCarro(productosLocales);
            this.modifPuraCantidad(this.cantidadCarro);            
        }
        // console.log(productosLocales);
    },
    methods:{
        ...mapMutations(['modifCantProducto','modifPuraCantidad','modificarCarro', 'traerProductosStore','traerProductosTodos']),
        mostrarModal: function(props){
            var vaina = [];
            // var propsImg = {
            //     id:Number,
            //     src:String,
            //     thumbnail:String
            // }
            this.$refs.elModal.producto = props;
            this.unProducto = props;
            console.log(this.unProducto);
            for (let index = 0; index < this.unProducto.arrayImagenes.length; index++) {
                console.log(`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}`)
                vaina.push({ id:index , src:`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}`, thumbnail:`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}` });
            } 

            this.arregloFinal = vaina;
            console.log(this.arregloFinal);
            this.$refs.elModal.arrayImagenes = this.arregloFinal;
            this.$bvModal.show("modal_1");
        }
    },
    watch:{
        productosTodos(nuevo){
            this.productos = nuevo;
        }
    }
}
</script>

<style>
 .container{
     margin-top: 15px!important;
 }
 .sombreadoProducto{
  border-width: 0px!important;
}
</style>
<template>
  <b-container>
      <b-row>
          <b-col cols="12" lg="12">
              <Producto v-for="t in productos" :key="t._id"
              :arrayImagenes="t.dataImagenes"
              :srcImagen="t.dataImagenes[0].src"
              :precioProducto="t.precio"
              :tituloProducto="t.nombre.substr(0, 25)"
              :textoProducto="t.descripcion.substr(0, 65)"
              :bodyProducto="t.descripcion"
              :laCantidad="1"
              :idProducto="t._id"
              @mostrar-modal="mostrarModal"/>
          </b-col>
      </b-row>
      <Modal ref="elModal" :tituloModal="unProducto.tituloProducto" :textoModal="unProducto.bodyProducto" :precio="unProducto.precioProducto"></Modal>
  </b-container>
</template>

<script>
import Producto from './Producto'
import Modal from './Modal'
import axios from 'axios'
import Galeria from './galeria'
import { mapMutations, mapState } from 'vuex'

let url = 'http://localhost:3000/';
export default {
    name:'Inicio',
    components:{
        Producto, Modal
    },
    data(){
        return{
            productos:{},
            unProducto:{},
            propsImg:{
                id:Number,
                src:String,
                thumbnail:String
            },
            arregloFinal: Array
        }
    },
    computed:{
        ...mapState(['productosTodos'])
    },
    created: function(){
        // axios.get(`${url}traerTodos`).then(function(res){
        //     this.productos = res.data;
        //     this.productosTodos = res.data;
        // }.bind(this));
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
            // var index = 0;
            var vaina = [];
            var propsImg = {
                id:Number,
                src:String,
                thumbnail:String
            }
            this.$refs.elModal.producto = props;
            this.unProducto = props;
            // console.log(this.unProducto);
            for (let index = 0; index < this.unProducto.arrayImagenes.length; index++) {
                    vaina.push({ id:this.unProducto.arrayImagenes[index].id , src:this.unProducto.arrayImagenes[index].src, thumbnail:this.unProducto.arrayImagenes[index].src });
                    // console.log(propsImg);
            } 

            this.arregloFinal = vaina;
            // console.log(this.$refs);
            this.$refs.elModal.arrayImagenes = this.arregloFinal;
            // this.$refs.galeria.arregloItems = this.arregloFinal;
            this.$bvModal.show("modal_1");
            // console.log(this.unProducto);
        }
    },
    watch:{
        productosTodos(nuevo){
            this.productos = nuevo
        }
    }
}
</script>

<style>
 .container{
     margin-top: 15px!important;
     /* Dosis,sans-serif */
 }
</style>
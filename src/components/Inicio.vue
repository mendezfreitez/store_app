<template>
    <div class="text-center w-100">
        
        <div class="container fixed-top p-0" style="padding-top:0px!important;" ><Navegador /></div>
    
        <div class="container" id="contenedorInicio">
            <Deslizador />
            <h3 id="textoOfertas" class="mt-4" style="font-family:'OverpassExtraLight';">OFERTAS</h3>
            <DeslizadorProductos :losProductos="productos" />
            <h3 id="textoNuevo" class="mt-4" style="font-family:'OverpassExtraLight';">NUEVO</h3>
            <div class="mt-3">
                <!-- <b-col md="12" lg="12" class=" pl-0 pr-0 mt-1"> -->
                    <Producto v-for="t in productos" :key="t._id"
                    :arrayImagenes="t.nombreImagenes"
                    :srcImagen="urlProductos + t.nombreImagenes[0]"
                    :precioProducto="t.precio"
                    :tituloProducto="t.nombre.substr(0, 25)"
                    :textoProducto="t.descripcion.substr(0, 65)"
                    :bodyProducto="t.descripcion"
                    :laCantidad="1"
                    :idProducto="t._id"
                    :aplicaDescuento="t.aplicaDescuento"
                    :descuento="t.descuento"
                    @mostrar-modal="mostrarModal"/>
                <!-- </b-col> -->
            </div>
        </div>

        <div class="container p-0" >
            <Footer />
        </div>

        <Modal ref="elModal" :tituloModal="unProducto.tituloProducto" :textoModal="unProducto.bodyProducto" :precio="unProducto.precioProducto"></Modal>
    </div>
</template>

<script>
import DeslizadorProductos from './DezlizadorProductos'
import Navegador from './Navegador'
import Deslizador from './Deslizador'
import Producto from './Producto'
import Modal from './Modal'
import axios from 'axios'
import Footer from './Footer'
import Galeria from './galeria'
import { mapMutations, mapState } from 'vuex'

// let url = 'http://localhost:3000/';
// let url = 'https://storeapp-back-end.herokuapp.com/';
let url = 'https://cosmic-envoy-301012.rj.r.appspot.com/';
export default {
    name:'Inicio',
    components:{
        Producto, Modal, Footer, Deslizador, Navegador, DeslizadorProductos
    },
    data(){
        return{
            productos:{},
            unProducto:{},
            // arregloFinal: Array,
            urlImagen:'https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes'
            // urlImagen:'http://127.0.0.1:8887/imagenes'
        }
    },
    computed:{
        ...mapState(['productosTodos', 'urlProductos'])
    },
    created: function(){
        this.traerProductosTodos('')
    },
    methods:{
        ...mapMutations(['modifCantProducto','modifPuraCantidad','modificarCarro', 'traerProductosStore','traerProductosTodos']),
        mostrarModal: function(props){
            var arregloImagenes = [];
            this.$refs.elModal.producto = props;
            this.unProducto = props;
            // console.log(this.unProducto);
            for (let t = 0; t < this.unProducto.arrayImagenes.length; t++) {
                // console.log(`${this.urlProductos}${this.unProducto.arrayImagenes[t]}`)
                arregloImagenes.push({ id:t , src:`${this.urlProductos}${this.unProducto.arrayImagenes[t]}`, thumbnail:`${this.urlProductos}${this.unProducto.arrayImagenes[t]}` });
            } 

            this.$refs.elModal.arrayImagenes = arregloImagenes;
            this.$bvModal.show("modal_1");
        }
    },
    watch:{
        productosTodos(nuevo){
            this.productos = []
            nuevo.map(function(el){
                if(!el.aplicaDescuento){
                    this.productos.push(el)
                }
                else if(el.aplicaDescuento && !(((new Date(el.descuento.desde).getTime()) / 1000).toFixed(0) < ((new Date().getTime()) / 1000).toFixed(0)  &&  ((new Date().getTime()) / 1000).toFixed(0) < ((new Date(el.descuento.hasta).getTime()) / 1000).toFixed(0))){
                    el.aplicaDescuento = false
                    el.descuento.desde = ''
                    el.descuento.hasta = ''
                    el.descuento.montoDescuento = ''
                    el.descuento.porcentajeDescuento = ''
                    el.descuento.tipoPorcentaje = true
                    el.descuento.tipoMonto = false

                    this.productos.push(el)
                }
            }.bind(this))
        }
    }
}
</script>

<style>
    .sombreadoProducto{
        border-width: 0px!important;
    }
    #contenedorInicio {
        background: #FFF!important;
        padding-top: 15px!important;
        padding-left: 0px!important;
        padding-right: 0px!important;
    }
    .container {
        background: #FFF!important;
        padding-left: 0px!important;
        padding-right: 0px!important;
    }
    .carroEnlace:hover, .botonHome:hover,a.nav-link, a.nav-link:hover{
        color: #fff!important;
    }
    #navegadorArriba, .carroEnlace{
        background-color: #272727!important;
    }
    .carroEnlace{
    color: #FFF!important;
    }
</style>
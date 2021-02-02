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
                    :srcImagen="urlImagen + '/' + t._id + '/' + t.nombreImagenes[0]"
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

// let urlImagenes = 'http://127.0.0.1:8887/imagenes';
// let url = 'http://localhost:3000/';
let url = 'https://storeapp-back-end.herokuapp.com/';
export default {
    name:'Inicio',
    components:{
        Producto, Modal, Footer, Deslizador, Navegador, DeslizadorProductos
    },
    data(){
        return{
            productos:{},
            unProducto:{},
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
        // const token = sessionStorage.getItem("token")
        // this.cantidadCarro = localStorage.getItem('cantProductosCarro');
        // var productosLocales =JSON.parse(localStorage.getItem('productosCarro'));
        // if(productosLocales != null){
        //     this.modificarCarro(productosLocales);
        //     this.modifPuraCantidad(this.cantidadCarro);            
        // }
    },
    methods:{
        ...mapMutations(['modifCantProducto','modifPuraCantidad','modificarCarro', 'traerProductosStore','traerProductosTodos']),
        mostrarModal: function(props){
            var vaina = [];
            this.$refs.elModal.producto = props;
            this.unProducto = props;
            // console.log(this.unProducto);
            for (let index = 0; index < this.unProducto.arrayImagenes.length; index++) {
                // console.log(`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}`)
                vaina.push({ id:index , src:`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}`, thumbnail:`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}` });
            } 

            this.arregloFinal = vaina;
            // console.log(this.arregloFinal);
            this.$refs.elModal.arrayImagenes = this.arregloFinal;
            this.$bvModal.show("modal_1");
        }
    },
    watch:{
        productosTodos(nuevo){
            this.productos = nuevo;
            var elarray = []
            nuevo.map(function(el){
                if(!el.aplicaDescuento){
                    elarray.push(el)
                }
            })
            this.productos = elarray
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
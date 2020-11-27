<template>
    <div class="text-center w-100">
        
        <div class="container fixed-top p-0" ><Navegador /></div>
    
        <div class="container" id="contenedorInicio">
            <Deslizador />
            <div>
                <!-- <b-col md="12" lg="12" class="pl-0 pr-0 mt-1"> -->
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
        Producto, Modal, Footer, Deslizador, Navegador
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
        this.cantidadCarro = localStorage.getItem('cantProductosCarro');
        var productosLocales =JSON.parse(localStorage.getItem('productosCarro'));
        if(productosLocales != null){
            this.modificarCarro(productosLocales);
            this.modifPuraCantidad(this.cantidadCarro);            
        }
        // window.addEventListener('resize', function(){
        //     var vainaaaa = document.width
        //     console.log(vainaaaa);
        // });
 
    },
    methods:{
        ...mapMutations(['modifCantProducto','modifPuraCantidad','modificarCarro', 'traerProductosStore','traerProductosTodos']),
        mostrarModal: function(props){
            var vaina = [];
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
    .sombreadoProducto{
        border-width: 0px!important;
    }
    #contenedorInicio{
        background: #FFF!important;
        padding-top: 15px!important;
    }
    .carroEnlace:hover, .botonHome:hover,a.nav-link, a.nav-link:hover{
        color: #fff!important;
    }
    #navegadorArriba, .carroEnlace{
        background-color: #3f3c46!important;
    }
    .carroEnlace{
    color: #FFF!important;
    }
</style>
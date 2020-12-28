<template>
    <div>
        <Modal2 ref="elModal2" :tituloModal="unProducto.tituloProducto" :textoModal="unProducto.bodyProducto" :precio="unProducto.precioProducto"></Modal2>
        <carousel-3d
        ref="mycarousel"
        :disable3d="true"
        :controls-visible="false"
        :space="espacio"
        :autoplay="true"
        :autoplay-timeout="6000"
        :pauseOnHover="false"
        :clickable="false"
        :display="5"
        :count="productos.length"
        >
            <slide v-for="(t, index) in productos" :key="t._id"  :index="index">
                <Productoo
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
            </slide>        
        </carousel-3d>
    </div>
</template>

<script>
import Productoo from './Producto'
import Modal2 from './ModalDescuentos'
import { Carousel3d, Slide } from 'vue-carousel-3d';
import { mapMutations, mapState } from 'vuex'

export default {
    data(){
        return{
            espacio:undefined,
            unProducto:{},
            productos: [],
            urlImagen:'https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes'
        }
    },
    components: {
        Carousel3d, Slide, Productoo, Modal2
    },
    computed:{
        ...mapState(['productosTodos'])
    },
    watch:{
        productosTodos(nuevo){
            var elarray = []
            nuevo.map(function(el){
                if(el.aplicaDescuento){
                    elarray.push(el)
                }
            })
            console.log(elarray)
            this.productos = elarray
        }
    },
    methods:{
        mostrarModal: function(props){
            var vaina = [];
            this.$refs.elModal2.producto = props;
            this.unProducto = props;
            console.log(this.unProducto);
            for (let index = 0; index < this.unProducto.arrayImagenes.length; index++) {
                console.log(`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}`)
                vaina.push({ id:index , src:`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}`, thumbnail:`${this.urlImagen}/${this.unProducto.idProducto}/${this.unProducto.arrayImagenes[index]}` });
            }
            this.arregloFinal = vaina;
            console.log(this.arregloFinal);
            this.$refs.elModal2.arrayImagenes = this.arregloFinal;
            this.$bvModal.show("modal_2");
        }
    },
    mounted(){
        let that = this
        window.addEventListener('resize', function(e){
            var ancho = e.target.innerWidth
            // console.log(ancho)
            if(ancho > 1200){
                that.espacio = 280
            }
            else if(ancho >= 992 && ancho <= 1199){
                that.espacio = 240
            }
            else if(ancho >= 768 && ancho < 991){
                that.espacio = 237
            }
            else if(ancho >= 576 && ancho < 767){
                that.espacio = 260
            }
            else if(ancho >= 480 && ancho < 575){
                that.espacio = 220
            }
            else if(ancho >= 410 && ancho < 479){
                that.espacio = 190
            }
            else if(ancho >= 346 && ancho < 409){
                that.espacio = 170
            }
            else if(ancho < 346){
                that.espacio = 160
            }
        })

        var ancho = window.innerWidth
        
        if(ancho > 1200){
            that.espacio = 280
        }
        else if(ancho >= 992 && ancho <= 1199){
            that.espacio = 240
        }
        else if(ancho >= 768 && ancho < 991){
            that.espacio = 237
        }
        else if(ancho >= 576 && ancho < 767){
            that.espacio = 260
        }
        else if(ancho >= 480 && ancho < 575){
            that.espacio = 220
        }
        else if(ancho >= 410 && ancho < 479){
            that.espacio = 190
        }
        else if(ancho >= 346 && ancho < 409){
            that.espacio = 170
        }
        else if(ancho < 346){
            that.espacio = 160
        }
        // document.getElementById('navegadorArriba').click()
    }
}
</script>

<style>
.carousel-3d-slide{
    background-color: transparent!important;
}
.carousel-3d-container{
    margin-bottom: 0px!important;
    margin-top: 10px!important;
}
@media(min-width:1200px){
    .carousel-3d-slide, .carousel-3d-slider{
        border-width: 0px!important;
        width:285px!important;
    }
    .carousel-3d-container, .carousel-3d-slide{
        height: 370px!important;
    }
    #textoOfertas, #textoNuevo{
        font-size: 50px!important;
    }
}
@media(min-width:992px) and (max-width:1199px){
    .carousel-3d-slide, .carousel-3d-slider{
        border-width: 0px!important;
        width:239px!important;
    }
    .carousel-3d-container, .carousel-3d-slide{
        height: 325px!important;
    }
    #textoOfertas, #textoNuevo{
        font-size: 40px!important;
    }
}
@media(min-width:768px) and (max-width:991px){
    .carousel-3d-slide, .carousel-3d-slider{
        border-width: 0px!important;
        width:239px!important;
    }
    .carousel-3d-container, .carousel-3d-slide{
        height: 323px!important;
    }
    #textoOfertas, #textoNuevo{
        font-size: 35px!important;
    }
}
@media(min-width:576px) and (max-width:767px){
    .carousel-3d-slide, .carousel-3d-slider{
        border-width: 0px!important;
        width:270px!important;
    }
    .carousel-3d-container, .carousel-3d-slide{
        height: 353px!important;
    }
    #textoOfertas, #textoNuevo{
        font-size: 30px!important;
    }
}
@media  (min-width:480px) and (max-width: 575px) {
    .carousel-3d-slide, .carousel-3d-slider{
        border-width: 0px!important;
        width:229px!important;
    }
    .carousel-3d-container, .carousel-3d-slide{
        height: 312px!important;
    }
    #textoOfertas, #textoNuevo{
        font-size: 30px!important;
    }
}
@media  (min-width:410px) and (max-width: 479px) {
    .carousel-3d-slide, .carousel-3d-slider{
        border-width: 0px!important;
        width:194px!important;
    }
    .carousel-3d-container, .carousel-3d-slide{
        height: 278px!important;
    }
    #textoOfertas, #textoNuevo{
        font-size: 30px!important;
    }
}
@media  (min-width:350px) and (max-width: 409px) {
    .carousel-3d-slide, .carousel-3d-slider{
        border-width: 0px!important;
        width:165px!important;
    }
    .carousel-3d-container, .carousel-3d-slide{
        height: 248px!important;
    }
    #textoOfertas, #textoNuevo{
        font-size: 25px!important;
    }
}
@media  (max-width:350px) {
     .carousel-3d-slide, .carousel-3d-slider{
        border-width: 0px!important;
        width:174px!important;
    }
    .carousel-3d-container, .carousel-3d-slide{
        height: 260px!important;
    }
    #textoOfertas, #textoNuevo{
        font-size: 25px!important;
    }
}
</style>
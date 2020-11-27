<template>
    <slider
    id="deslizador"
    :interval="6000"
    :speed="2000"
    :control-btn="false"
    :stopOnHover="false"
    animation="fade"
    :indicators="false"
    style="margin-top:58px!important;">
        <slider-item
            v-for="(i, index) in list"
            :key="index"
            :style="i"
            @click="hello"
        >
            <b-row class="ml-0" align-v="center" style="position:absolute!important; width:100%!important; height:100%!important;">
                <b-col>
                    <p class="tituloImagen" style=" font-size: 4.2rem; text-align: center; position:relative; color:#FFF!important;margin-bottom: 0px;">{{i.titulo}}</p>
                    <p class="subtituloImagen" style=" font-size: 2rem; text-align: center; position:relative; color:#FFF!important;">{{i.subtitulo}}</p>
                </b-col>
            </b-row>
            <div class="fill">
                <img :src="require(`../editor/img/portadas/${index + 1}.jpg`)" alt="" srcset="" class="unaImagen" style="object-fit: fill;">
            </div>
        </slider-item>
    </slider>
</template>

<script>
export default {
    data(){
        return{
            list: [
                { backgroundColor: '#e53935', width: '100%', height: '100%', titulo: 'Imagen fresca y diferente', subtitulo: 'Nuestro norte es hacernos destacar entre el resto' },
                { backgroundColor: '#ef9a9a', width: '100%', height: '100%', titulo: 'Diseños personalizados', subtitulo: 'Posibilidad de crear a tu gusto, con tus imágenes' },
                { backgroundColor: '#ef5350', width: '100%', height: '100%', titulo: 'Satisfacción garantizada', subtitulo: 'Nos enfocamos en la calidad de atención' },
                { backgroundColor: '#b71c1c', width: '100%', height: '100%', titulo: 'Entregas en todo Santiago', subtitulo: 'Posibilidad de entrega en todo Santiago' }
            ],
        }
    },
    methods:{
        hello(){
            alert('HELLO')
        }
    }
}
</script>

<style>
.fill {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
}
.fill > img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
}
.tituloImagen, .subtituloImagen{
    text-shadow: 4px 4px 9px rgb(122, 122, 122);
}
#deslizador{
    margin-left: 10px!important;
    margin-right: 10px!important;
}

@media(min-width:1200px){
    .productoCard > img {
        height:277px!important;
        width: 263px!important;
    }
    .productoCard {
        width: 265px!important;
        margin:10px!important;
    }
    .card-title{
        font-size: 16px !important;
    }
    .unPrecio, .etiquetaBajo {
        font-size: 14px!important;
    }
    .etiquetaBajo {
        margin-bottom: 0px!important;
    }
    .tituloImagen{
        font-size: 40px!important;
    }
    .subtituloImagen{
        font-size: 25px!important;
    }
    #deslizador{
        height: 340px!important;
    }
}
@media(min-width:992px) and (max-width:1199px){
    .productoCard > img {
        height:240px!important;
        width: 224px!important;
    }
    .productoCard {
        width: 226px!important;
        margin:6.5px!important;
    }
    .card-title{
        font-size: 14px !important;
    }
    .unPrecio, .etiquetaBajo {
        font-size: 13px!important;
    }
    .etiquetaBajo {
        margin-bottom: 1px!important;
    }
    .tituloImagen{
        font-size: 40px!important;
    }
    .subtituloImagen{
        font-size: 25px!important;
    }
    #deslizador{
        height: 270px!important;
    }
}
@media(min-width:768px) and (max-width:991px){
    .productoCard > img {
        height:230px!important;
        width: 217px!important;
    }
    .productoCard {
        width: 219px!important;
        margin:10.5px!important;
    }
    .card-title{
        font-size: 14px !important;
    }
    .unPrecio, .etiquetaBajo {
        font-size: 13px!important;
    }
    .etiquetaBajo {
        margin-bottom: 1px!important;
    }
    .tituloImagen{
        font-size: 30px!important;
    }
    .subtituloImagen{
        font-size: 18px!important;
    }
    #deslizador{
        height: 270px!important;
    }
}
@media(min-width:576px) and (max-width:767px){
    .productoCard > img {
        height:260px!important;
        width: 247px!important;
    }
    .productoCard {
        width: 249px!important;
        margin:10.5px!important;
    }
    .card-title{
        font-size: 14px !important;
    }
    .unPrecio, .etiquetaBajo {
        font-size: 14px!important;
    }
    .etiquetaBajo {
        margin-bottom: 0px!important;
    }
    .tituloImagen{
        font-size: 25px!important;
    }
    .subtituloImagen{
        font-size: 15px!important;
    }
    #deslizador{
        height: 260px!important;
    }
}
@media  (min-width:480px) and (max-width: 575px) {
    .productoCard > img {
        height:220px!important;
        width: 207!important;
    }
    .productoCard {
        width: 209px!important;
        margin:10px!important;
    }
    .card-title{
        font-size: 14px !important;
    }
    .unPrecio, .etiquetaBajo {
        font-size: 12px!important;
    }
    .etiquetaBajo {
        margin-bottom: 4px!important;
    }
    #contenedorInicio{
        width: 460px!important;
    }
    .tituloImagen{
        font-size: 22px!important;
    }
    .subtituloImagen{
        font-size: 13px!important;
    }
    #deslizador{
        height: 240px!important;
    }
}
@media  (min-width:410px) and (max-width: 479px) {
    .productoCard > img {
        height:190px!important;
        width: 176!important;
    }
    .productoCard {
        width: 178px!important;
        margin:8px!important;
    }
    .card-title{
        font-size: 14px !important;
    }
    .unPrecio, .etiquetaBajo {
        font-size: 12px!important;
    }
    .etiquetaBajo {
        margin-bottom: 4px!important;
    }
    #contenedorInicio{
        width: 390px!important;
    }
    .tituloImagen{
        font-size: 20px!important;
    }
    .subtituloImagen{
        font-size: 12px!important;
    }
    #deslizador{
        height: 210px!important;
    }
    #contenedorInicio, .container{
        padding-left: 0px!important;
        padding-right: 0px!important;
    }
}
@media  (min-width:350px) and (max-width: 409px) {
    .productoCard > img {
        height:166px!important;
        width: 153px!important;
    }
    .productoCard {
        width: 155px!important;
        margin:5px!important;
    }
    .card-title{
        font-size: 12px !important;
    }
    .unPrecio, .etiquetaBajo {
        font-size: 12px!important;
    }
    .etiquetaBajo {
        margin-bottom: 4px!important;
    }
    #contenedorInicio{
        width: 340px!important;
    }
    .tituloImagen{
        font-size: 18px!important;
    }
    .subtituloImagen{
        font-size: 12px!important;
    }
    #deslizador{
        height: 190px!important;
    }
}
@media  (max-width:350px) {
    .productoCard > img {
        height:170px!important;
        width: 153px!important;
    }
    .productoCard {
        width: 155px!important;
        margin:9px!important;
    }
    .card-title{
        font-size: 12px !important;
    }
    .unPrecio, .etiquetaBajo {
        font-size: 12px!important;
    }
    .etiquetaBajo {
        margin-bottom: 4px!important;
    }
    #contenedorInicio{
        width: 100%!important;
        margin-left: 0px!important;
        margin-right: 0px!important; 
    }
    .tituloImagen{
        font-size: 14px!important;
    }
    .subtituloImagen{
        font-size: 10px!important;
    }
    #deslizador{
        height: 140px!important;
        margin-left: 0px!important;
        margin-right: 0px!important; 
    }
}
</style>
<template>
    <slider
    id="deslizador"
    :interval="6000"
    :speed="2000"
    :control-btn="false"
    :stopOnHover="false"
    animation="fade"
    :indicators="false"
    style="margin-top:62px!important;">
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
    margin-left: 12px!important;
    margin-right: 12px!important;
}

@media(min-width:1200px){
    .productoCard > img {
        height:270px!important;
        width: 255px!important;
    }
    .productoCard {
        width: 257px!important;
        margin:10px!important;
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
        height:230px!important;
        width: 215px!important;
    }
    .productoCard {
        width: 217px!important;
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
        height:220px!important;
        width: 205px!important;
    }
    .productoCard {
        width: 207px!important;
        margin:11px!important;
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
        height:245px!important;
        width: 230px!important;
    }
    .productoCard {
        width: 232px!important;
        margin:11px!important;
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
        height:200px!important;
        width: 190!important;
    }
    .productoCard {
        width: 192px!important;
        margin:11px!important;
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
        height:192px!important;
        width: 178!important;
    }
    .productoCard {
        width: 176px!important;
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
        height:146px!important;
        width: 136px!important;
    }
    .productoCard {
        width: 138px!important;
        margin:6px!important;
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
</style>
<template>
  <div style="display:inline-block;">
  <b-card
    :img-src="srcImagen"
    img-alt="Imagen"
    img-top
    style="max-width: 15rem;"
    class="mb-2 ml-2 mr-2 mt-2 border border-secondary sombreadoProducto"
    img-height="240"
    @click="$emit('mostrar-modal', $props)"
  >
    <b-card-title class="text-left ml-2 mt-1 mb-0" style="font-family: 'OverpassLight';font-size:14px!important;">{{tituloProducto}}</b-card-title>
    <p class="text-right mr-2" style="font-size:20px!important">
      <b-badge style="font-family: 'UbuntuMonoR';" variant="dark">{{precioProducto | currency}}</b-badge>
    </p>
  </b-card>
</div>
</template>

<script>
import Modal from '../components/Modal'
export default {
    name:'Producto',
    props:{
        tituloProducto:String,
        textoProducto:String,
        bodyProducto:String,
        idProducto:String,
        srcImagen:undefined,
        arrayImagenes:Array,  
        laCantidad:Number,
        precioProducto:Number
    },
    data(){
      return{
        Cantidad:Number
      }
    }
}
</script>

<style>
.txtCard{
  height: 50px!important;
  font-size: 12px!important;
}
.card-title{
  font-size: 18px!important;
}
.card-body{
  padding: 12px!important;
  padding-bottom: 0px!important;
}
.sombreadoProducto{
-webkit-box-shadow: 6px 7px 10px -2px rgba(0,0,0,0.32);
-moz-box-shadow: 6px 7px 10px -2px rgba(0,0,0,0.32);
box-shadow: 6px 7px 10px -2px rgba(0,0,0,0.32);
}
</style>
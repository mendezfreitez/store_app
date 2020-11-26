<template>
  <div style="display:inline-block; position:relative;">
                    
  <b-card
    :img-src="srcImagen"
    img-alt="Imagen"
    img-top
    style="width: 16rem;"
    class="productoCard"
    img-height="260"
    @click="$emit('mostrar-modal', $props)"
  >
    <b-card-title class="text-left ml-2 mt-1 mb-0" style="font-family: 'OverpassLight';height: 32px;">{{tituloProducto}}</b-card-title>
    <div class="text-right mr-2 mb-1" style="font-size:20px!important">
      <b-badge v-if="!aplicaDescuento" class="pl-1 pr-1 pb-0 text-right unPrecio" style="background-color: transparent!important;" variant="dark">{{precioProducto | currency}}</b-badge>
      <div v-if="aplicaDescuento">
        <b-badge class="pl-1 pr-1 pb-0 text-right unPrecio" style="margin-left: 50px;float:right; background-color: transparent!important; display:block; text-decoration-line:line-through;">{{precioProducto | currency}} <br> </b-badge>
        <b-badge class="pl-1 pr-1 pb-0 text-right etiquetaBajo" style="margin-left: 50px; float:right; background-color: transparent!important; display:block;">{{precioProducto - descuento.montoDescuento | currency}}</b-badge>
      </div>
    </div>
    <b-badge v-if="aplicaDescuento" class="etiquetaDescuento" variant="warning" >-{{descuento.porcentajeDescuento}}%</b-badge>
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
        precioProducto:Number,
        aplicaDescuento:Boolean,
        descuento:Object
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
  /* font-size: 12px!important; */
}
/* .card-title{
  font-size: 16px!important;
} */
.card-body{
  padding: 12px!important;
  padding-bottom: 0px!important;
}
.productoCard {
-webkit-box-shadow: 6px 6px 8px 1px rgba(0,0,0,0.11);
-moz-box-shadow: 6px 6px 8px 1px rgba(0,0,0,0.11);
box-shadow: 6px 6px 8px 1px rgba(0,0,0,0.11);
/* margin:14px!important; */
}
.etiquetaDescuento {
  font-family:'OverpassLight';
  font-size:14px!important;
  position:absolute!important;
  top:0px!important;
  left:0px!important;
  height:25px;
  width:45px!important;
  padding-left:4px!important;
  padding-top:7px!important;
  /* border-radius: 50%!important; */
}
.unPrecio{
  font-family: 'OverpassLight';
  /* font-family: 'AlitaBrush '; */
  /* font-family: 'Arigatou'; */
  /* font-size: 15px!important; */
  /* padding-top: 3px!important; */
  width: 50%!important;
  color:#000!important;
}
.etiquetaBajo{
  font-family: 'OverpassLight';
  /* font-size: 15px!important; */
  /* padding-top: 3px!important; */
  width: 50%!important;
  color:#000!important;
  /* margin-bottom: 1px; */
}
@media (max-width:992px) {
  /* .productoCard > img {
    height:190px!important;
    width: 187px!important;
  }
  .productoCard {
    width: 189px!important;
    margin:4px!important;
  }
  .card-title{
    font-size: 14px !important;
  }
  .unPrecio, .etiquetaBajo {
    font-size: 12px!important;
  }
  .etiquetaBajo {
    margin-bottom: 4px!important;
  } */
}
</style>
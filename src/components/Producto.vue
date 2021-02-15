<template>
  <div style="display:inline-block; position:relative; cursor:pointer!important;">
                    
  <b-card
    :img-src="srcImagen"
    img-alt="Imagen"
    img-top
    style="width: 16rem;"
    class="productoCard"
    img-height="260"
    @click="$emit('mostrar-modal', $props)"
  >
    <b-card-title class="text-left ml-1 mt-1 mb-0" style="font-family: 'OverpassLight';height: 32px;">{{tituloProducto}}</b-card-title>
    <div class="text-right mr-2 mb-1" style="font-size:20px!important">
      <b-badge v-if="!aplicaDescuento" class="pl-1 pr-1 pb-0 text-right unPrecio" style="background-color: transparent!important;" variant="dark">{{precioProducto | currency}}</b-badge>

      <div v-if="aplicaDescuento">
          <b-badge class="pl-1 pr-1 pb-0 text-right unPrecio" style="margin-left: 30px;float:right; background-color: transparent!important; display:block; text-decoration-line:line-through;">{{precioProducto | currency}} <br> </b-badge>
          <b-badge class="pl-1 pr-1 pb-0 mt-1 text-right etiquetaBajo" style="margin-left: 30px; float:right; background-color: transparent!important; display:block;">{{precioProducto - descuento.montoDescuento | currency}}</b-badge>
      </div>
    </div>
    <b-badge v-if="aplicaDescuento" class="etiquetaDescuento" variant="warning" >{{descuento.porcentajeDescuento}}% OFF</b-badge>
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
    },
    mounted(){
      var hoy = new Date()
      // console.log((hoy.getTime() / 1000).toFixed(0))
      // console.log(((new Date('2021-01-31').getTime()) / 1000).toFixed(0))
    }
}
</script>

<style>
  .txtCard{
    height: 50px!important;
  }
  .card-body{
    padding: 0px!important;
    padding-bottom: 0px!important;
  }
  .productoCard {
  -webkit-box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.11);
  -moz-box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.11);
  box-shadow: 3px 3px 4px 1px rgba(0,0,0,0.1);
  }
  .etiquetaDescuento {
    font-family:'OverpassLight';
    font-size:14px!important;
    position:absolute!important;
    top:0px!important;
    left:0px!important;
    height:25px;
    width:auto!important;
    text-align: center;
    border-radius: 0px!important;
    padding-left:4px!important;
    padding-right:4px!important;
    padding-top:7px!important;
  }
  .unPrecio{
    font-family: 'OverpassLight';
    width: 50%!important;
    color:#000!important;
  }
  .etiquetaBajo{
    font-family: 'OverpassLight';
    width: 50%!important;
    color:#000!important;
  }
</style>
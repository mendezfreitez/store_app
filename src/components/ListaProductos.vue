<template>
    <div>
        <div v-for="Producto in ProductosCarro" :key="Producto.idProducto" class="mb-2 mt-1 ml-2 mr-2">
            <b-card :img-src="Producto.imagen" img-alt="Card image" img-right img-height="100" border-variant="secondary" class="margenCard">
                <h6 style="font-family: 'OverpassLight'; font-size:16px; font-weight:700!important;" class="mb-0 mt-1">{{Producto.tituloProducto}}</h6>
                <b-badge v-if="Producto.descuento"  class="etiquetaDescuento2" variant="warning" >{{Producto.descuento.porcentajeDescuento}}% OFF</b-badge>
                <div>
                    <b-form-spinbutton
                        inline
                        :ref="'dato_'"
                        @change="cantidadProductoCarro(Producto.idProducto)"
                        :id="Producto.idProducto" v-model="Producto.laCantidad"
                        min="1"
                        max="1000"  
                        style="height:23px!important; width:130px!important; margin-right:4px!important; border-color:green;">
                    </b-form-spinbutton>
                </div>
                
                <div v-if="Producto.descuento">
                    <b-badge class="text-right" variant="transparent" style="text-decoration: line-through!important;background-color: transparent!important; border-bottom:0px solid #ce3333!important; display:inline-block!important;font-family: 'UbuntuMonoR'; font-weight:700!important; font-size:14px; width:130px!important;">
                        {{Producto.precio * Producto.laCantidad | currency}}
                    </b-badge>
                    <b-badge class="text-right" variant="dark" style="background-color: #343a40!important; border-bottom:2px solid #ce3333!important; display:block!important;font-family: 'UbuntuMonoR'; font-weight:700!important; font-size:14px; width:130px!important;">
                        {{Producto.precio * Producto.laCantidad - (Producto.descuento.montoDescuento * Producto.laCantidad) | currency}}
                    </b-badge>
                </div>
                <div v-else>
                    <b-badge class="text-right" variant="dark" style="background-color: #343a40!important; border-bottom:2px solid #ce3333!important; display:inline-block!important;font-family: 'UbuntuMonoR'; font-weight:700!important; font-size:14px; width:130px!important;">
                        {{Producto.precio * Producto.laCantidad | currency}}
                    </b-badge>
                </div>

                <b-link style="position:absolute; bottom:4px!important;font-family: 'OverpassLight'; font-weight:600!important; right:105px!important; padding-top:1px!important;" class="btn btn-sm btn-outline-secondary papelera" title="Eliminar Producto de Carro" href="#"  @click="removerDeCarro(Producto.idProducto, Producto.tituloProducto)">
                    Eliminar
                </b-link>
            </b-card>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'
    export default {
        name:'ListaProductos',
        data(){
            return{
                losProductos: [],
                Total: 0,
                elTotal:''
            }
        },
        computed:{
        ...mapState(['ProductosCarro','textoTotalCarro']),
        },
        methods:{
        ...mapMutations(['modifCantProducto','modificarCarro','modifTextoTotalCarro']),
            removerDeCarro(idProducto,tituloProducto){
                var eliminar = confirm(`Está seguro de eliminar el producto '${tituloProducto}' de su carro?`)
                if(eliminar){
                    let index = 0;
                    this.ProductosCarro.forEach(element => {
                        if(idProducto === element.idProducto){
                            this.ProductosCarro.splice(index, 1);
                            this.modificarCarro(this.ProductosCarro)  
                        }
                        index++;
                    });
                    this.Total = 0;
                    this.calculoTotalCarro();
                }
            },
            cantidadProductoCarro(dato){
                this.modificarCarro(this.ProductosCarro);       /////////////////////////////////////////////////////////////////////
                this.calculoTotalCarro();
            },
            calculoTotalCarro(){
                this.Total = 0
                this.ProductosCarro.map(function(e){
                    if(e.descuento){
                        this.Total += (e.precio - e.descuento.montoDescuento) * e.laCantidad;
                    }
                    else{
                        this.Total += e.precio * e.laCantidad;
                    }
                }.bind(this));
                this.modifTextoTotalCarro(this.Total)
            },
            comprar(){
                alert(`El total a pagar es: ${document.querySelector('#textoTotal').textContent}`);
            }
        },
        mounted(){
            this.calculoTotalCarro();
        },
        watch:{
            Total(nuevo){
                this.modifTextoTotalCarro(nuevo);
            }
        }
    }
</script>

<style>
.card-img-right{
border-radius: 0px!important;
}

.etiquetaDescuento2{
    /* margin-top: 4px; */
    border-radius: 0px!important;
    font-family:'OverpassLight';
    position: absolute;
    font-size:12px!important;
    padding-top:2px!important;
    padding-bottom:3px!important;
    height:15px!important;
    right:0px!important;
    width:56px!important;
    top:0px!important;
}
    #btnCompra{
        height: 23px!important;
        padding-top: 0px!important;
    }
    path.text-primary{
        color: #FFC107!important;
    }
    .total:hover{
        background-color: transparent!important;
    }
    .noBorder{
        border-style:none!important;
    }
    td, th{
        font-size: 13px!important;
    }
    .card-text, .b-form-spinbutton{
        margin-bottom: 0px!important;
        font-size: 13px!important;
    }
    .iconoEliminar:hover{
        color: #fff!important;
    }
    .papelera{
        height: 24px!important;
        width: 70px!important;
        padding: 0px!important;
    }
    div.margenCard > .card-body{
        padding-top: 2px!important;
        padding-left: 6px!important;
    }
    div.b-form-spinbutton{
        height: 19px !important;
    }
    div.margenCard{
        border-radius: 0px!important;
    }
    ul.dropdown-menu{
        border: 0px!important;
    }
</style>
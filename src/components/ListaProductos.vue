<template>
    <div>
        <div v-for="Producto in ProductosCarro" :key="Producto.idProducto" class="mb-2 mt-1 ml-2 mr-2">
            <b-card :img-src="Producto.imagen" img-alt="Card image" img-right img-height="100" border-variant="secondary" class="margenCard">
                <h6 style="font-family: 'OverpassLight'; font-size:15px; font-weight:700!important;">{{Producto.tituloProducto}}</h6>
                <div>
                    <!-- <vue-numeric-input
                    :ref="'dato_'"
                    v-model="Producto.laCantidad"
                    align="center"
                    @change="cantidadProductoCarro(Producto.idProducto)"
                    :min="1"
                    :max="1000" 
                    :id="Producto.idProducto"
                    size="100px">
                    </vue-numeric-input> -->

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
                
                <div>
                    <b-badge class="text-right" variant="dark" style="display:inline-block!important;font-family: 'UbuntuMonoR'; font-weight:700!important; font-size:13px; width:130px!important;">
                        {{Producto.precio * Producto.laCantidad | currency}}
                    </b-badge>
                </div>

                <b-link style="position:absolute; bottom:5px!important;font-family: 'OverpassLight'; font-weight:600!important; right:105px!important; padding-top:1px!important;" class="btn btn-sm btn-outline-secondary papelera" title="Eliminar Producto de Carro" href="#"  @click="removerDeCarro(Producto.idProducto, Producto.tituloProducto)">
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
                losProductos: Array,
                Total: Number,
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
                    // console.log(this.ProductosCarro);
                    let index = 0;
                    this.ProductosCarro.forEach(element => {
                        if(idProducto === element.idProducto){
                            // console.log(`${idProducto} === ${element.idProducto}`)
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
                let cantidad = document.getElementById(dato).value;
                this.modificarCarro(this.ProductosCarro);       /////////////////////////////////////////////////////////////////////
                this.Total = 0;
                this.calculoTotalCarro();
            },
            calculoTotalCarro(){
                this.ProductosCarro.map(function(e){
                    this.Total += e.precio * e.laCantidad;
                    // console.log(`Precio: ${e.precio} // Cantidad: ${e.laCantidad} // Total: ${e.precio*e.laCantidad}`);
                }.bind(this));
                
                // document.getElementById('footerModal').innerHTML = this.Total;
                // alert(numeral(this.Total).format('0,0'));
            },
            comprar(){
                alert(`El total a pagar es: ${document.querySelector('#textoTotal').textContent}`);
            }
        },
        mounted(){
            var productosLocales = JSON.parse(localStorage.getItem('productosCarro'));
            this.modificarCarro(productosLocales);
            this.Total = 0;
            
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
</style>
<template>
<div>
    <b-container class="pt-2 pb-2 text-left">
        <b-button size="sm" variant="dark" @click="seleccionarPestana(0)" class="mr-2 ml-3">
            PRODUCTOS
        </b-button>
        <b-button size="sm" variant="dark" @click="seleccionarPestana(1)">
            CATEGORIAS
        </b-button>
    </b-container>
    <b-container class="pl-1 pr-1 pb-1" :hidden="pestanaProductos">
        <h4 class="mt-2 mb-2" style="display: inline-block!important;padding-top:3px!important;">Productos</h4>
        <b-button class="mt-2 mb-2 mr-2" size="sm" variant="outline-dark" style="display: inline-block!important;float:right!important;" @click="modalProducto('')">
            Nuevo
            <b-icon icon="plus"></b-icon>
        </b-button>
        <div class="table-responsive mb-0">
            <table class="table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Producto in productosTodos" :key="Producto.idProducto">
                        <td nowrap class="text-left">{{Producto.nombre}}</td>
                        <td nowrap class="text-right">{{Producto.precio | currency}}</td>
                        <td nowrap class="text-center">
                            <a href="#" style="font-size:12px; height:19px!important; width:64px!important;" class="papelera btn btn-outline-danger" @click="eliminarProducto(Producto._id, Producto.nombre)">
                               ELIMINAR
                            </a>
                            <a href="#" style="font-size:12px; height:19px!important; width:64px!important;" class="papelera ml-1 btn btn-outline-dark" @click="editarProducto(Producto._id, Producto)">
                               EDITAR
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </b-container>

    <Modal ref="modalCategoria" :tituloModal="titulo" :textoModal="texto"></Modal>
    <ModalProducto ref="modalProducto" :ElTituloModal="tituloProductoModal" :producto="unSoloProducto" :idProducto="idProducto"></ModalProducto>

    <b-container class="pl-1 pr-1 pb-1" :hidden="pestanaCategorias">
        <h4 class="mt-2 mb-2" style="display: inline-block!important;padding-top:3px!important;">Categorías</h4>
        <b-button class="mt-2 mb-2 mr-2" size="sm" @click="modalCategoria('','')" variant="outline-dark" style="display: inline-block!important;float:right!important;">
            Nuevo
            <b-icon icon="plus"></b-icon>
        </b-button>
                <div class="table-responsive mb-0">
            <table class="table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nombre Categoría</th>
                        <th scope="col">ID</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="categoria in categoriasTodas" :key="categoria._id">
                        <td nowrap class="text-left">{{ categoria.nombre }}</td>
                        <td nowrap class="text-left">{{ categoria._id }}</td>
                        <td nowrap class="text-center">
                            <a href="#" style="font-size:12px; height:19px!important; width:64px!important;" class="papelera btn btn-outline-danger" @click="eliminarCategoria(categoria._id, categoria.nombre)">
                               ELIMINAR
                            </a>
                            <a href="#" style="font-size:12px; height:19px!important; width:64px!important;" class="papelera ml-1 btn btn-outline-dark" @click="modalCategoria(categoria._id, categoria.nombre)">
                               EDITAR
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import Modal from '../components/Categorias/ModalNuevaCategoria'
import ModalProducto from '../components/modalProducto'
import { mapMutations, mapState } from 'vuex';
// var firebase = require('../assets/js/FirebaseConfig')
let url = 'http://localhost:3000/';
// let url = 'https://storeapp-back-end.herokuapp.com/';




// let url = 'https://cosmic-envoy-301012.rj.r.appspot.com/';
var firebaseConfig = {
  apiKey: "AIzaSyDIXGU3z6fJ9a5ZeJDvU8Xf5e0crQE6pp8",
  authDomain: "storeappfront-465d5.firebaseapp.com",
  databaseURL: "https://storeappfront-465d5.firebaseio.com",
  projectId: "storeappfront-465d5",
  storageBucket: "storeappfront-465d5.appspot.com",
  messagingSenderId: "848968631781",
  appId: "1:848968631781:web:cb89a966c6d63eaa521b0c",
  measurementId: "G-ELJPFXFTRV"
};

firebase.initializeApp(firebaseConfig)




export default {
    name:'productosTodos',
    components:{
        Modal,
        ModalProducto
    },
    data(){
        return{
            productosTodos:[],
            categoriasTodas:[],
            unSoloProducto:undefined,
            idProducto:String,
            Total:Number,
            titulo:'',
            tituloProductoModal:'',
            texto:'',
            pestanaProductos:false,
            pestanaCategorias:true
        }
    },
    computed:{
        ...mapState(['categorias','productosTodos_'])
    },
    mounted(){
        this.traerProductosTodos('')
        this.traerCategorias()
    },
    methods:{
        ...mapMutations(['traerCategorias','traerProductosTodos']),
        seleccionarPestana(dato){
            switch (dato) {
                case 0:
                    this.pestanaProductos = false
                    this.pestanaCategorias = true
                    break;
                case 1:
                    this.pestanaProductos = true
                    this.pestanaCategorias = false
                    break;
            }
        },
        modalProducto(producto){
            this.tituloProductoModal = 'Nuevo Producto'
            this.unSoloProducto = {
                nombre: '',
                descripcion: '',
                categoria: '',
                precio: '',
                cantidad: '',
                nombreImags: '',
                nombreImagenes: [],
                aplicaDescuento: false,
                idProducto:'',
                descuento:{
                    desde: '',
                    hasta:'',
                    tipoPorcentaje:true,
                    tipoMonto:false,
                    montoDescuento:'',
                    porcentajeDescuento:''
                }
            }
            this.$refs.modalProducto.arrayImagenes = []
            this.$refs.modalProducto.arrayImagenes_ = []
            this.$refs.modalProducto.show = true
            this.$refs.modalProducto.activoVer = true
            this.$refs.modalProducto.activoBtnRegistrar = true
            this.$refs.modalProducto.descuentoHabilitado = true
            this.$refs.modalProducto.RegistroEdicion = ''
            this.$bvModal.show('modalProducto')
        },
        eliminarProducto(id, titulo){
            var elimProd = confirm(`¿Esta seguro de eliminar el producto '${titulo}'?`);
            var datos = {
                _id:id
            }
            if(elimProd){
                // console.log(`ID::: ${id}`)
                // return
                axios.post(`${url}eliminarProducto`, datos).then(function(result){
                    this.traerProductosTodos('')
                        var mountainsRef = firebase.storage().ref().child(`/productos/${id}`);
                        mountainsRef.listAll().then(function (result) {
                        if(result.items.length > 0){
                            result.items.forEach(function (file) {
                                file.delete();
                            })
                        } 
                    });
                }.bind(this));
            }
        },
        editarProducto(id, producto){
            this.tituloProductoModal = 'Editar Producto'
            this.unSoloProducto = producto
            this.idProducto = id
            this.$bvModal.show('modalProducto')
        },
        modalCategoria(id, nombre){
            if(id != ''){
                this.titulo = `Editar Categoría`;
                this.$refs.modalCategoria.form.nombre = nombre
                this.$refs.modalCategoria.form.idCategoria = id
                this.$refs.modalCategoria.desactivado = false                     
            }
            else{
                this.titulo = `Nueva Categoría`;
                this.$refs.modalCategoria.form.nombre = ''
                this.$refs.modalCategoria.desactivado = true
            }
            
            this.$bvModal.show("modalNuevaCategoria");
        },
        eliminarCategoria(id, nombre){
            var confirmar = confirm(`¿Está seguro de eliminar la categoría ${nombre} de sistema?`);
            if(confirmar){
                axios.post(`${url}eliminarCategoria`, { id:id }).then(function(resp){
                    axios.get(`${url}traerCategorias`).then(function (resp) {
                        this.categoriasTodas = resp.data
                    }.bind(this));
                }.bind(this));
            }
        }
    },
    watch:{
        categorias(nuevo){
            this.categoriasTodas = nuevo
        },
        productosTodos_(nuevo){
            this.productosTodos = nuevo
        }
    }
}
</script>
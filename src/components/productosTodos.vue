<template>
<div>
    <b-container>
        <h3 style="display: inline-block!important;">Administrador de Productos</h3>
        <!-- <b-button size="sm" to="/NuevoProducto" variant="outline-success" style="display: inline-block!important;float:right!important;">
            Nuevo
            <b-icon icon="plus"></b-icon>
        </b-button> -->
        <b-button size="sm" variant="outline-success" style="display: inline-block!important;float:right!important;" @click="modalProducto('')">
            Nuevo
            <b-icon icon="plus"></b-icon>
        </b-button>
        <div class="table-responsive">
            <table class="table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Producto in productosTodos" :key="Producto.idProducto">
                        <td nowrap class="text-left">{{Producto.nombre}}</td>
                        <td nowrap class="text-left">{{Producto.descripcion.substr(0,50)}}</td>
                        <td nowrap class="text-left">{{Producto.categoria}}</td>
                        <td nowrap class="text-right">{{Producto.precio | currency}}</td>
                        <td nowrap class="text-center">
                            <a href="#" class="papelera" @click="eliminarProducto(Producto._id, Producto.nombre)">
                                <b-icon icon="trash" variant="primary" style="color: #7952b3;"></b-icon>
                            </a>
                            <a href="#" class="papelera ml-3" @click="editarProducto(Producto._id, Producto)">
                                <b-icon icon="pencil" variant="primary" style="color: #7952b3;"></b-icon>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </b-container>

    <Modal ref="modalCategoria" :tituloModal="titulo" :textoModal="texto"></Modal>
    <ModalProducto ref="modalProducto" :ElTituloModal="tituloProductoModal" :producto="unSoloProducto" :idProducto="idProducto"></ModalProducto>

    <b-container>
        <h3 style="display: inline-block!important;">Administrador de Categorías</h3>
        <b-button size="sm" @click="modalCategoria('','')" variant="outline-success" style="display: inline-block!important;float:right!important;">
            Nuevo
            <b-icon icon="plus"></b-icon>
        </b-button>
                <div class="table-responsive">
            <table class="table table-sm table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre Categoría</th>
                        <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="categoria in categoriasTodas" :key="categoria._id">
                        <td nowrap class="text-left">{{ categoria._id }}</td>
                        <td nowrap class="text-left">{{ categoria.nombre }}</td>
                        <td nowrap class="text-center">
                            <a href="#" class="papelera" @click="eliminarCategoria(categoria._id, categoria.nombre)">
                                <b-icon icon="trash" variant="primary" style="color: #7952b3;"></b-icon>
                            </a>
                            <a href="#" class="papelera ml-3" @click="modalCategoria(categoria._id, categoria.nombre)">
                                <b-icon icon="pencil" variant="primary" style="color: #7952b3;"></b-icon>
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
import axios from 'axios'
import Modal from '../components/Categorias/ModalNuevaCategoria'
import ModalProducto from '../components/modalProducto'
import { mapMutations, mapState } from 'vuex';
let url = 'http://localhost:3000/';
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
            texto:''
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
        modalProducto(producto){
            this.tituloProductoModal = 'Nuevo Producto'
            this.$bvModal.show('modalProducto');
        },
        eliminarProducto(id, titulo){
            var elimProd = confirm(`¿Esta seguro de eliminar el producto '${titulo}'?`);
            var datos = {
                _id:id
            }
            if(elimProd){
                axios.post(`${url}eliminarProducto`, datos).then(function(result){
                    alert(result.data);
                    axios.get(`${url}traerTodos`).then(function(res){
                        this.productosTodos = res.data;
                    }.bind(this));
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
            // alert(`'${nombre}'`)
            if(id != ''){
                this.titulo = `Editar Categoría`;
                this.$refs.modalCategoria.form.nombre = nombre;
                this.$refs.modalCategoria.form.idCategoria = id;
                this.$refs.modalCategoria.desactivado = false;                            
            }
            else{
                this.titulo = `Nueva Categoría`;
                this.$refs.modalCategoria.form.nombre = '';
                this.$refs.modalCategoria.desactivado = true;
            }
            
            this.$bvModal.show("modalNuevaCategoria");
        },
        eliminarCategoria(id, nombre){
            var confirmar = confirm(`¿Está seguro de eliminar la categoría ${nombre} de sistema?`);
            if(confirmar){
                let esto = this;
                axios.post(`${url}eliminarCategoria`, { id:id }).then(function(resp){
                    alert(resp.data);
                    axios.get(`${url}traerCategorias`).then(function (resp) {
                        esto.categoriasTodas = resp.data;
                        // console.log(resp.data);
                    });
                    // esto.categoriasTodas = esto.categorias;
                });
            }
        }
    },
    watch:{
        categorias(nuevo){
            this.categoriasTodas = nuevo;
            // alert(this.categoriasTodas.length);
        console.log(nuevo);
        
        },
        productosTodos_(nuevo){
            this.productosTodos = nuevo;
        }
    }
}
</script>

<style>

</style>
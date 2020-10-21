<template>
  <div>
    <b-modal id="modalProducto"
    :title="ElTituloModal"
    hide-header-close
    header-bg-variant="success"
    header-text-variant="light"
    cancel-variant="outline-danger"
    ok-variant="outline-primary"
    ok-title="Agregar Categoría"
    cancel-title="Cerrar"
    @ok="onSubmit"
    centered
    >
        <b-container class="mt-3">
            <b-form @reset="onReset" v-if="show">
                <div>
                  <!-- Styled -->
                  <b-form-file class="text-left border-bottom-0 mb-3"
                  id="Imagenes_Array"
                  accept="image/*"
                  multiple
                  :file-name-formatter="formatNames"
                  v-model="arrayImagenes"
                  @blur="cambioUnInput"
                  placeholder="Imágenes Producto"
                  drop-placeholder="Drop file here..."
                  ></b-form-file>
                </div>
                
                <b-form-group id="input-group-1">
                    <b-form-input
                    @keydown="cambioUnInput"
                    id="input-1"
                    v-model="form.nombre"
                    type="text"
                    required
                    placeholder="Nombre Producto"
                    name="nombre"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2">   
                    <b-form-input
                    @keydown="cambioUnInput"
                    id="input-2"
                    v-model="form.descripcion"
                    required
                    placeholder="Descripción Producto"
                    type="text"
                    name="descripcion"
                    ></b-form-input>
                </b-form-group>

                <b-form-group>
                    <b-form-select v-model="form.categoria" :options="options" @change="cambioUnInput"></b-form-select>
                </b-form-group>

                <b-form-group id="input-group-3">
                    <b-form-input
                    @keydown="cambioUnInput"
                    id="input-precio"
                    v-model="form.precio"
                    required
                    placeholder="Precio"
                    type="text"
                    name="precio"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-4">
                    <b-form-input
                    @keydown="cambioUnInput"
                    id="input-4"
                    v-model="form.cantidad"
                    required
                    placeholder="Cantidad"
                    type="number"
                    name="cantidad" 
                    ></b-form-input>
                </b-form-group>

                <!-- <select id="" class="form-control mt-0 border-top-0 rounded-top-0">
                    <option v-for="item in form.nombreImags" :key="item.id">
                    {{ item.name }}
                    </option>
                </select> -->
            </b-form>

            <Modal ref="elModal" :tituloModal="form.nombre" :textoModal="form.descripcion"></Modal>
            
        </b-container>






        <template v-slot:modal-footer>
            <div class="text-center mt-3">
                <!-- <b-button to="/productosTodos" variant="success" style="display: inline-block!important;" size="sm" class="mr-2">Volver</b-button> -->
                <b-button :disabled="activoBtnRegistrar" type="button" @click="vistaPreviaModal" class="mr-2" variant="outline-success" size="sm">Vista Previa</b-button>
                <b-button @click="onReset" class="mr-1" variant="outline-danger" size="sm">Limpiar</b-button>
                <!-- <b-button type="reset" class="mr-1" variant="outline-danger" size="sm">Limpiar</b-button> -->
                <b-button :disabled="activoBtnRegistrar" type="button" @click="onSubmit" class="ml-1" variant="outline-primary" size="sm">Guardar</b-button>
            </div>
        </template>
    </b-modal>
  </div>
</template>

<script>
import formData from 'form-data'
import Modal from './Modal'
import InputFotos from './InputFotos'
import axios from 'axios'
import { mapMutations, mapState } from 'vuex';
// let url = 'http://localhost:3000/';
let url = 'https://storeapp-back-end.herokuapp.com/';
var arregloImagenes = [];
export default {
    name:'NuevoProducto',
    components:{
        InputFotos, Modal
    },
    data() {  
      return {
        form: {
          nombre: '',
          descripcion: '',
          categoria: '',
          precio: '',
          cantidad: '',
          nombreImags: '',
          // dataImags: null,
          idProducto:''
        },
        arrayImagenes:[],
        show: true,
        activoVer:true,
        activoBtnRegistrar: false,
        options: [],
        RegistroEdicion:''
      }
    },
    computed:{
        ...mapState(['productosTodos_'])
    },
    props:{
        propsImg:{
            id:Number,
            src:String,
            thumbnail:String
        },
        arregloFinal: Array,
        producto: undefined,
        idProducto :'',
        ElTituloModal: String
    }, 
    methods: {
      ...mapMutations(['updateProductosTodos']),
      onSubmit(evt) {        


          var datos = this.form;
          axios.post(`${url}NuevoProducto`, datos, { headers: {'content-type':'application/json'} }).then(function (resp) {
            // console.log(this.form);
          alert(resp.data);  
              // this.onReset();
              // this.$bvModal.hide('modalProducto');

          var formulario = new formData();
          var vaina = document.querySelector('#Imagenes_Array').files;
          for (let t = 0; t < vaina.length; t++) {
            // console.log(vaina[t].name)
            formulario.append('imagen', vaina[t])
          }

          axios.post(`${url}ImagenesNuevoProducto`, formulario, { headers: {'content-type':'multipart/form-data'} }).then(function (resp) {
            this.$bvModal.hide('modalProducto');
          }.bind(this));
          axios.post(`${url}traerTodos`).then(function(res){
              // this.productosTodos_ = res.data;
              // console.log(res.data);
              this.updateProductosTodos(res.data);
              // console.log(this.productosTodos_);
          }.bind(this));
        }.bind(this));
      },
      onReset(evt) {
        this.form.nombre = ''
        this.form.descripcion = ''
        this.form.categoria = null
        this.form.precio = null
        this.form.cantidad = null
        this.form.nombreImags = null
        // this.form.dataImags = undefined
        this.activoBtnRegistrar = true
        this.arrayImagenes = []
        this.show = false
        this.$nextTick(() => {
            this.show = true
        })
      },
      cambiar(){
        let that = this;
        this.$watch(() => {
          if(that.arrayImagenes != that.$refs.inputFoto.file){
            // this.form.dataImags = this.$refs.inputFoto.file
            that.arrayImagenes = that.$refs.inputFoto.file

            that.form.dataImags = that.$refs.inputFoto.file;

            // console.log(this.arrayImagenes);

            const toBase64 = file => new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = error => reject(error);
            });
            // console.log(that.arrayImagenes.length);
             let eso = this;
            async function convert_Base64(){
              for(var t = 0; t < that.arrayImagenes.length; t++){
                that.form.dataImags[t] = (await toBase64(that.$refs.inputFoto.file[t]));
                arregloImagenes.push({ id:that.form.nombreImags[t], src:that.form.dataImags[t], thumbnail:that.form.dataImags[t] })
              }
            }
            convert_Base64();
          }
        });
      },
      vistaPreviaModal(){
        console.log(this.$refs.elModal.arrayImagenes);
        if((this.form.dataImags != undefined) && (this.form.dataImags != null)){
          this.$refs.elModal.arrayImagenes = this.form.dataImags;
          this.$bvModal.show("modal_1");
          console.log(this.$refs.elModal.arrayImagenes);
        }
      },
      formatNames(files) {
          // console.log(files);
        if (files.length === 1) {
          return files[0].name
        } else {
          return `${files.length} Imágenes Seleccionadas`;
          alert(`${files.length} Imágenes Seleccionadas`);
        }
      },
      habilitarBoton(){
        var archivos = document.querySelector("#Imagenes_Array").files;
        if(archivos.length > 0){
          this.activoVer = false;
        }
        else{
          this.activoVer = true;
        }
      },
      cambioUnInput(){
        if(this.form.nombre != '' && this.form.descripcion != '' && this.form.precio != '' && this.form.categoria != null && this.form.cantidad != '' ){
            this.activoBtnRegistrar = false;
        }
        else{
            this.activoBtnRegistrar = true;
        }
      }
    },
    watch:{
      arrayImagenes: function (nuevoArray, viejoArray) {

        // this.form.dataImags = nuevoArray;
        var arregloNombres = [];
        var archivos = document.querySelector('#Imagenes_Array').files;

        for(var t = 0; t < archivos.length; t++){
          // arregloNombres.push({'name':archivos[t].name });
          arregloNombres.push(archivos[t].name.replace(/ /g,'_'));
        }

        this.form.nombreImags = arregloNombres;
        // if(nuevoArray.length === 0){ return; }

        // if(nuevoArray[0].id === 0){
        //   this.form.dataImags = nuevoArray;
        //   this.arrayImagenes = [];
        // }
        // else{
        //   var unArreglo = [];
        //   var conversion = undefined;
        //   var arregloNombres = [];
        //   const toBase64 = file => new Promise((resolve, reject) => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = () => resolve(reader.result);
        //     reader.onerror = error => reject(error);
        //   });
              
        //   let that = this;
        //   var archivos = document.querySelector('#Imagenes_Array').files;

        //   async function convert_Base64(){
        //     for(var t = 0; t < archivos.length; t++){
        //       conversion = (await toBase64(archivos[t]));
        //       unArreglo.push({ 'id':t, 'src':conversion,  'thumbnail':conversion });
        //       arregloNombres.push({ 'id':t, 'name':archivos[t].name });
        //     }
        //   }
        //   convert_Base64();
        //   this.form.nombreImags = arregloNombres;
        //   this.form.dataImags = unArreglo;
        //   console.log(this.form.nombre != '');
        //   console.log(this.form.descripcion != '');
        //   console.log(this.form.precio != '');
        //   console.log(this.form.categoria != null);
        //   console.log(this.form.cantidad != '');
        //   console.log(this.form.nombreImags.length > 0);
        //   console.log(this.form.nombreImags);
        //   console.log(nuevoArray.length > 0);
          
          // if(this.form.nombre != '' && this.form.descripcion != '' && this.form.precio != '' && this.form.categoria != null && this.form.cantidad != '' ){
          //   this.activoBtnRegistrar = false;
          // }
          // else{
          //   this.activoBtnRegistrar = true;
          // }
        // }
      },
        producto(nuevo){
            this.form.nombre = nuevo.nombre;
            this.form.descripcion = nuevo.descripcion;
            this.form.categoria = nuevo.categoria;
            this.form.precio = nuevo.precio;
            this.form.cantidad = nuevo.cantidad;
            this.form.nombreImags = nuevo.nombreImags;
            this.form.dataImags = nuevo.dataImagenes;
            this.form.idProducto = nuevo._id;
            this.arrayImagenes = nuevo.dataImagenes;
            this.activoBtnRegistrar = false;
            this.formatNames(nuevo.dataImagenes);
        }
    },
    mounted(){
      this.options.push({ 'value':null, 'text':'Categoría'});
      axios.get(`${url}traerCategorias`).then(function(resp){
        // console.log(resp.data);
        resp.data.map(function(obj){
          this.options.push({ 'value':obj._id, 'text':obj.nombre })
        }.bind(this));
      }.bind(this));
    }
}
</script>

<style>
  .container{
    margin-top: 0px!important;
  }
</style>
<template>
  <b-container>
      <b-row>
          <b-col cols="1" lg="4" md="3" sm="2"></b-col>
          <b-col cols="10" lg="4" md="6" sm="8">

            <b-form @reset="onReset" v-if="show" action="http://localhost:3000/NuevoProducto">

              <h3>Nuevo Producto</h3>
  
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

              <div>
                <!-- Styled -->
                <b-form-file class="text-left border-bottom-0"
                  id="Imagenes_Array"
                  accept="image/*"
                  multiple
                  :file-name-formatter="formatNames"
                  v-model="arrayImagenes"
                  @blur="cambioUnInput"
                  placeholder="Selección imágenes"
                  drop-placeholder="Drop file here..."
                ></b-form-file>
              </div>

              <select id="" class="form-control mt-0 border-top-0 rounded-top-0">
                <option v-for="item in form.nombreImags" :key="item.id">
                  {{ item.name }}
                </option>
              </select>
              
              <div class="text-center mt-3">
                <b-button to="/productosTodos" variant="success" style="display: inline-block!important;" size="sm" class="mr-2">Volver</b-button>
                <b-button :disabled="activoBtnRegistrar" type="button" @click="vistaPreviaModal" class="mr-2" variant="outline-success" size="sm">Vista Previa</b-button>
                <b-button @click="onReset" class="mr-1" variant="outline-danger" hidden size="sm">Limpiar</b-button>
                <b-button type="reset" class="mr-1" variant="outline-danger" size="sm">Limpiar</b-button>
                <b-button :disabled="activoBtnRegistrar" type="button" @click="onSubmit" class="ml-1" variant="outline-primary" size="sm">Registrar</b-button>
              </div>
            </b-form>
          </b-col>
          <b-col cols="1" lg="4" md="3" sm="2">
            <img src="" alt="">
          </b-col>
    </b-row>

    <Modal ref="elModal" :tituloModal="form.nombre" :textoModal="form.descripcion"></Modal>
    
  </b-container>
</template>

<script>
import Modal from './Modal'
import InputFotos from './InputFotos'
import axios from 'axios' 
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
          dataImags: null
        },
        arrayImagenes:[],
        show: true,
        activoVer:true,
        activoBtnRegistrar: true,
        options: []
      }
    },
    props:{
      propsImg:{
        id:Number,
        src:String,
        thumbnail:String
      },
      arregloFinal: Array
    }, 
    methods: {
      onSubmit(evt) {
        var datos = this.form;
        const config = {
          headers: {'content-type':'application/json'}
        }
        axios.post(`${url}NuevoProducto`, datos, config).then(function (resp) {
          console.log(datos);
            alert(resp.data);  
            this.onReset();
        }.bind(this));
      },
      onReset(evt) { 
        // evt.preventDefault();
        this.form.nombre = ''
        this.form.descripcion = ''
        this.form.categoria = null
        this.form.precio = null
        this.form.cantidad = null
        this.form.nombreImags = null
        this.form.dataImags = undefined
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

            console.log(this.arrayImagenes);
            // this.form.nombreImags = this.$refs.inputFoto.file.map(()=>{
            //   texto = this.$refs.inputFoto.file[index].name;
            //   // this.propsImg.id = this.$refs.inputFoto.file[index].name;
            //   index += 1; 
            //   return texto;
            // });

            const toBase64 = file => new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => resolve(reader.result);
              reader.onerror = error => reject(error);
            });
            console.log(that.arrayImagenes.length);
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
        if (files.length === 1) {
          return files[0].name
        } else {
          return `${files.length} Imágenes Seleccionadas`
        }
      },
      habilitarBoton(){
        var archivos = document.querySelector("#Imagenes_Array").files;
        // alert(archivos.length);
        if(archivos.length > 0){
          this.activoVer = false;
        }
        else{
          this.activoVer = true;
        }
      },
      cambioUnInput(){
        //  alert(this.arrayImagenes.length);
        if(this.form.nombre != '' && this.form.descripcion != '' && this.form.precio != '' && this.form.categoria != null && this.form.cantidad != '' && this.arrayImagenes.length > 0){
          this.activoBtnRegistrar = false;
        }
        else{
          this.activoBtnRegistrar = true;
        }
      }
    },
    watch:{
      arrayImagenes: function (nuevoArray, viejoArray) {
        
        if(nuevoArray.length === 0){ return; }

        if(nuevoArray[0].id === 0){
          this.form.dataImags = nuevoArray;
          this.arrayImagenes = [];
        }
        else{
          var unArreglo = [];
          var conversion = undefined;
          var arregloNombres = [];
          const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          });
              
          let that = this;
          var archivos = document.querySelector('#Imagenes_Array').files;

          async function convert_Base64(){
            for(var t = 0; t < archivos.length; t++){
              conversion = (await toBase64(archivos[t]));
              unArreglo.push({ 'id':t, 'src':conversion,  'thumbnail':conversion });
              arregloNombres.push({ 'id':t, 'name':archivos[t].name });
            }
          }
          convert_Base64();
          this.form.nombreImags = arregloNombres;
          this.form.dataImags = unArreglo;
          console.log(this.form.nombre != '');
          console.log(this.form.descripcion != '');
          console.log(this.form.precio != '');
          console.log(this.form.categoria != null);
          console.log(this.form.cantidad != '');
          console.log(this.form.nombreImags.length > 0);
          console.log(this.form.nombreImags);
          console.log(nuevoArray.length > 0);
          // alert(nuevoArray.length);
          if(this.form.nombre != '' && this.form.descripcion != '' && this.form.precio != '' && this.form.categoria != null && this.form.cantidad != '' && nuevoArray.length > 0){
            this.activoBtnRegistrar = false;
          }
          else{
            this.activoBtnRegistrar = true;
          }
        }
      },

    },
    mounted(){
      document.getElementById('input-precio').numeric;
      // console.log(this.form);
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

</style>


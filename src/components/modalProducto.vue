<template>
  <div>
    <b-modal id="modalProducto"
    :title="ElTituloModal"
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
                  <b-form-file
                    class="text-left border-bottom-0 mb-3"
                    id="Imagenes_Array"
                    accept="image/*"
                    multiple
                    :file-name-formatter="formatNames"
                    v-model="arrayImagenes"
                    @blur="cambioUnInput"
                    placeholder="Imágenes Producto"
                    drop-placeholder="Drop file here..."
                    size="sm"
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
                    size="sm"
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
                    size="sm"
                  ></b-form-input>
                </b-form-group>

                <b-form-group>
                  <b-form-select
                    v-model="form.categoria"
                    :options="options"
                    @change="cambioUnInput"
                    size="sm"
                  ></b-form-select>
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
                    size="sm"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3">
                  <b-form-input
                    @change="cambioInputPrecio"
                    id="input-precio"
                    v-model="form.precio"
                    required
                    placeholder="Precio"
                    type="number"
                    name="precio"
                    size="sm"
                  ></b-form-input>
                </b-form-group>



                
                <b-card class="mb-3 pb-2 pl-2">
                   <b-form-group>
                    <b-form-checkbox :disabled="descuentoHabilitado" v-model="form.aplicaDescuento" @change="cambioAplicaDescuento" name="check-button" switch size="md" class=" mt-1">
                      Aplica Descuento
                    </b-form-checkbox>
                   </b-form-group>                  
                  <b-container :hidden="!form.aplicaDescuento" class="pl-0">
                    <b-row>
                      <b-col>
                        <b-form-group id="input-group-5">
                          <label class="mb-0 lbl"><i><b>Desde</b></i></label>
                          <b-form-input
                            class="p-1"
                            id="input-desde inline-form"
                            v-model="form.descuento.desde"
                            type="date"
                            style="display:inline-block!important;"
                            name="desde"
                            size="sm"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>

                      <b-col>
                        <b-form-group id="input-group-6">
                          <label class="mb-0 lbl"><i><b>Hasta</b></i></label>
                          <b-form-input
                            class="p-1"
                            id="input-hasta"
                            v-model="form.descuento.hasta"
                            type="date"
                            style="display:inline-block!important;"
                            name="hasta"
                            size="sm"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>

                      <b-card class="pl-2 pr-2">
                          <div class="w-50" id="parte1" style="display:inline-block;">
                            <b-form-group>
                            <b-form-checkbox v-model="form.descuento.tipoPorcentaje" @change="cambioTipoDescuento" name="check-button" switch size="md" style="display:inline-block; width:130px;">
                              Porcentaje
                            </b-form-checkbox>
                            

                            <b-form-checkbox v-model="form.descuento.tipoMonto" @change="cambioTipoDescuento" name="check-button" switch size="md" style="display:inline-block;">
                              Monto
                            </b-form-checkbox></b-form-group>
                          </div>
                          <div class="w-50" id="parte2" style="display:inline-block;">
                                <b-form-group :hidden="form.descuento.tipoMonto">
                                  <b-input-group size="sm" prepend="%" class="mb-2 mr-sm-2 mb-sm-0">
                                    <b-form-input
                                      @keyup="cambioDescuentoPorc"
                                      type="number"
                                      :min="0"
                                      :max="100"
                                      id="inline-form-input-porcentaje"
                                      placeholder="Porcentaje"
                                      v-model="form.descuento.porcentajeDescuento"
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form-group>
                                <b-form-group :hidden="form.descuento.tipoPorcentaje">
                                  <b-input-group size="sm" prepend="CLP" class="mb-2 mr-sm-2 mb-sm-0">
                                    <b-form-input
                                      @keyup="cambioDescuentoMonto"
                                      type="number"
                                      :min="0"
                                      :max="form.precio"
                                      id="inline-form-input-monto"
                                      placeholder="Monto"
                                      v-model="form.descuento.montoDescuento"
                                    ></b-form-input>
                                  </b-input-group>
                                </b-form-group>
                            
                          </div>
                      </b-card>
                  </b-container>
                </b-card>
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
        },
        arrayImagenes:[],
        show: true,
        activoVer:true,
        activoBtnRegistrar: false,
        descuentoHabilitado:true,
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

        //#region HABILITAR EL BOTON DE DESCUENTO EN CASO DE HABER INGRESADO UN PRECIO, SE NO HABERLO
        if(this.form.precio != ''){
          this.descuentoHabilitado = false; //DISABLED="FALSE" --> BTN HABILITADO
          this.form.aplicaDescuento = false;
        }
        else{
          this.descuentoHabilitado = true; //DISABLED="TRUE" --> BTN DESHABILITADO
        }
        //#endregion

        //#region VER SI HAY DESCUENTO ACTIVADO, Y EN CASO DE ESTAR ACTIVADO VER SI TODOS SUS CAMPOS SE LLENARON
        if(this.descuentoHabilitado === false){
          if(this.form.descuento.desde != '' && this.form.descuento.hasta != '' && this.form.descuento.montoDescuento != ''){
            this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
          }
          else{
            this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
          }
        }
        //#endregion
      },
      cambioInputPrecio(){
        if(this.form.nombre != '' && this.form.descripcion != '' && this.form.precio != '' && this.form.categoria != null && this.form.cantidad != '' ){
            this.activoBtnRegistrar = false;
        }
        else{
            this.activoBtnRegistrar = true;
        }

        //#region HABILITAR EL BOTON DE DESCUENTO EN CASO DE HABER INGRESADO UN PRECIO, SE NO HABERLO
        if(this.form.precio != ''){
          this.descuentoHabilitado = false; //DISABLED="FALSE" --> BTN HABILITADO
          this.form.aplicaDescuento = false;
        }
        else{
          this.descuentoHabilitado = true; //DISABLED="TRUE" --> BTN DESHABILITADO
          // this.form.aplicaDescuento = false;
          this.cambioAplicaDescuento()
        }
        //#endregion

        //#region VER SI HAY DESCUENTO ACTIVADO, Y EN CASO DE ESTAR ACTIVADO VER SI TODOS SUS CAMPOS SE LLENARON
        if(this.descuentoHabilitado === false){
          if(this.form.descuento.desde != '' && this.form.descuento.hasta != '' && this.form.descuento.montoDescuento != ''){
            this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
          }
          else{
            this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
          }
        }
        //#endregion
      },
      cambioTipoDescuento(){
        this.form.descuento.tipoPorcentaje = !this.form.descuento.tipoPorcentaje;
        this.form.descuento.tipoMonto = !this.form.descuento.tipoMonto;
        this.form.descuento.montoDescuento = '';
        this.form.descuento.porcentajeDescuento = '';
      },
      cambioDescuentoPorc(e){
        if(parseFloat(this.form.descuento.porcentajeDescuento) > parseFloat(e.target.max)){
          alert(`El porcentaje de descuento no puede exceder el ${e.target.max}%`);
          this.form.descuento.porcentajeDescuento = '';
        }
        else{
          this.form.descuento.montoDescuento = (this.form.precio * (this.form.descuento.porcentajeDescuento / 100)).toFixed(1)
          console.log(this.form)
        }
      },
      cambioDescuentoMonto(e){
        if(parseFloat(this.form.descuento.montoDescuento) > parseFloat(e.target.max)){
          alert(`El monto de descuento no puede exceder los ${e.target.max} CLP`);
          this.form.descuento.montoDescuento = '';
        }
        else{
          this.form.descuento.porcentajeDescuento = ((this.form.precio - (this.form.precio - this.form.descuento.montoDescuento)) / this.form.precio) * 100
          console.log(this.form)
        }
      },
      cambioAplicaDescuento(){
        this.form.aplicaDescuento = !this.form.aplicaDescuento;
        if(this.form.aplicaDescuento === false){
          this.form.descuento.desde = ''
          this.form.descuento.hasta = ''
          this.form.descuento.tipoPorcentaje = true
          this.form.descuento.tipoMonto = false
          this.form.descuento.montoDescuento = ''
          this.form.descuento.porcentajeDescuento = ''
        }
      }
    },
    watch:{
      arrayImagenes: function (nuevoArray, viejoArray) {
        var arregloNombres = [];
        var archivos = document.querySelector('#Imagenes_Array').files;

        for(var t = 0; t < archivos.length; t++){
          arregloNombres.push(archivos[t].name.replace(/ /g,'_'));
        }

        this.form.nombreImags = arregloNombres;
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
  .custom-control-label, .lbl{
    font-size: 14px!important;
  }
  .input-group-prepend,.input-group-text{
    width: 41px!important;
  }
  .input-group-prepend{
    text-align: center;
  }
  #parte1 > fieldset.form-group, #parte2 > div > fieldset.form-group{
    margin-bottom: 0px;
  }
</style>
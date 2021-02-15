<template>
  <div>
    <b-modal id="modalProducto"
    :title="ElTituloModal"
    header-bg-variant="dark"
    header-text-variant="light"
    cancel-variant="outline-danger"
    ok-variant="outline-primary"
    ok-title="Agregar Categoría"
    cancel-title="Cerrar"
    @ok="onSubmit"
    centered
    >
        <div class="mt-3 pl-2 pr-2">
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
                    autocomplete="off"
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
                    autocomplete="off"
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
                    autocomplete="off"
                    v-model="form.precio"
                    required
                    placeholder="Precio"
                    type="number"
                    name="precio"
                    size="sm"
                  ></b-form-input>
                </b-form-group>

                <b-card class="mb-3 pb-2 pl-2">
                   <b-form-group class="mb-2">
                    <b-form-checkbox :disabled="descuentoHabilitado" v-model="form.aplicaDescuento" @change="cambioAplicaDescuento" name="check-button" switch size="lg" class=" mt-1">
                      Aplica Descuento
                    </b-form-checkbox>
                   </b-form-group>                  
                  <div :hidden="!form.aplicaDescuento" class="pr-2">
                    <b-card class="pl-2 pr-2 mb-2">
                      <div class="w-50 pr-1" style="display:inline-block;">
                        <b-form-group id="input-group-5" class="mb-0">
                          <label class="mb-0 lbl"><i>Fecha Inicio</i></label>
                          <b-form-datepicker label-no-date-selected="Fecha Inicio" size="sm" name="desde" id="input-desde" v-model="form.descuento.desde" locale="es"></b-form-datepicker>
                        </b-form-group>
                      </div>

                      <div class="w-50 pl-1" style="display:inline-block;">
                        <b-form-group id="input-group-6" class="mb-0">
                          <label class="mb-0 lbl"><i>Fecha Fin</i></label>
                          <b-form-datepicker label-no-date-selected="Fecha Fin" size="sm" name="hasta" id="input-hasta" v-model="form.descuento.hasta" locale="es"></b-form-datepicker>
                        </b-form-group>
                      </div>
                    </b-card>

                      <b-card class="pl-2 pr-2">
                          <div class="w-50" id="parte1" style="display:inline-block;">
                            <b-form-group class="mb-0">
                              <b-form-checkbox
                              v-model="form.descuento.tipoPorcentaje"
                              @change="cambioTipoDescuento"
                              name="check-button"
                              switch
                              size="lg"
                              style="display:inline-block; width:130px;"
                              >
                                Porcentaje
                              </b-form-checkbox>
                              
                              <b-form-checkbox
                              v-model="form.descuento.tipoMonto"
                              @change="cambioTipoDescuento"
                              name="check-button"
                              switch
                              size="lg"
                              style="display:inline-block;">
                                Monto
                              </b-form-checkbox>
                            </b-form-group>
                          </div>
                          <div class="w-50" id="parte2" style="display:inline-block;">
                                <b-form-group :hidden="form.descuento.tipoMonto" class="mb-0">
                                  <b-input-group size="sm" prepend="%" class="mb-2">
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
                                <b-form-group :hidden="form.descuento.tipoPorcentaje" class="mb-0">
                                  <b-input-group size="sm" prepend="CLP" class="mb-2">
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
                  </div>
                </b-card>
            </b-form>

            <Modal ref="elModal" :tituloModal="form.nombre" :textoModal="form.descripcion"></Modal>
            
        </div>

        <template v-slot:modal-footer>
            <div class="text-center mt-3">
                <b-button :disabled="activoBtnRegistrar" type="button" @click="vistaPreviaModal" class="mr-2" variant="outline-success" size="sm">Vista Previa</b-button>
                <b-button @click="onReset" class="mr-1" variant="outline-danger" size="sm">Limpiar</b-button>
                <b-button :disabled="activoBtnRegistrar" type="button" @click="onSubmit" class="ml-1" variant="outline-primary" size="sm">Guardar</b-button>
            </div>
        </template>
    </b-modal>
  </div>
</template>

<script>
import firebase from 'firebase';
import formData from 'form-data'
import Modal from './Modal'
import InputFotos from './InputFotos'
import axios from 'axios'
import { mapMutations, mapState } from 'vuex';

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

// let url = 'http://localhost:3000/';
var urlImagen = 'https://raw.githubusercontent.com/mendezfreitez/StoreApp_BackEnd/master/imagenes'
// let url = 'https://storeapp-back-end.herokuapp.com/';
let url = 'https://cosmic-envoy-301012.rj.r.appspot.com/';
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
        arrayImagenes_:[],
        show: true,
        activoVer:true,
        activoBtnRegistrar: true,
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
        // idProducto :'',
        ElTituloModal: String
    }, 
    methods: {
      ...mapMutations(['updateProductosTodos']),
      onSubmit(evt) {
        console.log(this.form)
        return
        if (this.form.idProducto === undefined) { this.form.idProducto = '' }

        axios.post(`${url}NuevoProducto`, this.form, { headers: {'content-type':'application/json'} }).then(function (resp) {
          alert(resp.data);
          axios.post(`${url}traerTodos`,{ id:'' }).then(function(res){
            console.log(res.data)
            this.guardarImagenes(this.arrayImagenes_, this.arrayImagenes, res.data[res.data.length - 1]._id)
            this.updateProductosTodos(res.data)
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
        this.activoBtnRegistrar = true
        this.arrayImagenes = []
        this.show = false
        this.form.descuento.desde = ''
        this.form.descuento.hasta = ''
        this.form.descuento.tipoPorcentaje = true
        this.form.descuento.tipoMonto = false
        this.form.descuento.montoDescuento = ''
        this.form.descuento.porcentajeDescuento = ''
        this.form.aplicaDescuento = false
        this.descuentoHabilitado = true
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
        console.log(this.arrayImagenes_)
        this.$refs.elModal.arrayImagenes = this.arrayImagenes_
        this.$bvModal.show("modal_1");
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


          if(this.form.aplicaDescuento === true){
            if(this.form.descuento.desde != '' && this.form.descuento.hasta != '' && this.form.descuento.montoDescuento != ''){
              this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
            }
            else{
              this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
            }
          }
          else{
            this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
          }


        }
        else{
            this.activoBtnRegistrar = true;
        }

        //#region HABILITAR EL BOTON DE DESCUENTO EN CASO DE HABER INGRESADO UN PRECIO, SE NO HABERLO
        if(this.form.precio != ''){
          this.descuentoHabilitado = false; //DISABLED="FALSE" --> BTN HABILITADO
          // this.form.aplicaDescuento = false;
        }
        else{
          this.descuentoHabilitado = true; //DISABLED="TRUE" --> BTN DESHABILITADO
          this.form.descuento.tipoPorcentaje = true;
          this.form.descuento.tipoMonto = false;
          this.form.descuento.desde = '';
          this.form.descuento.hasta = '';
          this.form.descuento.montoDescuento = '';
          this.form.descuento.porcentajeDescuento = '';
          this.form.aplicaDescuento = false;
        }
        //#endregion

        //#region VER SI HAY DESCUENTO ACTIVADO, Y EN CASO DE ESTAR ACTIVADO VER SI TODOS SUS CAMPOS SE LLENARON


        // if(this.form.precio != ''){
        //   if(this.form.aplicaDescuento === true){
        //     if(this.form.descuento.desde != '' && this.form.descuento.hasta != '' && this.form.descuento.montoDescuento != ''){
        //       this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
        //     }
        //     else{
        //       this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
        //     }
        //   }
        //   else{
        //     this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
        //   }          
        // }
        // else{
        //   this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
        // }


        //#endregion
      },
      cambioInputPrecio(){
        if(this.form.nombre != '' && this.form.descripcion != '' && this.form.precio != '' && this.form.categoria != null && this.form.cantidad != '' ){
            this.activoBtnRegistrar = false;


          if(this.form.aplicaDescuento === true){
            if(this.form.descuento.desde != '' && this.form.descuento.hasta != '' && this.form.descuento.montoDescuento != ''){
              this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
            }
            else{
              this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
            }
          }
          else{
            this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
          }



        }
        else{
            this.activoBtnRegistrar = true;
        }

        //#region HABILITAR EL BOTON DE DESCUENTO EN CASO DE HABER INGRESADO UN PRECIO, SE NO HABERLO
        if(this.form.precio != ''){
          this.descuentoHabilitado = false; //DISABLED="FALSE" --> BTN HABILITADO
          // this.form.aplicaDescuento = false;
        }
        else{
          this.descuentoHabilitado = true; //DISABLED="TRUE" --> BTN DESHABILITADO
          this.form.descuento.tipoPorcentaje = true;
          this.form.descuento.tipoMonto = false;
          this.form.descuento.desde = '';
          this.form.descuento.hasta = '';
          this.form.descuento.montoDescuento = '';
          this.form.descuento.porcentajeDescuento = '';
          this.form.aplicaDescuento = false;
        }
        //#endregion

        //#region VER SI HAY DESCUENTO ACTIVADO, Y EN CASO DE ESTAR ACTIVADO VER SI TODOS SUS CAMPOS SE LLENARON


        // if(this.form.precio != ''){
        //   if(this.form.aplicaDescuento === true){
        //     if(this.form.descuento.desde != '' && this.form.descuento.hasta != '' && this.form.descuento.montoDescuento != ''){
        //       this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
        //     }
        //     else{
        //       this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
        //     }
        //   }
        //   else{
        //     this.activoBtnRegistrar = false; //DISABLED="FALSE" --> BTN HABILITADO
        //   }          
        // }
        // else{
        //   this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
        // }


        //#endregion
      },
      cambioTipoDescuento(){
        this.form.descuento.tipoPorcentaje = !this.form.descuento.tipoPorcentaje;
        this.form.descuento.tipoMonto = !this.form.descuento.tipoMonto;
        this.form.descuento.montoDescuento = '';
        this.form.descuento.porcentajeDescuento = '';
        this.activoBtnRegistrar = true; //DISABLED="FALSE" --> BTN DESHABILITADO
      },
      cambioDescuentoPorc(e){
        if(parseFloat(this.form.descuento.porcentajeDescuento) > parseFloat(e.target.max)){
          alert(`El porcentaje de descuento no puede exceder el ${e.target.max}%`);
          this.form.descuento.porcentajeDescuento = '';
        }
        else{
          this.form.descuento.montoDescuento = (this.form.precio * (this.form.descuento.porcentajeDescuento / 100)).toFixed(1)
          // console.log(this.form)
        }

        
        // console.log('desde:  ' + this.form.descuento.desde)
        // console.log('hasta:  ' + this.form.descuento.hasta)
        // console.log('monto:  ' + this.form.descuento.montoDescuento)
        // console.log('porce:  ' + this.form.descuento.porcentajeDescuento)


        if(this.form.nombre != '' && this.form.descripcion != '' && this.form.precio != '' && this.form.categoria != null && this.form.cantidad != '' && this.form.descuento.porcentajeDescuento != '' ){
          if(this.form.descuento.desde === "" || this.form.descuento.hasta === ""){
            this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
          }
          else{
            this.activoBtnRegistrar = false; //DISABLED="TRUE" --> BTN HABILITADO
          }  
        }
        else{
            this.activoBtnRegistrar = true;
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
        // console.log('desde:  ' + this.form.descuento.desde)
        // console.log('hasta:  ' + this.form.descuento.hasta)
        // console.log('monto:  ' + this.form.descuento.montoDescuento)
        // console.log('porce:  ' + this.form.descuento.porcentajeDescuento)


        if(this.form.nombre != '' && this.form.descripcion != '' && this.form.precio != '' && this.form.categoria != null && this.form.cantidad != '' && this.form.descuento.montoDescuento != ''){
          if(this.form.descuento.desde === "" || this.form.descuento.hasta === ""){
            this.activoBtnRegistrar = true; //DISABLED="TRUE" --> BTN DESHABILITADO
          }
          else{
            this.activoBtnRegistrar = false; //DISABLED="TRUE" --> BTN HABILITADO
          }  
        }
        else{
            this.activoBtnRegistrar = true;
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
          this.cambioInputPrecio()
        }
        else{
          this.activoBtnRegistrar = true; //DISABLED="FALSE" --> BTN DESHABILITADO
        }
      },
      guardarImagenes(imagenes, archivos, nombreArchivo){
        for(var t = 0; t < imagenes.length; t++){
          const storageRef = firebase.storage().ref(`/productos/${nombreArchivo.replace(/ /g,'_')}/${imagenes[t].id}`)
          const task = storageRef.put(archivos[t])
          task.on('state_changed',
          function(snapshot){
            //NADA AUN
          }, 
          function(error){
              console.log(error.message)
          },
          function(){
            //NADA AUN
            task.snapshot.ref.getDownloadURL().then(function(url){
              console.log(url)
            })
          })
        }
      }
    },
    watch:{
      arrayImagenes: function (nv, ov) {
        if(nv.length > 0){
          var arregloImagenes = []
          var convertido;
          const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
          });

          async function convert_Base64(){
            for(var t = 0; t < nv.length; t++){
              convertido = (await toBase64(nv[t]));
              arregloImagenes.push({ id:nv[t].name, src:convertido, thumbnail:convertido })
            }
          }
          
          convert_Base64()
          this.arrayImagenes_ = arregloImagenes  
          // console.log(arregloImagenes)
        }
      },
      producto(nuevo){
          this.descuentoHabilitado = false;
          this.form.nombre = nuevo.nombre;
          this.form.descripcion = nuevo.descripcion;
          this.form.categoria = nuevo.categoria;
          this.form.precio = nuevo.precio;
          this.form.cantidad = nuevo.cantidad;
          this.form.nombreImags = nuevo.nombreImagenes;
          this.form.idProducto = nuevo._id;
          if(nuevo.aplicaDescuento){
            this.form.aplicaDescuento = nuevo.aplicaDescuento;
            this.form.descuento.desde = nuevo.descuento.desde;
            this.form.descuento.hasta = nuevo.descuento.hasta;
            this.form.descuento.tipoPorcentaje = nuevo.descuento.tipoPorcentaje;
            this.form.descuento.tipoMonto = nuevo.descuento.tipoMonto;
            this.form.descuento.montoDescuento = nuevo.descuento.montoDescuento;
            this.form.descuento.porcentajeDescuento = nuevo.descuento.porcentajeDescuento;
          }
          else{
            this.form.aplicaDescuento = false;
            this.form.descuento.desde = ''
            this.form.descuento.hasta = ''
            this.form.descuento.tipoPorcentaje = true
            this.form.descuento.tipoMonto = false
            this.form.descuento.montoDescuento = ''
            this.form.descuento.porcentajeDescuento = ''
          }
          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////
          this.arrayImagenes_ = []
          this.form.nombreImags.map(function(e){
            this.arrayImagenes_.push({ id:e, src:`${urlImagen}/${this.form.idProducto}/${e}`, thumbnail:`${urlImagen}/${this.form.idProducto}/${e}` })
          }.bind(this))
          // this.arrayImagenes_ = nuevo.dataImagenes;
          ////////////////////////////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////////////////////////////
          if(this.form.nombre != ''){
            this.activoBtnRegistrar = false;
          }
      }
    },
    mounted(){
      this.options.push({ 'value':null, 'text':'Categoría'})
      axios.get(`${url}traerCategorias`).then(function(resp){
        resp.data.map(function(obj){
          this.options.push({ 'value':obj._id, 'text':obj.nombre })
        }.bind(this))
      }.bind(this))



    var storageRef = firebase.storage().ref(`/productos/60272887d2ae650017b8fc38/`)

    // Now we get the references of these images
    storageRef.listAll().then(function(result) {
      result.items.forEach(function(imageRef) {
        // And finally display them
        console.log(result.items)
        displayImage(imageRef);
      });
    }).catch(function(error) {
      // Handle any errors
    });

    function displayImage(imageRef) {
      imageRef.getDownloadURL().then(function(url) {
        // TODO: Display the image on the UI
        console.log(url)
      }).catch(function(error) {
        // Handle any errors
      })
    }

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
  .b-custom-control-lg > label.custom-control-label{
    padding-top: 4px!important;
  }
  #modalProducto___BV_modal_content_{
    border-width: 0px!important;
  }
  #modalProducto___BV_modal_title_{
    padding-top: 5px!important;
  }
</style>
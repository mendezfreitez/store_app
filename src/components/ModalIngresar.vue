<template>
  <div>
    <ModalRegistro></ModalRegistro>
    <ModalMensaje :titulo="titulo" :texto="texto"></ModalMensaje>
    <b-modal id="modal_ingreso"
    size="sm"
    style="border: 0px solid rgba(0, 0, 0, 0.2)!important;"
    title="Ingreso Usuario"
    header-close-variant="light"
    header-text-variant="light"
    cancel-variant="transparent"
    hide-footer
    cancel-title="Cerrar"
    centered>
      <div>
        <div class="pt-1 pl-3 pr-3 pb-1">
          <b-form @submit="onSubmit" class="mt-4 mb-4">
            <b-form-group id="input-group-1">
              <p :hidden="mensajeUsuario" class="mb-0" style="font-size:12px!important; color:red">
                <b>
                  {{texto}}
                </b>
              </p>
              <input
                class="form-control"
                id="input-1"
                v-model="form.usuario"
                type="text" 
                required
                placeholder="Usuario"
              >
            </b-form-group>

            <b-form-group id="input-group-2">
              <p :hidden="mensajeClave" class="mb-0" style="font-size:12px!important; color:red">
                <b>
                  {{texto}}
                </b>
              </p>
              <input
                class="form-control"
                id="input-2"
                v-model="form.contrasenia"
                required
                placeholder="Contraseña"
                type="password"
              >
            </b-form-group>

            <div class="text-right mb-3">
              <b-button style="padding-left:12px!important; padding-right:12px!important;" size="sm" type="reset" class="mr-2" variant="outline-danger">Limpiar</b-button>
              <b-button style="padding-left:12px!important; padding-right:12px!important;" size="sm" type="submit" class="ml-2" variant="outline-dark">Ingresar</b-button>
            </div>

            <div class="text-right">
              <p style="font-size:14px!important; display:inline-block!important;margin-bottom:0px!important;margin-top:3px!important;">Aún no estás registrado?</p> <b-button variant="dark" size="sm" style="padding-top: 2px; padding-bottom: 3px; margin-left: 0px;" class="ml-2 mb-1 pl-3 pr-3" @click="modalRegistro">Regístrate</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </b-modal>
  </div> 
</template>

<script>
import axios from 'axios'
// let url = 'http://localhost:3000/';
let url = 'https://storeapp-back-end.herokuapp.com/';
import ModalRegistro from './ModalRegistroUsuario'
import ModalMensaje from '../components/Categorias/modalMensaje'
import { mapMutations, mapState } from 'vuex';
export default {
  data(){
    return{
      mensajeClave:true,
      mensajeUsuario:true,
      titulo:'',
      texto:'',
      form:{
        usuario:'',
        contrasenia:''
      }
    }
  },
  components:{
    ModalRegistro, ModalMensaje
  },
  props:{
        tituloModal:String,
        textoModal:String,
        precio:Number
  },
  computed:{
    ...mapState(['ProductosCarro'])
  },
  methods:{
    ...mapMutations(['modificarCarro','modifPuraCantidad', 'mutarVisible']),
    Reset(evt) {
      this.form.usuario = ''
      this.form.contrasenia = ''
      this.texto = ''
      this.mensajeClave = true
      this.mensajeUsuario = true
    },
    cerrarmodal(){
      this.$bvModal.hide('modal_1');
    },
    onSubmit(evt) {
      evt.preventDefault();
      
      var datos = this.form;
      const config = {
        headers: {'content-type': 'application/json'}
      }
      axios.post(`${url}Login`, datos, config).then(function(resp){
        if(resp.data.titulo === "Listo!"){
          localStorage.setItem("token", resp.data.token)
          this.Reset()
          this.$bvModal.hide('modal_ingreso')
          this.mutarVisible(resp.data)
        }
        else{
          switch (resp.data.titulo) {
            case 'Problema!':
              this.mensajeUsuario = false
              break;
            case 'clave':
              this.mensajeClave = false
              break;
          
            default:
              break;
          }
          this.texto = resp.data.texto
        }
      }.bind(this));
    },
    modalRegistro(){
      this.$bvModal.show('modal_registro')
      this.$bvModal.hide('modal_ingreso')
    }
  },
  watch:{
    'form.usuario': function(nv, ov){
      this.mensajeUsuario = true
      this.mensajeClave = true
      nv = nv.toLowerCase()
      var codigoAscii = nv.substr(nv.length - 1, 1).charCodeAt()
      if(codigoAscii < 97 || codigoAscii > 122){
        if(codigoAscii < 48 || codigoAscii > 57){
          nv = nv.substr(0, nv.length - 1)
        }
      }
      this.form.usuario = nv.split('').join('')
    },
    'form.contrasenia': function(nv, ov){
      this.mensajeUsuario = true
      this.mensajeClave = true
    }
  }
}
</script>

<style>
  .modal-body{
    padding: 0px!important;
  }
  .close{
    opacity:1!important;
    font-weight: 900!important;
    font-size: 40px!important;
    padding-top:9px!important; 
    background-color: transparent!important;
  }
  .modal-header{
    border-bottom: 0px!important;
    background-color:#272727!important;
  }
  #modal_ingreso___BV_modal_content_{
    border-width: 0px!important;
  }
  #modal_ingreso___BV_modal_title_{
    padding-top: 5px!important;
  }
</style>
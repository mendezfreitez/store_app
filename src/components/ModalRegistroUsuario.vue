<template>
  <div>
    <ModalTerminosCondiciones ref="ModalTerminosCondiciones"></ModalTerminosCondiciones>
    <b-modal id="modal_registro"
    style="border: 0px solid rgba(0, 0, 0, 0.2)!important;"
    title="Registro Usuario"
    header-close-variant="light"
    header-text-variant="light"
    cancel-variant="transparent"
    hide-footer
    cancel-title="Cerrar"
    centered>
      <div>
        <div class="p-3">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1">
              <input
                class="form-control"
                id="input-1"
                v-model="form.usuario"
                type="text" 
                required
                placeholder="Usuario"
              >
            </b-form-group>
            <b-form-group id="input-group-4">
              <input
                class="form-control"
                id="input-correo"
                v-model="form.correo"
                type="email" 
                required
                placeholder="Correo"
              >
            </b-form-group>
            <b-form-group id="input-group-2">
              <input
                class="form-control"
                id="input-2"
                v-model="form.contrasenia"
                required
                placeholder="Contraseña"
                type="password"
              >
            </b-form-group>
            <b-form-group id="input-group-3">
              <input
                class="form-control"
                id="input-3"
                v-model="form.contraseniaRepeat"
                :state="contrasenias"
                required
                placeholder="Repetir Contraseña"
                type="password"
              > 
              <div class="text-left">
                <b-form-invalid-feedback :state="contrasenias">Contraseñas no coinciden</b-form-invalid-feedback>
                <b-form-valid-feedback :state="contrasenias">Contraseña Correcta</b-form-valid-feedback>
              </div>
            </b-form-group>
            <b-form-group id="input-group-5">
              <b-form-checkbox-group class="text-left" v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox @change="btnTerminos=!btnTerminos" v-model="form.TerminosCondiciones" required >Acepto los <b-link @click="modalTerminosCondiciones">Términos y condiciones</b-link></b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
            <div class="text-right">
              <b-button size="sm" type="reset" class="mr-2" variant="outline-danger">Limpiar</b-button>
              <b-button :disabled="!btnTerminos" size="sm" type="submit" class="ml-2" variant="outline-dark">Registrar</b-button>
            </div>
          </b-form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ModalTerminosCondiciones from './ModalTerminosCondiciones'
let url = 'https://storeapp-back-end.herokuapp.com/';
  // let url = 'http://localhost:3000/';
  import axios from 'axios';
  export default {
    name:'Registro', 
    props:{
      desactivado: true
    },
    components:{
      ModalTerminosCondiciones
    },
    data() {
      return {
        btnTerminos:false,
        form: {
          usuario: '',
          contrasenia: '',
          correo:'',
          contraseniaRepeat:'',
          TerminosCondiciones:[false],
          carro:[]
        },
        show: true,
        estado:Boolean
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        if(this.form.TerminosCondiciones[0] == false){
          alert("Antes debe aceptar los 'Términos y Condiciones'.");
        }
        else{
          // console.log(this.form);
          var datos = this.form;
          const config = {
            headers: {'content-type': 'application/json'}
          }
        const that = this;
        axios.post(`${url}Registro`, datos, config).then(function (resp) {
            console.log(resp.data);  
            // if(resp.data.titulo === "Listo!"){
            //   that.onReset(evt);
            //   alert("Usuario creado con éxito.");
            // }
            // else{
            //   alert("Error al crear usuario.");
            // }
        });
        }
      },
      onReset(evt) {
        evt.preventDefault();
        // Reset our form values
        this.form.usuario = ''
        this.form.contrasenia = ''
        this.form.contraseniaRepeat = ''
        this.$nextTick(() => {
          this.show = true
        })
      },
      validarUsuario(){
        const config = {
          headers: {'content-type': 'application/json'}
        }
        var vaina;
        let that = this;
        axios.post(`${url}disponibleUsuario`, that.form, config).then(function (resp) {
            if(resp.data != '1'){
              vaina = false;
              that.estado = false;
            }
            else{
              vaina = true;
              that.estado = true;
            }
          console.log(vaina);
        });
        return vaina; 
      },
      modalTerminosCondiciones(){
        this.$bvModal.show('ModalTerminosCondiciones')
      }
    },
    computed:{
      contrasenias(){
        if (this.form.contrasenia === this.form.contraseniaRepeat) {
          this.estado = false;
        } else {
          this.estado = true;
        }
        return this.form.contrasenia === this.form.contraseniaRepeat;
      },
    },
    mounted(){
        if(this.form.contrasenia != ''){
          this.estado = true;
        }
        else{
          this.estado = false;
        }
    },
    watch: {
      'form.usuario': function(nv, ov){
        nv = nv.toLowerCase()
        var codigoAscii = nv.substr(nv.length - 1, 1).charCodeAt()
        
        if(codigoAscii < 97 || codigoAscii > 122){
          if(codigoAscii < 48 || codigoAscii > 57){
            nv = nv.substr(0, nv.length - 1)
          }
        }
        this.form.usuario = nv.split('').join('');
      },
      'form.contrasenia': function(nv, ov){
        nv = nv.toLowerCase()
        var codigoAscii = nv.substr(nv.length - 1, 1).charCodeAt()
        if(codigoAscii < 97 || codigoAscii > 122){
          if(codigoAscii < 48 || codigoAscii > 57){
            if(codigoAscii < 65 || codigoAscii > 90){
              if(codigoAscii != 95 && codigoAscii != 196 && codigoAscii != 250){
                nv = nv.substr(0, nv.length - 1)
              }
            }
          }
        }
        this.form.contrasenia = nv.split('').join('');
      },
      'form.contraseniaRepeat': function(nv, ov){
        nv = nv.toLowerCase()
        var codigoAscii = nv.substr(nv.length - 1, 1).charCodeAt()
        if(codigoAscii < 97 || codigoAscii > 122){
          if(codigoAscii < 48 || codigoAscii > 57){
            if(codigoAscii < 65 || codigoAscii > 90){
              if(codigoAscii != 95 && codigoAscii != 196 && codigoAscii != 250){
                nv = nv.substr(0, nv.length - 1)
              }
            }
          }
        }
        this.form.contraseniaRepeat = nv.split('').join('');
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
  #modal_registro___BV_modal_content_{
    border-width: 0px!important;
  }
  #modal_registro___BV_modal_title_{
    padding-top: 5px!important;
  }
  .custom-checkbox, .custom-checkbox > label.custom-control-label{
    width: 100%!important;
  }
</style>
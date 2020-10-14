<template>
  <b-container>
      <b-row>
          <b-col cols="1" lg="4" md="3" sm="2"></b-col>
          <b-col cols="10" lg="4" md="6" sm="8">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <h3>Registro</h3>

            <b-form-group id="input-group-1">
              <b-form-input
                id="input-1"
                v-model="form.usuario"
                type="text" 
                required
                @keyup="validarUsuario()"
                placeholder="Usuario"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="form.contrasenia"
                required
                placeholder="Contraseña"
                type="password"
              ></b-form-input>
            </b-form-group>
            
            <b-form-group id="input-group-3">
              <b-input
                id="input-3"
                v-model="form.contraseniaRepeat"
                :state="contrasenias"
                required
                placeholder="Repetir Contraseña"
                type="password"
              ></b-input>
              <div class="text-left">
                <b-form-invalid-feedback :state="contrasenias">Contraseñas no coinciden</b-form-invalid-feedback>
                <b-form-valid-feedback :state="contrasenias">Contraseña Correcta</b-form-valid-feedback>
              </div>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group class="text-left" v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox v-model="form.TerminosCondiciones" required >Acepto los <b-link to="/TerminosCondiciones">Términos y condiciones</b-link></b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>

            <div class="text-right mb-3">
              <b-button type="reset" class="mr-2" variant="outline-danger">Limpiar</b-button>
              <b-button :disabled="estado" type="submit" class="ml-2" variant="outline-primary">Registrar</b-button>
            </div>
          </b-form>
          </b-col>
          <b-col cols="1" lg="4" md="3" sm="2"></b-col>
      </b-row>
  </b-container>
</template>

<script>
  let url = 'http://localhost:3000/';
  import axios from 'axios';
  export default {
    name:'Registro',
    props:{
      desactivado: true
    },
    data() {
      return {
        form: {
          usuario: '',
          contrasenia: '',
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
          // this.form.contrasenia = btoa(this.form.contrasenia);
          console.log(this.form);



          var datos = this.form;
          const config = {
            headers: {'content-type': 'application/json'}
          }
        const that = this;
        axios.post(`${url}Registro`, datos, config).then(function (resp) {
            console.log(resp.data);  
            if(resp.data === 1){
              that.onReset(evt);
              alert("Usuario creado con éxito.");
            }
            else{
              alert("Error al crear usuario.");
            }
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
      console.log("contraseña:   " + this.form.contrasenia)
        if(this.form.contrasenia != ''){
          this.estado = true;
        }
        else{
          this.estado = false;
        }
    }
  }
</script>

<style>

</style>
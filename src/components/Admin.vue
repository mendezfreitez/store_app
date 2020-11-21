<template>
  <b-container>
      <b-row>
          <b-col cols="1" lg="4" md="3" sm="2"></b-col>
          <b-col cols="10" lg="4" md="6" sm="8">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

            <h3>Usuario</h3>

            <b-form-group id="input-group-1">
              <b-form-input
                id="input-1"
                v-model="form.usuario"
                type="text" 
                required
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

            <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
              <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
              ></b-form-select>
            </b-form-group> -->

            <!-- <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group> -->

            <div class="text-right mb-3">
              <b-button type="reset" class="mr-2" variant="outline-danger">Limpiar</b-button>
              <b-button type="submit" class="ml-2" variant="outline-primary">Ingresar</b-button>
            </div>
            <div class="text-center">
              <span>Aún no estás registrado? <b-link to="/Registro">Regístrate</b-link></span>
            </div>
          </b-form>
          <!-- <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card> -->
          </b-col>
          <b-col cols="1" lg="4" md="3" sm="2"></b-col>
      </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex'
let url = 'http://localhost:3000/';
  export default {
    name:'Admin',
    data() {
      return {
        form: {
          usuario: '',
          contrasenia: '',
          carro: []
        },
        show: true
      }
    },
    methods: {
      ...mapMutations(['sesion_']),
      onSubmit(evt) {
        evt.preventDefault();
        var datos = this.form;
        const config = {
          headers: {'content-type': 'application/json'}
        }
        let that = this;
        axios.post(`${url}Acceso`, datos, config).then(function(resp){
          console.log(resp.data.usuario[0]);
          if(resp.data.resul === true){
            that.sesion_({'resul':resp.data.resul, 'usuar':resp.data.usuario[0]});
          }
        });

        // alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.usuario = ''
        this.form.contrasenia = ''
        this.$nextTick(() => {
          this.show = true
        })
      }
    } 
  }
</script>

<style>
.container{
    margin-top: 100px!important;
}
a.nav-link{
    color: #fff!important;
}
</style>
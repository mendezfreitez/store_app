<template>
  <div>
    <ModalRegistro></ModalRegistro>
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
        <div class="p-3">
          <b-form @submit="onSubmit" @reset="onReset">
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

                  <div class="text-right mb-3">
                    <b-button type="reset" class="mr-2" variant="outline-danger">Limpiar</b-button>
                    <b-button type="submit" class="ml-2" variant="outline-dark">Ingresar</b-button>
                  </div>

                  <div class="text-left" style="font-size:15px!important;">
                    <span>Aún no estás registrado? <b-link @click="modalRegistro">Regístrate</b-link></span>
                  </div>
          </b-form>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import ModalRegistro from './ModalRegistroUsuario'
import { mapMutations, mapState } from 'vuex';
export default {
  data(){
    return{
      form:{
        usuario:'',
        contrasenia:''
      }
    }
  },
  components:{
    ModalRegistro
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
    ...mapMutations(['modificarCarro','modifPuraCantidad']),
    onReset(evt) {
      evt.preventDefault()
      this.form.usuario = ''
      this.form.contrasenia = ''
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
      let that = this;
      axios.post(`${url}Acceso`, datos, config).then(function(resp){
        console.log(resp.data.usuario[0]);
        if(resp.data.resul === true){
          that.sesion_({'resul':resp.data.resul, 'usuar':resp.data.usuario[0]})
        }
      });
    },
    modalRegistro(){
      this.$bvModal.show('modal_registro')
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
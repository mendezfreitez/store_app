<template>
    <div>
    <div class="p-3">
        <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group id="input-group-11111">
                <input
                    id="input-11111"
                    v-model="form.usuario"
                    type="text" 
                    required
                    placeholder="Usuario"
                >
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
                <b-button size="sm" type="reset" class="mr-2" variant="outline-danger">Limpiar</b-button>
                <b-button size="sm" type="submit" class="ml-2" variant="outline-dark">Ingresar</b-button>
                </div>

                <div class="text-left" style="font-size:15px!important;">
                <span>Aún no estás registrado? <b-link class="ml-2" @click="modalRegistro">Regístrate</b-link></span>
                </div>
        </b-form>
    </div>
    </div>
</template>

<script>
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
      this.$bvModal.hide('modal_ingreso')
    }
  },
  watch:{
    'form.usuario': function(nv, ov){
        console.log(nv)
      nv = nv.toLowerCase()
      var codigoAscii = nv.substr(nv.length - 1, 1).charCodeAt()
      if(codigoAscii < 97 || codigoAscii > 122){
        if(codigoAscii < 48 || codigoAscii > 57){
          nv = nv.substr(0, nv.length - 1)
        }
      }
      this.form.usuario = nv.split('').join('')
    }
  }
}
</script>

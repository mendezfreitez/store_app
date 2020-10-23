<template>
  <div>
    <b-modal id="modalNuevaCategoria"
    :title="tituloModal"
    header-bg-variant="success"
    header-text-variant="light"
    cancel-variant="outline-danger"
    ok-variant="outline-primary"
    ok-title="Guardar"
    cancel-title="Cerrar"
    :ok-disabled="desactivado"
    @ok="guardarCategoria"
    centered
    >
    
      <b-form @reset="onReset" class="m-3">
        <b-form-group id="input-group-1">
          <b-form-input
            id="input-1"
            v-model="form.nombre"
            type="text"
            required
            @keyup="cambio"
            placeholder="Nombre Categoría"
            name="nombre"
          ></b-form-input>
        </b-form-group>
      </b-form>

    </b-modal>
  </div>
</template>

<script>
import axios from 'axios';
import galeria from 'lingallery';
import { mapMutations, mapState } from 'vuex';
// let url = 'http://localhost:3000/';
let url = 'https://storeapp-back-end.herokuapp.com/';
export default {
  data(){
    return{
      form:{
        nombre:'',
        idCategoria:''
      },
      desactivado:true
    }
  },
  props:{
    tituloModal:'',
    textoModal:''
  },
  computed:{
    ...mapState(['ProductosCarro','categorias'])
  },
  methods:{
    ...mapMutations(['modificarCarro','modifPuraCantidad','traerCategorias']),
    guardarCategoria(){
      // if(this.form.idCategoria == ''){
      //   alert(JSON.stringify(this.form))
      // }
      // else{
      //   alert(JSON.stringify(this.form))
      // }
      // return
      var datos = this.form;
      const config = {
        headers: {'content-type':'application/json'}
      }
      axios.post(`${url}nuevaCategoria`, datos, config).then(function (resp) {
        alert(resp.data);
        this.traerCategorias();
        this.onReset();
      }.bind(this));
    },
    onReset() {
      // evt.preventDefault();
      this.form.nombre = ''
      this.form.idCategoria = ''
    },
    cambio(){
      if(this.form.nombre != ''){
        this.desactivado = false;
      }
      else{
        this.desactivado = true;
      }
    }
  }
}
</script>

<style>
  .modal-body{
    padding: 0px!important;
  }
</style>
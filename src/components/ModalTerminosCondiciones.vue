<template>
  <b-modal id="ModalTerminosCondiciones"
  style="border: 0px solid rgba(0, 0, 0, 0.2)!important;"
  title="Términos y condiciones"
  header-close-variant="light"
  header-text-variant="light"
  cancel-variant="transparent"
  hide-footer
  cancel-title="Cerrar"
  centered>
    <div style="overflow-y:scroll!important; height:380px!important;">
      <div class="p-3 text-justify">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus neque repudiandae possimus ipsum ad eius voluptate doloribus,
        asperiores nisi, aliquid modi libero placeat vitae exercitationem amet magnam ex est adipisci!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus neque repudiandae possimus ipsum ad eius voluptate doloribus,
        asperiores nisi, aliquid modi libero placeat vitae exercitationem amet magnam ex est adipisci!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus neque repudiandae possimus ipsum ad eius voluptate doloribus,
        asperiores nisi, aliquid modi libero placeat vitae exercitationem amet magnam ex est adipisci!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus neque repudiandae possimus ipsum ad eius voluptate doloribus,
        asperiores nisi, aliquid modi libero placeat vitae exercitationem amet magnam ex est adipisci!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus neque repudiandae possimus ipsum ad eius voluptate doloribus,
        asperiores nisi, aliquid modi libero placeat vitae exercitationem amet magnam ex est adipisci!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus neque repudiandae possimus ipsum ad eius voluptate doloribus,
        asperiores nisi, aliquid modi libero placeat vitae exercitationem amet magnam ex est adipisci!</p>
      </div>
    </div>
  </b-modal>
</template>

<script>
  // let url = 'http://localhost:3000/';
  // import axios from 'axios';
  // export default {
  //   name:'Registro',
  //   props:{
  //     desactivado: true
  //   },
  //   data() {
  //     return {
  //       form: {
  //         usuario: '',
  //         contrasenia: '',
  //         contraseniaRepeat:'',
  //         TerminosCondiciones:[false],
  //         carro:[]
  //       },
  //       show: true,
  //       estado:Boolean
  //     }
  //   },
  //   methods: {
  //     onSubmit(evt) {
  //       evt.preventDefault();
  //       if(this.form.TerminosCondiciones[0] == false){
  //         alert("Antes debe aceptar los 'Términos y Condiciones'.");
  //       }
  //       else{
  //         console.log(this.form);
  //         var datos = this.form;
  //         const config = {
  //           headers: {'content-type': 'application/json'}
  //         }
  //       const that = this;
  //       axios.post(`${url}Registro`, datos, config).then(function (resp) {
  //           console.log(resp.data);  
  //           if(resp.data === 1){
  //             that.onReset(evt);
  //             alert("Usuario creado con éxito.");
  //           }
  //           else{
  //             alert("Error al crear usuario.");
  //           }
  //       });
  //       }
  //     },
  //     onReset(evt) {
  //       evt.preventDefault();
  //       // Reset our form values
  //       this.form.usuario = ''
  //       this.form.contrasenia = ''
  //       this.form.contraseniaRepeat = ''
  //       this.$nextTick(() => {
  //         this.show = true
  //       })
  //     },
  //     validarUsuario(){
  //       const config = {
  //         headers: {'content-type': 'application/json'}
  //       }
  //       var vaina;
  //       let that = this;
  //       axios.post(`${url}disponibleUsuario`, that.form, config).then(function (resp) {
  //           if(resp.data != '1'){
  //             vaina = false;
  //             that.estado = false;
  //           }
  //           else{
  //             vaina = true;
  //             that.estado = true;
  //           }
  //         console.log(vaina);
  //       });
  //       return vaina; 
  //     },
  //     modalTerminosCondiciones(){
        
  //     }
  //   },
  //   computed:{
  //     contrasenias(){
  //       if (this.form.contrasenia === this.form.contraseniaRepeat) {
  //         this.estado = false;
  //       } else {
  //         this.estado = true;
  //       }
  //       return this.form.contrasenia === this.form.contraseniaRepeat;
  //     },
  //   },
  //   mounted(){
  //     console.log("contraseña:   " + this.form.contrasenia)
  //       if(this.form.contrasenia != ''){
  //         this.estado = true;
  //       }
  //       else{
  //         this.estado = false;
  //       }
  //   }
  // }
</script>

<style>
  /* .modal-body{
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
  }*/
  #ModalTerminosCondiciones___BV_modal_content_{
    border-width: 0px!important;
  }
  #ModalTerminosCondiciones___BV_modal_title_{
    padding-top: 5px!important;
  }
  /*.custom-checkbox, .custom-checkbox > label.custom-control-label{
    width: 100%!important;
  } */
</style>
<template>
  <div>
    <b-form-file class="text-left border-bottom-0"
      @change="$emit('cambio')"
      accept="image/*"
      multiple
      :file-name-formatter="formatNames"
      v-model="file"
      placeholder="Selección imágenes"
      drop-placeholder="Drop file here..."
    ></b-form-file>
  </div>
</template>

<script> 
  export default {
      name:'InputFotos',
    data() {
      return {
        file: null,
        nuevoDato:Array
      }
    },
    watch:{
      file:{
        deep: true,
        handler:(nuevoValor, valorAnterior) => {
          return nuevoValor;
        }
      }
    },
    methods:{
      mostrar(){
        console.log(this.nombre);
      },
      formatNames(files) {
        if (files.length === 1) {
          return files[0].name
        } else {
          return `${files.length} Imágenes Seleccionadas`
        }
      }
    }
  }
</script>
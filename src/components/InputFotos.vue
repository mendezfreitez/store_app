<template>
  <div>
    <!-- Styled -->
    <b-form-file class="text-left border-bottom-0"
      @change="$emit('cambio')"
      accept="image/*"
      multiple
      :file-name-formatter="formatNames"
      v-model="file"
      placeholder="Selección imágenes"
      drop-placeholder="Drop file here..."
    ></b-form-file>

    <!-- <div class="mt-3 text-left">Imágenes: {{ file ? file.name : '' }}</div> -->

    <!-- Plain mode -->
    <!-- <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
    <div class="mt-3">Selected file: {{ file2 ? file2.name : '' }}</div> -->
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
          // console.log(`el campo archivo es`, nuevoValor, valorAnterior);
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
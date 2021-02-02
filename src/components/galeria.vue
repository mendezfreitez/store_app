<template>
  <lingallery showControls="false" :iid.sync="currentId" :width="600" :height="400" :items="arregloItems"/>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        currentId:null,
        arregloItems:Array
    }
}
</script>

<style>

</style>
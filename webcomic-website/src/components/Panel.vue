<template>
  <div class="panel">
    <img class="panel-img" v-bind:src = "generateURL" />
    {{panelText}}
  </div>
</template>

<script>export default {
  name: 'Panel',
    props: {
    pageNumber: Number,
    panelText: String
  },
  data() {
      return {
       // pageNumber: 1,
        imgURLbase: "/panels/Birdsong",
        imgURLend: ".png"
      }
    },
  computed: {
    generateURL: function(){
      return this.imgURLbase + this.pageNumber + this.imgURLend
    }
  }
}</script>

<style scoped>

</style>

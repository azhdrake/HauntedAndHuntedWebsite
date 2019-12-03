<template>
  <div class="panel">
    <img class="panel-img" v-bind:src = "generateURL" />
    Test??
  </div>
</template>

<script>export default {
  name: 'Panel',
  /*props: {
    pageNumber: int,
  },*/
  data() {
      return {
        pageNumber: 1,
        imgURLbase: "../assets/panels/Birdsong",
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

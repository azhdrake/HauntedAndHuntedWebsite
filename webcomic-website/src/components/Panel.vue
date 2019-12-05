<template>
  <div class="panel">
    <img class="panel-img" v-bind:src = "generateURL" />
    <p class="panelText" v-html="panelText"></p>
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
  .panelText{
    padding: 1vw;
    border: 4px solid #6E352C;
    text-align: left;
    background-color: white;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif
  }
</style>

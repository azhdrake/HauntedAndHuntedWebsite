<template> <!-- The panel image and associated text. -->
  <div class="panel">
    <!-- gets the image from the page number using the generateURL method -->
    <img class="panel-img" v-bind:src="generateURL" />
    <!-- gets the text and reads it as HTML rather then plantext -->
    <p class="panelText" v-html="panelText"></p>
  </div>
</template>

<script>
export default {
  name: 'Panel',
    props: {
    pageNumber: Number,
    panelText: String
  },
  data() {
      return {
        imgURLbase: "/panels/Birdsong",
        imgURLend: ".png"
      }
    },
    computed: {
    // puts the image URL together. 
    generateURL: function(){
      return this.imgURLbase + this.pageNumber + this.imgURLend
    }
  }
}</script>

<style scoped>
  .panelText {
    padding: 1vw;
    border: 4px solid #6E352C;
    text-align: left;
    background-color: white;
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif
  }
</style>

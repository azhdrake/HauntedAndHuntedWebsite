<template> <!-- Each pannel and page link in the archive page. Is given a page number by it's parent component and uses that to figure out which content to display. -->
  <div class="archive-tile">
    Page {{pageNumber}}
    <router-link v-bind:to="generateURL"><img v-bind:src="generateImgURL" /></router-link>
  </div>
</template>
<script>
  export default {
    name: "ArchiveTile",
    props: {
      pageNumber: Number
    },
    data() {
      return {
        imgURLbase: "/panels/Birdsong",
        imgURLend: ".png"
      }
    },
    computed: { // Used to get the URLs of the image and corisponding pages. 
      generateImgURL: function () {
        return this.imgURLbase + this.pageNumber + this.imgURLend
      },
      generateURL: function () {
        return "/comic/" + this.pageNumber
      }
    }
  }
</script>
<style>
  .archive-tile {
    width: 10em;
    border: 3px #6E352C solid;
  }
</style>
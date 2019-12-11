<template> <!-- The archive page. Shows all pannels with their corisponding page number. Might get kinda unwealdly when the comic gets but, if time make buttons you click to get only the tiles for one chapter at a once. -->
  <div class="please-center-im-begging-you">
    <hr />
    <h1 class="title">Archive</h1>
    <hr />
    <!-- the vue way of writing for(i=1, i < findComicLength(), i++) 
         Starts at one and sends a page number to the ArchiveTile child component. Arranges each child in a grid. -->
    <div class="tile-grid" v-for="index in findComicLength()":key="index">
      <ArchiveTile v-bind:pageNumber="index"></ArchiveTile>
    </div>
  </div>
</template>
<script>
  import ArchiveTile from "@/components/ArchiveTile.vue"
  import ComicText from "../assets/ComicText.json"
  export default {
    name: 'Archive',
    components: {
      ArchiveTile
    },
    data() {
      return {
        ComicText: ComicText
      }
    },
    methods: {
      findComicLength() {
        return this.ComicText.length
      }
    }
  }

</script>

<style>
  .tile-grid{
    float: left;
    width: 25%;
    padding-bottom:.5em;
    display: inline;
  }
  .please-center-im-begging-you{ /* This is hackey and I don't like it. If time find better way to center tiles. */
    text-align:center;
    margin-left:1.75em;
  }
</style>
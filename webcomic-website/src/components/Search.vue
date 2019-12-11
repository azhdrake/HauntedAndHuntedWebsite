<template>
  <div>
    <hr />
    <h1 class="title">SEARCH PAGE</h1>
    <div class="title-but-like-less-so">It's super high tech! Press ctr-f to search!</div>
    <br /><hr />
    <div v-for="pageData in ComicText" v-bind:key="pageData.pageNumber">
      <h3>Page {{pageData.PageNumber}}</h3>
      <p class="pannel-text" v-html="pageData.text"></p>
      <hr class="smaller-bar" />
    </div>
  </div>
</template>
<script>
  import ComicText from "../assets/ComicText.json"

  export default {
    name: 'Search',
    data() {
      return {
        ComicText: ComicText
        
      }
    }
  }
</script>
<style>
  .pannel-text{
    text-align: left;
  }
  .smaller-bar{
    border: 1px dashed #CF5230;
  }
</style>
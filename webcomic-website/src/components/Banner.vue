<template>
  <div class="Banner">
    <router-link to="/comic/1"><img src="../assets/Banner.png" /></router-link>
    <router-link to="/about" class="top-links"> About </router-link> 
    <router-link to="/cast" class="top-links"> Cast </router-link> 
    <router-link to="/archive" class="top-links"> Archive </router-link> 
    <router-link to="/search" class="top-links"> Search </router-link> 
    <router-link to="/links" class="top-links"> Links </router-link> 
    <a class="top-links"> Blog </a>
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-links{
    color: #CF5230;
    font-size: 1.5em;
  	text-decoration: none;
  	display: inline-block;
    zoom: 1; /* Trigger hasLayout */
    width: 16%;
    text-align: center; 
  }
</style>

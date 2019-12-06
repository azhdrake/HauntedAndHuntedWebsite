<template>
  <div class="Banner">
    <img src="../assets/Banner.png" />
    <router-link to="/about" class="top-links"> About </router-link> 
    <a class="top-links"> Cast </a> 
    <a class="top-links"> Archive </a> 
    <a class="top-links"> Search </a> 
    <a class="top-links"> Links </a> 
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

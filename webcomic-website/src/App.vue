<template> <!-- The template for the site as a whole. The only constant I have is the header (banner.vue) -->
  <div id="app">
    <section class="main-container">
      <Banner></Banner>
      <RouterView></RouterView>
    </section>
  </div>
</template>

<script>
  import Banner from './components/Banner.vue'

  export default {
    name: 'app',
    components: {
      Banner
    }
  }
</script>

<style> /* Site wide styling */
   .title{
    color: #F59A44;
    text-align: center;
    text-shadow: 0 0 2px #000000;
    font-size: 50px;
    line-height: 5px;
    padding: 0
  }
   .title-but-like-less-so{
    color: #CF5230;
    text-align: center;
    font-size: 25px;
    line-height: 5px;
    padding: 0
   }
  hr{
    border: 1px solid #CF5230;
  }
  section {
	  text-align: center;
	  max-width: 50em;
	  padding: 1vw;
	  margin: 0 auto;
	  overflow:hidden;
	  background-color: #E3C598;
  }

  body {
    background-color: #65352C;
    margin: 0;
  }
  a{
    color: #CF5230;
  }
</style>

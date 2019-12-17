<template> <!-- The template for the site as a whole. The only constant I have is the header (banner.vue) and the background images, which probably could have been applied better but this is how I figured out how to do it. -->
  <div id="app">
    <div class="bg-image misc">
      <div class="bg-image misc-2">
        <div class="bg-image haunted">
          <div class="bg-image hunted">
            <section class="main-container">
              <Banner></Banner>
              <RouterView></RouterView>
            </section>
          </div>
        </div>
        </div>
      </div>
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
  a{
    color: #CF5230;
  }
  /* Everything below here is just background styling. */
  .haunted{
    background-image: url("assets/HauntedSpeech.png");
    background-position-x: 0;
    background-position-y: 100%;
  }
  .hunted{
    background-image: url("assets/HuntedSpeech.png");
    background-position-x: 100%;
    background-position-y: 100%;
    }
  .bg-image{
    background-attachment:fixed;
    background-size:25%;
    background-repeat: no-repeat;
    height: 100vh;
  }
  .misc-2{
    background-image: url("assets/IDontKnowWhatThisSays.png");
    background-size: 50%;
    background-repeat:repeat-x;
  }
  .misc{
    background-image: url("assets/MiscSpeech.png");
    background-size: 50%;
  }
  body {
    background-color: #65352C;
    margin: 0;
  }
</style>

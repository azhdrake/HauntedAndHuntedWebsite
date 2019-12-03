<template>
  <div id="app">
    <section class="main-container">
      <Banner></Banner>
      <Panel></Panel>
      <NavButtons></NavButtons>
    </section>
  </div>
</template>

<script>
  import Panel from './components/Panel.vue'
  import Banner from './components/Banner.vue'
  import NavButtons from"./components/NavButtons.vue"

  export default {
    name: 'app',
    components: {
      Banner,
      Panel,
      NavButtons
    }
  }
</script>

<style>
section {
	text-align: center;
	width: 60%;
	padding: 1vw;
	margin: 0 auto;
	overflow:hidden;
	background-color: #afafaf;
}

img {
	object-fit: contain;
	width:100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

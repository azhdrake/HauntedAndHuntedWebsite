<template>
  <div id="app">
    <section class="main-container">
      <Banner></Banner>
      <NavButtons v-on:pageChanged="pageChanged"></NavButtons>
      <Panel v-bind:pageNumber="pageNumber"
             v-bind:panelText="pageNumberText"></Panel>
      <NavButtons v-on:pageChanged="pageChanged"></NavButtons>
    </section>
  </div>
</template>

<script>
  import Panel from './components/Panel.vue'
  import Banner from './components/Banner.vue'
  import NavButtons from "./components/NavButtons.vue"
  import ComicText from "./assets/ComicText.json"

  export default {
    name: 'app',
    components: {
      Banner,
      Panel,
      NavButtons
    },
    data() {
      return {
        pageNumber: 1,
        ComicText: ComicText
      }
    },
    methods : {
      pageChanged(amount) {
        if (amount > 1 || this.pageNumber + amount > 9) {
          this.pageNumber = 9
        } else if (amount < -1 || this.pageNumber + amount < 1) {
          this.pageNumber = 1
        } else {
          this.pageNumber += amount
        }
      }
    },
    computed: {
      pageNumberText: function () {
        if (this.ComicText) {
          this.ComicText.forEach(function (pageInfo) {
             if (pageInfo.PageNumber == this.pageNumber) {
            console.log(pageInfo.PageNumber)
               return pageInfo.text
              }
          })
        }
      }
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

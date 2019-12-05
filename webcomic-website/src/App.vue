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
        let pageText
        this.ComicText.forEach(pageInfo => {
          if (pageInfo.PageNumber == this.pageNumber) {
            pageText = pageInfo.text
          }
        })
        return pageText
      }
    }
  }
</script>

<style>
   .renee{
    color: rebeccapurple;
  }
  .charlie{
    color: darkgreen;
  }
  .vin{
    color: red;
  }
  .comic-text{
    margin-bottom: .5em;
  }
  .naration-text{
    font-weight: 550;
  }

  .top-links{

  }

section {
	text-align: center;
	width: 75%;
	padding: 1vw;
	margin: 0 auto;
	overflow:hidden;
	background-color: #E3C598;
}

img {
	object-fit: contain;
	width:100%;
}

#app {
  background-color: #65352C;
}
</style>

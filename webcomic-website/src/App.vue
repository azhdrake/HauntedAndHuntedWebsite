<template>
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
    },
    data() {
      return {
        pageNumber: 1,
       // ComicText: ComicText
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
      /*pageNumberText: function () {
        let pageText
        this.ComicText.forEach(pageInfo => {
          if (pageInfo.PageNumber == this.pageNumber) {
            pageText = pageInfo.text
          }
        })
        return pageText
      }*/
    }
  }
</script>

<style>
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
  }
  a{
    color: #CF5230;
  }
</style>

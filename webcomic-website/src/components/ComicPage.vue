<template>
    <section class="comic-page">
      <NavButtons v-on:pageChanged="pageChanged"></NavButtons>
      <Panel v-bind:pageNumber="pageNumber"
             v-bind:panelText="pageNumberText"></Panel>
      <NavButtons v-on:pageChanged="pageChanged"></NavButtons>
    </section>
</template>

<script>
  import Panel from './Panel.vue'
  import Banner from './Banner.vue'
  import NavButtons from "./NavButtons.vue"
  import ComicText from "../assets/ComicText.json"

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

  .renee {
    color: rebeccapurple;
    text-decoration: underline;
  }

  .charlie {
    color: darkgreen;
    text-decoration: underline;
  }

  .vin {
    color: red;
    text-decoration: underline;
  }

  .comic-text {
    margin-bottom: .5em;
  }

  .naration-text {
    font-weight: 550;
  }

  .top-links {
  }

  img {
    object-fit: contain;
    width: 100%;
  }
</style>

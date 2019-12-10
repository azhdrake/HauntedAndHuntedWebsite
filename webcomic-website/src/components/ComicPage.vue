<template>
    <section class="comic-page">
      <NavButtons v-on:pageChanged="pageChanged"></NavButtons>
      <Panel v-bind:pageNumber="pageNumber"
             v-bind:panelText="pageNumberText"></Panel>
      <NavButtons v-on:pageChanged="pageChanged"></NavButtons>
      <hr />
      <CommentTable v-bind:pageNumber="pageNumber"
                    v-bind:comments="comments" 
                    v-on:comment-added="newCommentAdded"
                    v-on:comment-deleted="CommentDeleted"></CommentTable>
    </section>
</template>

<script>
  import Panel from './Panel.vue'
  import Banner from './Banner.vue'
  import NavButtons from "./NavButtons.vue"
  import ComicText from "../assets/ComicText.json"
  import CommentTable from "./CommentsTable.vue"

  export default {
    name: 'app',
    components: {
      Banner,
      Panel,
      NavButtons,
      CommentTable
    },
    data() {
      return {
        pageNumber: 1,
        ComicText: ComicText,
        comments: []
      }
    },
    methods : {
      pageChanged(amount) {
        if (this.pageNumber + amount > 9 || this.pageNumber + amount < 1) {
          return
        }
        else if (amount > 1) {
          this.pageNumber = 9
        } else if (amount < -1) {
          this.pageNumber = 1
        } else {
          this.pageNumber += amount
        }
        this.$router.push({ name: "comic", params: { pageNumber: this.pageNumber } })
      },
      newCommentAdded(comment) {
        this.$comment_api.addComment(comment).then(comment => {
          this.updateComments()
        }).catch(err => {
          let msg = err.response.data.join(', ')
          alert("Error adding comment.\n" + msg)
        })
      },
      CommentDeleted(comment) {
        this.$comment_api.deleteComment(comment.id).then(() => {
          this.updateComments()
        })
      },
      updateComments() {
        this.$comment_api.getAllComments().then(comments => {
          this.comments = comments
        })
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
    }, 
    mounted() {
      this.pageNumber = parseInt(this.$route.params.pageNumber)
      this.updateComments()
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

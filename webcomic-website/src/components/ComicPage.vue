<template> <!-- The comic page itself. Main thing this does keep track of the pageNumber we're on and sends that to child components so that they can display the correct data for that page. -->
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
    name: 'Comic Page',
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
    methods: { // First makes sure that you're not going to a page that doesn't exist. 
        // Once we make sure that we're navigating to a valid page, we check which button was pressed. If it was a navigate one page button, we would have recieved +-1 from the navButton child component. If it was the navigate to the start/end button, +- 2. Then we go to the page that coresponds with the new pageNumber.
      pageChanged(amount) {
        if (this.pageNumber + amount > this.findComicLength || this.pageNumber + amount < 1) {
          return
        }
        else if (amount > 1) {
          this.pageNumber = this.findComicLength
        } else if (amount < -1) {
          this.pageNumber = 1
        } else {
          this.pageNumber += amount
        }
        this.$router.push({ name: "comic", params: { pageNumber: this.pageNumber } })
      },
      // sends a new comment to the commentServices and refreshes the comments table.
      newCommentAdded(comment) {
        this.$comment_api.addComment(comment).then(comment => {
          this.updateComments()
        }).catch(err => {
          let msg = err.response.data.join(', ')
          alert("Error adding comment.\n" + msg)
        })
      },
      // sends a delete comment request to commentServices, refreshes the comments table.
      CommentDeleted(comment) {
        this.$comment_api.deleteComment(comment.id).then(() => {
          this.updateComments()
        })
      },
      // Refreshes the comment table by requesting the comments from commentServices
      updateComments() {
        this.$comment_api.getAllComments().then(comments => {
          this.comments = comments
        })
      }
    },
    computed: {
      // pulls the text corisponding to the current page from the ComicText file.
      pageNumberText: function () {
        let pageText
        this.ComicText.forEach(pageInfo => {
          if (pageInfo.PageNumber == this.pageNumber) {
            pageText = pageInfo.text
          }
        })
        return pageText
      }, 
      //finds the length of the comic by checking the length of the ComicText array.
      findComicLength() {
        return this.ComicText.length
      }
    }, 
    mounted() {
      // gets the pageNumber from the URL when the page loads and pulls the comment table.
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
  img {
    object-fit: contain;
    width: 100%;
  }
</style>

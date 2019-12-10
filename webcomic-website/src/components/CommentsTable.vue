<template>
  <div class="comment-component">
    <h4 class="title">Comments</h4>

    <div class="comment-table">
      <table class="comment-list">
        <tr class="table-headers">
          <th class="user-name">User</th>
          <th class="comment-text">Comment</th>
          <th class="delete-button">Delete</th>
        </tr>
          <CommentRow v-for="comment in comments" v-bind:accesskey="comment.id"
                      v-if="comment.pageNumber == pageNumber"
                      v-bind:comment="comment"
                      v-on:delete-comment="commentDelete">
          </CommentRow>
      </table>

      <NewCommentForm v-bind:pageNumber="pageNumber" v-on:comment-added="newCommentAdded"></NewCommentForm>
    </div>
  </div>
</template>

<script>
  import CommentRow from "@/components/CommentRow.vue"
  import NewCommentForm from "@/components/NewCommentForm.vue"

  export default {
    name: "CommentTable",
    data() {
      return {
        pagesComments: []
      }
    },
    components: {
      CommentRow,
      NewCommentForm
    },
    props: {
      comments: Array,
      pageNumber: Number
    },
    methods: {
      newCommentAdded(comment) {
        this.$emit("comment-added", comment)
      },
      commentDelete(comment) {
        this.$emit("comment-deleted", comment)
      },
      updateComments() {
        this.$comment_api.getAllComments().then(allComments => {
          this.comments = allComments
          this.pagesComments = this.comments
        })
      }
    },
    mounted() {
      this.updateComments
    }
  }
</script>
<style>
  
  tr:nth-child(even){background-color: #f2f2f2} /* taken from W3Schools to alternate colors in table */

  table, th, td{
    text-align:left;
    border-collapse: collapse;
    vertical-align: top;

  }
  .comment-list{
    width: 100%;
    margin-left:auto; 
    margin-right:auto;
    background-color: white;
    border: 4px solid #6E352C;
  }
  .table-headers{
    background-color: #CF5230;
    color: white;
  }
  .comment-name{
    width:20%;
  }
  .comment-text{
    width: 70%;
  }
 .delete-button{
   width: 10%;
 }
</style>
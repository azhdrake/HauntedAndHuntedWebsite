<template> <!-- the add a new comment form. -->
  <div>
    <div class="add-comment-section">
      <form>
        <h4 class="title-but-like-less-so">Add New Comment</h4>
        <!-- The errors section, only shows if there is an active error -->
        <div class="error-message" v-show="errors.length > 0">
          <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
        </div>
        <table class="add-comment">
          <tr class="table-headers">
            <th class="left-column">
              <label for="name">Handle</label>
            </th>
            <th class="data-entry">
              <input id="name" v-model.trim="newCommentUser">
            </th>
          </tr>
          <tr>
            <td class="left-column">
              <label for="comment">Comment</label>
            </td>
            <td class="data-entry">
              <textarea id="comment" v-model.trim="newCommentText"></textarea>
            </td>
          </tr>
        </table>

        <!-- .prevent to stop the page from being refreshed upon click.-->
        <button class="add-button" v-on:click.prevent="addComment">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
	export default{
		name: "newCommentForm",
		data() {
      return {
				newCommentUser:"",
        newCommentText: "",
				errors: []
			}
    },
    props: {
      pageNumber:Number
    },
		methods: {
      addComment() {
        // makes sure that both fields are filled out and either throws an error or posts the comment. If a comment is posted the errors array gets reset.
        if (!this.newCommentUser) {
					this.errors.push("A display name is required")
        }
        if (!this.newCommentText) {
					this.errors.push("Comment is required")
        }
        if (this.newCommentUser && this.newCommentText) {
          let comment = { pageNumber: this.pageNumber, user: this.newCommentUser, comment: this.newCommentText }
          this.$emit("comment-added", comment) //sends student information to parent component.
          this.newCommentUser = ""
          this.newCommentText = ""
					this.errors = [] //resets all fields to empty
				}
			}
    },
    watch: {
      // clears the errors array if the pagenumber changes.
      pageNumber: function () {
        this.errors = []
      }
    }
	}
</script>

<style scoped>
  .error-message {
    padding:.25em; 
    display: inline-block;
    font-size: 1.5em;
    text-align: left;
    width: 15em;
    background-color: lightcoral;
    font-weight: 700;
    border: solid 4px red;
  }
  .add-comment{
    text-align: left;
  }
  td, th{
    border: solid 2px black;
    border-collapse: collapse;
  }
  table{
    width: 100%;
    padding: 5em;
    background-color: #E3C598;
    border: 4px solid #6E352C;
  }
 .left-column{
   vertical-align: top;
   width:10%;
 }
  textarea{
    height:10em;
    width:99%;
  }
</style>
<template>
  <div>
    <div class="error-message" v-show="errors.length > 0">
      <li v-for="error in errors" v-bind:key="error"> {{ error }} </li>
    </div>

    <div class="add-comment-section">
      <form>
        <h4 class="title-but-like-less-so">Add new Comment</h4>
        <table class="add-comment">
          <tr class="table-headers">
            
              <th class="left-column">
                <label for="name">Handle</label>
              </th><th class="data-entry">
                <input id="name" v-model.trim="newCommentUser">
              </th>
           
          </tr>
          <tr>
            
              <td class="left-column">
                <label for="comment">Comment</label>
              </td><td class="data-entry">
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
		}
	}
</script>

<style scoped>
  .add-comment{
    text-align: left;
  }
  td, th{
    border: solid 2px black;
    border-collapse: collapse;
  }
  table{
    width: 100%;
    background-color: #E3C598;
    border: 4px solid #6E352C;
  }
 .left-column{
   vertical-align: top;
   width:10%;
 }
  textarea{
    height:5em;
    width:99%;
  }
</style>
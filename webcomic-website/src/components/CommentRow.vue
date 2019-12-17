<template> <!-- Displays a comment -->
  <tr>
    <td> {{comment.user}} </td>
    <td> {{comment.comment}} </td>
    <td class="delete-column">
      <button id="delete-button" v-on:click="deleteComment(comment)">x</button>
    </td>
  </tr>
</template>

<script>
  export default {
    name: "CommentRow",
    props: {
      comment: Object
    },
    methods: {
      // makes sure you really want to delete a comment and deletes it
      deleteComment(comment) {
        if (confirm(`Delete ${comment.comment}?`)) {
          this.$emit("delete-comment", comment)
        }
      }
    }
  }
</script>
<style scoped>
  .delete-column{
    text-align: center;
    vertical-align: middle;
  }

  button{
	  text-decoration: none;
    display: inline-block;
    padding: ;
	  text-align: center;
	  border-radius: 50%;
	  background-color: #F59A44;
	  margin: ;
    border: none;
  }
  
button:hover{
	background-color: orangered;
}

  table, th, td{
    border-collapse: collapse;
    padding: .5em
  }
</style>
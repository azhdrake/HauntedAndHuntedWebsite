<template>
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

  table, th, td{
    border-collapse: collapse;
    padding: .5em
  }
</style>
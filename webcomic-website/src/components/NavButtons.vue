<template> <!-- The comic navigation buttons. Sends an int to the parent component so it knows which button was pressed. -->
  <div class="nav-buttons">
    <a class="butt" v-on:click="$emit('pageChanged', -2)"> &laquo; </a>
    <a class="butt narrow" v-on:click="$emit('pageChanged', -1)"> &#8249; </a>
    <span class="butt"> O </span>
    <a class="butt narrow" v-on:click="$emit('pageChanged', 1)"> &#8250; </a>
    <a class="butt" v-on:click="$emit('pageChanged', 2)"> &raquo; </a>
  </div>
</template>

<script>export default {
  name: 'NavButtons'
}</script>

<style scoped>
.butt{
	text-decoration: none;
  display: inline-block;
  padding: .25em .5em;
	text-align: center;
	font-size: 2.5em;
	border-radius: 50%;
	background-color: #F59A44;
	color: #CF5230;
	margin: .25em;
}
.butt:hover{
	background-color: orangered;
}
.narrow{
	padding: .25em .65em;
}
</style>

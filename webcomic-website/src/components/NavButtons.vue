<template>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.butt{
	text-decoration: none;
    display: inline-block;
    padding: .25em .5em;
	text-align: center;
	font-size: 2.5em;
	border-radius: 50%;
	background-color: #004201;
	color: #00ff00;
	margin: .25em;
}

.butt:hover{
	background-color: lightgrey;
}

.narrow{
	padding: .25em .65em;
}
</style>

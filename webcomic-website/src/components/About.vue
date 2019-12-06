<template>
  <div class="about-page">
    <hr />
    <h1 class="title">ABOUT</h1>
    <hr />
    <div class="blurb">Doctors hate them! <p>Discover the One Weird Tip that four test subjects use to get away from all their problems and hide in the woods all day!</p><p><router-link to="/">Read more now!</router-link></p></div>
    <hr />  
    <p>A strange organization kidnapped Charlie and forced a mysterious entity known as Poiesis to possess zir. The two of them managed to get out due to a series of improbably convenient events, but Poiesis' presence is causing stress to Charlie's psyche that could prove lethal if they can't get her out in time. It's a race against the ticking clock to stay out of reach of the facility hunting them, end the possession, and maybe even get some answers as to why anyone would do this in the first place. </p>
    <hr />
    <p>Haunted and Hunted is a long-form comic by Sasha Hegland. It is an original universe retelling of the Gravity Falls Transcendence AU fanfic of the same name. It sure will have an update schedule one day, I hope.</p> 
    <hr />
    <p>The comic contains discussion of depression, suicide, off-screen institutional abuse, and off-screen medical abuse of children. </p>
    <hr />
    <p>I have attempted to make the comic friendly for screen readers using extensive alt text, if there is anyone who is consuming the comic through that method please let me know if you think I could do something to improve the experience.</p>

  </div>
</template>

<script>
  export default {
  name: 'About'
}
</script>

<style scoped>
  .title{
    color: #F59A44;
    text-align: center;
    text-shadow: 0 0 2px #000000;
    font-size: 50px;
    line-height: 5px;
    padding: 0
  }
  .blurb{
    font-style: italic;
    text-align: center;
  }
  .about-page{
    text-align: left;
  }
</style>

<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I am <strong>Rafael Prates</strong> and this is my portfolio!<br />
        In here, you will be able to take a look at some of my projects, mostly developed in C++.
      </div>

      <div style="margin-top: 20px;">I have worked on <router-link to="/game-projects">a few games</router-link>, a lot of <router-link
          to="/other-projects">exploratory projects</router-link>, and you can take a look at my <router-link to="/resume">resume</router-link> as well.</div>

      <div style="margin-top: 40px;">I am <strong>currently looking for a job</strong> (ideally in the computer graphics area). You can reach me
        <router-link to="/contact">through here</router-link>.</div>
    </div>
    <!--
    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of John" />
    </div>
    -->
    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px) {
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}
</style>
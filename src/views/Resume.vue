<template>
  <div>
    <h1>About me</h1>

    <div class="paragraph">
      <p>
        Hey! I'm <strong>Rafael Prates</strong>, thank you for viewing my portfolio!
      </p>

      <p>
        I describe myself as a curious person and always eager to learn! If there is a topic I'd like to explore, I usually make a small project for it.
        I'm also very communicative and friendly.
      </p>

      <p>
        I've developed mostly in C++, but I'm very familiar with other tech stacks like Java, Python, Unity (just to name a few).
      </p>

      <p>
        For a full CV, please <router-link to="/contact">contact me on LinkedIn</router-link>!
      </p>

      <!--
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div>
      -->
    </div>
    <!--
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>
    -->
    <div style="clear:both"></div>

    <div class="full-content">

      <h2>Languages</h2>

      <h3>Portuguese</h3>
      <div>Native</div>

      <h3>English</h3>
      <div>Native level</div>

      <h3>Japanese</h3>
      <div>Very basic level (so far) but learning every day!</div>

      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ video games</h3>
        <div>Personal favorites include the Shin Megami Tensei series, Mario & Luigi series and Apex Legends.</div>

        <h3>I 🧡 photography</h3>
        <div>Mostly landscape and I have a love spot for night time long exposure photography!</div>
        <!--
        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>
        -->

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
  components: {
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }
}
</style>
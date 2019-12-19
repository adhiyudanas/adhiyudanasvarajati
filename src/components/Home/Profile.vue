<template>
  <div class="p-profile">
    <main class="p-profile__biodata">
      <article>
        <h2>Adhi Yudana Svarajati</h2>
        <p>Hi! My name is Adhi Yudana Svarajati. You can call me Adhi, and I come from Indonesia</p><br>
        <p>Currently I am residing in Japan and work as a Software Engineer</p>
        <p>I do software development ranging from back-end, database, to front-end.</p>
        <p>Let me tell you something. Although I am still learning, I am quite a good learner!</p><br>
        <p>My company is called Tenkai, in Japanese it's 株式会社tenkai</p>
        <p>It's located in Asakusabashi, Tokyo. Here is the link to my company's website</p>
      </article>
    </main>
    <aside class="p-profile__picture">
      <div class="img-wrapper">
        <img class="img-wrapper__element" alt="adhi-yudana-svarajati" src="../../assets/img/adhi.jpg">
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class Profile extends Vue {

}
</script>

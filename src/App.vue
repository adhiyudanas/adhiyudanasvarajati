<template>
  <div class="l-main">
    <Header
      @changetab="changePage"
    />
    <Home v-show="currentPage === 'home'"/>
    <div class="l-main__work" v-show="currentPage === 'work'">
      <h3>Under Construction / 工事中</h3>
    </div>
    <div class="l-main__contact" v-show="currentPage === 'contact'">
      <h3>Under Construction / 工事中</h3>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts">
import '@/scss/index.scss'
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Basic/Header.vue'
import Footer from '@/components/Basic/Footer.vue'
import Home from '@/components/pages/Home.vue'

@Component({
  components: {
    Header,
    Footer,
    Home
  }
})

export default class App extends Vue {
  public currentPage: string = 'home'

  public changePage (value: string) {
    this.currentPage = value
  }
}
</script>

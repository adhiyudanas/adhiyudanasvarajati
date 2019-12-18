<template>
  <div class="l-main">
    <Header/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import '@/scss/index.scss'
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Basic/Header.vue'
import Footer from '@/components/Basic/Footer.vue'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {

}
</script>

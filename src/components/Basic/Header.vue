<template>
  <div class="l-header">
    <div class="l-header__wrapper">
      <h1 class="title">AYS</h1>
    </div>
    <Navigation/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Navigation from '@/components/Basic/Navigation.vue'

@Component({
  components: {
    Navigation
  }
})
export default class Header extends Vue {

}
</script>

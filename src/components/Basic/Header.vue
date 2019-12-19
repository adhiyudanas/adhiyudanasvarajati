<template>
  <div class="l-header">
    <div class="l-header__wrapper">
      <h1 class="title" @mouseover="hoverEventIn" @mouseout="hoverEventOut">AYS</h1>
    </div>
    <Navigation
      @changetab="tabPass"
    />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'
import Navigation from '@/components/Basic/Navigation.vue'

@Component({
  components: {
    Navigation
  }
})
export default class Header extends Vue {
  @Emit() public changetab (v:string) {}

  public tabPass (value: string) {
    this.changetab(value)
  }

  public hoverEventIn (event: Event) {

  }

  public hoverEventOut (event: Event) {

  }
}
</script>

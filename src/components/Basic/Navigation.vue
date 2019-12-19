<template>
  <div class="c-nav">
    <a class="c-nav__element" :class="{'is-active': homeActive}" @click="changeTab('home')">Home</a>
    <a class="c-nav__element" :class="{'is-active': workActive}" @click="changeTab('work')">Work</a>
    <a class="c-nav__element" :class="{'is-active': contactActive}" @click="changeTab('contact')">Contact</a>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {
  @Emit() public changetab (v: string) {}

  public homeActive: boolean = true;
  public workActive: boolean = false;
  public contactActive: boolean = false;

  public changeTab (value: string) {
    this.changetab(value)

    if (value === 'home') {
      this.homeActive = true
      this.workActive = false
      this.contactActive = false
    } else if (value === 'work') {
      this.homeActive = false
      this.workActive = true
      this.contactActive = false
    } else if (value === 'contact') {
      this.homeActive = false
      this.workActive = false
      this.contactActive = true
    }
  }
}
</script>

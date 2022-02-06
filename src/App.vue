<template>
  <div class="main-wrapper">  
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './layouts/Header';

export default {
  components: { Header }
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>

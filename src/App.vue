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

<style scoped src="./styles/main.scss" lang="scss"></style>
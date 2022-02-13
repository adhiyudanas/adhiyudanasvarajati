<template>
    <header>
        <nav id="nav">
          <ul>
            <div class="float-left"><li><HeaderLogo/></li></div>
            <div class="float-right">
              <li><router-link to="/">BIO</router-link> | </li>
              <li><router-link to="/work">WHAT I DO</router-link> | </li>
              <li><router-link to="/contact">CONTACT</router-link></li>
            </div>
          </ul>
        </nav>
    </header>
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo.vue';
export default {
  components: {
    HeaderLogo
  }
};
</script>

<style lang="scss">

</style>

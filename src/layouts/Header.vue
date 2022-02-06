<template>
    <header>
        <nav id="nav">
          <ul>
            <div class="float-left"><li><HeaderLogo/></li></div>
            <div class="float-right">
              <li><router-link to="/">BIO</router-link> | </li>
              <li><router-link to="/work">WORK</router-link> | </li>
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
ul, li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: inline;
}

#nav {
  padding: 30px;

  ul {
    display: flex;
    justify-content: space-between;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}
</style>

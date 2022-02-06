<template>
    <header>
        <nav id="nav">
            <router-link to="/">BIO</router-link> |
            <router-link to="/work">WORK</router-link> |
            <router-link to="/contact">CONTACT</router-link>
        </nav>
    </header>
</template>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

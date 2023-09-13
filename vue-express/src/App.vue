<template>

  <img alt="Vue logo" src="./assets/logo.png" />
  <users-list></users-list>

</template>

<script>

import UsersList from './components/UsersList.vue'

export default {
  name: 'App',
  components: {
    UsersList,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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

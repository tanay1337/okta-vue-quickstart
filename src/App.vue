<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |  
    <router-link to="/about">About</router-link> |
    <router-link to="/profile" v-if='authState && authState.isAuthenticated'>Profile</router-link>
    <a v-if='authState && authState.isAuthenticated' v-on:click='logout'> | Logout</a>
    <a v-else v-on:click='login'>Login</a>
  </div>
  <router-view/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app',
  methods: {
    async login () {
      await this.$auth.signInWithRedirect({ originalUri: '/' })
    },
    async logout () {
      await this.$auth.signOut()
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

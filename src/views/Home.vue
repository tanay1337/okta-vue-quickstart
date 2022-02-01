<template>
  <div class="home">
    <div class="logos">
      <img class="logo" alt="Vue logo" src="../assets/logo.png">
      <img class="logo" alt="Okta logo" src="https://www.okta.com/sites/default/files/Okta_Logo_BrightBlue_Medium.png">
    </div>
    <HelloWorld msg="Welcome to Your Vue.js and Okta App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
.logo {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    height: 70px; 
}

.logos {
    text-align: center;
}
</style>
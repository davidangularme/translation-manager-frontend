<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ApplicationList />
    <TranslationKeys />
  </div>
</template>


<script>

import ApplicationList from './components/ApplicationList.vue'
import TranslationKeys from './components/TranslationKeys.vue'
export default {
  name: 'App',
  components: {
    ApplicationList,
    TranslationKeys
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

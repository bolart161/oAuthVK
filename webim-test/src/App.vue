<template>
  <div id="app">
    <AuthButton/>
  </div>
</template>

<script>
import AuthButton from "./components/AuthButton";

export default {
  name: 'app',
  components: {
    AuthButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

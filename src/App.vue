<template>
  <div id="app">
  <nav>
  <ul>
    <li><router-link v-bind:to="'/'">Home</router-link></li>
    <li><router-link v-bind:to="'/crud'">Events Manager</router-link></li>
    <li><router-link v-bind:to="'/about'">About</router-link></li>
  </ul>
  </nav>
  <router-view></router-view>
  <footer>
    Designed & developed by Tomasz Pięta
    </footer>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'app'
}
</script>

<style src="./App.css"></style>

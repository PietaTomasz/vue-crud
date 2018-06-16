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
    Designed & developed by <a href="mailto:tomaszlukaszpieta@gmail.com?subject=Event Manager">Tomasz Pięta</a>
    </footer>
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'app'
}
</script>

<style src="./App.css"></style>

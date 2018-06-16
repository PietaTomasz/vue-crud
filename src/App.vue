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
  </div>
</template>

<script>/* eslint-disable */
export default {
  name: 'app'
}
</script>

<style>
body {
  background-color: silver;
  margin: 0;
  padding: 0;
  background: url("./assets/bg.jpg");
  background-size: cover;
  background-repeat: repeat;
  animation: 2s ease;
}
nav {
  background-color: black;
  color: white;

  padding: 10px;
}
nav>ul>li>a {
    color: white;
}
li {
  border-bottom: 5px solid darkgrey;
  list-style: none;
  color: white;
}
li:hover {
  border-bottom: 5px solid white;
}
ul {
  display: flex;
  justify-content: space-evenly;
  color: white;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 0 auto;
  font-size: 1.5rem;
}
#about {
  font-size: 1.5rem;
  text-align: center;
  color: black;
  background-color: gray;
  width: 35vw;
  min-width: 300px;
  margin: 20px auto;
  padding: 20px;
}
a {
    text-decoration: none;
    color: black;
    cursor: pointer;
}
.fab {
    animation: scroll 2s ease infinite;
}
@keyframes scroll {
    0% { transform: scale(1) }
    50% { transform: scale(1.5) }
    100% { transform: scale(1) }    
}

#crud {
  width: 90vw;
  min-height: 80vh;
  background-color: gray;
  margin: 10px auto;
}
</style>

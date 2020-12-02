<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  text-align: center;
  margin-top: 60px;
}
html{
  height: 100%;
}
body{
  //min-height: 100vh;
  //background-color: #343a40;;
  background-image: url("assets/img/pattern-ophelia-wallpaper.png");
  //background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
  ul{
  list-style-type: none;
  }
</style>

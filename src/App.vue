<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/index">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cardpage">Features</router-link>
          </li>          
        </ul>
      </div>
    </nav>

    <img src="./assets/logo.png" />
    <!-- <HelloWorld /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created() {
    this.$http.get("https://randomuser.me/api/").then((response) => {
      console.log(response.data);
    });
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary background-nav">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">YGNAir</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'cloudflare'}">Cloudflare Cache</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'blog'}">Blog</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 55px;
}
.background-nav {
    background-color: #fff; /* Background color of the navigation bar */
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Drop shadow effect */
}
.navbar-brand {
    color: #b303a1 !important;
    font-weight: 500;
}
.nav-item a {
    color: #b303a1 !important;
}
</style>

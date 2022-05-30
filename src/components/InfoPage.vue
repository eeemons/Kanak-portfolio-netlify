<script setup>
import { ref } from "vue";
import InfoPageStudio from "./InfoPageStudio.vue";
import Footer from "./Footer.vue";
const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <div class="sidenav">
    <a class="links" href="#News">News</a>
    <a class="links" href="#About">About</a>
    <a class="links" href="#Studio">Studio</a>
    <a class="links" href="#Award">Award</a>
    <a class="links" href="#Shop">Shop</a>
    <a class="links" href="#Jobs">Jobs</a>
    <router-link class="no-decoration" :to="{ name: 'Contacts' }">
      <a class="links" href="">Contacts</a>
    </router-link>
  </div>
  <div class="mainContent">
    <InfoPageStudio />
  </div>
  <Footer />
</template>
<style scoped>
body {
  font-family: "Lato", sans-serif;
}
.no-decoration {
  text-decoration: none;
  color: inherit;
}
.sidenav {
  width: 6.5%;
  height: 53%;
  position: fixed;
  top: 20px;
  left: 10px;
  overflow-x: hidden;
  transform: translate(190%, 30%);
  border-right: 1px solid red;
}

.links {
  text-decoration: none;
  font-size: 1vw;
  color: black;
  display: block;
  padding: 0;
  margin: 0;
  font: inherit;
  text-align: right;
  margin-right: 10px;
}

.sidenav a:hover {
  color: red;
}
</style>

<script setup>
import { ref } from "vue";
import InfoPageStudio from "./InfoPageStudio.vue";
const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <div class="sidenav">
    <a href="#Studio">Studio</a>
    <a href="#News">News</a>
    <a href="#About">About</a>
    <a href="#Award">Award</a>
    <a href="#Shop">Shop</a>
    <a href="#Jobs">Jobs</a>
    <a href="contacts">Contact</a>
  </div>
  <div class="mainContent">
    <InfoPageStudio />
  </div>
</template>
<style scoped>
body {
  font-family: "Lato", sans-serif;
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

.sidenav a {
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

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
@media screen and (max-height: 414px) {
  .sidenav a {
    font-size: 4vw;
    margin-left: 0;
  }
}
</style>

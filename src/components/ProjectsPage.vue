<script setup>
import { ref } from "vue";
import StatusProjectPage from "./StatusProjectPage.vue";
import ScrollingGridProjectPage from "./ScrollingGridProjectPage.vue";
import Footer from "./Footer.vue";
const slideName = ref("");
const transitiontime = ref(2000);
</script>

<script>
export default {
  data() {
    return {
      container: false,
    };
  },

  created() {
    setTimeout(() => (this.container = true), 3810);
  },
};
</script>

<template>
  <div v-show="container">
    <ScrollingGridProjectPage />
    <!-- <StatusProjectPage /> -->
    <div class="floatingWindow">
      <a href="">Scrolling-Grid</a>
      <a href="">Status</a>
      <a href="">Location</a>
    </div>
  </div>
  <Footer />
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");
* {
  font-family: "Lato", sans-serif;
}

.floatingWindow {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  margin-left: 15%;
  margin-top: 3%;
}
.floatingWindow a {
  text-decoration: none;
  color: black;
  font-weight: 800;
}
.floatingWindow a:hover {
  color: red;
}
</style>

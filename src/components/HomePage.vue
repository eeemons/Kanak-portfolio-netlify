<script setup>
import { ref } from "vue";
import Footer from "./Footer.vue";
const slide = ref("");
const transitiontime = ref(true);
</script>

<script>
export default {
  data() {
    return {
      home: false,
    };
  },

  created() {
    setTimeout(() => (this.home = true), 3810);
  },
};
</script>

<template>
  <div class="home" v-show="home">
    <q-page-container class="bg-primary row justify-center items-center">
      <!-- <div class="row justify-center items-center"> -->

      <q-carousel
        v-model="slide"
        :autoplay="transitiontime"
        no-route-fullscreen-exit
        animated
        infinite
        height="90%"
        class="text-purple rounded-borders"
        transition-next="slide-left"
        transition-prev="slide-right"
      >
        <q-carousel-slide name="a" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/mSh95s4/01-Front-Slide.jpg"
            class="responsive transition-image"
            rel="preload"
          />
        </q-carousel-slide>
        <q-carousel-slide name="b" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/S597Prm/02-1-Front-Slide.jpg"
            class="responsive transition-image"
            rel="preload"
          />
        </q-carousel-slide>
        <q-carousel-slide name="c" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/0tt4pMK/02-2-Front-Slide.jpg"
            class="responsive transition-image"
            rel="preload"
          />
        </q-carousel-slide>
        <q-carousel-slide name="d" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/YPgLQ0g/02-Front-Slide.jpg"
            class="responsive transition-image"
            rel="preload"
          />
        </q-carousel-slide>
        <q-carousel-slide name="e" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/HgxSz4r/03-Front-Slide.jpg"
            class="responsive transition-image"
            rel="preload"
          />
        </q-carousel-slide>
        <q-carousel-slide name="f" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/dfwjj68/04-Front-Slide.jpg"
            class="responsive transition-image"
            rel="preload"
          />
        </q-carousel-slide>
        <q-carousel-slide name="g" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/fry25mt/05-Front-Slide.jpg"
            class="responsive transition-image"
            rel="preload"
          />
        </q-carousel-slide>
        <q-carousel-slide name="h" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/XpxQjf4/10-Front-Slide.jpg"
            class="responsive transition-image"
            rel="preload"
          />
        </q-carousel-slide>
      </q-carousel>
      <!-- </div> -->
    </q-page-container>
  </div>
  <Footer />
</template>

<style scoped>
.home {
  display: grid;
}
.transition-image {
  object-fit: cover;
  width: 100%;
  height: auto;
  max-width: 1200px;
  max-height: 668px;
  overflow: hidden;
  justify-items: center;
}
@media (max-width: 500px) {
  .transition-image {
    width: 100%;
    height: auto;
    padding-top: 50%;
  }
}
@media (width: 820px) {
  .transition-image {
    width: 100%;
    height: auto;
    padding-top: 40%;
  }
}
@media (width: 768px) {
  .transition-image {
    width: 100%;
    height: auto;
    padding-top: 35%;
  }
}
</style>

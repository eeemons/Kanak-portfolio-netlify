<script setup>
import { ref } from "vue";
const slideName = ref("");
const transitiontime = ref(8000);
</script>
+

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
        v-model="slideName"
        :autoplay="transitiontime"
        no-route-fullscreen-exit
        animated
        infinite
        height="90%"
        class="text-purple rounded-borders"
      >
        <q-carousel-slide name="a" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/h8p5Ns3/01-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="b" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/5B1D95D/02-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="c" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/RyTL21n/03-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="d" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/m9kdV5t/04-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="e" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/1z0vZPd/05-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="f" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/NLNBnWR/07-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="g" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/d02gf5y/08-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="h" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/BrhgnZ0/09-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="i" class="column no-wrap flex-center">
          <img
            src="https://i.ibb.co/dpVLdz7/10-Front-Slide.jpg"
            class="responsive transition-image"
          />
        </q-carousel-slide>
      </q-carousel>
      <!-- </div> -->
    </q-page-container>
  </div>
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

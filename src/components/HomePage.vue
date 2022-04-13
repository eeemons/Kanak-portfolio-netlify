<script setup>
import { ref } from "vue";
const slideName = ref("");
const transitiontime = ref(2000);
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
  <div v-show="home">
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
            src="https://s3.brilliant.com.bd/chinta/small/01.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="b" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/02.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="c" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/03.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="d" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/04.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="e" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/05.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="f" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/06.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="g" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/07.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="h" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/08.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="i" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/09.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="j" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/10.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
        <q-carousel-slide name="k" class="column no-wrap flex-center">
          <img
            src="https://s3.brilliant.com.bd/chinta/small/11.png"
            class="responsive transition-image"
          />
        </q-carousel-slide>
      </q-carousel>
      <!-- </div> -->
    </q-page-container>
  </div>
</template>

<style scoped>
.transition-image {
  width: auto;
  height: 100%;
}
</style>

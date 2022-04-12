<script setup>
import { ref } from "vue";
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
  <div class="container" v-show="container">
    <img src="https://s3.brilliant.com.bd/chinta/small/01.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/02.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/03.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/04.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/05.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/06.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/07.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/08.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/09.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/10.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/11.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/12.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/13.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/14.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/15.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/16.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/17.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/18.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/19.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/20.png" />
    <img src="https://s3.brilliant.com.bd/chinta/small/21.png" />
    <div class="q-pa-md" style="max-width: 350px">
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section>LOCATION</q-item-section>
        </q-item>

        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>GRID</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label>STATUS</q-item-label>
            <q-item-label caption></q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
  <!-- <div class="floating-window">
    <ul>
      <li>Location</li>
      <li>Grid</li>
      <li>Status</li>
    </ul>
  </div> -->
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* template{
  min-height: 100vh;
  overflow-x: hidden;
} */
.container {
  padding-top: 2.5rem;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  width: 97vw;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 190px));
  column-gap: 10px;
  row-gap: 1px;
}
.container img {
  width: 200px;
  height: 150px;
  object-fit: cover;
  object-position: center;
}
.container img:hover {
  cursor: pointer;
  transition: 0.5s;
  transform: scale(1.5);
}
</style>

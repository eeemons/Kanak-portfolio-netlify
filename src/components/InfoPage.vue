<script setup>
import { ref } from "vue";
import InfoPageStudio from "./InfoPageStudio.vue";
const leftDrawerOpen = ref(true);
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    :width="200"
    :breakpoint="500"
  >
    <q-list padding class="menu-list">
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> Studio </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> News </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> About </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> Awards </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> Events </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> Video </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> Shop </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> Jobs </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> Contact </q-item-section>
      </q-item>

      <q-item>
        <q-item-section> </q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section class="text-center"> Chinta </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
  <q-page-container class="bg-primary">
    <!-- <div class="bg-primary row justify-center items-center">
      <h3>Info Page</h3>
    </div> -->
    <info-page-studio />
  </q-page-container>
</template>
<style scoped></style>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from './components/Navbar.vue'
import LoadingScreen from './components/LoadingScreen.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <Navbar />
    <router-view/>
    <LoadingScreen/>
  </q-layout>
</template>

<style>

</style>

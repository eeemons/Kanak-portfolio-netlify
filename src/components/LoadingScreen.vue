<script>
export default {
  data() {
    return {
      stratupLogo: true,
    };
  },

  created() {
    setTimeout(() => (this.stratupLogo = false), 3800);
  },
};
</script>
<template>
  <div v-show="stratupLogo" class="loadingScreen">
    <img src="../assets/preloader/loader.gif" />
  </div>
</template>

<style>
.loadingScreen img {
  width: auto;
  height: 160px;
}
.loadingScreen {
  transform: translate(40vw, 35vh);
}
</style>

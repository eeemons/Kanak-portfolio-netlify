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
.loadingScreen {
  background-size: 100%;
  width: auto;
  height: 160px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loadingScreen img {
  width: auto;
  height: 160px;
}
</style>

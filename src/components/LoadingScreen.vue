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
  width: 40rem;
  height: 20rem;
}
.loadingScreen {
  display: flex;
  justify-content: center;
  transform: translate(0%, 50%);
}
</style>

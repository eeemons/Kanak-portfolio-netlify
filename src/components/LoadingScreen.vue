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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform: translate(3.5%, 260.2%);
}
@media screen and (max-width: 450px) {
  .loadingScreen {
    transform: translate(15%, 200%);
  }
}
</style>

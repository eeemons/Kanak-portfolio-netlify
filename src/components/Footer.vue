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
    <footer>Footer</footer>
  </div>
</template>

<style>
footer {
  padding-top: 5%;
}
</style>

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
  <div class="footerContainer" v-show="home">
    <div class="socials">
      <a
        href="https://www.instagram.com/explore/locations/105527485342163/chinta/"
      >
        <img class="instagram" src="../assets/INS.png" alt="" />
      </a>
      <a
        href="https://www.linkedin.com/search/results/all/?keywords=chinta%20sthapatya&origin=GLOBAL_SEARCH_HEADER&sid=(4U"
      >
        <img class="linkedin" src="../assets/Link.png" alt="" />
      </a>
    </div>
    <div class="copyright">
      Copyright © 2022 Chinta Sthapatya. All Rights Reserved
    </div>
  </div>
</template>

<style scoped>
footer {
  padding-top: 5%;
}
.footerContainer {
  padding-top: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.socials {
  display: flex;
  flex-direction: row;
}
.instagram {
  width: 15px;
  height: 15px;
  margin-right: 3px;
}
.linkedin {
  width: 15px;
  height: 15px;
}
.copyright {
  padding: 0;
  margin: 0 5% 0 0;
  display: inline;
}
</style>

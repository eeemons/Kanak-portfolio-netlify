<script>
// If VueApp is already registered with VueEasyLightbox, there is no need to register it here.
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      imgs: "", // Img Url , string or Array of string
      visible: false,
      index: null, // default: 0
      loop: true,
    };
  },

  methods: {
    showMultiple() {
      this.imgs = [
        "https://i.ibb.co/JBbBzHd/20-2.jpg",
        "https://i.ibb.co/Vv3J4YS/20.jpg",
        "https://i.ibb.co/XzLyfN3/21.jpg",
        "https://i.ibb.co/c8GkFwg/24.jpg",
        "https://i.ibb.co/yh7qcRD/25.jpg",
        "https://i.ibb.co/M6NDP93/26.jpg",
        "https://i.ibb.co/c6rx081/27-2.jpg",
        "https://i.ibb.co/dDwpFpk/27.jpg",
        "https://i.ibb.co/L5TDT6Z/28.jpg",
        "https://i.ibb.co/BVwh8LL/32.jpg",
      ];
      // allow mixing

      this.index = 0; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
<template>
  <div>
    <!-- <button @click="showMultiple">Show a group of pictures.</button> -->
    <div class="gridContainer" @click="showMultiple">
      <h5>Project gallery</h5>
      <div class="imgGrid">
        <img src="https://i.ibb.co/JBbBzHd/20-2.jpg" alt="" />
        <img src="https://i.ibb.co/Vv3J4YS/20.jpg" alt="" />
        <img src="https://i.ibb.co/XzLyfN3/21.jpg" alt="" />
        <img src="https://i.ibb.co/c8GkFwg/24.jpg" alt="" />
        <img src="https://i.ibb.co/yh7qcRD/25.jpg" alt="" />
      </div>
      <div class="imgGrid">
        <img src="https://i.ibb.co/M6NDP93/26.jpg" alt="" />
        <img src="https://i.ibb.co/c6rx081/27-2.jpg" alt="" />
        <img src="https://i.ibb.co/dDwpFpk/27.jpg" alt="" />
        <img src="https://i.ibb.co/L5TDT6Z/28.jpg" alt="" />
        <img src="https://i.ibb.co/BVwh8LL/32.jpg" alt="" />
      </div>
    </div>
    <!-- all props & events -->
    <vue-easy-lightbox
      scrollDisabled
      escEnabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      :loop="loop"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>
<style scoped>
.gridContainer {
  width: auto;
  height: 100%;
  cursor: pointer;
}
.imgGrid {
  display: flex;
  width: fit-content;
}
.imgGrid img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  object-position: 100% 0;
  padding: 10px;
}

.column {
  flex: 50%;
  height: fit-content;
}
</style>
>

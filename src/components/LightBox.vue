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
      index: 0, // default: 0
      loop: true,
    };
  },

  methods: {
    showMultiple() {
      this.imgs = [
        "https://i.ibb.co/f8drz3t/1.jpg",
        "https://i.ibb.co/zHhB7H0/2.jpg",
        "https://i.ibb.co/2hfsf8z/3.jpg",
        "https://i.ibb.co/GRjKVjW/4.jpg",
        "https://i.ibb.co/BCBfjv2/5.jpg",
        "https://i.ibb.co/K05ZVbn/6.jpg",
        "https://i.ibb.co/xHt3WMz/7.jpg",
        "https://i.ibb.co/QrcsCBY/8-1.jpg",
        "https://i.ibb.co/JtC4zDy/16.jpg",
        "https://i.ibb.co/r2TR8vT/15.jpg",
        "https://i.ibb.co/10fWvDY/18.jpg",
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
      <div class="imgGrid">
        <div class="column">
          <img src="https://i.ibb.co/f8drz3t/1.jpg" alt="1" border="0" />
          <img src="https://i.ibb.co/zHhB7H0/2.jpg" alt="2" border="0" />
          <img src="https://i.ibb.co/2hfsf8z/3.jpg" alt="3" border="0" />
          <img src="https://i.ibb.co/GRjKVjW/4.jpg" alt="4" border="0" />
        </div>
        <div class="column">
          <img src="https://i.ibb.co/BCBfjv2/5.jpg" alt="5" border="0" />
          <img src="https://i.ibb.co/K05ZVbn/6.jpg" alt="6" border="0" />
          <img src="https://i.ibb.co/xHt3WMz/7.jpg" alt="7" border="0" />
          <img src="https://i.ibb.co/QrcsCBY/8-1.jpg" alt="8-1" border="0" />
        </div>
        <div class="column">
          <img src="https://i.ibb.co/JtC4zDy/16.jpg" alt="16" border="0" />
          <img src="https://i.ibb.co/r2TR8vT/15.jpg" alt="15" border="0" />
          <img src="https://i.ibb.co/10fWvDY/18.jpg" alt="18" border="0" />
          <img src="https://i.ibb.co/JBbBzHd/20-2.jpg" alt="20-2" border="0" />
        </div>
      </div>
      <div class="imgGrid">
        <div class="column">
          <img src="https://i.ibb.co/Vv3J4YS/20.jpg" alt="20" border="0" />
          <img src="https://i.ibb.co/XzLyfN3/21.jpg" alt="21" border="0" />
          <img src="https://i.ibb.co/c8GkFwg/24.jpg" alt="24" border="0" />
          <img src="https://i.ibb.co/yh7qcRD/25.jpg" alt="25" border="0" />
        </div>
        <div class="column">
          <img src="https://i.ibb.co/M6NDP93/26.jpg" alt="26" border="0" />
          <img src="https://i.ibb.co/c6rx081/27-2.jpg" alt="27-2" border="0" />
          <img src="https://i.ibb.co/dDwpFpk/27.jpg" alt="27" border="0" />
          <img src="https://i.ibb.co/L5TDT6Z/28.jpg" alt="28" border="0" />
          <img src="https://i.ibb.co/BVwh8LL/32.jpg" alt="32" border="0" />
        </div>
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
  flex-wrap: wrap;
  width: auto;
  height: 100%;
}

.column {
  flex: 50%;
  height: fit-content;
}
</style>
>

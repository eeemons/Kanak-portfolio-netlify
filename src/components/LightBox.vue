<template>
  <div>
    <button @click="showMultiple">Show a group of pictures.</button>

    <!-- all props & events -->
    <vue-easy-lightbox
      scrollDisabled
      escEnabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    ></vue-easy-lightbox>
  </div>
</template>

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
    };
  },

  methods: {
    showMultiple() {
      this.imgs = [
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

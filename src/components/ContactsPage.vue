<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
    };
  },
};
</script>
<template>
  <div class="contact">
    <q-page-container class="bg-primary row justify-center items-center">
      <div class="card-width">
        <q-card class="my-card" flat>
          <q-card-section horizontal>
            <q-card-section>
              <div class="middle-text">
                <!-- <h4 class="feedback">DROP US A LINE!</h4> -->
                <q-input
                  v-model="text"
                  label="DROP US A LINE!"
                  label-color="black"
                  maxlength="120"
                  :dense="dense"
                >
                  <template v-slot:append>
                    <q-icon
                      v-if="text !== ''"
                      name="close"
                      @click="text = ''"
                      class="cursor-pointer"
                    />
                  </template>

                  <template v-slot:after>
                    <q-btn round color="black" dense flat icon="send" />
                  </template>
                </q-input>
                <br />
                <p>
                  We would love to hear from you so don't hesitate to say hi!
                </p>

                <p>
                  +8801970785096<br />
                  info@chintaarchitects.com
                </p>

                <p>
                  Chinta Sthapatya 145/D1 Green Road<br />
                  Dhaka-1215
                </p>
              </div>
              <ul class="social-link">
                <li><a href="#">Twitter</a></li>
                <li>
                  <a href="https://www.linkedin.com/in/kanakmahmud/"
                    >LinkedIn</a
                  >
                </li>
                <li>
                  <a href="https://www.instagram.com/chintaarchitects/"
                    >Instagram</a
                  >
                </li>
                <li>
                  <a href="https://www.facebook.com/chintasthapatya"
                    >Facebook</a
                  >
                </li>
              </ul>
            </q-card-section>
            <q-separator vertical />
            <q-card-section>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="400rem"
                    height="400rem"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=CHINTA%20STHAPATYA&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <br />
                  <!-- <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style>
                        <a href="https://www.embedgooglemap.net">embedded maps google</a>
                        <style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style> -->
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  overflow-x: auto;
  justify-content: unset;
  padding: 5rem;
}
.studio-image {
  width: 15rem;
  height: 15rem;
}
.card-width {
  padding-top: 5rem;
}
.middle-text {
  padding-top: 4.5rem;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 25rem;
  width: 25rem;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 25rem;
  width: 25rem;
}
.social-link {
  display: flex;
  justify-content: space-between;
  min-width: 18rem;
  list-style-type: none;
  padding: 0;
}
.social-link a {
  text-decoration: none;
  color: black;
  font-weight: 700;
}
.feedback:hover {
  color: rgb(0, 175, 234);
}

.feedback:after {
  content: "";
  position: absolute;
  background-color: rgb(20, 132, 177);
  height: 3px;
  width: 0;
  left: 0;
  bottom: -5px;
  transform-origin: bottom right;
  transition: 0.3s;
  transform: translate(0px, -16rem);
}

.feedback:hover:after {
  width: 18rem;
}
</style>

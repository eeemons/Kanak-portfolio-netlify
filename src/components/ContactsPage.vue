<script>
import { ref } from "vue";
import FeedbackForm from "./FeedbackForm.vue";

export default {
  components: {
    FeedbackForm,
  },
  data() {
    return {
      show: false,
      feedbacktxt: "",
    };
  },
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
      popupTriggers,
      TogglePopup,
      isVisible: false,
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
                <textarea
                  :class="{ invisible: (isVisible = !isVisible) }"
                  v-model="feedbacktxt"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
                <div class="tagline" v-show="!show">
                  <p @click="show = !show">DROP US A LINE</p>
                </div>
                <!-- <div class="ftxt">{{ feedbacktxt }}</div> -->

                <div v-show="show" class="feedbackInput">
                  <input type="text" v-model="feedbacktxt" />
                  <button @click="() => TogglePopup('buttonTrigger')">
                    &#9654;
                  </button>
                </div>
                <br />
                <p @click="show = false">
                  We would love to hear from you so don't hesitate to say hi!
                </p>

                <p>
                  +8801970785096<br />
                  info@chintaarchitects.com
                </p>

                <p>
                  CHINTA STHAPATYA, Level-5, House-25/2, Road No-15 (new) 28
                  (old)
                  <br />
                  Dhaka 1205, Bangladesh
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

            <q-card-section>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="600"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Chinta,%20CHINTA%20STHAPATYA,%20Level-5&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>
    <FeedbackForm
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
    </FeedbackForm>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");
* {
  font-family: "Lato", sans-serif;
}
.contact {
  transform: translate(0, 10%);
  overflow-x: auto;
}
.studio-image {
  width: 15rem;
  height: 15rem;
}

.middle-text {
  margin-top: 10%;
}
.mapouter {
  position: relative;
  text-align: right;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
#gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 28rem;
  width: 40rem;
  margin-top: 10%;
}
.ftxt {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
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

.feedbackInput {
  display: flex;
  flex-direction: row;
}
.feedbackInput input {
  width: 60%;
  height: 23.2px;
  border: solid 2px black;
  align-items: right;
  justify-content: right;
  outline: none;
  caret-color: blue;
}
.feedbackInput button {
  color: white;
  background: black;
  outline: none;
  border: none;
  width: 10%;
  height: 23.2px;
}

.tagline {
  display: inline-block;
  position: relative;
  font-size: 14px;
  font-weight: 800;
  display: flex;
}

.tagline:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 14px;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.tagline:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>

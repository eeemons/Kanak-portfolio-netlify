<script setup>
import Footer from "./Footer.vue";
import LightBox from "./LightBox.vue";
</script>
<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<template>
  <div class="card">
    <div class="sectionOne">
      <img
        src="https://i.ibb.co/gjCvRjg/17.jpg"
        alt="Avatar"
        style="width: 100%"
      />
      <div class="container">
        <p class="title">Aloks's Vacation House</p>
        <p class="other"><b>Type:</b> Residential</p>
        <p class="other"><b>Status:</b> Idea</p>
        <p class="other"><b>Principal Archite</b>ct: Mahmudul Gani Kanak</p>
        <p class="other">
          <b>Deasign Team:</b> Argha Mitra Chowdhury Ahsan Habib Puja Bashak
        </p>
        <p class="other"><b>Landscape:</b> Majeda Tumpa</p>
        <p class="other"><b>Engineer:</b> Task</p>

        <div v-show="!visible">
          <p class="other"><b>Task Construction Firm:</b></p>
          <p class="other"><b>Photograph:</b></p>
          <p class="other"><b>Location:</b> Bashundhara, Dhaka, Bangladesh</p>
          <p class="other"><b>Size:</b> 7200sft</p>
          <p class="other"><b>Year:</b>2021</p>
        </div>

        <button
          class="visibility"
          href="#"
          v-show="visible"
          @click="visible = !visible"
        >
          More specs
        </button>
        <button
          class="visibility"
          href="#"
          v-show="!visible"
          @click="visible = !visible"
        >
          Less specs
        </button>
      </div>
    </div>
    <div class="writeup">
      <div class="row">
        <div class="column">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="column">
          <img
            src="https://i.ibb.co/8g72zh7/Port-20-2.jpg"
            alt="Port-20-2"
            border="0"
          />
        </div>
      </div>
    </div>
    <div class="projectDisplay">
      <img src="https://i.ibb.co/BVwh8LL/32.jpg" alt="32" border="0" />
      <div class="spacer"></div>
      <img src="https://i.ibb.co/HHKDP5z/02.gif" alt="02" border="0" />
      <div class="spacer"></div>
      <img src="https://i.ibb.co/L5TDT6Z/28.jpg" alt="28" border="0" />
      <div class="spacer"></div>
      <img src="https://i.ibb.co/yh7qcRD/25.jpg" alt="25" border="0" />
    </div>
    <div>
      <LightBox />
    </div>
    <Footer />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");
* {
  font-family: "Lato", sans-serif;
}
.card {
  width: 48%;
  margin: 0 auto;
}
.sectionOne {
  height: 100vh;
  margin-bottom: 100px;
  min-height: 800px;
}
.container {
  padding: 0;
  margin: 0;
}
.title {
  font-weight: 800;
  margin: 0;
  padding-bottom: 5px;
  font-size: 20px;
}
.other {
  padding: 0;
  margin: 0;
}
.writeup {
  box-sizing: border-box;
  height: 30vh;
  min-height: 400px;
}
/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  min-width: 200px;
}
.column img {
  width: 100%;
  height: auto;
}
.projectDisplay {
  margin-top: 250px;
}
.projectDisplay img {
  width: 100%;
  height: auto;
}
.spacer {
  margin-top: 100px;
}
.visibility {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: black;
}
</style>

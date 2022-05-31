<script setup>
import Footer from "./Footer.vue";
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
        <p class="other">Type: Residential</p>
        <p class="other">Status: Idea</p>
        <p class="other">Principal Architect: Mahmudul Gani Kanak</p>
        <p class="other">
          Deasign Team: Argha Mitra Chowdhury Ahsan Habib Puja Bashak
        </p>
        <p class="other">Landscape:</p>
        <p class="other">Majeda Tumpa Engineer:</p>
        <p class="other">Task Construction Firm:</p>
        <p class="other">Photograph:</p>
        <p class="other">
          Location: Bashundhara, Dhaka, Bangladesh Size: 7200sft Year: 2021
        </p>
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
          <img src="https://i.ibb.co/gjCvRjg/17.jpg" alt="17" border="0" />
        </div>
      </div>
    </div>
    <div class="projectDisplay">
      <img src="https://i.ibb.co/BVwh8LL/32.jpg" alt="32" border="0" />
    </div>
  </div>
  <footer>
    <Footer />
  </footer>
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
  height: 150vh;
}
.container {
  padding: 0;
  margin: 0;
}
.title {
  font-weight: 800;
  margin: 0;
}
.other {
  padding: 0;
  margin: 0;
}

.writeup {
  box-sizing: border-box;
  height: 100vh;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
}
.column img {
  width: 100%;
  height: auto;
}
.projectDisplay img {
  width: 100%;
  height: auto;
}
</style>

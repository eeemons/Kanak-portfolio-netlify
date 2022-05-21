<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <div class="user-form">
        <div class="container">
          <div class="name">
            <input type="text" placeholder="Your Name" />
            <button @click="TogglePopup()">x</button>
          </div>
          <br />
          <div class="company">
            <input type="text" placeholder="Company Name" />
          </div>
          <br />
          <div class="subject">
            <input type="text" placeholder="Subject" />
          </div>
          <br />
          <div class="email">
            <input type="text" placeholder="Email Adress" />
          </div>
          <br />
          <div class="contact">
            <input type="text" placeholder="Contact Number(Optional)" />
          </div>
        </div>
        <button class="submit" @keyup.enter="submit()">&#10004;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");

.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-inner {
  background: none;
  padding: 5%;
}
.user-form {
  font-family: "Lato", sans-serif;
  width: 300px;
  padding: 30px;
  background: #ffffff;
  margin: auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
}
.container {
  display: flex;
  flex-direction: column;
  font-family: "Lato", sans-serif;
}

input {
  width: 230px;
  height: 20px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  font-family: "Lato", sans-serif;
}
input:focus {
  outline: none;
}
.name button {
  transform: translate(22px, -25px);
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: red;
}
.submit {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  transform: translate(245px, 10px);
}
</style>

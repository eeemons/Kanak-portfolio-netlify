<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <div class="user-form">
        <h2>User Credentials</h2>
        <form>
          <input type="text" name="field1" placeholder="Full Name" />
          <input type="email" name="field2" placeholder="Email" />
          <input type="button" value="Send Message" />
          <input type="button" @click="TogglePopup()" value="Close" />
        </form>
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
  font-family: "Open Sans Condensed", arial, sans;
  width: 100%;
  padding: 30px;
  background: #ffffff;
  margin: auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
}
.user-form h2 {
  background: #4d4d4d;
  text-transform: uppercase;
  font-family: "Open Sans Condensed", sans-serif;
  color: #797979;
  font-size: 2rem;
  font-weight: 100;
  padding: 20px;
  margin: -30px -30px 30px -30px;
}
.user-form input[type="text"],
.user-form input[type="email"],
.user-form textarea,
.user-form select {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: none;
  display: block;
  width: 100%;
  padding: 7px;
  border: none;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  font: 16px Arial, Helvetica, sans-serif;
  height: 45px;
}
.user-form textarea {
  resize: none;
  overflow: hidden;
}
.user-form input[type="button"],
.user-form input[type="submit"] {
  -moz-box-shadow: inset 0px 1px 0px 0px #45d6d6;
  -webkit-box-shadow: inset 0px 1px 0px 0px #45d6d6;
  box-shadow: inset 0px 1px 0px 0px #45d6d6;
  background-color: #2cbbbb;
  border: 1px solid #27a0a0;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 14px;
  padding: 8px 18px;
  text-decoration: none;
  text-transform: uppercase;
}
.user-form input[type="button"]:hover,
.user-form input[type="submit"]:hover {
  background: linear-gradient(to bottom, #34caca 5%, #30c9c9 100%);
  background-color: #34caca;
}
</style>

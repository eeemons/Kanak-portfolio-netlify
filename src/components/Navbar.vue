<script setup>
import { ref } from "vue";
// let is_searchbar = ref(false);
// let searchText = ref("");
</script>
<script>
export default {
  data() {
    return {
      navbar: false,
      isVisible: false,
    };
  },

  created() {
    setTimeout(() => (this.navbar = true), 3810);
  },
};
</script>

<template>
  <div class="top" v-show="navbar">
    <router-link class="no-decoration" :to="{ name: 'Home' }">
      <img
        class="logo"
        src="https://s3.brilliant.com.bd/simon_projects/kanak-logo-small.svg"
      />
    </router-link>
    <ul class="menuItems">
      <transition name="slide-fade">
        <div :class="{ invisible: !isVisible }">
          <router-link class="no-decoration" :to="{ name: 'Projects' }">
            <ul class="menu">
              <li class="menuHover">Projects</li>
            </ul>
          </router-link>
          <router-link class="no-decoration" :to="{ name: 'Info' }">
            <ul class="menu">
              <li class="menuHover">Info</li>
            </ul>
          </router-link>
          <router-link class="no-decoration" :to="{ name: 'Contacts' }">
            <ul class="menu">
              <li class="menuHover">Contacts</li>
            </ul>
          </router-link>
        </div>
      </transition>
      <button v-on:click="isVisible = !isVisible" v-show="!isVisible">
        &vellip;
      </button>
      <button
        style="color: red"
        v-on:click="isVisible = !isVisible"
        v-show="isVisible"
      >
        &#124;
      </button>
      <div v-on:click="isVisible = false" class="searchbar">
        <input class="text" type="text" />
        <span class="diagonal"> </span>
      </div>
    </ul>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap");
* {
  font-family: "Lato", sans-serif;
}
.top {
  display: flex;
  justify-content: center;
  position: relative;
  padding-top: 1%;
}
li {
  list-style-type: none;
}
.menuItems {
  display: flex;
  overflow: visible;
  transform-origin: right;
  transition: transform 0.4s ease-in-out;
  margin-left: 35%;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  margin: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 20px;
}

.no-decoration {
  text-decoration: none;
  color: inherit;
}
.searchbar {
  display: inline;
  float: right;
  padding-left: 8px;
  padding-top: 3px;
}

.logo {
  height: 2.5rem;
  widows: 2.5rem;
  padding-right: 6rem;
}
.text {
  width: 1rem;
  height: 1rem;
  border-radius: 1.563rem;
  border: 1.5px solid black;
  transition: 0.3s;
  caret-color: red;
}
.text:focus {
  border-radius: 1.563rem;
  border: 1.5px black;
  padding: 0.4rem;
  width: 12.5rem;
  height: 1rem;
  caret-color: red;
  text-align: right;
  outline: 1px solid black;
}
.diagonal {
  display: inline-block;
  transform: rotate(-53deg);
  height: 4px;
  border-left: solid 2px;
  vertical-align: -4px;
  transition: 0.3s;
}

.text:focus ~ .diagonal {
  height: 0px;
  transform: translate(-19px, -18px);
  transition: 0.3s ease-in-out;
}
@media screen and (max-width: 700px) {
  .logo {
    height: 2.5rem;
    widows: 2.5rem;
    padding-right: 0rem;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding-left: 0rem;
  }
  .text:focus {
    border-radius: 1.563rem;
    border: 1.5px solid black;
    padding: 0.4rem;
    width: 4rem;
    height: 1rem;
    caret-color: red;
    text-align: right;
  }
  .menu {
    padding: 3px;
  }
}
@media screen and (max-width: 827px) {
  .text:focus {
    border-radius: 1.563rem;
    border: 1.5px solid black;
    padding: 0.4rem;
    width: 6rem;
    height: 1rem;
    caret-color: red;
    text-align: right;
  }
}
.menu {
  display: inline-block;
  position: relative;
  padding: 0;
  margin-top: 5px;
  margin-right: 8px;
  margin-bottom: 0px;
  margin-left: 0px;
}
.menuHover:after {
  content: "";
  background-color: rgb(20, 132, 177);
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #0087ca;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.menuHover:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>

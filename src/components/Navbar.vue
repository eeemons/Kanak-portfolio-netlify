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
      <router-link class="no-decoration" :to="{ name: 'Projects' }">
        <ul v-show="isVisible" class="menu">
          Projects
        </ul>
      </router-link>
      <router-link class="no-decoration" :to="{ name: 'Info' }">
        <ul v-show="isVisible" class="menu">
          Info
        </ul>
      </router-link>
      <router-link class="no-decoration" :to="{ name: 'Contacts' }">
        <ul v-show="isVisible" class="menu">
          Contacts
        </ul>
      </router-link>
      <button v-on:click="isVisible = !isVisible">&vellip;</button>
      <div v-on:click="isVisible = false" class="searchbar">
        <input class="text" type="text" />
        <span class="diagonal"> </span>
      </div>
    </ul>
  </div>
</template>
<style scoped>
.top {
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;
  overflow: auto;
  flex-grow: 0;
}
.menuItems {
  display: flex;
  overflow: visible;
}
.menu {
  padding-top: 4px;
}
button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding-bottom: 15px;
  font-size: 20px;
  padding-left: 4px;
}

.no-decoration {
  text-decoration: none;
  color: inherit;
}
.searchbar {
  display: inline;
  float: right;
  padding-left: 1rem;
  padding-top: 3px;
}
.search-icon {
  height: 1.4rem;
  width: 1.7rem;
}
.text {
  width: 1rem;
  height: 1rem;
  border-radius: 1.563rem;
  border: 2px solid black;
  transition: 0.3s;
}
.logo {
  height: 2.5rem;
  widows: 2.5rem;
  padding-right: 17rem;
}

.text:focus {
  border-radius: 1.563rem;
  border: 2px solid black;
  padding: 0.4rem;
  width: 12.5rem;
  height: 1rem;
  caret-color: red;
  text-align: right;
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
    border: 2px solid black;
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
    border: 2px solid black;
    padding: 0.4rem;
    width: 6rem;
    height: 1rem;
    caret-color: red;
    text-align: right;
  }
}
.menu:after {
  content: "";
  position: absolute;
  background-color: rgb(20, 132, 177);
  height: 3px;
  width: 0;
  left: 0;
  bottom: -5px;
  transform-origin: bottom right;
  transition: 0.3s;
}
.menu:hover {
  color: rgb(196, 2, 2);
}
.menu:hover:after {
  width: 100%;
}
</style>

<script setup>
import { ref } from "vue";
let is_hidden = ref(true);
// let is_searchbar = ref(false);
// let searchText = ref("");
function handleHidden() {
  is_hidden.value = !is_hidden.value;
}
</script>
<script>
export default {
  data() {
    return {
      navbar: false,
    };
  },

  created() {
    setTimeout(() => (this.navbar = true), 3810);
  },
};
</script>

<template>
  <div v-show="navbar">
    <q-header class="bg-primary text-black">
      <q-toolbar>
        <router-link class="no-decoration" :to="{ name: 'Home' }">
          <q-avatar square size="2.5rem" color="primary">
            <img
              src="https://s3.brilliant.com.bd/simon_projects/kanak-logo-small.svg"
            />
          </q-avatar>
        </router-link>
        <q-space />
        <router-link class="no-decoration" :to="{ name: 'Projects' }">
          <transition
            appear
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutRight"
          >
            <q-btn
              v-if="!is_hidden"
              key="projects-btn"
              flat
              rounded
              color="dark"
              label="Projects"
            />
          </transition>
        </router-link>
        <router-link class="no-decoration" :to="{ name: 'Info' }">
          <transition
            appear
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutRight"
          >
            <q-btn
              v-if="!is_hidden"
              key="info-btn"
              flat
              rounded
              color="dark"
              label="Info"
            />
          </transition>
        </router-link>
        <router-link class="no-decoration" :to="{ name: 'Contacts' }">
          <transition
            appear
            enter-active-class="animated fadeInRight"
            leave-active-class="animated fadeOutRight"
          >
            <q-btn
              v-if="!is_hidden"
              key="contacts-btn"
              flat
              rounded
              color="dark"
              label="Contacts"
            />
          </transition>
        </router-link>
        <q-btn @click="handleHidden" flat round dense icon="more_vert" />
        <!-- <q-input
          rounded
          input-class="text-right"
          outlined
          dense
          v-model="searchText"
          debounce="500"
          placeholder="Search"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input> -->
        <!-- <q-btn flat round dense icon="search" /> -->
        <div class="searchbar">
          <input class="text" type="text" />
          <span class="diagonal"> </span>
          <!-- <img class="search-icon" src="../assets/search-Icon.png" /> -->
        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>
<style scoped>
.transitionEnter {
  transition: width 2s linear 1s;
}
.no-decoration {
  text-decoration: none;
  color: inherit;
}
.search-icon {
  height: 1.4rem;
  width: 1.7rem;
}
.text {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.563rem;
  border: 2px solid black;
  transition: 0.3s;
}

.text:focus {
  border-radius: 1.563rem;
  border: 2px solid black;
  padding: 0.75rem;
  width: 12.5rem;
  height: 1.5rem;
  caret-color: red;
  text-align: right;
}
.diagonal {
  display: inline-block;
  transform: rotate(-53deg);
  height: 8px;
  margin-left: 2px;
  border-left: solid red 1px;
  vertical-align: -8px;
  transition: 0.3s;
}

.text:focus ~ .diagonal {
  height: 0px;
  transform: translate(-19px, -18px);
  transition: 0.3s ease-in-out;
}
</style>

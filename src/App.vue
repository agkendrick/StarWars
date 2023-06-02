<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import { ref } from 'vue'

  const darkMode = ref(false)

  function toggleDarkMode() {
    darkMode.value = !darkMode.value
    if(darkMode.value) {
      document.querySelector("body")?.classList.add("dark-mode")
    } else {
      document.querySelector("body")?.classList.remove("dark-mode")
    }
  }
</script>

<template>
  <div class="navigation">
    <RouterLink class="nav-link" to="/people">People</RouterLink>
    <button class="toggle" @click="toggleDarkMode">Turn dark mode {{ darkMode ? "off" : "on" }}</button>
  </div>
  <hr />
  <RouterView v-slot="{ Component }">
    <Suspense timeout="0">
      <template #default>
        <component :is="Component" />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </RouterView>
</template>

<style>
  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
    font-size: 1.2rem;
  }

  body {
    background-color: #fff;
    color: #213547;
    transition: background-color .2s ease, color .2s ease;
    font-family: "Inter var experimental", "Inter var", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  body.dark-mode {
    background-color: #171717;
    color: rgba(255, 255, 255, .87);
  }

  body a {
    color: #213547;
  }

  body.dark-mode a {
    color: white;
  }

  .toggle {
    float: right;
  }

  .navigation {
    padding-bottom: 2%;
  }
  
  button:hover {
    cursor: pointer;
  }

  button {
    margin: 0 .5em;
    padding: .5rem;
  }

  .nav-link {
    font-size: 3rem;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
  }

  ul {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
    padding: .3rem 0rem;
  }

  h1 {
    text-align: center;
  }

  .router-link-active {
    text-decoration: underline;
  }

  .list-item {
    padding: .5em;
  }
  .list-item:hover {
    background-color: lightgrey;
  }

  body.dark-mode .list-item:hover {
    background-color: darkslateblue;
  }
</style>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/people">People</RouterLink>
      </nav>
    </div>
  </header>
  <Suspense>
    <template #default>
      <RouterView />
    </template>
    <template #fallback>
      <span>Loading...</span>
    </template>
  </Suspense>
</template>

<style scoped>

</style>

<template>
  <div class="container px-40 mb-10">
    <h1 class="m-5 text-center font-sans text-3xl">{{ title }}</h1>
    <div class="text-xl text-center m-5" id="nav">
      <router-link to="/">Resources</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const title = ref('Closing the Gap in Non-Latin Script Data');

    return {
      title,
    };
  },
};
</script>

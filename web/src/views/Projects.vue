<template>
  <div class="projects">
    Project list has yet to be added
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const projectList: { label: '' }[] = [];

    return {
      projectList,
    };
  },
});
</script>

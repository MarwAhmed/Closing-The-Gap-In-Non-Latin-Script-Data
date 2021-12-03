<template>
  <div class="resources">
    <ul>
      <resource-item
        v-for="(r, rKey) in resourcesList"
        v-bind:key="rKey"
        v-bind:label="r.label"
        v-bind:comment="r.comment"
        v-bind:link="r.ref"
        v-bind:tags="r.tags"
        v-bind:credit="r.curated_by"
      ></resource-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import resources from '../../../RESOURCES.json';
import resourceItem from '@/components/ResourceItem.vue';

export default defineComponent({
  components: {
    resourceItem,
  },
  setup() {
    const resourcesList = reactive(resources.resources.general);
    resourcesList.sort((a, b) => {
      if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
      if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
      return 0;
    });

    return {
      resourcesList,
    };
  },
});
</script>

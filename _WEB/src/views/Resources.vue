<template>
  <div class="resources">
    <p class="text-xs text-gray-400 font-mono mx-1 my-2">
      Fetched from <a href="https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master/RESOURCES.json" target="_blank">https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master/RESOURCES.json</a>
    </p>
    <resource-item
      v-for="(r, rKey) in resourcesList"
      v-bind:key="rKey"
      v-bind:label="r.label"
      v-bind:comment="r.comment"
      v-bind:link="r.ref"
      v-bind:tags="r.tags"
      v-bind:credit="r.curated_by"
    ></resource-item>
  </div>
</template>

<script>
import { defineComponent, ref, watchEffect } from 'vue';
import axios from 'axios';
import resourceItem from '@/components/ResourceItem.vue';

export default defineComponent({
  components: {
    resourceItem,
  },
  setup() {
    const resourcesList = ref([]);

    watchEffect(() => {
      axios.get('https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/RESOURCES.json')
        .then((response) => {
          const data = response.data.resources.general;
          data.sort((a, b) => {
            if (a.label.toLowerCase() > b.label.toLowerCase()) return 1;
            if (a.label.toLowerCase() < b.label.toLowerCase()) return -1;
            return 0;
          });
          resourcesList.value = data;
        });
    });

    return {
      resourcesList,
    };
  },
});
</script>

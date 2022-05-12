<template>
  <ul class="tag-container flex flex-wrap text-sm border-2 rounded-xl p-3 m-4">
    <li class="bg-brightblue rounded-full px-4 mr-1 mb-1"
      v-for="(t, tKey) in taglist"
      v-bind:key="tKey"
    >
      #{{ t }}
      <!--<a v-bind:href="`/${path}${t.replace('#', '/')}`">{{ t }}</a>-->
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  props: {
    taglist: Array,
  },
  setup() {
  },
});
</script>
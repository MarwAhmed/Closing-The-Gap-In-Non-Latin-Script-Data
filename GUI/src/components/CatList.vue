<template>
<div class="w-auto mx-4 mb-2">
  <div
    class="tag-container rounded-t-xl pointer px-5 py-2 mb-0"
    :class="(collapsed) ? 'rounded-b-xl' : ''"
    @click="collapsed = !collapsed"
  >
    {{ collapse_btn }}
    <svg v-if="collapsed" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-right ml-2" viewBox="-2 -2 18 18" fill="currentColor">
      <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
    <svg v-if="!collapsed" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-right ml-2" viewBox="-2 -2 18 18" stroke="currentColor">
      <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
    </svg>
  </div>
  <div
    v-if="!collapsed"
    class="tag-container flex flex-wrap text-sm rounded-b-xl p-3 mt-0"
  >
    <tag-bubble
      v-for="(cat, key) in categories"
      :key="key"
      :label="cat.label"
      :link="cat.link"
      target="cat"
      :small="true"
    />
  </div>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import TagBubble from './TagBubble.vue';

export default defineComponent({
  components: {
    TagBubble
  },
  props: {
    taglist: Array,
  },
  setup() {
    const collapse_btn = ref('Categories');
    const route = useRoute();
    let collapsed = ref((route.params.cat && route.params.cat != '') ? false : true);

    const categories = ref([
      {
        label: 'Digital Humanities',
        link: 'dh'
      },
      {
        label: 'Non-Latin Script',
        link: 'nls'
      },
      {
        label: 'Research Data Management',
        link: 'rdm'
      },
      {
        label: 'Infrastructure',
        link: 'infrastructure'
      },
      {
        label: 'Meta',
        link: 'meta'
      }
    ])

    return {
      collapse_btn,
      collapsed,
      categories,
    }
  },
});
</script>
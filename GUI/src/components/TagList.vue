<template>
  <ul class="flex flex-wrap">
    <li class="bubble rounded-full px-4 mr-1"
      v-for="(t, tKey) in tagList.sort()"
      v-bind:key="tKey"
    >
      <router-link :to="{ name: path, params: { tag: t.substring(1) } }">{{ t }}</router-link>
      <!--<a v-bind:href="`/${path}${t.replace('#', '/')}`">{{ t }}</a>-->
    </li>
  </ul>
</template>

<script>
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    tagList: Array,
    path: String,
  },
})
export default class ResourceItem extends Vue {
}
</script>

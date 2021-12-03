<template>
  <div class="w-full bg-gray-100 p-2 m-1 hover:bg-gray-50">
    <div class="w-full">
      <ul class="flex">
        <li
          v-for="(t, tKey) in tags"
          v-bind:key="tKey"
        >
          <a
            href="#"
            class="text-xs mx-1"
          >{{ t }}</a>
        </li>
      </ul>
    </div>
    <h3 class="text-xl text-gray-700 my-2">
      <a
        v-bind:href="link"
        target="_blank"
        class="ml-1 flex"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg> {{ label }}
      </a>
    </h3>
    <p class="w-full">
      {{ comment }}
    </p>
    <div class="w-full text-xs mt-2">
      Collected by <a v-bind:href="credit.ref" target="_blank">{{ credit.name }}</a>.
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    label: String,
    comment: String,
    link: String,
    credit: Object,
    tags: Array,
  },
})
export default class ResourceItem extends Vue {
}
</script>

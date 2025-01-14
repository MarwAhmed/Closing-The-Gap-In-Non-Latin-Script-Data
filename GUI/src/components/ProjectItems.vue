<template>
<div class="md:basis-1/2 lg:basis-1/3">
  <div class="box relative rounded-2xl m-4">
    <div class="content inline-block h-auto relative p-4 pb-7 flex flex-wrap md:flex-row">
      <div class="left w-auto">
        <div class="text-left flex flex-wrap p-3 py-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
          <div
            v-for="(place, key) in project.places"
            :key="key"
          >
            <a :href="place.place_name.ref[0]" target="_blank">{{ place.place_name.text }}</a>
            <span v-if="key < project.places.length - 1">,&nbsp;</span>
          </div>
        </div>
        <div
          @click="extend = !extend"
          class="text-3xl text-left p-3 py-5 text-comfortaa leading-normal antialiased"
        >
          {{ project.title }}
        </div>
        <ul class="mb-3">
          <li
            v-for="(date, key) in project.date"
            :key="key"
            class="text-left m-3 my-0 flex flex-row font-light"
          >
            <svg v-if="date.from || date.to" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span v-if="date.from">{{ new Date(date.from).getFullYear() }}</span>
            <svg v-if="date.from || date.to" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto mx-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            <span v-if="date.to">{{ new Date(date.to).getFullYear() }}</span>
          </li>
        </ul>
        <div class="flex flex-row ml-3 mb-5 font-light">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <span
            v-for="(lang, key) in project.lang"
            :key="key"
            class="mr-2"
          >{{ lang }}</span>
        </div>
        <div class="text-left w-full p-3 py-0 leading-relaxed antialiased">{{ project.project_desc }}</div>
        <div class="tagrow flex flex-wrap p-3 pb-10 mt-5">
          <simple-badge
            v-if="project.topic_relations.nls"
            label="Non-Latin Script"
          />
          <simple-badge
            v-if="project.topic_relations.dh"
            label="Digital Humanities"
          />
          <simple-badge
            v-if="project.topic_relations.rdm"
            label="Research Data Management"
          />
          <simple-badge
            v-if="project.topic_relations.meta"
            label="Meta"
          />
          <simple-badge
            v-if="project.topic_relations.infrastructure"
            label="Infrastructure"
          />
          <tag-bubble
            v-for="(tags, key) in project.keywords"
            :key="key"
            :label="tags"
            :link="tags"
            target="tag"
            :small="true"
          />
        </div>
      </div>
      <!--
      <div
        :class="(extend) ? '' : 'hidden'"
        class="right h-full"
      >
        <div class="codebox max-w-2xl h-max text-left p-5 ml-5 mb-5 rounded-tr-lg overflow-scroll">
          <pre>{{ project }}</pre>
        </div>
      </div>
      -->
    </div>
    <div class="footer absolute bottom-0 inset-x-0 rounded-b-2xl h-8 pl-7 flex flex-row">
      <link-bubble
        v-for="(link, key) in project.websites"
        :key="key"
        :href="link"
        type="link"
      />
      <link-bubble
        :href="source"
        type="git"
      />
      <div
        v-if="metadata.record_modified[metadata.record_modified.length - 1].record_modified_on"
        class="text-sm bright-text mt-1 absolute right-5"
      >Last edit: {{ metadata.record_modified[metadata.record_modified.length - 1].record_modified_on }} </div>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent, inject, watch, ref } from 'vue';
import TagBubble from '@/components/TagBubble.vue';
import LinkBubble from '@/components/LinkBubble.vue';
import SimpleBadge from '@/components/SimpleBadge.vue';

export default defineComponent({
  components: {
    TagBubble,
    LinkBubble,
    SimpleBadge,
  },
  props: {
    project: Object,
    id: String,
    source: String,
    metadata: Object,
  },
  setup(props) {
    const extend = ref();
    extend.value = false;
    const now = new Date().getTime();
    const isArabic = inject('rtlCharset').test(props.label);

    watch(extend, (to) => {
      console.log(to);
    });

    return {
      isArabic,
      now,
      extend,
    };
  },
});
</script>
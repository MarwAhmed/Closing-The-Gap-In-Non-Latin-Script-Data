<template>
<div>
  <div class="box relative rounded-2xl m-4">
    <div class="content inline-block h-auto relative p-4 pb-7 flex flex-wrap md:flex-row">
      <div class="left w-auto md:max-w-sm">
        <div class="text-left flex flex-wrap p-3 py-0">
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
        <div class="text-left flex flex-wrap pl-3 mb-5">
          <div
            v-if="project.topic_relations.nls"
            class="bg-brightblue text-sm px-4 mr-2 mb-1 rounded-full"
          >
            Non-Latin Script
          </div>
          <div
            v-if="project.topic_relations.dh"
            class="bg-brightblue text-sm px-4 mr-2 mb-1 rounded-full"
          >
            Digital Humanities
          </div>
          <div
            v-if="project.topic_relations.meta"
            class="bg-brightblue text-sm px-4 mr-2 mb-1 rounded-full"
          >
            Metascience
          </div>
          <div
            v-if="project.topic_relations.rdm"
            class="bg-brightblue text-sm px-4 mr-2 mb-1 rounded-full"
          >
            Research Data Management
          </div>
          <div
            v-if="project.topic_relations.infrastructure"
            class="bg-brightblue text-sm px-4 mr-2 mb-1 rounded-full"
          >
            Infrastructure
          </div>
        </div>
        <div class="text-left w-full p-3 py-0 leading-relaxed antialiased">{{ project.project_desc }}</div>
        <div class="tagrow flex flex-wrap p-3 pb-10 mt-5">
          <tag-bubble
            v-for="(tags, key) in project.keywords"
            :key="key"
            :label="tags"
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
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent, inject, watch, ref } from 'vue';
import TagBubble from '@/components/TagBubble.vue';
import LinkBubble from '@/components/LinkBubble.vue';

export default defineComponent({
  components: {
    TagBubble,
    LinkBubble,
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
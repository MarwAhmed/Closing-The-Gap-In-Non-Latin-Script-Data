<template>
  <div class="w-full">
    <tag-list
      :taglist="tags"
    />
    <div id="map" class="w-auto m-5" />
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  watchEffect,
  watch,
  onMounted,
} from 'vue';
import {
  useRoute,
} from 'vue-router';
import axios from 'axios';
import tagList from '@/components/TagList.vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';

export default defineComponent({
  components: {
    tagList,
  },
  setup() {
    const projectList = ref([]);
    const tags = ref([]);
    const route = useRoute();
    let map = null;
    const markers = L.markerClusterGroup();

    const resetData = () => {
      projectList.value = [];
    };

    const loadData = () => {
      axios.get('https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/PROJECTS.json')
        .then((responseIndex) => {
          Object.keys(responseIndex.data).map((key) => {
            axios.get(`https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master${responseIndex.data[key].path}${key}.json`)
              .then((responseProject) => {
                projectList.value.push({
                  _id: key,
                  metadata: responseProject.data.record_metadata,
                  project: responseProject.data.project,
                  source: `https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${responseIndex.data[key].path}${key}.json`,
                });
                responseProject.data.project.places.map((p) => {
                  markers.addLayer(L.marker([p.coordinates.lat, p.coordinates.lng]));
                })

                responseProject.data.project.keywords.map((tag) => {
                  if (!tags.value.includes(tag)) tags.value.push(tag);
                });
                return null;
              });
            return null;
          });
        });
    };

    onMounted(() => {
      map = L.map('map', {
        center: [51.165691, 10.451526],
        zoom: 5
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         attribution:  'Kartendaten &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende',
         useCache: true
      }).addTo(map);

      map.addLayer(markers);

    });

    watchEffect(() => {
      loadData();
    });

    watch(route, (to) => {
      if (!to.hash) {
        resetData();
        loadData();
      }
    });

    return {
      projectList,
      tags,
      map,
    };
  }
});
</script>

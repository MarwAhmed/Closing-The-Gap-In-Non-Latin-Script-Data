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
    const svgIcon = L.divIcon({
        html: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
      </svg>`,
        className: "",
        iconAnchor: [10, 20],
        popupAnchor: [0, -20],
      });


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
                  const marker = L.marker([p.coordinates.lat, p.coordinates.lng], { icon: svgIcon });
                  marker.bindPopup(`
                  <p class="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg> <span class="mt-1">${p.place_name.text}</span>
                  </p>
                  <p class="text-xl mb-">${responseProject.data.project.title}</p>
                  <ul>
                    <li>Link: <a target="_blank" href="${responseProject.data.project.websites[0]}">${responseProject.data.project.websites[0]}</a></li>
                    <li>Source: <a target="_blank" href="https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${responseIndex.data[key].path}${key}.json">GitHub</a>
                  `).openPopup();
                  markers.addLayer(marker);
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

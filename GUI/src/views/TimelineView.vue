<template>
  <div class="w-full visualbox p-5">
    <!--
    <tag-list
      :taglist="tags"
    />
    -->
    <table class="table-fixed box">
      <thead class="sticky top-0">
        <tr>
          <th :colspan="years.length + 1" class="text-left py-5 px-3 sticky top-0">
            <p> CAUTION! This timeline contains projects of which we do not have consistend funding information yet. Projects with unknown or incomplete funding data are marked with an asterisk (*)</p>
          </th>
        </tr>
        <tr class="border-y table-head sticky"> 
          <th>Project</th>
          <th
            v-for="(y, yKey) in years"
            :key="yKey"
            class="border-l text-xs px-3 pb-1 sticky top-0"
          >{{ y }}</th>
        </tr>
      </thead>
      <tbody class="relative">
        <tr
          v-for="(p, pKey) in projects"
          :key="pKey"
          class="border-b timeline-row"
        >
          <td class="whitespace-nowrap text-xs text-left first-col sticky p-2">
            <a :href="p.source" target="_blank">{{ p.title }}</a> <span v-if="p.noDataOnEnding">*</span></td>
          <td
            v-for="(y, yKey) in years"
            :key="yKey"
            :class="(isInFundingPeriod(p, y) && !p.noDataOnEnding) ? 'bg-darkblue p-2 border-b-1 border-darkblue' : ''"
            class="m-1 p-0 text-xs border-l"
          >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import {
  defineComponent,
  ref,
  watchEffect,
  watch,
} from 'vue';
import {
  useRoute,
} from 'vue-router';
import axios from 'axios';
import * as d3 from 'd3';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';

export default defineComponent({
  components: {
//    tagList,
  },
  setup() {
    const tags = ref([]);
    const route = useRoute();
    const network = ref([]);
    const networkLinks = ref([]);

    const years = ref([]);
    const projects = ref([]);

    let start = new Date().getFullYear();
    let finish = new Date().getFullYear();

    let svg = null;
    const width = 1000;
    const height = 640;

    const resetData = () => {
      network.value = [];
      networkLinks.value = [];
    };

    const ticked = () => {
      /* eslint-disable-next-line no-unused-vars */
    };

    const loadData = () => {
      console.log('Begin to load data');
      let promise = new Promise((resolve) => {
        axios.get('https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/PROJECTS.json')
        .then((responseIndex) => {
          Object.keys(responseIndex.data).map((uuid, key) => {
            axios.get(`https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master${responseIndex.data[uuid].path}${uuid}.json`)
              .then((responseProject) => {
                const period = [];
                let noEnding = false;
                responseProject.data.project.date.map((p) => {
                  if (p.from !== '') {
                    let begin = Number(p.from);
                    let end = -1;
                    if (begin < start) start = begin;
                    if (p.to !== '') {
                      end = Number(p.to);
                    } else noEnding = true;
                    if (end > finish) finish = end;
                    period.push([begin, end]);
                  }
                });
                if (period.length) {
                  projects.value.push({
                    title: responseProject.data.project.title,
                    periods: period,
                    noDataOnEnding: noEnding,
                    source: `https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${responseIndex.data[uuid].path}${uuid}.json`,
                  });
                }
              /*
                const projectPeriods = [];
                console.log(responseProject.data.project);
                responseProject.data.project.date.map((p) => {
                  if (p.from !== '') {
                    let begin = Number(p.from);
                    let end = (p.to !== '') ? Number(p.to) : new Date().getFullYear();

                    for (let i =begin; i <= end; i += 1) {
                      console.log(i);
                      projectPeriods.push(i);
                    }
                  }
                });

                for (let i = 0; i < projectPeriods.length; i += 1) {
                  let exists = false;
                  for (let j = 0; j < years.value.length; j += 1) {
                    if (projectPeriods[i] === years.value[j].year) {
                      years.value[j].count += 1;
                      exists = true;
                      break;
                    }
                  }
                  if (!exists) {
                    years.value.push({
                      year: projectPeriods[i],
                      count: 1,
                    });
                  }
                }
                */
                responseProject.data.project.keywords.map((tag) => {
                  if (!tags.value.includes(tag)) tags.value.push(tag);
                });

                if (key === Object.keys(responseIndex.data).length - 1) {
                  resolve('ready');
                }
                return null;
              });
            return null;
          });
        });
      });
      return promise;
    };

    const isInFundingPeriod = (project, year) => {
      let isFunded = false;
      project.periods.map(period => {
        if (year >= period[0] && year <= period[1]) {
          isFunded = true;
        }
      });
      return isFunded;
    };

    const filteredProjectYears = (project, years) => {
      const newYearArr = [...years];
      const yearsToDel = [];
      project.periods.map((period, periodKey) => {
        for (let i = period[0] + 1; i <= period[1]; i += 1) {
          yearsToDel.push(i);
        }
      });
      yearsToDel.map((y) => {
        newYearArr.splice(newYearArr.indexOf(y), 1);
      });
      if (project.title.includes('Topoi')) console.log(newYearArr)
      return newYearArr;
    };

    loadData().then(() => {
      for (let i = start; i <= finish; i += 1) {
        years.value.push(i);
      }
      projects.value.map((p, i) => {
        p.periods.map((pp, pi) => {
          if (pp[1] === -1) projects.value[i].periods[pi][1] = finish;
        });
      });
      
      projects.value.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });
      //Timeline
    }).catch((e) => {
      console.log(e);
    })

    return {
      projects,
      years,
      isInFundingPeriod,
      filteredProjectYears
    };
  }
});
</script>

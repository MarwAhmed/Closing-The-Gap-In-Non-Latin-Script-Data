<template>
  <div class="w-full visualbox">
    <!--
    <tag-list
      :taglist="tags"
    />
    -->
    <h5>Timeline</h5>
    <p>CAUTION! This timeline only contains projects of which we have gathered dedicated funding periods. Projects with unknown or incomplete funding data are not included.</p>
    
    <table class="box">
      <tr> 
        <th
          v-for="(y, yKey) in years"
          :key="yKey"
          class="border-l text-xs px-2 pb-1"
        >{{ y }}</th>
      </tr>
      <tr
        v-for="(p, pKey) in projects"
        :key="pKey"
      >
        <td
          v-for="(y, yKey) in filteredProjectYears(p, years)"
          :key="yKey"
          :colspan="isInFundingPeriod(p, y)"
          :class="(isInFundingPeriod(p, y) && !p.noDataOnEnding) ? 'bg-darkblue p-2 border-b-1' : 
            (isInFundingPeriod(p, y) && p.noDataOnEnding) ? 'from-nlsdarkblue bg-gradient-to-r p-2 text-white border-b-1' : 
            ''"
          class="m-1 p-0 text-xs border-l"
        >
          <span v-if="isInFundingPeriod(p, y)">{{ p.title }}</span>
        </td>
      </tr>
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
      let result = null;
      project.periods.map(period => {
        if (year >= period[0] && year < period[1]) {
          result = period[1] - period[0] + 1;
        }
      });
      return result;
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
      
      console.log(projects.value);
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

<template>
  <div class="w-full">
    <!--
    <tag-list
      :taglist="tags"
    />
    -->
    <div id="networkgraph" class="w-auto m-5" />
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
                network.value.push({
                  _n: key,
                  _key: uuid,
                  // Need to clean this up
                  id: key,
                  _id: responseProject.data.record_metadata.uuid,
                  project: responseProject.data.project,
                  source: `https://github.com/Closing-the-Gap-in-NLS-DH/Projects/blob/master${responseIndex.data[uuid].path}${uuid}.json`,
                });

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

    loadData().then(() => {
      console.log('Jetzt');

      network.value.map((p, pKey) => {
        ['parents', 'children', 'siblings'].map((target) => {
          p.project[target].map((p2, p2Key) => {
            if (p2.uuid) {
              let source = pKey;
              let target = 0;
              let i = 0;
              for (i; i < network.value.length; i += 1) {
                if (network.value[i]._id === p2.uuid) {
                  target = i;
                  break;
                }
              }
              let exists = false;
              networkLinks.value.map((n, nKey) => {
                if (
                  (n.source === source && n.target === target) ||
                  (n.source === target && n.target === source)
                ) exists = true;
              });
              if (!exists) networkLinks.value.push({
                id: `${source}_${target}`,
                source,
                target
              });
            }
          });
          /*
          if (p.project[target] && p.project[target].length > 0) {
            p.project[target].map((p2) => {
              network.value.map((targetP, tPKey) => {
                if (p2.uuid === targetP._key) {
                  let exists = false;
                  networkLinks.value.map((l) => {
                    if (
                      (key === l.source && tPKey === l.target)
                      || (key === l.target && tPKey === l.source)
                    ) {
                      exists = true;
                    } 
                  });
                  if (!exists) networkLinks.value.push({
                    source: key, 
                    target: tPKey,
                  });
                }
              });
            });
          } */
        });
      });

      console.log(network.value);
      console.log(networkLinks);

      const svg = d3.select('#networkgraph')
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      const forceNode = d3.forceManyBody().strength(-20);
      const forceLink = d3.forceLink(networkLinks.value)
        .id(link => link.id);

      const simulation = d3.forceSimulation(network.value)
        .force("link", forceLink)
        .force("charge", forceNode)
        .force('collision', d3.forceCollide().radius(10))
        .force("center",  d3.forceCenter(width / 2, height / 2))
        .on("tick", ticked);

      const nodeElements = svg.append('g')
        .selectAll('circle')
        .data(network.value)
        .enter().append('circle')
          .attr('r', 10)
          .attr('fill', 'black')
/*
      const textElements = svg.append('g')
        .selectAll('text')
        .data(network.value)
        .enter().append('text')
          .text(node => node.project.title)
          .attr('font-size', 15)
          .attr('dx', 15)
          .attr('dy', 4);
*/
      const linkElements = svg.append('g')
        .selectAll('line')
        .data(networkLinks.value)
        .enter().append('line')
          .attr('stroke-width', 1)
          .attr('stroke', '#E5E5E5')

      simulation.on('tick', () => {
        simulation.nodes(network.value);

        nodeElements
          .attr('cx', (node) => {
            return node.x = Math.max(10, Math.min(width - 10, node.x))
          })
          .attr('cy', (node) => {
            return node.y = Math.max(10, Math.min(height - 10, node.y))
          })
          /*
        textElements
          .attr('x', node => node.x)
          .attr('y', node => node.y)
*/
        linkElements
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
      });

      simulation.force('link').link(networkLinks.value)

/*      
    
      svg = d3.select("#networkgraph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      /* eslint-disable-next-line no-unused-vars */
      /* const simulation = d3.forceSimulation(network.value)
        .force('charge', d3.forceManyBody().strength(-10))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('link', d3.forceLink().distance(100))
        .on('tick', ticked); --
      
      const simulation = d3.forceSimulation(network.value)
        .force('charge', d3.forceManyBody())
        .force('link', d3.forceLink(networkLinks.value).distance(50))
        .force('center', d3.forceCenter(300, 300))

        /* eslint-disable-next-line no-unused-vars --
      const node = svg.selectAll('circle')
        .data(network.value)
        .enter()
        .append('circle')
        .attr('r', 10)
        .attr('fill', 'black');
      
      const link = svg.selectAll('path.link')
        .data(networkLinks.value)
        .enter()
        .append('line')
        .attr('class', 'link')
        .attr('stroke-width', '5')
        .attr('stroke', 'black');

      const lineGenerator = d3.line();
      
      simulation.on('tick', () => {
        simulation.nodes(network.value);
        simulation.force(networkLinks.value);
        node.data(network.value).attr('cx', (d) => {
          return d.x = Math.max(10, Math.min(width - 10, d.x));
        })
        node.attr('cy', (d) => {
          return d.y = Math.max(10, Math.min(height - 10, d.y));
        })
        link
          .data(networkLinks.value)
          .enter()
          .attr('d', (d) => {
         lineGenerator([
            [d.source.x, d.source.y], 
            [d.target.x, d.target.y]
          ]);
        })
      });
      */
    }).catch((e) => {
      console.log(e);
    })

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
      
    };
  }
});
</script>

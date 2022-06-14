<template>
  <div class="w-full">
    <div class="box m-5 rounded-2xl p-5">
      <h3 class="text-xl">Contribute (not yet working)</h3>
      <div class="grid grid-cols-2 gap-y-1 gap-x-4 text-left">
        <label class="block col-span-2">
          <span>Name of the Editor (Surname, Forename)</span>
          <input type="text" class="mt-1 block w-full" />
        </label>
        <label class="block col-span-2">
          <span>Name of the {{ project.type.charAt(0).toUpperCase() + project.type.slice(1) }}</span>
          <input type="text" class="mt-1 block w-full" />
        </label>
        <label class="block">
          <span>Abbreviation*</span>
          <input type="text" class="mt-1 block w-full" />
        </label>
        <label class="block">
          <span>Type</span>
          <select class="mt-1 block w-full" v-model="project.type">
            <option value="project">Project</option>
            <option value="organisation">Organisation</option>
          </select>
        </label>
        <!-- Refs -->
        <label
          class="block col-span-2"
        >
          <span>Authority File URIs of the {{ project.type.charAt(0).toUpperCase() + project.type.slice(1) }}</span>
          <div
            class="flex flex-row"
            v-for="(ref, refKey) in project.ref"
            :key="refKey"
          >
            <svg
              @click="project.ref.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg
              v-if="project.ref.length > 1"
              @click="project.ref.splice(refKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="project.ref[refKey]"
            />
          </div>
        </label>
        <!-- Funding periods -->
        <label
          class="block col-span-2"
        >
          <span>Funding periods</span>
          <div
            class="flex flex-row"
            v-for="(date, dateKey) in project.date"
            :key="dateKey"
          >
            <svg
              @click="project.date.push({ from: '', to: '' })"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg
              v-if="project.date.length > 1"
              @click="project.date.splice(dateKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <input
              type="text"
              class="mt-1 left"
              v-model="project.date[dateKey].from"
            />
            <span class="my-auto mx-2">to</span>
            <input
              type="text"
              class="mt-1 right"
              v-model="project.date[dateKey].to"
            />
          </div>
        </label>
        <!-- Websites -->
        <label
          class="block col-span-2"
        >
          <span>Websites of the {{ project.type.charAt(0).toUpperCase() + project.type.slice(1) }}</span>
          <div
            class="flex flex-row"
            v-for="(website, websiteKey) in project.websites"
            :key="websiteKey"
          >
            <svg
              @click="project.websites.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg
              v-if="project.websites.length > 1"
              @click="project.websites.splice(websiteKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <input
              type="text"
              class="mt-1 left w-full"
              v-model="project.websites[websiteKey]"
            />
          </div>
        </label>
        <!-- description -->
        <label class="block col-span-2">
          <span>Project Description</span>
          <textarea class="block w-full mt-1"></textarea>
        </label>
        <!-- Places -->
        <label
          class="block col-span-2"
        >
          <span>Locations of the {{ project.type.charAt(0).toUpperCase() + project.type.slice(1) }}</span>
          <div
            class="grid grid-cols-2"
            v-for="(place, placeKey) in project.places"
            :key="placeKey"
          >
            <div>
              <label class="block">Name of the place</label>
              <div 
                class="flex flex-row"
              >
                <svg
                  @click="project.places.push({
                      place_name: {
                        text: '',
                        ref: [''],
                      },
                      coordinates: {
                        lat: '',
                        lng: '',
                      },
                    })"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-1 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg
                  v-if="project.places.length > 1"
                  @click="project.places.splice(placeKey, 1)"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-1 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <input
                  type="text"
                  class="mt-1 left w-full"
                  v-model="project.places[placeKey].place_name.text"
                />
              </div>
            </div>
            <div>
              <label class="block">Authority File URIs of the place</label>
              <div
                v-for="(ref, refKey) in project.places[placeKey].place_name.ref"
                class="flex flex-row ml-1"
                :key="refKey"
              >
                <svg
                  @click="project.places[placeKey].place_name.ref.push('')"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-1 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg
                  v-if="project.places[placeKey].place_name.ref.length > 1"
                  @click="project.places[placeKey].place_name.ref.splice(placeKey, 1)"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-1 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <input
                  type="text"
                  class="mt-1 left w-full"
                  v-model="project.places[placeKey].place_name.ref[refKey]"
                />
              </div>
            </div>
          </div>
        </label>
        <!-- Languages -->
        <label
          class="block col-span-2"
        >
          <span>Languages used in the interfaces and publications of the {{ project.type.charAt(0).toUpperCase() + project.type.slice(1) }} (ISO-639-2)</span>
          <div 
            class="flex flex-row"
          >
            <div
              class="flex flex-row mr-7"
              v-for="(lang, langKey) in project.lang"
              :key="langKey"
            >
              <svg
                @click="project.lang.push('')"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg
                v-if="project.lang.length > 1"
                @click="project.lang.splice(langKey, 1)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <input
                type="text"
                class="mt-1 left w-20"
                v-model="project.lang[langKey]"
              />
            </div>
          </div>
        </label>
        <!-- Topic Relations -->
        <label class="block col-span-2">
          <span>Topics</span>
          <div class="flex flex-row">
            <label class="mr-7">
              <input type="checkbox" />
              <span class="ml-1">Digital Humanities</span>
            </label>
            <label class="mr-7">
              <input type="checkbox" />
              <span class="ml-1">Non-Latin Script</span>
            </label>
            <label class="mr-7">
              <input type="checkbox" />
              <span class="ml-1">Research Data Management</span>
            </label>
            <label class="mr-7">
              <input type="checkbox" />
              <span class="ml-1">Infrastructure</span>
            </label>
            <label class="mr-7">
              <input type="checkbox" />
              <span class="ml-1">Meta</span>
            </label>
          </div>
        </label>
        <!-- Parents -->
        <label
          class="block col-span-2"
        >
          <span>Related projects or organisations</span>
          <div 
            class="w-full"
          >
            <div
              class="flex flex-row mr-7 w-full"
              v-for="(rel, relKey) in project.relations"
              :key="relKey"
            >
              <svg
                @click="addRelation"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg
                v-if="project.relations.length > 1"
                @click="project.relations.splice(relKey, 1)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div class="border border-black rounded rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2">
                <label>
                  <span>Relation Type</span>
                  <select class="mt-1 block w-full"
                    v-model="project.relations[relKey].group"
                  >
                    <option value="parents">Parent</option>
                    <option value="siblings">Sibling</option>
                    <option value="children">Child</option>
                  </select>
                </label>
                <label>
                  <span>Type</span>
                  <select class="mt-1 block w-full" v-model="project.relations[relKey].type">
                    <option value="organisation">Organisation</option>
                    <option value="project">Project</option>
                  </select>
                </label>
                <label class="col-span-2">
                  <span>Choose existing {{ rel.type }} or add new entry</span>
                  <select class="mt-1 block w-full" v-model="project.relations[relKey].existingEntry">
                    <option value="null">NEW ENTRY</option>
                    <option
                      v-for="(p, pKey) in projectList"
                      :key="pKey"
                      :value="p.uuid"
                    >{{ p.title }}</option>
                  </select>
                </label>
                <div class="col-span-2 grid grid-cols-2 gap-2" v-if="project.relations[relKey].existingEntry === 'null'">
                  <label class="block col-span-2">
                    <span>Name of the {{ rel.type }}</span>
                    <input
                      type="text"
                      class="mt-1 left w-full"
                      v-model="project.relations[relKey].title"
                    />
                  </label>
                  <!-- Refs -->
                  <label
                    class="block"
                  >
                    <span>Authority File URIs of the {{ rel.type.charAt(0).toUpperCase() + rel.type.slice(1) }}</span>
                    <div
                      class="flex flex-row"
                      v-for="(relRef, relRefKey) in rel.refs"
                      :key="relRefKey"
                    >
                      <svg
                        @click="project.relations[relKey].refs.push('')"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1 my-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <svg
                        v-if="rel.refs.length > 1"
                        @click="project.relations[relKey].refs.splice(relRefKey, 1)"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1 my-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <input
                        type="text"
                        class="mt-1 left w-full"
                        v-model="project.relations[relKey].refs[relRefKey]"
                      />
                    </div>
                  </label>
                  <!-- Websites -->
                  <label
                    class="block"
                  >
                    <span>Websites of the {{ rel.type.charAt(0).toUpperCase() + rel.type.slice(1) }}</span>
                    <div
                      class="flex flex-row"
                      v-for="(relWebsite, relWebsiteKey) in rel.websites"
                      :key="relWebsiteKey"
                    >
                      <svg
                        @click="project.relations[relKey].websites.push('')"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1 my-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <svg
                        v-if="rel.websites.length > 1"
                        @click="project.relations[relKey].websites.splice(relWebsiteKey, 1)"
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 mr-1 my-auto"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <input
                        type="text"
                        class="mt-1 left w-full"
                        v-model="project.relations[relKey].websites[relWebsiteKey]"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </label>
        <div class="block col-span-2 bubble p-3 rounded-2xl mt-2 button text-center">Generate JSON</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref
} from 'vue';
import axios from 'axios';

export default defineComponent({
  components: {
//    tagList,
  },
  setup() {
    const projectList = ref([]);
    const relationsTemplate = [
      {
        group: 'parents',
        type: 'project',
        existingEntry: 'null',
        title: '',
        refs: [''],
        websites: [''],
        places: [
          {
            place_name: {
              text: '',
              ref: [''],
            },
          }
        ],
        relations: [],
      }
    ];
    const project = reactive({
      type: 'project',
      ref: [''],
      date: [{
        from: '',
        to: ''
      }],
      websites: [''],
      places: [{
        place_name: {
          text: '',
          ref: [''],
        },
        coordinates: {
          lat: '',
          lng: '',
        },
      }],
      relations: [...relationsTemplate],
      lang: [''],
    });

    const addRelation = () => {
      project.relations.push(...relationsTemplate);
      project.relations[project.relations.length - 1].relations = [...relationsTemplate];
    };

    axios.get('https://raw.githubusercontent.com/Closing-the-Gap-in-NLS-DH/Projects/master/PROJECTS.json')
      .then((responseIndex) => {
        Object.keys(responseIndex.data).map((key) => {
          projectList.value.push({
            uuid: key,
            title: responseIndex.data[key].title,
          });
        });
      }); 
    return {
      project,
      projectList,
      addRelation
    };
  }
});
</script>

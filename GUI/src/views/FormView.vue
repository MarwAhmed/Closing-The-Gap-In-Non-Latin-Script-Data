<template>
  <div class="w-full">
    <div class="box m-5 rounded-2xl p-5">
      <h3 class="text-xl">Contribute (not yet working)</h3>
      <div class="grid grid-cols-2 gap-y-1 gap-x-4 text-left">
        <label class="block col-span-2">
          <span>Name of the Editor (Surname, Forename)</span>
          <input
            type="text"
            class="mt-1 block w-full"
            v-model="project.record_metadata.record_created_by"
          />
        </label>
        <label class="block col-span-2">
          <span>Name of the {{ project.project.type.charAt(0).toUpperCase() + project.project.type.slice(1) }}</span>
          <input
            type="text"
            v-model="project.project.title"
            class="mt-1 block w-full"
          />
        </label>
        <label class="block">
          <span>Abbreviation*</span>
          <input
            type="text"
            class="mt-1 block w-full"
            v-model="project.project.abbr"
          />
        </label>
        <label class="block">
          <span>Type</span>
          <select class="mt-1 block w-full" v-model="project.project.type">
            <option value="project">Project</option>
            <option value="organisation">Organisation</option>
          </select>
        </label>
        <!-- Refs -->
        <label
          class="block col-span-2"
        >
          <span>Authority File URIs of the {{ project.project.type.charAt(0).toUpperCase() + project.project.type.slice(1) }}</span>
          <div
            class="flex flex-row"
            v-for="(ref, refKey) in project.project.ref"
            :key="refKey"
          >
            <svg
              @click="project.project.ref.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg
              v-if="project.project.ref.length > 1"
              @click="project.project.ref.splice(refKey, 1)"
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
              v-model="project.project.ref[refKey]"
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
            v-for="(date, dateKey) in project.project.date"
            :key="dateKey"
          >
            <svg
              @click="project.project.date.push({ from: '', to: '' })"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg
              v-if="project.project.date.length > 1"
              @click="project.project.date.splice(dateKey, 1)"
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
              v-model="project.project.date[dateKey].from"
            />
            <span class="my-auto mx-2">to</span>
            <input
              type="text"
              class="mt-1 right"
              v-model="project.project.date[dateKey].to"
            />
          </div>
        </label>
        <!-- Websites -->
        <label
          class="block col-span-2"
        >
          <span>Websites of the {{ project.project.type.charAt(0).toUpperCase() + project.project.type.slice(1) }}</span>
          <div
            class="flex flex-row"
            v-for="(website, websiteKey) in project.project.websites"
            :key="websiteKey"
          >
            <svg
              @click="project.project.websites.push('')"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg
              v-if="project.project.websites.length > 1"
              @click="project.project.websites.splice(websiteKey, 1)"
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
              v-model="project.project.websites[websiteKey]"
            />
          </div>
        </label>
        <!-- description -->
        <label class="block col-span-2">
          <span>Project Description</span>
          <textarea class="block w-full mt-1" v-model="project.project.project_desc"></textarea>
        </label>
        <!-- Places -->
        <label
          class="block col-span-2"
        >
          <span>Locations of the {{ project.project.type.charAt(0).toUpperCase() + project.project.type.slice(1) }}</span>
          <div
            class="grid grid-cols-2"
            v-for="(place, placeKey) in project.project.places"
            :key="placeKey"
          >
            <div>
              <label class="block">Name of the place</label>
              <div 
                class="flex flex-row"
              >
                <svg
                  @click="project.project.places.push({
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
                  v-if="project.project.places.length > 1"
                  @click="project.project.places.splice(placeKey, 1)"
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
                  v-model="project.project.places[placeKey].place_name.text"
                />
              </div>
            </div>
            <div>
              <label class="block">Authority File URIs of the place</label>
              <div
                v-for="(ref, refKey) in project.project.places[placeKey].place_name.ref"
                class="flex flex-row ml-1"
                :key="refKey"
              >
                <svg
                  @click="project.project.places[placeKey].place_name.ref.push('')"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-1 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <svg
                  v-if="project.project.places[placeKey].place_name.ref.length > 1"
                  @click="project.project.places[placeKey].place_name.ref.splice(placeKey, 1)"
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
                  v-model="project.project.places[placeKey].place_name.ref[refKey]"
                />
              </div>
            </div>
          </div>
        </label>
        <!-- Languages -->
        <label
          class="block col-span-2"
        >
          <span>Languages used in the interfaces and publications of the {{ project.project.type.charAt(0).toUpperCase() + project.project.type.slice(1) }} (ISO-639-2)</span>
          <div 
            class="flex flex-wrap"
          >
            <div
              class="flex flex-row mr-7"
              v-for="(lang, langKey) in project.project.lang"
              :key="langKey"
            >
              <svg
                @click="project.project.lang.push('')"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-1 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <svg
                v-if="project.project.lang.length > 1"
                @click="project.project.lang.splice(langKey, 1)"
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
                v-model="project.project.lang[langKey]"
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
        <!-- Relations -->
        <label
          class="block col-span-2"
        >
          <span>Related projects or organisations</span>
          <div 
            class="w-full"
          >
            <div
              class="flex flex-row mr-7 w-full"
              v-for="(rel, relKey) in project.project.relations"
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
                v-if="project.project.relations.length > 1"
                @click="project.project.relations.splice(relKey, 1)"
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
                    v-model="project.project.relations[relKey].relation_type"
                  >
                    <option value="parents">Parent</option>
                    <option value="siblings">Sibling</option>
                    <option value="children">Child</option>
                  </select>
                </label>
                <label>
                  <span>Type</span>
                  <select class="mt-1 block w-full" v-model="project.project.relations[relKey].type">
                    <option value="organisation">Organisation</option>
                    <option value="project">Project</option>
                  </select>
                </label>
                <label class="col-span-2">
                  <span>Choose existing {{ rel.type }} or add new entry</span>
                  <select class="mt-1 block w-full" v-model="project.project.relations[relKey].existingEntry">
                    <option value="null">NEW ENTRY</option>
                    <option
                      v-for="(p, pKey) in projectList"
                      :key="pKey"
                      :value="p.uuid"
                    >{{ p.title }}</option>
                  </select>
                </label>
                <div class="col-span-2 grid grid-cols-2 gap-2" v-if="project.project.relations[relKey].existingEntry === 'null'">
                  <label class="block col-span-2">
                    <span>Name of the {{ rel.type }}</span>
                    <input
                      type="text"
                      class="mt-1 left w-full"
                      v-model="project.project.relations[relKey].title"
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
                        @click="project.project.relations[relKey].refs.push('')"
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
                        @click="project.project.relations[relKey].refs.splice(relRefKey, 1)"
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
                        v-model="project.project.relations[relKey].refs[relRefKey]"
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
                        @click="project.project.relations[relKey].websites.push('')"
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
                        @click="project.project.relations[relKey].websites.splice(relWebsiteKey, 1)"
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
                        v-model="project.project.relations[relKey].websites[relWebsiteKey]"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </label>
        <!-- Contacts -->
        <label
          class="block col-span-2"
        >
          <span>Main contacts of the {{ project.project.type.charAt(0).toUpperCase() + project.project.type.slice(1) }}</span>
          <div
              class="flex flex-row mr-7 w-full"
            v-for="(contact, contactKey) in project.project.contacts"
            :key="contactKey"
          >
            <svg
              @click="project.project.contacts.push({
                pers_name: {
                  text: '',
                  ref: [
                    ''
                  ]
                },
                role: 0,
                websites: [
                  ''
                ]           
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
              v-if="project.project.contacts.length > 1"
              @click="project.project.contacts.splice(contactKey, 1)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-1 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div class="border border-black rounded rounded-xl grid grid-cols-2 border-1 m-2 p-4 w-full gap-2">
              <label class="block">Name of the contact
                <input
                  type="text"
                  class="mt-1 left w-full"
                  v-model="project.project.contacts[contactKey].pers_name.text"
                />
              </label>
              <label class="block">Authority File URIs of the contact
                <div
                  v-for="(ref, refKey) in project.project.contacts[contactKey].pers_name.ref"
                  class="flex flex-row ml-1"
                  :key="refKey"
                >
                  <svg
                    @click="project.project.contacts[contactKey].pers_name.ref.push('')"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <svg
                    v-if="project.project.contacts[contactKey].pers_name.ref.length > 1"
                    @click="project.project.contacts[contactKey].pers_name.ref.splice(contactKey, 1)"
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
                    v-model="project.project.contacts[contactKey].pers_name.ref[refKey]"
                  />
                </div>
              </label>
              <label>
              <span>Role of the contact</span>
                <select class="mt-1 block w-full" v-model="project.project.contacts[contactKey].role">
                  <option
                    v-for="(r, rKey) in roles"
                    :key="rKey"
                    :value="r.id"
                  >{{ r.label }}</option>
                </select>
              </label>
              <label
                class="block"
              >
                <span>Websites of the contact</span>
                <div
                  class="flex flex-row"
                  v-for="(contactWebsite, contactWebsiteKey) in contact.websites"
                  :key="contactWebsiteKey"
                >
                  <svg
                    @click="project.project.contacts[contactKey].websites.push('')"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 mr-1 my-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <svg
                    v-if="contact.websites.length > 1"
                    @click="project.project.contacts[contactKey].websites.splice(contactWebsiteKey, 1)"
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
                    v-model="project.project.contacts[contactKey].websites[contactWebsiteKey]"
                  />
                </div>
              </label>
            </div>
          </div>
        </label>
        <!-- Keywords -->
        <label
          class="block col-span-2"
        >
          <span>Keywords that describe the {{ project.project.type.charAt(0).toUpperCase() + project.project.type.slice(1) }} (lowerkey, no whitespace, separated by comma)</span>
          <input
            type="text"
            class="mt-1 left w-full"
            v-model="keywordList"
            @input="addKeyword"
          />
        </label>
        <!-- Comment -->
        <label class="block col-span-2">
          <span>Comments</span>
          <textarea class="block w-full mt-1" v-model="project.project.comment"></textarea>
        </label>
        <a
          class="block col-span-2 bubble p-3 rounded-2xl mt-2 button text-center"
          :href="`data: text/json;charset=utf-8, ${encodeURIComponent(JSON.stringify(project, null, 2))}`"
          :download="`${project.project.title.replace(' ', '_').toLowerCase()}.json`"
        >Generate JSON</a>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
} from 'vue';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

export default defineComponent({
  components: {
//    tagList,
  },
  setup() {
    const projectList = ref([]);
    let keywordList = ref('');
    let data = null;
    const metadata = reactive({
      editor: '',
      creationDate: new Date().toISOString().split('T')[0],
    })
    const roles = [
      {
        id: 0,
        label: 'Management'
      }, {
        id: 1,
        label: 'Employee'
      }, {
        id: 2,
        label: 'Student Employee'
      }, {
        id: 3,
        label: 'Contractor, Honorar Staff or other'
      }
    ]
    const relationsTemplate = [
      {
        relation_type: 'parents',
        type: 'project',
        existingEntry: 'null', // Muss raus aus dem Objekt
        title: '', // Muss noch abhängig von Org usw. gemacht werden
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
      schema_version: '0.1.5',
      record_metadata: {
        uuid: uuidv4(),
        record_created: new Date().toISOString().split('T')[0],
        record_created_by: '',
        record_modified: [
          {
            record_modified: '',
            record_modified_by: '',
          }
        ],
      },
      project: {
        title: '',
        abbr: '',
        type: 'project',
        ref: [''],
        date: [{
          from: '',
          to: ''
        }],
        websites: [''],
        project_desc: '',
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
        contacts: [
          {
            pers_name: {
              text: '',
              ref: [
                ''
              ]
            },
            role: 0,
            websites: [
              ''
            ]           
          }         
        ],
        keywords: [''],
        comment: '',

      }
    });

    const addRelation = () => {
      project.relations.push(...relationsTemplate);
      project.relations[project.relations.length - 1].relations = [...relationsTemplate];
    };

    const addKeyword = () => {
      if (keywordList.value.includes(',')) {
        project.keywords = keywordList.value.replace(/\s/ig, '').split(',');
      }
    };

    const generateJSON = () => {
      return 
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
      addRelation,
      addKeyword,
      generateJSON,
      keywordList,
      roles,
      metadata,
      data,
    };
  }
});
</script>

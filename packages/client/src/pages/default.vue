<script setup lang="ts">
import {
  BellIcon,
  CalendarIcon,
  ChatAltIcon,
  CheckCircleIcon,
  LockOpenIcon,
  PencilIcon,
  TagIcon,
  UserCircleIcon as UserCircleIconSolid,
} from '@heroicons/vue/solid';
import { activity } from '~/logic';
</script>

<template>
  <div class="py-8 xl:py-10">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
      <div class="xl:border-r xl:border-gray-200 xl:pr-8 xl:col-span-2">
        <div>
          <div>
            <div class="md:flex md:space-x-4 md:items-center md:justify-between xl:border-b xl:pb-6">
              <div>
                <h1 class="font-bold text-2xl text-gray-900">ARIA attribute misspelled</h1>
                <p class="mt-2 text-sm text-gray-500">
                  #400 opened by
                  {{ ' ' }}
                  <a href="#" class="font-medium text-gray-900">Hilary Mahy</a>
                  {{ ' ' }}
                  in
                  {{ ' ' }}
                  <a href="#" class="font-medium text-gray-900">Customer Portal</a>
                </p>
              </div>
              <div class="flex space-x-3 mt-4 md:mt-0">
                <button
                  type="button"
                  class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 inline-flex justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  <PencilIcon class="h-5 mr-2 -ml-1 text-gray-400 w-5" aria-hidden="true" />
                  <span>Edit</span>
                </button>
                <button
                  type="button"
                  class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 inline-flex justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  <BellIcon class="h-5 mr-2 -ml-1 text-gray-400 w-5" aria-hidden="true" />
                  <span>Subscribe</span>
                </button>
              </div>
            </div>
            <aside class="mt-8 xl:hidden">
              <h2 class="sr-only">Details</h2>
              <div class="space-y-5">
                <div class="flex space-x-2 items-center">
                  <LockOpenIcon class="h-5 text-green-500 w-5" aria-hidden="true" />
                  <span class="font-medium text-sm text-green-700">Open Issue</span>
                </div>
                <div class="flex space-x-2 items-center">
                  <ChatAltIcon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                  <span class="font-medium text-sm text-gray-900">4 comments</span>
                </div>
                <div class="flex space-x-2 items-center">
                  <CalendarIcon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                  <span class="font-medium text-sm text-gray-900">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
                </div>
              </div>
              <div class="border-t border-b space-y-8 border-gray-200 mt-6 py-6">
                <div>
                  <h2 class="font-medium text-sm text-gray-500">Assignees</h2>
                  <ul class="space-y-3 mt-3">
                    <li class="flex justify-start">
                      <a href="#" class="flex space-x-3 items-center">
                        <div class="flex-shrink-0">
                          <img
                            class="rounded-full h-5 w-5"
                            src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div class="font-medium text-sm text-gray-900">Eduardo Benz</div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 class="font-medium text-sm text-gray-500">Tags</h2>
                  <ul class="mt-2 leading-8">
                    <li class="inline">
                      <a href="#" class="border rounded-full border-gray-300 py-0.5 px-3 relative inline-flex items-center">
                        <div class="flex flex-shrink-0 absolute items-center justify-center">
                          <span class="rounded-full bg-rose-500 h-1.5 w-1.5" aria-hidden="true" />
                        </div>
                        <div class="font-medium text-sm ml-3.5 text-gray-900">Bug</div>
                      </a>
                      {{ ' ' }}
                    </li>
                    <li class="inline">
                      <a href="#" class="border rounded-full border-gray-300 py-0.5 px-3 relative inline-flex items-center">
                        <div class="flex flex-shrink-0 absolute items-center justify-center">
                          <span class="rounded-full bg-indigo-500 h-1.5 w-1.5" aria-hidden="true" />
                        </div>
                        <div class="font-medium text-sm ml-3.5 text-gray-900">Accessibility</div>
                      </a>
                      {{ ' ' }}
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            <div class="py-3 xl:pt-6 xl:pb-0">
              <h2 class="sr-only">Description</h2>
              <div class="max-w-none prose">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, hic? Commodi cumque similique id tempora molestiae deserunt at
                  suscipit, dolor voluptatem, numquam, harum consequatur laboriosam voluptas tempore aut voluptatum alias?
                </p>
                <ul>
                  <li>
                    Tempor ultrices proin nunc fames nunc ut auctor vitae sed. Eget massa parturient vulputate fermentum id facilisis nam pharetra.
                    Aliquet leo tellus.
                  </li>
                  <li>Turpis ac nunc adipiscing adipiscing metus tincidunt senectus tellus.</li>
                  <li>Semper interdum porta sit tincidunt. Dui suspendisse scelerisque amet metus eget sed. Ut tellus in sed dignissim.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section aria-labelledby="activity-title" class="mt-8 xl:mt-10">
          <div>
            <div class="divide-y divide-gray-200">
              <div class="pb-4">
                <h2 id="activity-title" class="font-medium text-lg text-gray-900">Activity</h2>
              </div>
              <div class="pt-6">
                <!-- Activity feed-->
                <div class="flow-root">
                  <ul class="-mb-8">
                    <li v-for="(item, itemIdx) in activity" :key="item.id">
                      <div class="pb-8 relative">
                        <span
                          v-if="itemIdx !== activity.length - 1"
                          class="h-full -ml-px bg-gray-200 top-5 left-5 w-0.5 absolute"
                          aria-hidden="true"
                        />
                        <div class="flex space-x-3 relative items-start">
                          <template v-if="item.type === 'comment'">
                            <div class="relative">
                              <img
                                class="rounded-full flex bg-gray-400 h-10 ring-white ring-8 w-10 items-center justify-center"
                                :src="item.imageUrl"
                                alt=""
                              />

                              <span class="bg-white rounded-tl py-px px-0.5 -right-1 -bottom-0.5 absolute">
                                <ChatAltIcon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                              </span>
                            </div>
                            <div class="flex-1 min-w-0">
                              <div>
                                <div class="text-sm">
                                  <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                </div>
                                <p class="mt-0.5 text-sm text-gray-500">Commented {{ item.date }}</p>
                              </div>
                              <div class="mt-2 text-sm text-gray-700">
                                <p>
                                  {{ item.comment }}
                                </p>
                              </div>
                            </div>
                          </template>
                          <template v-else-if="item.type === 'assignment'" condition="item.type === 'assignment'">
                            <div>
                              <div class="px-1 relative">
                                <div class="rounded-full flex bg-gray-100 h-8 ring-white ring-8 w-8 items-center justify-center">
                                  <UserCircleIconSolid class="h-5 text-gray-500 w-5" aria-hidden="true" />
                                </div>
                              </div>
                            </div>
                            <div class="flex-1 min-w-0 py-1.5">
                              <div class="text-sm text-gray-500">
                                <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                {{ ' ' }}
                                <!-- not really needed if item.type is assignment, better typings can remove this -->
                                <template v-if="item.assigned">
                                  assigned
                                  {{ ' ' }}
                                  <a :href="item.assigned.href" class="font-medium text-gray-900">{{ item.assigned.name }}</a>
                                  {{ ' ' }}
                                </template>
                                <span class="whitespace-nowrap">{{ item.date }}</span>
                              </div>
                            </div>
                          </template>
                          <template v-else>
                            <div>
                              <div class="px-1 relative">
                                <div class="rounded-full flex bg-gray-100 h-8 ring-white ring-8 w-8 items-center justify-center">
                                  <TagIcon class="h-5 text-gray-500 w-5" aria-hidden="true" />
                                </div>
                              </div>
                            </div>
                            <div class="flex-1 min-w-0 py-0">
                              <div class="text-sm text-gray-500 leading-8">
                                <span class="mr-0.5">
                                  <a :href="item.person.href" class="font-medium text-gray-900">{{ item.person.name }}</a>
                                  {{ ' ' }}
                                  added tags
                                </span>
                                {{ ' ' }}
                                <span class="mr-0.5">
                                  <template v-for="tag in item.tags" :key="tag.name">
                                    <a
                                      :href="tag.href"
                                      class="border rounded-full border-gray-300 text-sm py-0.5 px-3 relative inline-flex items-center"
                                    >
                                      <span class="flex flex-shrink-0 absolute items-center justify-center">
                                        <span :class="[tag.color, 'h-1.5 w-1.5 rounded-full']" aria-hidden="true" />
                                      </span>
                                      <span class="font-medium ml-3.5 text-gray-900">{{ tag.name }}</span>
                                    </a>
                                    {{ ' ' }}
                                  </template>
                                </span>
                                <span class="whitespace-nowrap">{{ item.date }}</span>
                              </div>
                            </div>
                          </template>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="mt-6">
                  <div class="flex space-x-3">
                    <div class="flex-shrink-0">
                      <div class="relative">
                        <img
                          class="rounded-full flex bg-gray-400 h-10 ring-white ring-8 w-10 items-center justify-center"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        />

                        <span class="bg-white rounded-tl py-px px-0.5 -right-1 -bottom-0.5 absolute">
                          <ChatAltIcon class="h-5 text-gray-400 w-5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <form action="#">
                        <div>
                          <label for="comment" class="sr-only">Comment</label>
                          <textarea
                            id="comment"
                            name="comment"
                            :rows="3"
                            class="rounded-md border-gray-300 shadow-sm w-full block sm:text-sm focus:border-gray-900 focus:ring-gray-900"
                            placeholder="Leave a comment"
                          />
                        </div>
                        <div class="flex space-x-4 mt-6 items-center justify-end">
                          <button
                            type="button"
                            class="bg-white border rounded-md font-medium border-gray-300 shadow-sm text-sm py-2 px-4 text-gray-700 inline-flex justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          >
                            <CheckCircleIcon class="h-5 mr-2 -ml-1 text-green-500 w-5" aria-hidden="true" />
                            <span>Close issue</span>
                          </button>
                          <button
                            type="submit"
                            class="border border-transparent rounded-md font-medium bg-gray-900 shadow-sm text-sm text-white py-2 px-4 inline-flex items-center justify-center hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          >
                            Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside class="hidden xl:pl-8 xl:block">
        <h2 class="sr-only">Details</h2>
        <div class="space-y-5">
          <div class="flex space-x-2 items-center">
            <LockOpenIcon class="h-5 text-green-500 w-5" aria-hidden="true" />
            <span class="font-medium text-sm text-green-700">Open Issue</span>
          </div>
          <div class="flex space-x-2 items-center">
            <ChatAltIcon class="h-5 text-gray-400 w-5" aria-hidden="true" />
            <span class="font-medium text-sm text-gray-900">4 comments</span>
          </div>
          <div class="flex space-x-2 items-center">
            <CalendarIcon class="h-5 text-gray-400 w-5" aria-hidden="true" />
            <span class="font-medium text-sm text-gray-900">Created on <time datetime="2020-12-02">Dec 2, 2020</time></span>
          </div>
        </div>
        <div class="border-t space-y-8 border-gray-200 mt-6 py-6">
          <div>
            <h2 class="font-medium text-sm text-gray-500">Assignees</h2>
            <ul class="space-y-3 mt-3">
              <li class="flex justify-start">
                <a href="#" class="flex space-x-3 items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-full h-5 w-5"
                      src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="font-medium text-sm text-gray-900">Eduardo Benz</div>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="font-medium text-sm text-gray-500">Tags</h2>
            <ul class="mt-2 leading-8">
              <li class="inline">
                <a href="#" class="border rounded-full border-gray-300 py-0.5 px-3 relative inline-flex items-center">
                  <div class="flex flex-shrink-0 absolute items-center justify-center">
                    <span class="rounded-full bg-rose-500 h-1.5 w-1.5" aria-hidden="true" />
                  </div>
                  <div class="font-medium text-sm ml-3.5 text-gray-900">Bug</div>
                </a>
                {{ ' ' }}
              </li>
              <li class="inline">
                <a href="#" class="border rounded-full border-gray-300 py-0.5 px-3 relative inline-flex items-center">
                  <div class="flex flex-shrink-0 absolute items-center justify-center">
                    <span class="rounded-full bg-indigo-500 h-1.5 w-1.5" aria-hidden="true" />
                  </div>
                  <div class="font-medium text-sm ml-3.5 text-gray-900">Accessibility</div>
                </a>
                {{ ' ' }}
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

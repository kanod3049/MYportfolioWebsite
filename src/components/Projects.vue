<script setup>
import { ref } from 'vue'
import SITbookImage from '../assets/SITbookpic.png'
import IntregatedProjectImage from '../assets/IntregatedProject.png'
import SecureWayImage from '../assets/SecureWay.png'

const projects = ref([
  {
    id: 1,
    title: 'SIT Bookings Room',
    description: 'A meeting room and resource booking system for the Faculty of Information Technology. Designed with Figma, focusing on simple and user-friendly UX/UI.',
    image: SITbookImage,
    tags: ['figma'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 2,
    title: 'Intregated Project',
    description: 'A course registration web app for IT students. Built with HTML, CSS, and JavaScript, emphasizing responsive design and ease of use.',
    image: IntregatedProjectImage,
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    demoLink: '#',
    githubLink: '#'
  },
  {
    id: 3,
    title: 'Secure Way',
    description: 'A mobile application for campus navigation and safety at the university. Designed with Figma, emphasizing user-friendly and efficient UX/UI.',
    image: SecureWayImage,
    tags: ['figma'],
    demoLink: '#',
    githubLink: '#'
  }
])
</script>

<template>
  <section id="projects" class="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
        Featured Projects
        <div class="h-1 w-20 mx-auto mt-3 sm:mt-4 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full"></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Project Cards via v-for -->
        <article
          v-for="project in projects" 
          :key="project.id"
          class="bg-white dark:bg-gray-950 rounded-2xl overflow-hidden shadow-sm border border-gray-300 dark:border-gray-800 hover:shadow-xl hover:-translate-y-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 group flex flex-col"
        >
          <!-- Image Container with Hover Effect -->
          <div class="relative overflow-hidden bg-gray-200 dark:bg-gray-800" style="aspect-ratio: 16 / 9">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" decoding="async">
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a :href="project.demoLink" class="bg-blue-600 text-white p-2 sm:p-3 rounded-full hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white transition" :aria-label="`View live demo for ${project.title}`">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </a>
              <a :href="project.githubLink" class="bg-gray-800 text-white p-2 sm:p-3 rounded-full hover:bg-gray-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white transition" :aria-label="`View source code for ${project.title}`">
                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          
          <div class="p-4 sm:p-6 flex-1 flex flex-col">
            <h3 class="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 flex-1">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="tag in project.tags" :key="tag" class="text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-2 sm:px-3 py-1 rounded-full">
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
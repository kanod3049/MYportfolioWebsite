<script setup>
import { ref } from 'vue'

const experiences = ref([
  {
    id: 1,
    role: 'Student IT',
    company: 'Bachelor of Science (Information Technology), KMUTT',
    duration: '2024 - Present',
    description: 'Studying IT with a focus on UX/UI Design. Completed projects including a room booking system and a campus navigation app, designed with Figma and developed with HTML/CSS/JavaScript.'
  }
])
</script>

<template>
  <section id="experience" class="py-20 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block left-1/2 -translate-x-1/2">
        Experience & Activities
        <div class="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full"></div>
      </h2>

      <!-- Timeline Container -->
      <div class="relative border-l-2 border-blue-200 dark:border-gray-800 ml-3 md:ml-6 space-y-12">
        
        <div v-for="(exp, index) in experiences" :key="exp.id" class="relative pl-8 md:pl-10">
          <!-- Timeline Dot -->
          <div class="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-600 dark:bg-teal-400 ring-4 ring-white dark:ring-gray-950"></div>
          
          <div class="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
            <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ exp.role }}</h3>
              <span class="inline-block bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-teal-400 text-sm font-semibold px-3 py-1 rounded-full mt-2 md:mt-0">
                {{ exp.duration }}
              </span>
            </div>
            <h4 class="text-lg text-gray-500 dark:text-gray-400 font-medium mb-4">{{ exp.company }}</h4>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ exp.description }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
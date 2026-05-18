<script setup>
import { ref } from 'vue'

const skillCategories = ref([
  {
    name: 'Frontend',
    skills: ['Vue.js','HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript']
  },
  {
    name: 'Backend & Tools',
    skills: ['Node.js', 'Express', 'Git', 'GitHub', 'Figma', 'RESTful APIs']
  },
  {
    name: 'Soft Skills',
    skills: ['Problem Solving', 'Team Collaboration', 'Time Management', 'Adaptability']
  }
])
</script>

<template>
  <section id="skills" class="py-20 px-6 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block left-1/2 -translate-x-1/2">
        Technical Skills
        <div class="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full"></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Loop to display skill categories -->
        <div 
          v-for="(category, index) in skillCategories" 
          :key="index"
          class="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:-translate-y-2 transition-transform duration-300"
        >
          <h3 class="text-xl font-bold mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-800 pb-2">
            {{ category.name }}
          </h3>
          <div class="flex flex-wrap gap-3">
            <!-- Loop to display badges for each skill -->
            <span 
              v-for="skill in category.skills" 
              :key="skill"
              class="px-4 py-2 bg-blue-50 dark:bg-gray-800 text-blue-700 dark:text-teal-400 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-gray-900 transition-colors duration-300 cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
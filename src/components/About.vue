<script setup>
</script>

<template>
  <section id="about" class="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
        About Me
        <div class="h-1 w-20 mx-auto mt-3 sm:mt-4 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full"></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            I'm a student seeking opportunities for <strong class="text-blue-600 dark:text-teal-400">Internship</strong> and <strong class="text-blue-600 dark:text-teal-400">Cooperative Education</strong> in IT, specifically in UX/UI Design.
          </p>
          <p>
            I'm committed to applying university knowledge to real-world work. I enjoy problem-solving challenges and value User Experience (UX) and writing clean, maintainable code.
          </p>
        </div>

        <!-- Highlight Cards -->
        <div class="grid grid-cols-2 gap-3 sm:gap-4">
          <div class="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 group cursor-default">
            <h3 class="font-bold text-3xl sm:text-4xl text-blue-600 dark:text-teal-400 mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">3.8+</h3>
            <p class="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-base">GPAX (Expected)</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 group cursor-default">
            <h3 class="font-bold text-3xl sm:text-4xl text-blue-600 dark:text-teal-400 mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-300">3</h3>
            <p class="text-gray-600 dark:text-gray-400 font-medium text-xs sm:text-base">Projects Done</p>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300 col-span-2 group">
            <h3 class="font-bold text-lg sm:text-xl text-gray-900 dark:text-white mb-1 sm:mb-2">Education</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Bachelor of Science in Information Technology (IT)</p>
            <p class="text-xs sm:text-sm text-blue-600 dark:text-teal-400 mt-1 sm:mt-2">King Mongkut's University of Technology Thonburi (KMUTT)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
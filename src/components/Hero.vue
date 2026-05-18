<script setup>
</script>

<template>
  <section id="hero" class="pt-24 pb-16 px-4 sm:px-6 min-h-[90vh] flex flex-col justify-center items-center text-center">
    <div class="max-w-4xl mx-auto flex flex-col items-center">
      
      <!-- Profile Image -->
      <div class="w-28 h-28 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full mb-6 sm:mb-8 overflow-hidden border-4 border-blue-500 shadow-xl shadow-blue-500/20 transform transition-transform hover:scale-105 duration-300 focus-within:ring-4 focus-within:ring-blue-400">
        <img src="../assets/Profile.png" alt="Profile picture of Kanokpon Suebyam" class="w-full h-full object-cover" loading="eager" decoding="auto">
      </div>

      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 tracking-tight">
        Hello, I'm 
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
          Kanokpon Suebyam
        </span>
      </h1>
      
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium mb-6 sm:mb-8">
        IT Student & UX/UI Designer
      </h2>
      
      <p class="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
        Passionate about creating beautiful and user-friendly websites. 
        Eager to learn new technologies and develop products that solve real user problems.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <a href="#projects" class="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 active:scale-95 transition-all duration-300 text-center">
          View My Works
        </a>
        <a href="#contact" class="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-full font-bold shadow-sm hover:border-blue-500 dark:hover:border-teal-400 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 active:scale-95 transition-all duration-300 text-center">
          Get In Touch
        </a>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  isDark: Boolean
})
defineEmits(['toggle-theme'])

const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-500" role="navigation" aria-label="Main">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
      
      <!-- Logo -->
      <a href="#" class="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded" aria-label="Portfolio home">
        Portfolio
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center gap-1 lg:gap-2">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href"
          class="px-3 py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 font-medium transition-colors rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset"
        >
          {{ link.name }}
        </a>
        
        <!-- Dark Mode Toggle Button -->
        <button 
          @click="$emit('toggle-theme')" 
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Toggle Dark Mode"
        >
          <!-- Sun Icon (Shown in Dark Mode to switch back to Light) -->
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon Icon (Shown in Light Mode to switch to Dark) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center gap-2">
        <button @click="$emit('toggle-theme')" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500" aria-label="Toggle theme">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
        </button>
        <button @click="toggleMobileMenu" class="text-gray-600 dark:text-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 rounded" :aria-expanded="isMobileMenuOpen" aria-controls="mobile-menu" aria-label="Toggle mobile menu">
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown Menu -->
    <transition name="fade-down">
      <div v-show="isMobileMenuOpen" id="mobile-menu" class="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg px-4 sm:px-6 py-4 absolute w-full transition-colors duration-500">
        <div class="flex flex-col gap-2">
          <a 
            v-for="link in navLinks" 
            :key="link.name" 
            :href="link.href"
            @click="isMobileMenuOpen = false"
            class="block px-3 py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 font-medium rounded focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset transition-colors"
          >
            {{ link.name }}
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>
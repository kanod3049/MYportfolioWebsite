<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'

// จัดการสถานะ Dark Mode
const isDark = ref(false)

onMounted(() => {
  // ตรวจสอบ localStorage ก่อน
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // ถ้าไม่มี localStorage ให้ตรวจสอบค่าเริ่มต้นของระบบ
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      isDark.value = true
    }
  }
  
  // ใช้ dark mode ตามสถานะ
  applyTheme(isDark.value)
})

const applyTheme = (dark) => {
  if (dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', dark ? 'dark' : 'light')
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}
</script>

<template>
  <!-- Skip to main content link for accessibility -->
  <a href="#main-content" class="sr-only focus:not-sr-only">Skip to main content</a>
  
  <!-- Wrapper หลักที่คอยจัดการสีพื้นหลังและสีตัวอักษรตาม Theme -->
  <div class="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500 font-sans selection:bg-blue-500 selection:text-white">
    
    <!-- Navbar Component -->
    <Navbar :is-dark="isDark" @toggle-theme="toggleTheme" />

    <!-- Main Content -->
    <main id="main-content" class="focus:outline-none">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>

    <!-- Footer แบบง่ายๆ ไว้ใน App.vue เลย -->
    <footer class="py-8 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <p>&copy; 2026 Kanokpon Suebyam. All rights reserved.</p>
      <p class="mt-2">Built with Vue 3 & Tailwind CSS v4</p>
    </footer>
  </div>
</template>

<style>
/* เพิ่ม Smooth Scrolling ให้กับทั้งหน้าเว็บ */
html {
  scroll-behavior: smooth;
}
</style>
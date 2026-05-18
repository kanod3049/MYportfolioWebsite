import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Global directive to reveal elements when they enter the viewport
app.directive('reveal', {
	mounted(el) {
		// Respect reduced motion preference
		if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			el.classList.add('reveal--visible')
			return
		}

		// Ensure base class is present for initial hidden state
		el.classList.add('reveal')

		const observer = new IntersectionObserver((entries, obs) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('reveal--visible')
					obs.unobserve(entry.target)
				}
			})
		}, { threshold: 0.12 })

		observer.observe(el)
	}
})

app.mount('#app')

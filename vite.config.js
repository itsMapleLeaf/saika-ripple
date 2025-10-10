import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import { ripple } from "vite-plugin-ripple"

export default defineConfig({
	plugins: [tailwindcss(), ripple()],
	server: {
		port: 3000,
	},
})

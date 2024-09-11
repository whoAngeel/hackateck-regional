/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#6BAF58", // Verde medio
				secondary: "#A4D37E", // Verde claro
				accent: "#B9D04D", // Amarillo verdoso
				neutral: "#2D5941", // Verde oscuro para bordes y detalles
				"base-100": "#E1E8D3", // Gris claro para fondos base
				"base-content": "#FFFFFF", // Texto principal en blanco
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "lemonade"],
	},
};

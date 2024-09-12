/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			'2xl': {'max': '1535px'},
			// => @media (max-width: 1535px) { ... }
	  
			'xl': {'max': '1279px'},
			// => @media (max-width: 1279px) { ... }
	  
			'lg': {'max': '1023px'},
			// => @media (max-width: 1023px) { ... }
	  
			'md': {'max': '767px'},
			// => @media (max-width: 767px) { ... }
	  
			'sm': {'max': '639px'},
			// => @media (max-width: 639px) { ... }
		  },
		extend: {
			colors: {
				primary: {
					50: "#E3F2F1",
					100: "#B9DFDC",
					200: "#90CCC7",
					300: "#66B9B3",
					400: "#3DA69E",
					500: "#1A897A", // Color principal
					600: "#157062",
					700: "#11564B",
					800: "#0C3C34",
					900: "#07221E",
				},
				secondary: {
					50: "#F0FCF9",
					100: "#D9F9F2",
					200: "#C1F5EA",
					300: "#A5F0DF", // Color secundario
					400: "#85EAD2",
					500: "#63E5C4",
					600: "#45D8B1",
					700: "#30C39A",
					800: "#219C78",
					900: "#137556",
				},
				accent: {
					50: "#FFE6E7",
					100: "#FFB8BB",
					200: "#FF8B8F",
					300: "#FF5D63", // Color de acento
					400: "#FF4A50",
					500: "#D83A43",
					600: "#B32D35",
					700: "#8E2027",
					800: "#6A1319",
					900: "#46060B",
				},
				info: {
					50: "#F4FCFC",
					100: "#E9F7F7",
					200: "#D6F3F2",
					300: "#C2EEED",
					400: "#AEE9E9",
					500: "#9AE4E4",
					600: "#80D8D8",
					700: "#66CCCC",
					800: "#4ABFBF",
					900: "#2EB2B2",
				},
				success: {
					50: "#E5F9F6",
					100: "#B3F1E8",
					200: "#80E8DA",
					300: "#4EE0CD",
					400: "#26D8BF",
					500: "#00D0B1", // Verde éxito
					600: "#00B69A",
					700: "#009B82",
					800: "#007F6A",
					900: "#006352",
				},
				warning: {
					50: "#FFF9E6",
					100: "#FFF0B3",
					200: "#FFE780",
					300: "#FFDD4D",
					400: "#FFD426",
					500: "#FFC80F", // Amarillo de advertencia
					600: "#DBA00C",
					700: "#B77909",
					800: "#935206",
					900: "#6F2C03",
				},
				error: {
					50: "#FFE6E7",
					100: "#FFB8BB",
					200: "#FF8B8F",
					300: "#FF5D63",
					400: "#FF4A50",
					500: "#D83A43", // Rojo para errores
					600: "#B32D35",
					700: "#8E2027",
					800: "#6A1319",
					900: "#46060B",
				},
				neutral: {
					50: "#F7FAFA",
					100: "#EFF5F5",
					200: "#E6F0F0",
					300: "#DDEAEA",
					400: "#D5E4E4",
					500: "#CCDCDC", // Grises suaves para fondos
					600: "#B3C2C2",
					700: "#99A8A8",
					800: "#809090",
					900: "#677777",
				},
				base: {
					50: "#F2F9F8",
					100: "#E6F3F2",
					200: "#D6F3F2", // Azul claro base
					300: "#BDE7E6",
					400: "#A5DBDA",
					500: "#8CCECE",
					600: "#73C2C2",
					700: "#5BB5B5",
					800: "#42A8A8",
					900: "#298C8C",
				},
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "lemonade"],
	},
};

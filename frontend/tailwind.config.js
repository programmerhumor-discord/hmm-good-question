/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				theme: {
					"primary": "#FFF",
					"secondary": "#C1C1C1",
					"accent": "#136F63",
					"neutral": "#222",
					"base-100": "#111",
					"info": "#3abff8",
					"success": "#36d399",
					"warning": "#fbbd23",
					"error": "#f87272"
				}
			}
		]
	},
	plugins: [require("daisyui")]
};

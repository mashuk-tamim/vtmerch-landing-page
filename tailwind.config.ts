import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"red-primary": "#EA2127",
			},
			fontFamily: {
				inter: ["var(--font-inter)", "sans-serif"],
				montserrat: ["var(--font-montserrat)", "sans-serif"],
				actOfRejection: ["var(--font-act-of-rejection)", "sans-serif"],
			},
			maskImage: {
				"gradient-mask":
					"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0))",
			},
		},
	},
	plugins: [
		function ({ addUtilities }: any) {
			addUtilities({
				".mask-gradient": {
					"mask-image":
						"linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0))",
				},
			});
		},
	],
};
export default config;
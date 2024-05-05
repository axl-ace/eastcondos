/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			tablet: "960px",
			desktop: "1248px",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-roboto_regular)"],
				italic: ["var(--font-roboto_regular_italic)"],
				bold: ["var(--font-roboto_bold)"],
				medium: ["var(--font-roboto_medium)"],
               },
               textColor: {
                    skin: {
                         base: 'var(--color-text-base)',
                         black: 'var(--color-text-black)',
                         dark: 'var(--color-text-dark)',
                         mutted: 'var(--color-text-mutted)',
                    }
               },
               backgroundColor: {
                    skin: {
                         offwhite: 'var(--color-fill-offwhite)',
                         dark: 'var(--color-fill-dark)',
                         brown: 'var(--color-fill-brown)',
                         white: 'var(--color-fill-white)',
                         green: 'var(--color-fill-green)',
                         greenmutted: 'var(--color-fill-greenmutted)',
                         yellow: 'var(--color-fill-yellow)',
                    }
               },
		},
	},
	plugins: [],
};

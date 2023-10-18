/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			maxWidth: {
				container: "1440px",
			},
			boxShadow: {
				firstShadow: "10px 10px 19px #1c1e22, -10px -1opx 19px #262a2e",
			},
			colors: {
				primary: "#FFFFFF",
			},
			backgroundImage: {
				bgcontainer: "url(./assets/bgcontainer.png)",
			},
		},
	},
	plugins: [],
};

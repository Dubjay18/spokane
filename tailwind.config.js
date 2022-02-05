module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			backgroundImage: {
				"purple-bg": "url('./images/bg-purple.png')",
				"form-bg": "url('./images/form.png')",
				laptop: "url('./images/p-laptop.png')",
			},
			height: {
				600: "600px",
				18: "4.5rem",
			},
			colors: {
				secondary: "#767676",
				ash: "#EFEFEF",
				"ash-100": "#F8F8F8",
				pur: "#79007B",
			},
			fontFamily: {
				roboto: ["Roboto"],
			},
		},
	},
	plugins: [],
};

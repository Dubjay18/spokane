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
			},
			height: {
				"600": "600px",
			},
			colors: {
				secondary: "#767676",
				ash: "#EFEFEF",
				pur: "#79007B",
			},
			fontFamily: {
				roboto: ["Roboto"],
			},
		},
	},
	plugins: [],
};

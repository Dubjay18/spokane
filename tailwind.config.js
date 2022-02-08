module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			backgroundImage: {
				"purple-bg": "url('./images/bg-purple.png')",
				"about-bg": "url('./images/about1.jpg')",
				"form-bg": "url('./images/form.png')",
				"find-bg": "url('./images/find.png')",
				"contact-bg": "url('./images/contact.png')",
				"transaction-bg": "url('./images/transaction.png')",
				"hero-bg": "url('./images/hero.png')",
				pinkg: "url('./images/pink.png')",
				laptop: "url('./images/p-laptop.png')",
			},
			boxShadow: {
				btn: "0px 0px 10px rgba(85, 85, 85, 0.25)",
			},
			borderRadius: {
				"4xl": "30px",
			},
			height: {
				600: "600px",
				500: "540px",
				485: "485px",
				18: "4.5rem",
			},
			width: {
				769: "770px",
				"90vw": "90vw"
			},
			colors: {
				secondary: "#767676",
				ash: "#EFEFEF",
				"ash-50": "#999999",
				"ash-100": "#F8F8F8",
				"ash-200": "#F3F3F3",
				"ash-300": "#555555",
				pur: "#79007B",
			},
			fontFamily: {
				roboto: ["Roboto"],
			},
		},
	},
	plugins: [],
};

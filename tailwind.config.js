module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			spacing: {
				15: "15%",
				35: "35%",
			},
			minWidth: {
				11: "11rem",
			},
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
				"btn-2": "0px 0px 8px rgba(0, 0, 0, 0.15)",
			},
			borderRadius: {
				"4xl": "30px",
			},
			height: {
				620: "630px",
				600: "600px",
				500: "540px",
				485: "485px",
				18: "4.5rem",
				"80vh": "80vh",
			},
			width: {
				769: "770px",
				140: "140px",
				"90vw": "90vw",
				"95%": "95%",
				"30%": "30%",
				"70%": "70%",
			},
			colors: {
				secondary: "#767676",
				ash: "#EFEFEF",
				"ash-50": "#999999",
				"ash-100": "#F8F8F8",
				"ash-200": "#F3F3F3",
				"ash-300": "#555555",
				"ash-400": "#9DA4B0",
				"pur-50": "#F7F7F7",
				"pur-100": "#FFF8FF",
				"pur-200": "#FFE9FF",
				"pur-300": "rgba(121, 0, 123, 0.12)",
				yel: "#FBBF24",
				"orange-450": "#F46E44",
				pur: "#79007B",
			},
			fontFamily: {
				roboto: ["Roboto"],
				poppins: ["Poppins"],
			},
		},
	},
	plugins: [],
};

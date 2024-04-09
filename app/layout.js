import localFont from "next/font/local";

import "./globals.css";

export const metadata = {
	title: "Eastate",
	description: "Eastate is a real state agency helping people find their dream homes.",
};

const roboto_thin = localFont({
	src: "./fonts/Roboto-Thin.woff2",
	display: "swap",
	variable: "--font-roboto_thin",
});

const roboto_thin_italic = localFont({
	src: "./fonts/Roboto-ThinItalic.woff2",
	display: "swap",
	variable: "--font-roboto_thin_italic",
});

const roboto_regular = localFont({
	src: "./fonts/Roboto-Regular.woff2",
	display: "swap",
	variable: "--font-roboto_regular",
});

const roboto_regular_italic = localFont({
	src: "./fonts/Roboto-RegularItalic.woff2",
	display: "swap",
	variable: "--font-roboto_regular_italic",
});

const roboto_medium = localFont({
	src: "./fonts/Roboto-Medium.woff2",
	display: "swap",
	variable: "--font-roboto_medium",
});

const roboto_medium_italic = localFont({
	src: "./fonts/Roboto-MediumItalic.woff2",
	display: "swap",
	variable: "--font-roboto_medium_italic",
});

const roboto_bold = localFont({
	src: "./fonts/Roboto-Bold.woff2",
	display: "swap",
	variable: "--font-roboto_bold",
});

const roboto_bold_italic = localFont({
	src: "./fonts/Roboto-BoldItalic.woff2",
	display: "swap",
	variable: "--font-roboto_bold_italic",
});

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${roboto_regular.variable} ${roboto_regular_italic.variable} ${roboto_medium.variable} ${roboto_medium_italic.variable} ${roboto_bold.variable} ${roboto_bold_italic.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}

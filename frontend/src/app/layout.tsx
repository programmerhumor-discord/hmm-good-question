import NavBar from "@/components/navbar";
import "normalize.css";
import "./globals.css";

export const metadata = {};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<NavBar />
				<main>{children}</main>
			</body>
		</html>
	);
}

import { Navbar } from "@/components/layout/Navbar";
import clsx from "clsx";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, "flex flex-col bg-base-300 p-2")}>
				<Navbar />
				<main className="flex flex-1 flex-col">{children}</main>
			</body>
		</html>
	);
}

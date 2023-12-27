import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContext from "@/context/active-section-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { useContext } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "DfOmsorg",
	description: "Hjelp til hjelp",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={
					"${inter.className} bg-gray-50 text-gray-950 relative t-24 sm:pt-32"
				}
			>
				<div className=" bg-orange-100 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
				<div className=" bg-green-200 absolute top-[-1rem] -z-10 left-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
					<Toaster position="bottom-center" />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaHammer } from "react-icons/fa";

export const PrisData = [
	{
		title: "BPA / Følgertjenester",
		icon: "fas fa-car",
		description: "Pris per time",
		price: "500 kr",
	},
	{
		title: "Vedlikehold",
		description: "Pris per time",
		price: "750 kr",
	},
	{
		title: "BPA / Følgertjenester",
		Icon: FaHammer,
		description: "Pris per time",
		price: "375 kr",
	},
	{
		title: "Transport",
		icon: "fas fa-car",
		description: "Per kilometer",
		price: "7 kr",
	},
];

export default function Priser() {
	const { ref } = useSectionInView("Priser");
	return (
		<section ref={ref} id="priser" className="scroll-m-28">
			<SectionHeading>Priser</SectionHeading>
			<div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
				{PrisData.map((prisdata) => (
					<div
						key={prisdata.title}
						className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
					>
						<div className="md:flex-shrink-0 flex justify-center">
							{/* <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
								{<PrisData.icon className="w-1/3 h-1/3" />}
							</div> */}
						</div>

						<div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
							<h3 className="text-base font-medium text-gray-900">
								{prisdata.description}
							</h3>
							<p className="mt-3 text-sm text-muted-foreground">
								{prisdata.price}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

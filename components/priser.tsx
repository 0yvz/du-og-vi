import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { FaCarSide, FaHammer, FaHandHoldingHeart } from "react-icons/fa";
import { GiBroom } from "react-icons/gi";

export const PrisData = [
	{
		title: "BPA / Følgertjenester",
		icon: FaHandHoldingHeart,
		description: "Pris pr time",
		price: "500 kr",
	},
	{
		title: "Vedlikehold",
		icon: GiBroom,
		description: "Pris pr time",
		price: "750 kr",
	},
	{
		title: "Enkle håndtverksoppgaver",
		icon: FaHammer,
		description: "Pris pr time",
		price: "375 kr",
	},
	{
		title: "Transport",
		icon: FaCarSide,
		description: "Pr kilometer",
		price: "7 kr",
	},
];

export default function Priser() {
	const { ref } = useSectionInView("Priser");
	return (
		<section ref={ref} id="priser" className="scroll-m-28">
			<SectionHeading>
				Priser
				<p className=" text-sm">Priser ekskl. mva</p>
			</SectionHeading>
			<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-8">
				{PrisData.map((prisdata) => (
					<div
						key={prisdata.title}
						className="text-center bg-gray-100 border shadow-sm border-black/5 rounded-md p-4 md:flex md:items-start md:text-left lg:block lg:text-center"
					>
						<div className="md:flex-shrink-0 flex justify-center">
							<div className="h-24 w-24 flex items-center justify-center">
								{React.createElement(prisdata.icon, {
									className: "w-2/5 h-2/5 text-gray-800",
								})}
							</div>
						</div>

						<div className="mt-4 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
							<h3 className="mt-3 text-xl font-semibold text-emerald-900">
								{prisdata.title}
							</h3>
							<h3 className="mt-3 text-sm text-muted-foreground">
								{prisdata.description}
							</h3>
							<p className="text-base font-semibold text-gray-900">
								{prisdata.price}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsFillTelephoneForwardFill, BsMailbox } from "react-icons/bs";

export default function Kontakt() {
	const { ref } = useSectionInView("Kontakt");

	return (
		<motion.section
			ref={ref}
			id="kontakt"
			className="scroll-m-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mt-20 sm:mt-0"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Kontakt Oss</SectionHeading>
			<p className="text-gray-700 mb-4">
				Du kan kontakte oss via skjemaet under, eller direkte på:
			</p>
			<p className="flex justify-center">
				<BsMailbox className="mr-2" />{" "}
				<a className="underline mr-2" href="mailto:post@dfomsorg.no">
					post@dfomsorg.no{" "}
				</a>
				og <BsFillTelephoneForwardFill className="mr-2 ml-2" />
				<a className="underline" href="tel:+4792601265">
					92 60 12 65
				</a>
			</p>
			<p className="text-center mt-2">Orgnr. 898 185 222 mva</p>
			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success("Meldingen din har blitt sendt!");
				}}
			>
				<div className="flex flex-row justify-stretch">
					<input
						className="h-14 rounded-lg border border-black/10 px-4 w-full"
						name="firstName"
						type="text"
						required
						maxLength={30}
						placeholder="Fornavn"
					/>
					<input
						className="h-14 rounded-lg border border-black/10 px-4 w-full ml-3 mb-3"
						name="lastName"
						type="text"
						required
						maxLength={30}
						placeholder="Etternavn"
					/>
				</div>
				<input
					className="h-14 rounded-lg border border-black/10 px-4"
					name="senderEmail"
					type="email"
					required
					maxLength={300}
					placeholder="E-post"
				/>
				<textarea
					className="h-52 my-3 rounded-lg border border-black/10 p-4"
					name="message"
					required
					maxLength={3000}
					placeholder="Meldingen din"
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}

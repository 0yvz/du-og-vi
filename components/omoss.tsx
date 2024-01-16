import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function OmOss() {
	const { ref } = useSectionInView("Om oss");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28"
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ delay: 0.2, duration: 0.5 }}
			id="omoss"
		>
			<SectionHeading>Om Oss</SectionHeading>
			<p>
				DfOmsorg er et nyetablert selskap og vårt mål er å tilby tjenester
				som gir deg frihet til å leve det livet du selv vil.
			</p>
			<p>
				Vil du ha ekstra hjelp i hjemmet? Opplever du at vedtaket fra
				kommunen ikke strekker til? Eller ønsker du hjelp i hjemmet uten å
				ha vedtak om hjemmehjelp?
			</p>
			<br />
			<p>
				Med private tjenester fra DfOmsorg kan du få hjelp til enkelt
				renhold i hjemmet, eller en besøksvenn og god samtalepartner.  Vi
				bistår med følgetjenester til lege, tannlege, handletur, til
				kulturopplevelser eller en tur ut på cafe eller andre steder du
				ønsker å besøke.
			</p>
			<br />
			<p>
				Du og Vi har håndverkere som kan hjelpe deg med enkle tjenester som
				å skru opp en hylle, kle om en vegg, innvendig maling etc.
			</p>
			<br />
			<p>
				DfOmsorg kan tilby deg tilrettelagte tjenester etter dine behov og
				ønsker, og innenfor rammen av vedtak om BPA. Innenfor vedtaket er
				det du som skal bestemme tidspunkt og oppgaver du trenger bistand
				til og hvilke oppgaver som skal utføres.
			</p>
			<br />
			<p>
				<span className="font-bold">
					Det handler om å få hjelp av en du kjenner!
				</span>
				<br />
				Dfomsorg vil sørge for at hjelperen din er en som kjenner deg, din
				rutine og livsrytme, og som derfor kan forstå og møte dine ønsker og
				behov. Vi tilbyr ulike tjenester og alle disse kan selvfølgelig
				kombineres. Din hjelper kan for eksempel lage vaffelrøre og vanne
				plantene mens dere skravler. Hjelperen kan ta en handletur for deg,
				eller kanskje du har lyst til å være med? Du bestemmer selv etter
				dine ønsker, behov og dagsform.
			</p>

			{/* Priser

Omsorg			kr. 500,00	pr.time
Håndverkertjenester	kr. 750,00	pr. time
Oppgitte priser er eksklusiv merverdiavgift */}
		</motion.section>
	);
}

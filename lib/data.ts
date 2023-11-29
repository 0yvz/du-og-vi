import React from "react";
import vedlikehold from "@/public/vedlikehold.png";
import bpa from "@/public/bpa.png";
import folge from "@/public/folge.png";
import { FaHammer } from "react-icons/fa";

export const links = [
	{
		name: "Hjem",
		hash: "#hjem",
	},
	{
		name: "Om oss",
		hash: "#omoss",
	},
	{
		name: "Tjenester",
		hash: "#tjenester",
	},
	{
		name: "Priser",
		hash: "#priser",
	},
	{
		name: "Kontakt",
		hash: "#kontakt",
	},
] as const;

export const tjenesteData = [
	{
		title: "Vedlikehold",
		description:
			"Hjelp til enkelt vedlikehold i hjemmet. Vi kan hjelpe deg med alt fra å skifte lyspærer til å bytte ut hele kjøkkenet.",
		tags: [
			"Vedlikehold",
			"Hjemmet",
			"Hagearbeid",
			"Snekring",
			"Rydding",
			"Praktisk",
		],
		imageUrl: vedlikehold,
	},
	{
		title: "BPA",
		description:
			"Du bestemmer selv hva som skal utføres av arbeidsoppgaver og hvordan disse skal utføres. Du bestemmer selv når og hvor du trenger assistanse.",
		tags: ["BPA", "Trening", "Støtte", "Hjemmet", "Personlig"],
		imageUrl: bpa,
	},
	{
		title: "Følgetjenester",
		description:
			"Vi kan følge deg til lege, tannlege, butikken eller andre steder du trenger å dra.",
		tags: ["Transport", "Assistanse"],
		imageUrl: folge,
	},
] as const;

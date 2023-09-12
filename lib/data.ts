import React from "react";
import vedlikehold from "@/public/vedlikehold.png";
import bpa from "@/public/bpa.png";
import folge from "@/public/folge.png";

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
    name: "Tjenster",
    hash: "#tjenester",
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
    tags: ["Vedlikehold", "Hjemmet", "Hagearbeid", "Snekring", "Rydding", "Praktisk"],
    imageUrl: vedlikehold,
  },
  {
    title: "BPA",
    description:
      "Brukertilpasset personlig assistanse. Vi kan hjelpe til med alt fra personlig hygiene til å handle mat.",
    tags: ["BPA", "Helse", "Støtte", "Hjemmet", "Personlig"],
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
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
        Vi er her for å <span className="font-bold"> bringe sammen </span>{" "}
        mennesker som søker omsorg og de som besitter kunnskapen og ekspertisen
        innen omsorg. Enten du er en person som{" "}
        <span className="font-bold"> trenger omsorg </span>
        eller noen som ønsker å{" "}
        <span className="font-bold"> tilby omsorg </span>, er "Du og vi" stedet
        der behovet møter muligheten.
      </p>
      <br />
      <p>
        Vi forstår at omsorg er en
        <span className="font-bold"> dypt personlig og viktig </span> del av
        livet. Uansett om du trenger omsorg for deg selv eller en kjær, kan det
        være utfordrende å finne noen som virkelig forstår{" "}
        <span className="font-bold"> dine behov </span>og kan gi den riktige
        omsorgen. På samme måte kan det være vanskelig for omsorgspersoner å
        finne de som trenger deres{" "}
        <span className="font-bold"> kompetanse </span>og ønsker deres støtte.
      </p>
      <br />
      <p>
        Det er her vi kommer inn. <span className="font-bold">"Du og vi"</span>{" "}
        har som mål å forenkle prosessen med å finne og koble mennesker med
        omsorgsbehov til omsorgsleverandører som virkelig bryr seg. Vår
        plattform fungerer som et <span className="font-bold"> bindeledd</span>,
        der vi bruker vår ekspertise til å{" "}
        <span className="font-bold"> matche </span>de som trenger omsorg med de
        rette omsorgspersonene.
      </p>
    </motion.section>
  );
}

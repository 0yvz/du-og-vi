import React from "react";
import SectionHeading from "./section-heading";
import { tjenesteData } from "@/lib/data";
import Tjeneste from "./tjeneste";
import { useSectionInView } from "@/lib/hooks";

export default function Tjenester() {
  const { ref } = useSectionInView("Tjenester");

  return (
    <section ref={ref} id="tjenester" className="scroll-m-28">
      <SectionHeading>Tjenester</SectionHeading>
      <div>
        {tjenesteData.map((tjeneste, index) => (
          <React.Fragment key={index}>
            <Tjeneste {...tjeneste} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

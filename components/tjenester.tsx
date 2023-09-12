import React from "react";
import SectionHeading from "./section-heading";
import { tjenesteData } from "@/lib/data";
import Tjeneste from "./tjeneste";

export default function Tjenester() {
  return (
    <section>
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

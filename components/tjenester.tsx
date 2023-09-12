import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { tjenesteData } from "@/lib/data";
import Tjeneste from "./tjeneste";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Tjenester() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Tjenester");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

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

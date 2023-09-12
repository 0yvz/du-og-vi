import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { BsFillTelephoneForwardFill, BsMailbox } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";

export default function Kontakt() {
  const { ref } = useSectionInView("Kontakt");

  return (
    <section
      id="kontakt"
      className="scroll-m-28 mb-20 sm:mb-28 w-[min(100%,38rem)]"
    >
      <SectionHeading>Kontakt Oss</SectionHeading>

      <p className="text-gray-700">
        Du kan kontakte oss via skjemaet under, eller direkte på:
      </p>
      <p className="flex items-center justify-center">
        <BsMailbox />{" "}
        <a className="underline" href="mailto:post@duogvi.no">
          post@duogvi.no{" "}
        </a>{" "}
        og <BsFillTelephoneForwardFill />
        <a className="underline" href="tel:+4792601265">
          92 60 12 65
        </a>
        .
      </p>

      <form className="mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg border border-black/10 px-4"
          type="email"
          placeholder="Din E-post"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Meldingen din"
        />
        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-green-700 hover:scale-110 focus:scale-110 active:scale-105"
          type="submit"
        >
          {" "}
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </button>
      </form>
    </section>
  );
}

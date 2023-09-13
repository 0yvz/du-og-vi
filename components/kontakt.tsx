"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { BsFillTelephoneForwardFill, BsMailbox } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Kontakt() {
  const { ref } = useSectionInView("Kontakt");

  return (
    <motion.section
      ref={ref}
      id="kontakt"
      className="scroll-m-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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

      <p className="text-gray-700">
        Du kan kontakte oss via skjemaet under, eller direkte på:
      </p>
      <p className="flex justify-center">
        <BsMailbox className="mr-2" />{" "}
        <a className="underline mr-2" href="mailto:post@duogvi.no">
          post@duogvi.no{" "}
        </a>
        og <BsFillTelephoneForwardFill className="mr-2 ml-2" />
        <a className="underline" href="tel:+4792601265">
          92 60 12 65
        </a>
        .
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (fromData) => {
          await sendEmail(fromData);
        }}
      >
        <input
          className="h-14 rounded-lg border border-black/10 px-4"
          type="email"
          required={true}
          maxLength={300}
          placeholder="Din E-post"
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Meldingen din"
          required={true}
          maxLength={3000}
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
    </motion.section>
  );
}

"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

export default function Hjem() {
  const { ref } = useSectionInView("Hjem");

  return (
    <section
      ref={ref}
      id="hjem"
      className="mb-28 max-w-[50rem] text-center mt-20 sm:mt-0 sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <Image
              src="https://cdn.discordapp.com/attachments/1065679330748944495/1125219123635433512/escon_A_header_image_for_a_health_care_service_website__green_a_42a7bf05-6e38-4b52-9f28-f512da4d9869.png"
              alt="Livets tre"
              width="600"
              height="200"
              quality="95"
              priority={true}
              className="h-60 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-3 right-3 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-3 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>
          Hei, velkommen til <span className="font-bold">Du & Vi.</span> Vi er
          en <span className="font-bold">hjelpetjeneste</span> som kobler
          <span className="font-bold"> hjelpere</span> mot{" "}
          <span className="font-bold">trengende</span>. Vi prøver å dekke et
          bredt utvalg av tjenester etter behov. Ta gjerne{" "}
          <span className="font-bold">kontakt</span> med oss 👇
        </span>
      </motion.p>

      <motion.div
        className="flex items-center justify-center font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
      >
        <Link
          href="#kontakt"
          className="group bg-green-900 text-white px-7 py-3 items-center gap-2 rounded-full flex hover:bg-green-700 hover:scale-110 transition outline-none focus:scale-110 active:scale-105"
        >
          Kontakt oss her{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
    </section>
  );
}

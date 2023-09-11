import Image from "next/image";
import React from "react";

export default function Hjem() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            src="https://cdn.discordapp.com/attachments/1065679330748944495/1125219123635433512/escon_A_header_image_for_a_health_care_service_website__green_a_42a7bf05-6e38-4b52-9f28-f512da4d9869.png"
            alt="Livets tre"
            width="500"
            height="300"
            quality="95"
            priority={true}
            className="h-60 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
          <span className="absolute bottom-3 right-3 text-4xl">👋</span>
        </div>
      </div>
    </section>
  );
}

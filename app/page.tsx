"use client";

import Hjem from "@/components/hjem";
import OmOss from "@/components/omoss";
import SectionDivider from "@/components/section-divider";
import Tjenester from "@/components/tjenester";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ml-10 mr-10 sm:ml-14 sm:mr-14">
      <Hjem />
      <SectionDivider />
      <OmOss />
      <SectionDivider />
      <Tjenester />
    </main>
  );
}

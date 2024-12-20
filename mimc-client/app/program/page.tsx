"use client";

import { Spacer } from "@nextui-org/react";

import Speakers from "@/components/ProgramPage/speakers";
import Activities from "@/components/ProgramPage/activities";

export default function ProgramPage() {
  return (
    <div className="bg-[#570326]">
      <Speakers />
      <Spacer y={24} />
      <Activities />
      <Spacer y={10} />
    </div>
  );
}

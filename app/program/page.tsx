"use client";

import { Spacer } from "@nextui-org/react";

import Speakers from "@/components/ProgramPage/speakers";
import Activities from "@/components/ProgramPage/activities";
import FoodBazaar from "@/components/ProgramPage/food-bazaar";

export default function ProgramPage() {
  return (
    <div>
      <Speakers />
      <Spacer y={24} />
      <Activities />
      <Spacer y={24} />
      <FoodBazaar />
    </div>
  );
}

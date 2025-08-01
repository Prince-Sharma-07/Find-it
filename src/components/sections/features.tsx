//@ts-nocheck
import React from "react";
import FeatureCard from "../cards/feature-card";
import { FEATURES } from "@/constants";

export default function Features() {
  return (
    <div className="w-full bg-green-400/5 dark:bg-gray-950 flex flex-col gap-12 items-center p-8 py-12 pb-20">
      <div className="flex flex-col items-center w-full gap-4">
        <h2 className="text-4xl dark:text-white font-medium text-center">Why Choose Findit?</h2>
        <p className="text-xl text-center text-[#94A3B8] px-5 sm:px-40 md:px-60 lg:px-80 xl:px-102">
          Our platform combines cutting-edge technology with community spirit to
          create the most effective lost and found service.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 sm:px-10 md:px-15 lg:px-20 xl:px-25">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </div>
  );
}

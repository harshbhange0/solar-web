import React from "react";
import FeatureCard, { type FeatureCardProps } from "./feature-card";
import { Button } from "./ui/button";

import { MdEarbudsBattery } from "react-icons/md";
import {
  FaSolarPanel,
  FaCarBattery,
  FaChargingStation,
  FaArrowRight,
} from "react-icons/fa";

const featuresData: FeatureCardProps[] = [
  {
    title: "Energy Monitoring",
    description:
      "Track your energy consumption and production in real-time with detailed analytics.",
    icon: <FaChargingStation size={65} />,
  },
  {
    title: "Battery Solutions",
    description: "Store Sunlight Effectively with Innovative Battery Tech.",
    icon: <FaCarBattery size={65} />,
  },
  {
    title: "Panel Installation",
    description: "Panel Installation involves the professional installation.",
    icon: <FaSolarPanel size={65} />,
  },
  {
    title: "Energy Monitoring",
    description:
      "Track your energy consumption and production in real-time with detailed analytics.",
    icon: <FaChargingStation size={65} />,
  },
];

export default function MidSection() {
  return (
    <section>
      <div className="mt-20 mb-5 flex w-full flex-col items-center justify-center gap-y-1 p-8 text-center">
        <p className="text-xl font-black">Installation Services</p>
        <p className="text-8xl">Custom Solar Solutions</p>
      </div>
      <div className="flex flex-wrap justify-center md;gap-5 gap-3">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}

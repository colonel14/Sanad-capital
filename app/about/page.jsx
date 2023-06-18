import React from "react";

import Teams from "@/container/About/Teams";
import AboutHero from "@/container/About/AboutHero";
import Mission from "@/container/About/Mission";
import AboutFeatures from "@/container/About/AboutFeatures";

export default function About() {
  return (
    <div id="about">
      <AboutHero />
      <Mission />
      <AboutFeatures />
      <Teams />
    </div>
  );
}

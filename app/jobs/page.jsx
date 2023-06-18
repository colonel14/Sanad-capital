import JobsFeatures from "@/container/Jobs/JobsFeatures";
import JobsHero from "@/container/Jobs/JobsHero";
import JobsList from "@/container/Jobs/JobsList";
import React from "react";

export default function Jobs() {
  return (
    <div id="jobs">
      <JobsHero />
      <JobsFeatures />
      <JobsList />
    </div>
  );
}

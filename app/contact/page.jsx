import ContactHero from "@/container/Contact/ContactHero";
import React from "react";

import ContactFaq from "@/container/Contact/ContactFaq";
import Help from "@/container/Contact/Help";

export default function Contact() {
  return (
    <div id="contact">
      <ContactHero />
      <Help />
      <ContactFaq />
    </div>
  );
}

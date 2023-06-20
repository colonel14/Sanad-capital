"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="accordion">
      <h4 className="accordion__header" onClick={toggleAccordion}>
        {title}
        <div className={`${isOpen ? "active" : ""} accordion__icon-wrapper`}>
          <div className="accordion-btn-line horizontal"></div>
          <div className="accordion-btn-line vertical"></div>
        </div>
      </h4>

      <div className={`accordion__content ${isOpen && "open"}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Accordion;

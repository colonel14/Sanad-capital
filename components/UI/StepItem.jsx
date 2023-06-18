import { formatNumber } from "@/app/terms/page";
import React from "react";

export default function StepItem({ title, desc, isList, num }) {
  return (
    <div className="step__item">
      <span className="step__item-circle"></span>
      <div>
        <span className="step__item-num">{formatNumber(num + 1)}</span>
        <h4 className="step__item-title">{title}</h4>
        {isList ? (
          <ul className="step__item-desc">
            {desc.length &&
              desc.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        ) : (
          <p className="step__item-desc">{desc}</p>
        )}
      </div>
    </div>
  );
}

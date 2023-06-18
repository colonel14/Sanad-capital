import { certificatesData as certificates } from "@/constants";
import React from "react";

export default function Certificates() {
  return (
    <section className="certificates">
      <div className="container">
        <div className="content">
          <h2>الشهادات و الترخيص</h2>
          <p>
            بموثوقية وشفافية عالية نشاركك رحلة الاستثمار والتمويل بسند المالية
          </p>
        </div>
        <div className="certif-cards">
          {certificates.map((certificate, index) => (
            <>
              <div key={index} className="certif-card">
                <img
                  src={`./assets/images${certificate.imgUrl}`}
                  alt="certificate"
                />
                <div className="data">
                  <h3>{certificate.title}</h3>
                  <span>{certificate.desc}</span>
                </div>
                <button className="primary-btn">المزيد</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

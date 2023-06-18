"use client";
import { termsTabsContent, termsTabsItems } from "@/constants";
import "@/styles/terms.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, zoomIn } from "@/utils/motion";

export const formatNumber = (num) => {
  return num.toString().padStart(2, "0");
};

export default function Terms() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <main class="terms__main">
      <div class="container">
        <section class="terms__header">
          <h2>الشروط والأحكام</h2>
          <div class="terms__search">
            <form>
              <input
                placeholder="البحث"
                class="terms__search-input"
                name="search"
              />
              <button type="submit" class="terms__search-btn">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </section>

        <div class="terms__body">
          <ul role="tablist" class="aside__tabs-mobile tabs__group">
            <div class="aside-close">
              <i class="fa fa-times"></i>
            </div>
            {termsTabsItems.map((tab, idx) => (
              <li key={idx}>
                <button
                  role="tab"
                  aria-selected={selectedItem == idx ? true : false}
                  aria-controls={`tabpanel-${idx + 1}`}
                  onClick={() => setSelectedItem(idx)}
                  className={`tab ${selectedItem == idx ? "active" : ""}`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
          <ul role="tablist" class="aside__tabs tabs__group">
            {termsTabsItems.map((tab, idx) => (
              <li key={idx}>
                <button
                  role="tab"
                  aria-selected={selectedItem == idx ? true : false}
                  aria-controls={`tabpanel-${idx + 1}`}
                  onClick={() => setSelectedItem(idx)}
                  className={`tab ${selectedItem == idx ? "active" : ""}`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>

          <motion.div
            className="terms__inner"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="aside-open">
              <i className="fa fa-bars"></i>
            </div>
            <h3 className="tab__content-title">
              {termsTabsItems[selectedItem].name}
            </h3>
            {termsTabsContent.map((content, idx) => (
              <div
                key={idx}
                className={`tab__content ${
                  selectedItem == idx ? "active fade-in" : ""
                }`}
              >
                <div className="terms__cards">
                  {content.map((item, index) => (
                    <div key={index} className="term__box">
                      <span className="term__box-num">
                        {formatNumber(index + 1)}
                      </span>
                      <h3 className="term__box-title">{item.title}</h3>
                      <p className="term__box-details">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}

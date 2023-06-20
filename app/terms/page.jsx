"use client";
import { useRef, useState } from "react";
import { termsTabsContent, termsTabsItems } from "@/constants";
import styles from "@/styles/Terms.module.css";
import { motion, useCycle } from "framer-motion";
import { slideIn, staggerContainer, zoomIn } from "@/utils/motion";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

export const formatNumber = (num) => {
  return num.toString().padStart(2, "0");
};

const MenuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const tabContentVariant = {
  active: {
    display: "block",
    transition: {
      staggerChildren: 0.2,
    },
  },
  inactive: {
    display: "none",
  },
};

export default function Terms() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  return (
    <main className={styles.terms__main}>
      <div className={styles.container}>
        <section className={styles.terms__header}>
          <h2>الشروط والأحكام</h2>
          <div className={styles.terms__search}>
            <form>
              <input
                placeholder="البحث"
                className={styles["terms__search-input"]}
                name="search"
              />
              <button type="submit" className={styles["terms__search-btn"]}>
                <AiOutlineSearch />
              </button>
            </form>
          </div>
        </section>

        <motion.div
          className={styles.terms__body}
          initial={false}
          animate={isOpen ? "open" : "closed"}
          ref={containerRef}
        >
          <motion.ul
            role="tablist"
            className={`${styles["aside__tabs-mobile"]} ${
              isOpen ? styles.collapse : ""
            } ${styles.tabs__group}`}
            variants={MenuVariants}
          >
            <div className={styles["aside-close"]} onClick={() => toggleOpen()}>
              <AiOutlineClose />
            </div>
            {termsTabsItems.map((tab, idx) => (
              <motion.li key={idx} variants={variants}>
                <button
                  role="tab"
                  aria-selected={selectedItem == idx ? true : false}
                  aria-controls={`tabpanel-${idx + 1}`}
                  onClick={() => {
                    setSelectedItem(idx);
                    toggleOpen();
                  }}
                  className={` ${styles.tab} tab ${
                    selectedItem == idx ? styles.active : ""
                  }`}
                >
                  {tab.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
          <ul
            role="tablist"
            className={`${styles.aside__tabs} ${styles.tabs__group}`}
          >
            {termsTabsItems.map((tab, idx) => (
              <li key={idx}>
                <button
                  role="tab"
                  aria-selected={selectedItem == idx ? true : false}
                  aria-controls={`tabpanel-${idx + 1}`}
                  onClick={() => setSelectedItem(idx)}
                  className={`${styles.tab} tab ${
                    selectedItem == idx ? styles.active : ""
                  }`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>

          <motion.div
            className={styles.terms__inner}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className={styles["aside-open"]} onClick={() => toggleOpen()}>
              <AiOutlineMenu />
            </div>
            <h3 className={styles["tab__content-title"]}>
              {termsTabsItems[selectedItem].name}
            </h3>
            {termsTabsContent.map((content, idx) => (
              <motion.div
                key={idx}
                role="tabpanel"
                className={`${styles.tab__content} ${
                  selectedItem == idx ? `${styles.active}` : ""
                } fade-in`}
                variants={tabContentVariant}
                animate={selectedItem == idx ? "active" : "inactive"}
                initial="inactive"
              >
                <motion.div className={styles.terms__cards}>
                  {content.map((item, index) => (
                    <div key={index} className={styles.term__box}>
                      <span className={styles["term__box-num"]}>
                        {formatNumber(index + 1)}
                      </span>
                      <h3 className={styles["term__box-titl"]}>{item.title}</h3>
                      <p className={styles["term__box-detail"]}>{item.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

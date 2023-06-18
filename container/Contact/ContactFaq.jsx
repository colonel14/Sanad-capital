"use client";
import Accordion from "@/components/UI/Accordion";
import { contactFaqs as faqs } from "@/constants";
import { fadeIn, staggerContainer } from "@/utils/motion";

import { motion } from "framer-motion";
import styles from "@/styles/Contact.module.css";

export default function ContactFaq() {
  return (
    <motion.section
      className={styles["contact-faq"]}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      <img src="/assets/svg/GROUP.svg" alt="" className={styles["right-svg"]} />
      <div className={styles.container}>
        <div className={styles["section-title"]}>
          <h1>الأسئلة الشائعة</h1>
        </div>

        <div classNameName={styles.accordion__wrapper}>
          {faqs.map((faq, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeIn("left", "tween", 0.2 * index, 1)}
              >
                <Accordion
                  key={index}
                  title={faq.title}
                  content={faq.content}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <img
        src="/assets/svg/GROUP2.svg"
        alt=""
        className={styles["bottom-svg"]}
      />
    </motion.section>
  );
}
"use client";
import { inverstorItems, investorSteps } from "@/constants";
import { formatNumber } from "../terms/page";
import styles from "@/styles/Investor.module.css";
import StepItem from "@/components/UI/StepItem";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { useRef } from "react";

export default function Investor() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "start start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["93%", "0%"]);
  return (
    <div className={styles.inverstor__main}>
      <div className="container">
        <h2 className={styles["hero__text-title"]}>إجراءات هامة للمستثمر</h2>

        <div className={styles.terms__body}>
          <div className={styles.terms__cards}>
            {inverstorItems.map((item, idx) => (
              <div key={idx} className={styles.term__box}>
                <span className={styles["term__box-num"]}>
                  {formatNumber(idx + 1)}
                </span>
                <h3 className={styles["term__box-title"]}>{item.title}</h3>
                <p className={styles["term__box-details"]}>{item.desc}</p>
              </div>
            ))}
          </div>

          <motion.section
            className={styles.steps}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            ref={targetRef}
          >
            <h2 className={styles["steps-title"]}>معلومات هامة للمستثمر</h2>

            <div className={`${styles.timeline} timeline`}>
              <motion.div
                className="timeline-progress"
                style={{ height }}
              ></motion.div>
              {investorSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("left", "tween", 0.1 * idx, 0.4)}
                >
                  <StepItem
                    title={step.title}
                    desc={step.desc}
                    isList={true}
                    num={idx}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

"use client";
import { inverstorItems, investorSteps } from "@/constants";
import { formatNumber } from "../terms/page";
import styles from "@/styles/Investor.module.css";
import StepItem from "@/components/UI/StepItem";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

export default function Investor() {
  console.log(styles);
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
            viewport={{ once: false, amount: 0.25 }}
          >
            <h2 className={styles["steps-title"]}>معلومات هامة للمستثمر</h2>

            <div className="timeline">
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

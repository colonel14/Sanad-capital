"use client";
import { inverstorItems, investorSteps } from "@/constants";
import { formatNumber } from "../terms/page";
import styles from "@/styles/Investor.module.css";
import StepItem from "@/components/UI/StepItem";

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

          <section className={styles.steps}>
            <h2 className={styles["steps-title"]}>معلومات هامة للمستثمر</h2>

            <div className="timeline">
              {investorSteps.map((step, idx) => (
                <StepItem
                  key={idx}
                  title={step.title}
                  desc={step.desc}
                  isList={true}
                  num={idx}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

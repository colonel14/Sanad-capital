"use client";
import { requesterItems, requesterSteps } from "@/constants";

import styles from "@/styles/Investor.module.css";
import { formatNumber } from "../terms/page";
import StepItem from "@/components/UI/StepItem";

export default function Requester() {
  return (
    <div className={styles.inverstor__main}>
      <div className="container">
        <h2 className={styles["hero__text-title"]}>
          إجراءات هامة للشركات طالبة التمويل
        </h2>

        <div className={styles.terms__body}>
          <div className={styles.terms__cards}>
            {requesterItems.map((item, idx) => (
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
            <h2 className={styles["steps-title"]}>
              معلومات هامة للشركات طالبة التمويل
            </h2>

            <div className="timeline">
              {requesterSteps.map((step, idx) => (
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

import React from "react";
import styles from "@/styles/About.module.css";
export default function Mission() {
  return (
    <section className={styles.mission}>
      <div className={styles.container}>
        <div className={styles.mission__wrapper}>
          <div className={styles["mission__text-wrapper"]}>
            <div className={styles.mission__text}>
              <h3 className={styles["mission__text-title"]}>رسالتنا</h3>
              <p className={styles["mission__text-details"]}>
                أن ندعم نمو وتوسع المشاريع الاقتصادية بأساليب تمويل شرعية،
                ونساعد المستثمرين في توجيه أموالهم إلى المشاريع الفاعلة، ونساهم
                في تطوير القطاع المالي ودعم التنمية الاقتصادية وتحقيق أهداف رؤية
                المملكة 2030.
              </p>
            </div>
            <div className={styles.mission__text}>
              <h3 className={styles["mission__text-title"]}>رؤيتنا</h3>
              <p className={styles["mission__text-details"]}>
                خلق بيئة جذابة للاستثمار تلائم جميع أنواع المستثمرين، وتوفير
                التمويل اللازم للمنشآت الصغيرة والمتوسطة من خلال طرح صكوك
                المرابحة.
              </p>
            </div>
          </div>
          <div className={styles.mission__placeholder}>
            <img
              src="/assets/svg/I9.svg"
              alt=""
              className={styles["absolute-svg-one"]}
            />
            <img
              src="/assets/images/mission-image.png"
              className={styles["mission__placeholder-image"]}
            />
            <img
              src="/assets/svg/I8.svg"
              alt=""
              className={styles["absolute-svg-two"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

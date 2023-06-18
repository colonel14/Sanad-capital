"use client";
import styles from "@/styles/About.module.css";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, zoomIn } from "@/utils/motion";

export default function Mission() {
  return (
    <motion.section
      className={styles.mission}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className={styles.container}>
        <div className={styles.mission__wrapper}>
          <div className={styles["mission__text-wrapper"]}>
            <motion.div
              className={styles.mission__text}
              variants={slideIn("right", "tween", 0, 0.4)}
            >
              <h3 className={styles["mission__text-title"]}>رسالتنا</h3>
              <p className={styles["mission__text-details"]}>
                أن ندعم نمو وتوسع المشاريع الاقتصادية بأساليب تمويل شرعية،
                ونساعد المستثمرين في توجيه أموالهم إلى المشاريع الفاعلة، ونساهم
                في تطوير القطاع المالي ودعم التنمية الاقتصادية وتحقيق أهداف رؤية
                المملكة 2030.
              </p>
            </motion.div>
            <motion.div
              className={styles.mission__text}
              variants={slideIn("right", "tween", 0.2, 0.4)}
            >
              <h3 className={styles["mission__text-title"]}>رؤيتنا</h3>
              <p className={styles["mission__text-details"]}>
                خلق بيئة جذابة للاستثمار تلائم جميع أنواع المستثمرين، وتوفير
                التمويل اللازم للمنشآت الصغيرة والمتوسطة من خلال طرح صكوك
                المرابحة.
              </p>
            </motion.div>
          </div>
          <div className={styles.mission__placeholder}>
            <motion.img
              src="/assets/svg/I9.svg"
              alt=""
              className={styles["absolute-svg-one"]}
              variants={zoomIn(0.3, 0.4)}
            />
            <motion.img
              src="/assets/images/mission-image.png"
              className={styles["mission__placeholder-image"]}
              variants={zoomIn(0.1, 0.4)}
            />
            <motion.img
              src="/assets/svg/I8.svg"
              alt=""
              className={styles["absolute-svg-two"]}
              variants={zoomIn(0.3, 0.4)}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

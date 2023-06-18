"use client";
import styles from "@/styles/About.module.css";
import Heading from "@/components/UI/Heading";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, zoomIn } from "@/utils/motion";
import CountTo from "@/components/UI/CountTo";

export default function AboutHero() {
  return (
    <>
      <motion.section
        className={styles.hero}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={styles.container}>
          <div className={styles.hero__inner}>
            <motion.div
              className={styles.hero__text}
              variants={slideIn("right", "tween", 0, 0.4)}
            >
              <Heading
                title="من نحن"
                subtitle="    شركة سند المالية شركة تقنية مالية متخصصة بطرح أدوات الدين
                والاستثمار فيها للمنشآت الصغيرة والمتوسطة عبر منصتها الالكترونية
                التي تسهل الاستثمار لمختلف الأطراف من مستثمرين وطالبي تمويل."
                secondary={true}
              />

              <div className={styles.logos__wrapper}>
                <img
                  src="assets/images/shariyah-logo.png"
                  alt="shariyah logo"
                />
                <img
                  src="assets/images/capital-logo.png"
                  alt="capital market authority logo"
                />
              </div>
            </motion.div>
            <div className={styles.hero__placeholder}>
              <motion.img
                src="/assets/svg/I7.svg"
                alt=""
                className={styles["absolute-svg-one"]}
                variants={zoomIn(0.3, 0.4)}
              />
              <motion.img
                src="/assets/images/about-image.jpg"
                className="hero__placeholder-image"
                variants={zoomIn(0.1, 0.4)}
              />
              <motion.img
                src="/assets/svg/I6.svg"
                alt=""
                className={styles["absolute-svg-two"]}
                variants={zoomIn(0.3, 0.4)}
              />
            </div>
          </div>
        </div>
      </motion.section>
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.stats__inner}>
            <div className={styles.stat__item}>
              <div>
                <small>m</small>
                <span className={styles["stat__item-num"]}>
                  {" "}
                  <CountTo start={0} end={150} />
                </span>
              </div>
              <h4 className={styles["stat__item-title"]}>أرباح موزعة</h4>
            </div>
            <div className={styles.stat__item}>
              <div>
                <small>+</small>
                <span className={styles["stat__item-num"]}>
                  <CountTo start={0} end={200} />
                </span>
              </div>
              <h4 className={styles["stat__item-title"]}>فرص ناجحة</h4>
            </div>
            <div className={styles.stat__item}>
              <div>
                <small>m</small>
                <span className={styles["stat__item-num"]}>
                  {" "}
                  <CountTo start={0} end={150} />
                </span>
              </div>
              <h4 className={styles["stat__item-title"]}>قيمة الفرص</h4>
            </div>
            <div className={styles.stat__item}>
              <div>
                <small>+</small>
                <span className={styles["stat__item-num"]}>
                  {" "}
                  <CountTo start={0} end={200} />
                </span>
              </div>
              <h4 className={styles["stat__item-title"]}>فرص استثمـارية</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

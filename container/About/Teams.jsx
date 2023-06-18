"use client";

import { teamsData } from "@/constants";
import styles from "@/styles/About.module.css";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";
export default function Teams() {
  return (
    <section className={styles.teams}>
      <div className={styles.container}>
        <div className={styles.section__text}>
          <h2 className={styles["section__text-title"]}>
            فريق المذهل وراء شركتنا
          </h2>
          <p className={styles["section__text-subtitle"]}>
            فريق سند المالية يتمتع برؤية مستقبلية وقدرة على التكيف مع التحولات
            السريعة في السوق المالية مما يجعله قادرًا على تقديم خدمات استثمارية
            ومالية عالية الجودة وتحقيق نجاحات مستدامة لشركتكم
          </p>
        </div>
        <motion.div
          className={styles.teams__cards}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {teamsData.map((member, idx) => (
            <motion.div
              key={idx}
              className={`${styles.member__box} ${styles.member} ${
                styles[member.theme]
              }`}
              variants={fadeIn("up", "tween", 0.2 * idx, 1)}
            >
              <div className={styles["member__box-image"]}></div>
              <div className={styles["member__box-header"]}>
                <div className={styles["member__box-info"]}>
                  <span className={styles["member__info-position"]}>
                    {member.position}
                  </span>
                  <h4 className={styles["member__info-name"]}>{member.name}</h4>
                </div>
                <div className={styles["member__box-social"]}>
                  <a href="" className={styles["social-icon"]}>
                    <img src="assets/icons/linkedIn.svg" alt="linkedin" />
                  </a>
                  <a href="" className={styles["social-icon"]}>
                    <img src="assets/icons/twitter.svg" alt="twitter" />
                  </a>
                  <a href="" className={styles["social-icon"]}>
                    <img src="assets/icons/Instagram.svg" alt="instagram" />
                  </a>
                </div>
              </div>
              <div className={styles["member__box-details"]}>{member.desc}</div>
            </motion.div>
          ))}
          <motion.div className={styles.join__box} variants={zoomIn(0.6, 0.4)}>
            <img
              src="/assets/svg/I10.svg"
              alt=""
              className={styles["absolute-svg-one"]}
            />
            <img
              src="/assets/svg/I11.svg"
              alt=""
              className={styles["absolute-svg-two"]}
            />
            <h3 className={styles["join__box-title"]}>
              انضم الآن إلى فريق عمل سند المالية
            </h3>
            <p className={styles["join__box-subtitle"]}>
              بيئة عمل متكاملة للتطوير و الابتكار مع رواتب مجزية
            </p>
            <a href="#" className={`${styles["primary-btn"]} primary-btn`}>
              انضم إلينا
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

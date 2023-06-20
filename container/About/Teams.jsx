"use client";

import { teamsData } from "@/constants";
import styles from "@/styles/About.module.css";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function Teams() {
  return (
    <motion.section
      className={styles.teams}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <motion.div
          className={styles.section__text}
          variants={zoomIn(0.1, 0.4)}
        >
          <h2 className={styles["section__text-title"]}>
            فريق المذهل وراء شركتنا
          </h2>
          <p className={styles["section__text-subtitle"]}>
            فريق سند المالية يتمتع برؤية مستقبلية وقدرة على التكيف مع التحولات
            السريعة في السوق المالية مما يجعله قادرًا على تقديم خدمات استثمارية
            ومالية عالية الجودة وتحقيق نجاحات مستدامة لشركتكم
          </p>
        </motion.div>
        <div className={styles.teams__cards}>
          {teamsData.map((member, idx) => (
            <div key={idx}>
              <motion.div
                className={`${styles.member__box} ${styles[member.theme]}`}
                variants={slideIn("up", "tween", 0.2, 0.4)}
              >
                <div className={styles["member__box-image"]}></div>
                <div className={styles["member__box-header"]}>
                  <div className={styles["member__box-info"]}>
                    <span className={styles["member__info-position"]}>
                      {member.position}
                    </span>
                    <h4 className={styles["member__info-name"]}>
                      {member.name}
                    </h4>
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
                <div className={styles["member__box-details"]}>
                  {member.desc}
                </div>
              </motion.div>
            </div>
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
        </div>
      </div>
    </motion.section>
  );
}

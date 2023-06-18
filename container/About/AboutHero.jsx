import React from "react";
import styles from "@/styles/About.module.css";
import Heading from "@/components/UI/Heading";
export default function AboutHero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.hero__inner}>
            <div className={styles.hero__text}>
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
            </div>
            <div className={styles.hero__placeholder}>
              <img
                src="/assets/svg/I7.svg"
                alt=""
                className={styles["absolute-svg-one"]}
              />
              <img
                src="/assets/images/about-image.jpg"
                className="hero__placeholder-image"
              />
              <img
                src="/assets/svg/I6.svg"
                alt=""
                className={styles["absolute-svg-two"]}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.stats__inner}>
            <div className={styles.stat__item}>
              <div>
                <small>m</small>
                <span className={styles["stat__item-num"]}>150</span>
              </div>
              <h4 className={styles["stat__item-title"]}>أرباح موزعة</h4>
            </div>
            <div className={styles.stat__item}>
              <div>
                <small>+</small>
                <span className={styles["stat__item-num"]}>200</span>
              </div>
              <h4 className={styles["stat__item-title"]}>فرص ناجحة</h4>
            </div>
            <div className={styles.stat__item}>
              <div>
                <small>m</small>
                <span className={styles["stat__item-num"]}>150</span>
              </div>
              <h4 className={styles["stat__item-title"]}>قيمة الفرص</h4>
            </div>
            <div className={styles.stat__item}>
              <div>
                <small>+</small>
                <span className={styles["stat__item-num"]}>200</span>
              </div>
              <h4 className={styles["stat__item-title"]}>فرص استثمـارية</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

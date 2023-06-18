import React from "react";
import styles from "@/styles/Details.module.css";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function RelatedJobs() {
  return (
    <section className={styles.jobs}>
      <div className={styles.container}>
        <div className={styles.jobs__header}>
          <h2 className={styles["job__header-title"]}>
            المزيد من الوظائف المفتوحة
          </h2>
          <div className={styles["job__header-btn"]}>
            <Link
              href="/jobs"
              className={`${styles["secondary-btn"]} secondary-btn`}
            >
              تصفح الوظائفة المفتوحة
            </Link>
          </div>
        </div>
        <div className={styles.jobs__body}>
          <div className={styles.jobs__cards}>
            <div className={styles.job__card}>
              <span className={styles["job__card-type"]}>دوام كامل</span>
              <h3 className={styles["job__card-title"]}>
                Senior Backend Developer
              </h3>
              <p className={styles["job__card-details"]}>
                من ذوي الخبرة · 5-7 سنوات من الخبرة · تكنولوجيا المعلومات /
                تطوير البرمجيات · الهندسة - الاتصالات / التكنولوجيا · صافي ·
                الإطار الصافي
              </p>
              <div className={styles["job__card-footer"]}>
                <span className={styles["job__card-date"]}>27 أغسطس 2023</span>
                <a href="/jobs/1" className={styles["job__card-link"]}>
                  <AiOutlineArrowLeft />
                </a>
              </div>
            </div>

            <div className={styles.job__card}>
              <span className={styles["job__card-type"]}>دوام كامل</span>
              <h3 className={styles["job__card-title"]}>
                مطور تطبيقات الهاتف المحمول
              </h3>
              <p className={styles["job__card-details"]}>
                من ذوي الخبرة · 3-5 سنوات من الخبرة · تكنولوجيا المعلومات /
                تطوير البرمجيات · الهندسة - الاتصالات / التكنولوجيا · تطوير
                المحمول · أندرويد
              </p>
              <div className={styles["job__card-footer"]}>
                <span className={styles["job__card-date"]}>27 أغسطس 2023</span>
                <a href="#" className={styles["job__card-link"]}>
                  <AiOutlineArrowLeft />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import styles from "@/styles/Jobs.module.css";
import Heading from "@/components/UI/Heading";

export default function JobsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.hero__inner}>
          <div className={styles.hero__text}>
            <h1 className={styles["hero__text-title"]}>
              إنضم إلى فريق عمل
              <br />
              سند المالية
            </h1>
            <p className={styles["hero__text-subtitle"]}>
              شركة سند المالية شركة مالية متخصصة بطرح أدوات الدين والاستثمار
              فيها للمنشآت الصغيرة والمتوسطة عبر منصتها الالكترونية التي تسهل
              طرح الفرص والاستثمار لمختلف الأطراف من مستثمرين وطالبي تمويل.
            </p>
          </div>
          <div className={styles.btns__group}>
            <Link
              href="/about"
              className={`secondary-btn ${styles["secondary-btn"]}`}
            >
              من نحن
            </Link>
            <Link href="/" className={`primary-btn ${styles["primary-btn"]}`}>
              انضم إلينا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

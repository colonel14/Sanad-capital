import styles from "@/styles/Jobs.module.css";
import { jobsFeatures } from "@/constants";
export default function JobsFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.features__placeholder}>
        <img
          src="assets/images/jobs-back.png"
          className={styles["features__placeholder-img"]}
          alt="features placeholder"
        />
      </div>

      <div className={styles.container}>
        <div className={styles.features__inner}>
          <img
            src="/assets/svg/I2.svg"
            alt=""
            className={styles["absolute-svg-one"]}
          />
          <img
            src="/assets/svg/I4.svg"
            alt=""
            className={styles["absolute-svg-two"]}
          />
          <div className={styles.features__text}>
            <h2 className={styles["features__text-title"]}>لماذا العمل معنا</h2>
            <p className={styles["features__text-subtitle"]}>
              سند المالية هي شركة تقنية مالية متخصصة في طرح أدوات الدين و
              الاستثمار للمنشآت الصغيرة والمتوسطة، وتعتبر من الشركات الرائدة في
              هذا المجال. بالعمل معنا، ستكون جزءًا من فريق يسعى دائمًا لتقديم
              أفضل الحلول المالية لعملائنا وأيضا نهتم بتطوير مسارات مهنية ناجحة
              لموظفينا. إذا كنت تبحث عن فرص للترقية والتقدم في مجالك، فسند
              المالية هي المكان المثالي لك
            </p>
            <a
              href="#"
              className={`${styles["features__text-button"]} primary-btn`}
            >
              انضم الآن
            </a>
          </div>
          <div className={styles["feat-cards"]}>
            {jobsFeatures.map((feature, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.icon}>
                  <img src={`/assets/icons/${feature.iconUrl}`} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

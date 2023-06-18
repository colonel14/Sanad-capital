"use client";
import styles from "@/styles/About.module.css";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import { motion } from "framer-motion";

export default function AboutFeatures() {
  return (
    <motion.section
      className={styles.features}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={styles.container}>
        <div className={styles.features__inner}>
          <motion.div
            className={styles.features__text}
            variants={zoomIn(0.1, 0.4)}
          >
            <h2 className={styles["features__text-title"]}>
              الشعار الأساسي الذي يدفع
              <br />
              كل ما نقوم به
            </h2>
            <p className={styles["features__text-subtitle"]}>
              تمويل واستثمار متقدم يدعم النجاح والتميز حين نهدف إلى تسهيل الفرص
              والاستثمار لمختلف الأطراف، بما في ذلك المستثمرين وطالبي التمويل
            </p>
          </motion.div>
          <div className={styles.features__cards}>
            <motion.div
              className={styles.feat__box}
              variants={fadeIn("up", "tween", 0.2, 1)}
            >
              <div className={styles["feat__box-num"]}>01</div>
              <h3 className={styles["feat__box-title"]}>
                العمل بروح الفريق الواحد
              </h3>
              <p className={styles["feat__box-details"]}>
                نؤمن بأهمية العمل الجماعي والتعاون المثمر بين جميع أفراد فريقنا.
                نعمل معًا بروح الشراكة والتفاعل لتحقيق النجاح المشترك
              </p>
            </motion.div>
            <motion.div
              className={styles.feat__box}
              variants={fadeIn("up", "tween", 0.2, 1)}
            >
              <div className={styles["feat__box-num"]}>02</div>
              <h3 className={styles["feat__box-title"]}>الشفافية</h3>
              <p className={styles["feat__box-details"]}>
                نولي أهمية كبيرة للشفافية في كل جوانب عملنا. نسعى لتوفير معلومات
                دقيقة وشفافة لعملائنا وشركائنا، ونتفهم أنها أساس الثقة والتعاون
                المستدام
              </p>
            </motion.div>
            <motion.div
              className={styles.feat__box}
              variants={fadeIn("up", "tween", 0.2, 1)}
            >
              <div className={styles["feat__box-num"]}>03</div>
              <h3 className={styles["feat__box-title"]}>الابتكار</h3>
              <p className={styles["feat__box-details"]}>
                نحن دائمًا في سباق مستمر للاستمرار في التطوير والتحسين. ندعم
                ونشجع الابتكار والأفكار الجديدة لتلبية احتياجات عملائنا ومواكبة
                التطورات في عالم الأعمال المالية
              </p>
            </motion.div>
            <motion.div
              className={styles.feat__box}
              variants={fadeIn("up", "tween", 0.2, 1)}
            >
              <div className={styles["feat__box-num"]}>04</div>
              <h3 className={styles["feat__box-title"]}>الالتزام</h3>
              <p className={styles["feat__box-details"]}>
                نحن ملتزمون بتقديم خدمات عالية الجودة وموثوقة لعملائنا. نضمن
                التزامنا بأعلى معايير الأخلاق والمهنية لتحقيق تجربة إيجابية
                ونجاح مستدام لعملائنا من خلال دراسة الفرص الاستثمارية و تحديد
                المخاطر و اعدادها من قبل فريق إتمان متخصص
              </p>
            </motion.div>
            <motion.div
              className={styles.feat__box}
              variants={fadeIn("up", "tween", 0.2, 1)}
            >
              <div className={styles["feat__box-num"]}>05</div>
              <h3 className={styles["feat__box-title"]}>تصريح بممارسة العمل</h3>
              <p className={styles["feat__box-details"]}>
                نلتزم بتطبيق وامتثال جميع القوانين واللوائح المالية ذات الصلة.
                نحرص على ضمان سلامة وشفافية جميع أعمالنا وأنشطتنا لضمان مطابقة
                نشاط الشركة مع البيئه و اشتراطات هيئه سوق المالية
              </p>
            </motion.div>
            <motion.div
              className={styles.feat__box}
              variants={fadeIn("up", "tween", 0.2, 1)}
            >
              <div className={styles["feat__box-num"]}>06</div>
              <h3 className={styles["feat__box-title"]}>الشريعة الاسلامية</h3>
              <p className={styles["feat__box-details"]}>
                شركة سند المالية حاصلة على شهادات تطبيق متوافقة مع مطالبات
                الشريعة الاسلامية نحرص على الامتثال لأحكام الشريعة الإسلامية في
                جميع جوانب عملنا. نقدم خدمات مالية متوافقة مع المبادئ الشرعية،
                مما يضمن أن عملائنا يستفيدون من حلول تمويلية شرعية ومتوافقة
              </p>
            </motion.div>
          </div>
          <a
            href="contact.html"
            className={`${styles["primary-btn"]} primary-btn`}
          >
            تواصل معنا
          </a>
        </div>
      </div>
    </motion.section>
  );
}

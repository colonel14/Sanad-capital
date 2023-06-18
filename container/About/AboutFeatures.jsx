import styles from "@/styles/About.module.css";

export default function AboutFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.features__inner}>
          <div className={styles.features__text}>
            <h2 className={styles["features__text-title"]}>
              الشعار الأساسي الذي يدفع
              <br />
              كل ما نقوم به
            </h2>
            <p className={styles["features__text-subtitle"]}>
              تمويل واستثمار متقدم يدعم النجاح والتميز حين نهدف إلى تسهيل الفرص
              والاستثمار لمختلف الأطراف، بما في ذلك المستثمرين وطالبي التمويل
            </p>
          </div>
          <div className={styles.features__cards}>
            <div className={styles.feat__box}>
              <div className={styles["feat__box-num"]}>01</div>
              <h3 className={styles["feat__box-title"]}>
                العمل بروح الفريق الواحد
              </h3>
              <p className={styles["feat__box-details"]}>
                نؤمن بأهمية العمل الجماعي والتعاون المثمر بين جميع أفراد فريقنا.
                نعمل معًا بروح الشراكة والتفاعل لتحقيق النجاح المشترك
              </p>
            </div>
            <div className={styles.feat__box}>
              <div className={styles["feat__box-num"]}>02</div>
              <h3 className={styles["feat__box-title"]}>الشفافية</h3>
              <p className={styles["feat__box-details"]}>
                نولي أهمية كبيرة للشفافية في كل جوانب عملنا. نسعى لتوفير معلومات
                دقيقة وشفافة لعملائنا وشركائنا، ونتفهم أنها أساس الثقة والتعاون
                المستدام
              </p>
            </div>
            <div className={styles.feat__box}>
              <div className={styles["feat__box-num"]}>03</div>
              <h3 className={styles["feat__box-title"]}>الابتكار</h3>
              <p className={styles["feat__box-details"]}>
                نحن دائمًا في سباق مستمر للاستمرار في التطوير والتحسين. ندعم
                ونشجع الابتكار والأفكار الجديدة لتلبية احتياجات عملائنا ومواكبة
                التطورات في عالم الأعمال المالية
              </p>
            </div>
            <div className={styles.feat__box}>
              <div className={styles["feat__box-num"]}>04</div>
              <h3 className={styles["feat__box-title"]}>الالتزام</h3>
              <p className={styles["feat__box-details"]}>
                نحن ملتزمون بتقديم خدمات عالية الجودة وموثوقة لعملائنا. نضمن
                التزامنا بأعلى معايير الأخلاق والمهنية لتحقيق تجربة إيجابية
                ونجاح مستدام لعملائنا من خلال دراسة الفرص الاستثمارية و تحديد
                المخاطر و اعدادها من قبل فريق إتمان متخصص
              </p>
            </div>
            <div className={styles.feat__box}>
              <div className={styles["feat__box-num"]}>05</div>
              <h3 className={styles["feat__box-title"]}>تصريح بممارسة العمل</h3>
              <p className={styles["feat__box-details"]}>
                نلتزم بتطبيق وامتثال جميع القوانين واللوائح المالية ذات الصلة.
                نحرص على ضمان سلامة وشفافية جميع أعمالنا وأنشطتنا لضمان مطابقة
                نشاط الشركة مع البيئه و اشتراطات هيئه سوق المالية
              </p>
            </div>
            <div className={styles.feat__box}>
              <div className={styles["feat__box-num"]}>06</div>
              <h3 className={styles["feat__box-title"]}>الشريعة الاسلامية</h3>
              <p className={styles["feat__box-details"]}>
                شركة سند المالية حاصلة على شهادات تطبيق متوافقة مع مطالبات
                الشريعة الاسلامية نحرص على الامتثال لأحكام الشريعة الإسلامية في
                جميع جوانب عملنا. نقدم خدمات مالية متوافقة مع المبادئ الشرعية،
                مما يضمن أن عملائنا يستفيدون من حلول تمويلية شرعية ومتوافقة
              </p>
            </div>
          </div>
          <a href="contact.html" className="primary-btn">
            تواصل معنا
          </a>
        </div>
      </div>
    </section>
  );
}

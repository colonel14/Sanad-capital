"use client";
import styles from "@/styles/Details.module.css";
import RelatedJobs from "@/container/Jobs/RelatedJobs";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";

export default function JobDetails() {
  return (
    <div id="details">
      <motion.section
        className={styles.hero}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.img
          src="/assets/svg/GROUP.svg"
          alt=""
          className={styles["absolute-svg-one"]}
          variants={zoomIn(0.1, 0.3)}
        />
        <motion.img
          src="/assets/svg/I5.svg"
          alt=""
          className={styles["absolute-svg-two"]}
          variants={zoomIn(0.1, 0.3)}
        />
        <div className={styles.container}>
          <div className={styles.hero__text}>
            <span className={styles["hero__text-badge"]}>تصميم</span>
            <h1 className={styles["hero__text-title"]}>
              UI/UX and Product Designer
            </h1>
            <p className={styles["hero__text-subtitle"]}>
              تساعد استراتيجيات العلامات التجارية المبهجة من الناحية الجمالية
              على الوصول بفعالية إلى المزيد من العملاء. كما أنهم يضمنون أن
              الرحلة الشاملة مع منتجاتهم أو خدماتهم تلبي النتائج المرجوة.
            </p>
            <div className={styles.btns}>
              <button className={`primary-btn ${styles["primary-btn"]}`}>
                تقدم الآن
              </button>
            </div>
          </div>
        </div>
      </motion.section>
      <section className={styles.details__main}>
        <div className={styles.container}>
          <div className={styles.details__wrapper}>
            <div className={styles.details__block}>
              <h3 className={styles["details__block-title"]}>موجز الوظيفة</h3>
              <ul className={styles["details__block-desc"]}>
                نحن نبحث عن مصمم UI / UX لتحويل برنامجنا إلى منتجات سهلة
                الاستخدام لعملائنا. تتضمن مسؤوليات UI / UX Designer جمع متطلبات
                المستخدم وتصميم العناصر الرسومية وبناء مكونات التنقل. لتكون
                ناجحًا في هذا الدور ، يجب أن تكون لديك خبرة في برامج التصميم
                وأدوات الهيكل الشبكي. إذا كان لديك أيضًا مجموعة من مشاريع
                التصميم الاحترافية التي تتضمن العمل مع تطبيقات الويب / الهاتف
                المحمول ، فنحن نرغب في مقابلتك. في النهاية ، ستنشئ ميزات وظيفية
                وجذابة تلبي احتياجات عملائنا وتساعدنا على تنمية قاعدة عملائنا.
              </ul>
            </div>
            <div className={styles.details__block}>
              <h3 className={styles["details__block-title"]}>المسؤوليات</h3>
              <ul className={styles["details__block-desc"]}>
                <li>
                  جمع وتقييم متطلبات المستخدم بالتعاون مع مديري المنتج
                  والمهندسين
                </li>
                <li>
                  توضيح أفكار التصميم باستخدام القصص المصورة وتدفق العمليات
                  وخرائط المواقع
                </li>
                <li>
                  تصميم عناصر واجهة المستخدم الرسومية ، مثل القوائم وعلامات
                  التبويب وعناصر واجهة المستخدم
                </li>
                <li>إنشاء أزرار التنقل في الصفحة وحقول البحث</li>
                <li>
                  قم بتطوير نماذج ونماذج أولية لواجهة المستخدم توضح بوضوح كيفية
                  عمل المواقع وشكلها
                </li>
                <li>
                  إنشاء تصميمات رسومية أصلية (مثل الصور والرسومات والجداول)
                </li>
                <li>
                  قم بإعداد وتقديم المسودات الأولية للفرق الداخلية وأصحاب
                  المصلحة الرئيسيين
                </li>
                <li>تحديد واستكشاف مشكلات UX (مثل الاستجابة)</li>
                <li>إجراء تعديلات التخطيط بناءً على ملاحظات المستخدم</li>
                <li>الالتزام بمعايير النمط على الخطوط والألوان والصور</li>
              </ul>
            </div>
            <div className={styles.details__block}>
              <h3 className={styles["details__block-title"]}>
                المتطلبات والمهارات
              </h3>
              <ul
                className={`${styles["details__block-desc"]} ${styles.skills}`}
              >
                <li>خبرة عمل مثبتة كمصمم UI / UX أو دور مماثل</li>
                <li>حافظة مشاريع التصميم</li>
                <li>معرفة أدوات الهيكل الشبكي (مثل Wireframe.cc و InVision)</li>
                <li>
                  معرفة حديثة ببرامج التصميم مثل Adobe Illustrator و Photoshop
                </li>
                <li>
                  روح الفريق؛ مهارات اتصال قوية للتعاون مع مختلف أصحاب المصلحة
                </li>
                <li>مهارات جيدة في إدارة الوقت</li>
                <li>بكالوريوس في التصميم أو علوم الكمبيوتر أو مجال ذي صلة</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <RelatedJobs />
    </div>
  );
}

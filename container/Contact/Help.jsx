import styles from "@/styles/Contact.module.css";
import { FaRegPaperPlane } from "react-icons/fa";
import { CgSupport } from "react-icons/cg";
import { FiTool } from "react-icons/fi";

export default function Help() {
  return (
    <section className={styles["need-help"]} id={styles.needHelp}>
      <div className={styles.container}>
        <div className={styles["section-header"]}>
          <h1>تحتاج مساعدة؟</h1>
          <p>
            تهمنا تجربتك في منصة سند المالية ونسعى دائمًا لتحسين وتطوير المنصة
            لتواكب <br />
            احتياجاتك سواء كنت طالب تمويل أومستثمرًا
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FaRegPaperPlane />
            </div>
            <div className={styles["card-title"]}>
              <h4>استفسار عام</h4>
            </div>
            <div className={styles["card-desc"]}>
              <p>
                إذا كان لديك أي سؤال عام يتعلق بالمنصة، فلا تتردد في طرحه هنا.
                سنكون سعداء للإجابة على استفساراتك وتقديم المعلومات الضرورية
                لمساعدتك في فهم واستخدام المنصة بشكل أفضل
              </p>
            </div>
            <div className={styles["card-publisher"]}>
              <strong>info@sanadcapital.sa</strong>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <FiTool />
            </div>
            <div className={styles["card-title"]}>
              <h4>استفسار عام</h4>
            </div>
            <div className={styles["card-desc"]}>
              <p>
                إذا كان لديك أي سؤال عام يتعلق بالمنصة، فلا تتردد في طرحه هنا.
                سنكون سعداء للإجابة على استفساراتك وتقديم المعلومات الضرورية
                لمساعدتك في فهم واستخدام المنصة بشكل أفضل
              </p>
            </div>
            <div className={styles["card-publisher"]}>
              <strong>info@sanadcapital.sa</strong>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <CgSupport />
            </div>
            <div className={styles["card-title"]}>
              <h4>استفسار عام</h4>
            </div>
            <div className={styles["card-desc"]}>
              <p>
                إذا كان لديك أي سؤال عام يتعلق بالمنصة، فلا تتردد في طرحه هنا.
                سنكون سعداء للإجابة على استفساراتك وتقديم المعلومات الضرورية
                لمساعدتك في فهم واستخدام المنصة بشكل أفضل
              </p>
            </div>
            <div className={styles["card-publisher"]}>
              <strong>info@sanadcapital.sa</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

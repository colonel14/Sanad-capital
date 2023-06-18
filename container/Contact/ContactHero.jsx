import styles from "@/styles/Contact.module.css";
export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles["contact-title"]}>
          <h1>
            للإستفســـارات
            <br />
            تواصــــــــل معنا
          </h1>
        </div>

        <form className={styles.contact__form}>
          <div className={styles.form__row}>
            <div className={styles.form__group}>
              <label htmlFor="firstname" className={styles.form__label}>
                الاسم
              </label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                className={styles.form__input}
                placeholder="محمد محمد أحمد"
              />
            </div>
            <div className={styles.form__group}>
              <label htmlFor="email" className={styles.form__label}>
                البريد الالكتروني
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={styles.form__input}
                placeholder="mohamed.ahmed@gmail.com"
              />
            </div>
          </div>
          <div className={styles.form__row}>
            <div className={styles.form__group}>
              <label htmlFor="fruit" className={styles.form__label}>
                ماذا تحتاج ؟
              </label>
              <select name="problems" className={styles.form__select}>
                <option>لديك مشكلة في المنصة *</option>
                <option>لديك استفسار عام</option>
                <option>لديك اقتراح أو توصية</option>
              </select>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="phonenumber" className={styles.form__label}>
                رقم الجوال
              </label>
              <input
                id="phonenumber"
                type="tel"
                name="phonenumber"
                className={styles.form__input}
                placeholder="9568786644534"
              />
            </div>
          </div>

          <div className={styles.textarea__group}>
            <label htmlFor="message" className={styles.form__label}>
              نص الرسالة
            </label>
            <textarea
              id="message"
              type="text"
              name="message"
              placeholder="أضف تفاصيل أكثر"
              className={styles.form__textarea}
            ></textarea>
          </div>

          <div className="text-end">
            <button type="submit" className="primary-btn">
              إرسال
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

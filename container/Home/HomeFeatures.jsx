"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, zoomIn } from "@/utils/motion";

export default function HomeFeatures() {
  return (
    <motion.section
      className="features"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.img
        src="/assets/svg/I2.svg"
        alt=""
        className="absolute-svg-one"
        variants={zoomIn(0.1, 0.3)}
      />
      <motion.img
        src="/assets/svg/I.svg"
        alt=""
        className="absolute-svg-two "
        variants={zoomIn(0.4, 0.3)}
      />
      <div className="container">
        <motion.div
          className="content"
          variants={slideIn("right", "tween", 0.2, 0.3)}
        >
          <h2>استثمر من مكانك</h2>
          <p>
            نحن شركة مرخصة من هيئة السوق المالية بالخدمات المشورة المالية نتيح
            للمستثمرين الدخول في اكتتبات استثمارية محلية وعالمية بخطوات سهلة عبر
            منصة آمنة بعمليات مؤتمنة وتضمن الدّقة.
          </p>
          <button className="primary-btn">المزيد</button>
        </motion.div>
        <motion.div className="feat-cards" variants={zoomIn(0.1, 0.3)}>
          <div className="card">
            <h3>عوائد ثابتة</h3>
            <p>عوائد ثابتة مرتفعة مقارنة بالأدوات الاستثمارية الأخرى.</p>
          </div>
          <div className="card">
            <h3>الأرباح شهرية</h3>
            <p>عوائد ثابتة مرتفعة مقارنة بالأدوات الاستثمارية الأخرى</p>
          </div>
          <div className="card">
            <h3>تجربة رقمية</h3>
            <p>جميع المعاملات بشكل رقمي و إدارة تقديم الطلبات</p>
          </div>
          <div className="card">
            <h3>تمويل مرتفع</h3>
            <p>يصل لـ 30 مليون ريال، ويتم الرد في غضون 5 أيام عمل</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

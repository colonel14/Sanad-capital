"use client";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";
export default function Risks() {
  return (
    <section
      class="risk"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div class="container">
        <h3>المخاطر</h3>
        <h4>
          للاستثمار متلازمة دائمة وهي الخطر، ومن المخاطر التي قد يتعرض لها
          المستثمرون في صكوك المرابحة تعثر الجهة طالبة التمويل عن سداد
          التزاماتها، لذا تعمل المنصة على الحد من هذه المخاطر عبر الدراسة
          المفصلة والدقيقة للشركات طالبة التمويل قبل عرض مشروعها على المنصة.
        </h4>
      </div>
      <motion.img
        src="/assets/svg/I3.svg"
        alt="shape"
        class="svg-bg"
        variants={zoomIn(0.1, 0.3)}
      />
    </section>
  );
}

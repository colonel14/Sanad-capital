"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";
import StepItem from "@/components/UI/StepItem";
export default function HomeSteps() {
  return (
    <section className="steps">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="content ">
          <h2>نحرص على منحك تجربة تمويل واستثمار متكاملة ومبسطة</h2>
          <p>
            منصة الكترونية مصرحة من هيئة السوق المالية، ضِمن مُختبر التقنية
            المالية.
          </p>
          <button className="primary-btn">تواصل معنا</button>
        </div>
        <div className="timeline">
          <motion.div variants={fadeIn("left", "tween", 0, 1)}>
            <StepItem
              title="عوائد ثابتة"
              desc="عوائد ثابتة مرتفعة مقارنة بأنواع الاستثمار الأخرى."
              num={0}
            />
          </motion.div>
          <motion.div
            className="time"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            <StepItem
              title="توزيعات دورية للأرباح"
              desc="توزيعات دورية ربع ونصف سنوية للأرباح."
              num={1}
            />
          </motion.div>
          <motion.div
            className="time"
            variants={fadeIn("left", "tween", 0.8, 1)}
          >
            <StepItem
              title="إجراءات سهلة للتسجيل والاستثمار"
              desc="خطوات إلكترونية مبسطة."
              num={2}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

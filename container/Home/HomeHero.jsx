"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Heading from "@/components/UI/Heading";
import Link from "next/link";

function HomeHero() {
  return (
    <section className="hero">
      <motion.div
        className="container"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div variants={zoomIn(0, 0.4)}>
          <Heading
            title="تمويل المنشأت من خلال حلول تمويلية سريعة"
            subtitle="كن مستثمرًا أو احصل على تمويل لمنشأتك.."
            center
          />
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0, 0.5)} className="btns">
          <Link href="/investor" className="secondary-btn">
            مستثمر
          </Link>
          <Link href="/requester" className="primary-btn">
            طالب تمويل
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HomeHero;

"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { staggerContainer, zoomIn } from "@/utils/motion";

export default function Footer() {
  const pathname = usePathname();
  const excludedPaths = ["/contact"];
  return (
    <footer className={`${!excludedPaths.includes(pathname) && "show"}`}>
      {!excludedPaths.includes(pathname) && (
        <motion.div
          id="footer__top"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div class="container">
            <div class="contact">
              <div class="contact__text">
                <h2>
                  اﺳﺘﻨــﺪ ﻋﻠﻰ ﺷــــــــﺮﻳﻚ
                  <br /> ﻳﻔﻬﻤــﻚ
                  <br />
                  تواصل معنا الآن
                </h2>
                <div class="btns__group">
                  <button class="secondary-btn">خدمتنا</button>
                  <a href="contact.html" class="primary-btn">
                    تواصل معنا
                  </a>
                </div>
              </div>
            </div>
          </div>
          <motion.img
            src="/assets/svg/I3.svg"
            alt=""
            class="absolute-svg-one"
            variants={zoomIn(0.1, 0.3)}
          />
        </motion.div>
      )}
      <div id="footer__middle">
        <div class="container">
          <h4 class="footer__title">الروابط</h4>
          <div class="footer__row">
            <div class="footer__column">
              <ul class="footer__links">
                <li>
                  <Link href="/">الصفحة الرئيسية</Link>
                </li>
                <li>
                  <Link href="/contact">من نحن</Link>
                </li>
                <li>
                  <a href="/investor">مستثمر</a>
                </li>
                <li>
                  <Link href="/requester">طالب تمويل</Link>
                </li>
                <li>
                  <Link href="/contact">تواصل معنا</Link>
                </li>
                <li>
                  <Link href="/terms">الأسئلة الشائعة</Link>
                </li>
                <li>
                  <Link href="#">التسجيل</Link>
                </li>
              </ul>
            </div>
            <div class="footer__column">
              <ul class="footer__links">
                <li>
                  <a href="/"> تسجيل الدخول</a>
                </li>
                <li>
                  <Link href="/contact">ابدأ الاستثمار</Link>
                </li>
                <li>
                  <Link href="/jobs">الوظائف</Link>
                </li>
                <li>
                  <Link href="/requester">مهنة واحدة</Link>
                </li>
                <li>
                  <Link href="/contact">مركز المساعدة</Link>
                </li>
                <li>
                  <Link href="/about">فريق العمل</Link>
                </li>
                <li>
                  <Link href="/terms">الشروط والأحكام</Link>
                </li>
              </ul>
            </div>
            <div class="footer__column">
              <h4 class="footer__title">تابعنا</h4>
              <ul class="footer__social">
                <li>
                  <a href="/">
                    <div class="social-icon twitter">
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/twitter.svg"
                        alt="twitter icon"
                      />
                    </div>
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="/">
                    <div class="social-icon instagram">
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/Instagram.svg"
                        alt="Instagram.svg icon"
                      />
                    </div>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="/">
                    <div class="social-icon linkedin">
                      <Image
                        width={40}
                        height={40}
                        src="/assets/icons/linkedIn.svg"
                        alt="linkedIn.svg icon"
                      />
                    </div>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="footer__bottom">
        <div class="container">
          <div class="footer__bottom-inner">
            <h3 class="footer__desc">
              شركة سند المالية شركة ذات مسئولية محدودة حاصلة على ترخيص من هيئة
              السوق المالية للممارسة نشاط طرح أدوات الدين و الاستثمار فيها
            </h3>
            <div class="fotoer__logos">
              <Image
                width={52}
                height={52}
                src="/assets/images/footer-logo-1.png"
                alt="footer logo"
              />
              <Image
                width={205}
                height={43}
                src="/assets/images/footer-logo-2.png"
                alt="footer logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <Image
          width={231}
          height={60}
          src="/assets/images/sanad-logo.png"
          alt="logo"
        />
        <span>جميع الحقوق محفوظة © شركة سند المالية</span>
      </div>
    </footer>
  );
}

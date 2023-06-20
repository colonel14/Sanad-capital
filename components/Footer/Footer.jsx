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
          <div className="container">
            <div className="contact">
              <div className="contact__text">
                <h2>
                  اﺳﺘﻨــﺪ ﻋﻠﻰ ﺷــــــــﺮﻳﻚ
                  <br /> ﻳﻔﻬﻤــﻚ
                  <br />
                  تواصل معنا الآن
                </h2>
                <div className="btns__group">
                  <button className="secondary-btn">خدمتنا</button>
                  <a href="contact.html" className="primary-btn">
                    تواصل معنا
                  </a>
                </div>
              </div>
            </div>
          </div>
          <motion.img
            src="/assets/svg/I3.svg"
            alt=""
            className="absolute-svg-one"
            variants={zoomIn(0.1, 0.3)}
          />
        </motion.div>
      )}
      <div id="footer__middle">
        <div className="container">
          <h4 className="footer__title">الروابط</h4>
          <div className="footer__row">
            <div className="footer__column">
              <ul className="footer__links">
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
            <div className="footer__column">
              <ul className="footer__links">
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
            <div className="footer__column">
              <h4 className="footer__title">تابعنا</h4>
              <ul className="footer__social">
                <li>
                  <a href="/">
                    <div className="social-icon twitter">
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
                    <div className="social-icon instagram">
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
                    <div className="social-icon linkedin">
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
        <div className="container">
          <div className="footer__bottom-inner">
            <h3 className="footer__desc">
              شركة سند المالية شركة ذات مسئولية محدودة حاصلة على ترخيص من هيئة
              السوق المالية للممارسة نشاط طرح أدوات الدين و الاستثمار فيها
            </h3>
            <div className="fotoer__logos">
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
      <div className="container">
        <div className="copyright">
          <Image
            width={231}
            height={60}
            src="/assets/images/sanad-logo.png"
            alt="logo"
          />
          <span>جميع الحقوق محفوظة © شركة سند المالية</span>
        </div>
      </div>
    </footer>
  );
}

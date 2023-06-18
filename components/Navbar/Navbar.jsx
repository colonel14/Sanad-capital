"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const pathname = usePathname();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const excludedPaths = [
    "/about",
    "/investor",
    "/requester",
    "/jobs",
    "/terms",
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`nav ${isScroll ? "nav-active" : ""} ${
        !excludedPaths.includes(pathname) ? "nav-primary" : "nav-secondary"
      } `}
    >
      <div className="container">
        <div className="row">
          <a href="/" className="logo">
            {!excludedPaths.includes(pathname) ? (
              isScroll ? (
                <Image
                  width={166}
                  height={41}
                  id="logo"
                  src="/assets/images/logo.png"
                  alt="logo"
                />
              ) : (
                <Image
                  width={166}
                  height={41}
                  id="logo"
                  src="/assets/images/sanad-logo.png"
                  alt="logo"
                />
              )
            ) : (
              <Image
                width={166}
                height={41}
                id="logo"
                src="/assets/images/logo.png"
                alt="logo"
              />
            )}
          </a>
          <ul className="links">
            <li className={pathname === "/about" ? "active" : ""}>
              <Link href="/about">من نحن</Link>
            </li>
            <li className={pathname === "/investor" ? "active" : ""}>
              <Link href="/investor">مستثمر</Link>
            </li>
            <li className={pathname === "/requester" ? "active" : ""}>
              <Link href="/requester">طالب تمويل</Link>
            </li>
            <li className={pathname === "/contact" ? "active" : ""}>
              <Link href="/contact">تواصل معنا</Link>
            </li>
            <li className={pathname === "/terms" ? "active" : ""}>
              <Link href="/terms">الأسئلة الشائعة</Link>
            </li>
          </ul>
          <div className="navbar-actions">
            <button className="primary-btn">تسجيل الدخول</button>
            <button className="secondary-btn">ابدأ الاستثمار</button>
            <div className="toggle">
              {toggleMenu ? (
                <AiOutlineClose onClick={() => setToggleMenu(false)} />
              ) : (
                <FaBars onClick={() => setToggleMenu(true)} />
              )}
            </div>
          </div>

          <ul className={`links-mobile ${toggleMenu ? "collapse" : ""}`}>
            <li className={pathname === "/about" ? "active" : ""}>
              <Link href="/about">من نحن</Link>
            </li>
            <li className={pathname === "/investor" ? "active" : ""}>
              <Link href="/investor">مستثمر</Link>
            </li>
            <li className={pathname === "/requester" ? "active" : ""}>
              <Link href="/requester">طالب تمويل</Link>
            </li>
            <li className={pathname === "/contact" ? "active" : ""}>
              <Link href="/contact">تواصل معنا</Link>
            </li>
            <li className={pathname === "/terms" ? "active" : ""}>
              <Link href="/terms">الأسئلة الشائعة</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

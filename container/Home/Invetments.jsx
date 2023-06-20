"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
function Invetments() {
  const swiperRef = useRef(null);

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <motion.section
      className="investments"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.75 }}
    >
      <div className="container">
        <div className="investments__header">
          <div className="investments__header-text">
            <h2 className="section__text-title">اﻟﻔﺮص اﻟﺎﺳﺘﺜﻤﺎرﻳﺔ</h2>
            <p className="setion__text-subtitle">
              أﺣﺪث اﻟﻔﺮص اﻟﺘﻲ ﺗﻢ اﻃﻠﺎﻗﻬﺎ ﻓﻲ اﻟﻤﻨﺼﺔ
            </p>
          </div>
          <div className="investments__header-controls">
            <div className="btns">
              <button
                onClick={goToPreviousSlide}
                className="primary-arrow-btn swiper-button-next"
              >
                <AiOutlineArrowRight />
              </button>
              <button onClick={goToNextSlide} className="secondary-arrow-btn">
                <AiOutlineArrowLeft />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          className="investments__body"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <div className="investments__body-inner">
            <div className="investments__carousel">
              <div className="investments__card-container">
                <Swiper
                  effect="Coverflow"
                  slidesPerView={3}
                  spaceBetween={29}
                  navigation={{
                    nextEl: ".swiper-button-next",
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  speed={1200}
                >
                  <SwiperSlide>
                    <div className="card" draggable="true">
                      <div className="statue">متاح</div>
                      <h4>شراء منتجات ذات استخدام الواد</h4>
                      <div className="data">
                        <span>حجم البرنامج</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مبلغ التمويل</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مدة التمويل</span>
                        <span>قصير الأجل</span>
                      </div>
                      <div className="data">
                        <span>تاريخ العرض</span>
                        <span>31-05-2023</span>
                      </div>
                      <div className="statue-bar"></div>
                      <button className="primary-btn">استمر</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card" draggable="true">
                      <div className="statue">متاح</div>
                      <h4>شراء منتجات ذات استخدام الواد</h4>
                      <div className="data">
                        <span>حجم البرنامج</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مبلغ التمويل</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مدة التمويل</span>
                        <span>قصير الأجل</span>
                      </div>
                      <div className="data">
                        <span>تاريخ العرض</span>
                        <span>31-05-2023</span>
                      </div>
                      <div className="statue-bar"></div>
                      <button className="primary-btn">استمر</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card" draggable="true">
                      <div className="statue">متاح</div>
                      <h4>شراء منتجات ذات استخدام الواد</h4>
                      <div className="data">
                        <span>حجم البرنامج</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مبلغ التمويل</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مدة التمويل</span>
                        <span>قصير الأجل</span>
                      </div>
                      <div className="data">
                        <span>تاريخ العرض</span>
                        <span>31-05-2023</span>
                      </div>
                      <div className="statue-bar"></div>
                      <button className="primary-btn">استمر</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card" draggable="true">
                      <div className="statue">متاح</div>
                      <h4>شراء منتجات ذات استخدام الواد</h4>
                      <div className="data">
                        <span>حجم البرنامج</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مبلغ التمويل</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مدة التمويل</span>
                        <span>قصير الأجل</span>
                      </div>
                      <div className="data">
                        <span>تاريخ العرض</span>
                        <span>31-05-2023</span>
                      </div>
                      <div className="statue-bar"></div>
                      <button className="primary-btn">استمر</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card" draggable="true">
                      <div className="statue">متاح</div>
                      <h4>شراء منتجات ذات استخدام الواد</h4>
                      <div className="data">
                        <span>حجم البرنامج</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مبلغ التمويل</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مدة التمويل</span>
                        <span>قصير الأجل</span>
                      </div>
                      <div className="data">
                        <span>تاريخ العرض</span>
                        <span>31-05-2023</span>
                      </div>
                      <div className="statue-bar"></div>
                      <button className="primary-btn">استمر</button>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="card" draggable="true">
                      <div className="statue">متاح</div>
                      <h4>شراء منتجات ذات استخدام الواد</h4>
                      <div className="data">
                        <span>حجم البرنامج</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مبلغ التمويل</span>
                        <span>30,000.000 ر.س</span>
                      </div>
                      <div className="data">
                        <span>مدة التمويل</span>
                        <span>قصير الأجل</span>
                      </div>
                      <div className="data">
                        <span>تاريخ العرض</span>
                        <span>31-05-2023</span>
                      </div>
                      <div className="statue-bar"></div>
                      <button className="primary-btn">استمر</button>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="btns-mobile hidden">
          <button className="primary-arrow-btn">
            <i className="fas fa-arrow-right"></i>
          </button>
          <button className="secondary-arrow-btn">
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </motion.section>
  );
}

export default Invetments;

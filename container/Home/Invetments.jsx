"use client";
import { useScroll } from "framer-motion";
import React, { useRef } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
function Invetments() {
  const scrollRef = useRef(null);
  const { scrollX } = useScroll({
    container: scrollRef,
  });
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
      console.log("left");
    } else {
      current.scrollLeft += 300;
      console.log("right");
    }
  };

  return (
    <section className="investments">
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
              className="primary-arrow-btn"
              onClick={() => scroll("right")}
            >
              <AiOutlineArrowRight />
            </button>
            <button
              className="secondary-arrow-btn"
              onClick={() => scroll("left")}
            >
              <AiOutlineArrowLeft />
            </button>
          </div>
        </div>
      </div>
      <div className="investments__body">
        <div className="investments__body-inner">
          <div className="investments__card-container" ref={scrollRef}>
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
            <div className="card" draggable="true">
              <div className="statue">قريبا</div>
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
            <div className="card" draggable="true">
              <div className="statue">قريبا</div>
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
          </div>
        </div>
      </div>
      <div className="btns-mobile hidden">
        <button className="primary-arrow-btn">
          <i className="fas fa-arrow-right"></i>
        </button>
        <button className="secondary-arrow-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>
    </section>
  );
}

export default Invetments;

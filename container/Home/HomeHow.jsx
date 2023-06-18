import React from "react";

export default function HomeHow() {
  return (
    <section className="how">
      <div className="container">
        <div className="content">
          <h2>كيف نعمل؟</h2>
          <p>
            تقوم منصة سند المالية بدور الوساطة المالية بين المستثمرين أصحاب
            الفائض (حملة صكوك المرابحة) من جهة، والمنشأت الصغيرة والمتوسطة
            (طالبي التمويل بالمرابحة) من جهة أخرى.
          </p>
        </div>
        <div className="choices">
          <div className="choice-one">مستثمر</div>
          <div className="choice-two">طالب تمويل</div>
        </div>
      </div>
    </section>
  );
}

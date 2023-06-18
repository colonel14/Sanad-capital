"use client";
import React, { useState } from "react";
import styles from "@/styles/Jobs.module.css";
import { jobsCategories, jobsList } from "@/constants";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function JobsList() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("الجميع");
  return (
    <section className={styles.jobs}>
      <div className={styles.container}>
        <div className={styles.jobs__header}>
          <h2 className={styles["job__header-title"]}>الوظائف المفتوحة</h2>
          <ul
            role="tablist"
            className={`${styles["job__header-tabs"]} tabs__group`}
          >
            {jobsCategories.map((tab, idx) => (
              <li key={idx}>
                <button
                  role="tab"
                  aria-selected={selectedItem == idx ? true : false}
                  aria-controls={`tabpanel-${idx + 1}`}
                  onClick={() => {
                    setSelectedCategory(tab.name);
                    setSelectedItem(idx);
                  }}
                  className={`tab ${selectedItem == idx ? "active" : ""}`}
                >
                  {tab.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.jobs__body}>
          <div className={styles.jobs__cards}>
            {jobsList.map((job, idx) => {
              return selectedCategory !== "الجميع" ? (
                selectedCategory == job.category && (
                  <div key={idx} className={styles.job__card}>
                    <span className={styles["job__card-type"]}>{job.type}</span>
                    <h3 className={styles["job__card-title"]}>{job.title}</h3>
                    <p className={styles["job__card-details"]}>{job.desc}</p>
                    <div className={styles["job__card-footer"]}>
                      <span className={styles["job__card-date"]}>
                        {job.date}
                      </span>
                      <a
                        href="job-details.html?id=1"
                        className={styles["job__card-link"]}
                      >
                        <AiOutlineArrowLeft />
                      </a>
                    </div>
                  </div>
                )
              ) : (
                <div key={idx} className={styles.job__card}>
                  <span className={styles["job__card-type"]}>{job.type}</span>
                  <h3 className={styles["job__card-title"]}>{job.title}</h3>
                  <p className={styles["job__card-details"]}>{job.desc}</p>
                  <div className={styles["job__card-footer"]}>
                    <span className={styles["job__card-date"]}>{job.date}</span>
                    <a href="/jobs/1" className={styles["job__card-link"]}>
                      <AiOutlineArrowLeft />
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="job__card"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

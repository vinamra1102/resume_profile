"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { experience } from "@/data/experience";

function renderBullet(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "var(--text)", fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ marginBottom: "38px" }}
    >
      <SectionLabel>Experience</SectionLabel>

      {experience.map((entry, i) => (
        <motion.article
          key={i}
          variants={itemVariants}
          style={{ marginBottom: i === experience.length - 1 ? 0 : "26px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "16px",
            }}
          >
            <div
              style={{ fontWeight: 700, fontSize: "16px", lineHeight: 1.3 }}
            >
              {entry.title}
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "12px",
                color: "var(--muted)",
                whiteSpace: "nowrap",
                flex: "none",
              }}
            >
              {entry.date}
            </div>
          </div>
          <div
            style={{
              fontSize: "13.5px",
              color: "var(--accent)",
              fontWeight: 600,
              marginTop: "3px",
            }}
          >
            {entry.org}
          </div>
          <ul
            style={{
              margin: "10px 0 0",
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "7px",
            }}
          >
            {entry.bullets.map((bullet, bi) => (
              <li
                key={bi}
                style={{
                  position: "relative",
                  paddingLeft: "20px",
                  fontSize: "13.5px",
                  color: "#43433c",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "3px",
                    top: "9px",
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "var(--accent-line)",
                    display: "block",
                  }}
                  aria-hidden="true"
                />
                {renderBullet(bullet)}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </motion.section>
  );
}

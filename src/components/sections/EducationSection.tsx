"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { education } from "@/data/education";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function EducationSection() {
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
      <SectionLabel size="sidebar">Education</SectionLabel>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {education.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            style={{
              position: "relative",
              paddingLeft: "18px",
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "6px",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                border: "2px solid var(--accent)",
                background: "var(--paper)",
              }}
              aria-hidden="true"
            />
            {/* Timeline line */}
            {i < education.length - 1 && (
              <div
                style={{
                  position: "absolute",
                  left: "3px",
                  top: "18px",
                  bottom: "-16px",
                  width: "2px",
                  background: "var(--line)",
                }}
                aria-hidden="true"
              />
            )}
            <div style={{ fontWeight: 700, fontSize: "13.5px", lineHeight: 1.35 }}>
              {item.school}
            </div>
            <div style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: "2px" }}>
              {item.degree}
            </div>
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                color: "var(--accent)",
                fontWeight: 600,
                marginTop: "3px",
              }}
            >
              {item.year}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

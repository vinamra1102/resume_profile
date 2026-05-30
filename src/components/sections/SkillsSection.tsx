"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { skills } from "@/data/skills";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const groupVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export function SkillsSection() {
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
      <SectionLabel size="sidebar">Skills</SectionLabel>

      <div
        style={{
          background: "var(--dark-card)",
          borderRadius: "var(--radius)",
          padding: "24px 22px",
          color: "#e3e5df",
        }}
      >
        {skills.map((group, gi) => (
          <motion.div
            key={gi}
            variants={groupVariants}
            style={{ marginBottom: gi === skills.length - 1 ? 0 : "16px" }}
          >
            <div
              style={{
                fontSize: "10.5px",
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--accent-bright)",
                fontWeight: 600,
                marginBottom: "9px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
              }}
            >
              {group.group}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {group.items.map((item) => (
                <motion.span
                  key={item}
                  variants={pillVariants}
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11.5px",
                    fontWeight: 500,
                    background: "var(--dark-card-2)",
                    color: "#d4d6cf",
                    border: "1px solid rgba(255,255,255,.07)",
                    borderRadius: "7px",
                    padding: "5px 9px",
                    cursor: "default",
                    transition: "border-color .15s ease, color .15s ease",
                  }}
                  whileHover={{ borderColor: "var(--accent)", color: "#fff" }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

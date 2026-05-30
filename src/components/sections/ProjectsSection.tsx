"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function ProjectsSection() {
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
      <SectionLabel>Projects</SectionLabel>

      {projects.map((project, i) => (
        <motion.article
          key={i}
          variants={itemVariants}
          style={{ marginBottom: i === projects.length - 1 ? 0 : "26px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "16px",
            }}
          >
            <div style={{ fontWeight: 700, fontSize: "16px", lineHeight: 1.3 }}>
              {project.title}
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
              {project.date}
            </div>
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
            {project.bullets.map((bullet, bi) => (
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
                {bullet}
              </li>
            ))}
          </ul>
          {/* Tech pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "9px" }}>
            {project.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "11px",
                  color: "var(--muted)",
                  background: "var(--bg)",
                  border: "1px solid var(--line)",
                  borderRadius: "6px",
                  padding: "3px 8px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
}

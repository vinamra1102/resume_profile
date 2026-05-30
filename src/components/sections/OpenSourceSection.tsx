"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, GitMerge, ArrowUpRight } from "lucide-react";
import { opensource } from "@/data/opensource";

function renderInlineText(text: string) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: "0.85em",
            background: "var(--accent-soft)",
            color: "var(--accent)",
            borderRadius: "4px",
            padding: "1px 5px",
            border: "1px solid var(--accent-line)",
          }}
        >
          {part.slice(1, -1)}
        </code>
      );
    }
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
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function OpenSourceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      className="block"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ marginBottom: "38px" }}
    >
      <SectionLabel>Open Source Contributions</SectionLabel>

      <div
        style={{
          background: "linear-gradient(180deg,var(--accent-soft),transparent 70%)",
          border: "1px solid var(--accent-line)",
          borderLeft: "4px solid var(--accent)",
          borderRadius: "12px",
          padding: "26px 26px 24px",
        }}
      >
        {opensource.map((entry, ei) => (
          <motion.article
            key={ei}
            variants={itemVariants}
            style={{
              paddingTop: ei === 0 ? 0 : "18px",
              paddingBottom: ei === opensource.length - 1 ? 0 : "18px",
              borderBottom:
                ei === opensource.length - 1
                  ? "none"
                  : "1px dashed var(--line-strong)",
            }}
          >
            {/* Repo row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "14px",
                flexWrap: "wrap",
              }}
            >
              <a
                href={entry.prUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${entry.repo} — ${entry.pr}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "var(--text)",
                  transition: "color .15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
              >
                <Github size={16} aria-hidden="true" />
                {entry.repo}
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains-mono), monospace",
                    fontSize: "11.5px",
                    fontWeight: 600,
                    color: "var(--accent)",
                    background: "var(--paper)",
                    border: "1px solid var(--accent-line)",
                    borderRadius: "6px",
                    padding: "2px 7px",
                  }}
                >
                  {entry.stars}
                </span>
                <ArrowUpRight size={11} style={{ opacity: 0.4 }} aria-hidden="true" />
              </a>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: "12px",
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {entry.date}
              </span>
            </div>

            {/* Package */}
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "12px",
                color: "var(--accent)",
                marginTop: "5px",
                fontWeight: 500,
              }}
            >
              {entry.package}
            </div>

            {/* Bullets */}
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
              {entry.descriptionSimple.map((bullet, bi) => (
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
                  {renderInlineText(bullet)}
                </li>
              ))}
            </ul>

            {/* PR tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--accent)",
                background: "var(--accent-soft)",
                border: "1px solid var(--accent-line)",
                borderRadius: "20px",
                padding: "3px 11px",
                marginTop: "10px",
              }}
            >
              <GitMerge size={10} aria-hidden="true" />
              {entry.prTag}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: "13px",
        letterSpacing: ".18em",
        textTransform: "uppercase",
        fontWeight: 700,
        color: "var(--accent)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "0 0 20px",
      }}
    >
      {children}
      <span
        style={{ content: "", height: "1px", flex: 1, background: "var(--line-strong)", display: "block" }}
        aria-hidden="true"
      />
    </h2>
  );
}

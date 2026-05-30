"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, GitMerge, Laptop } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { achievements } from "@/data/achievements";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, React.ComponentType<any>> = {
  trophy: Trophy,
  merge: GitMerge,
  laptop: Laptop,
};

function renderDetail(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <b key={i} style={{ color: "var(--text)", fontWeight: 600 }}>
          {part.slice(2, -2)}
        </b>
      );
    }
    // Handle tier badge
    if (part.includes("B Tier")) {
      const [before, after] = part.split("B Tier");
      return (
        <span key={i}>
          {before}
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: "11px",
              color: "var(--accent)",
              fontWeight: 600,
              background: "var(--accent-soft)",
              borderRadius: "5px",
              padding: "1px 7px",
              marginLeft: "4px",
            }}
          >
            B Tier
          </span>
          {after}
        </span>
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
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function AchievementsSection() {
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
      <SectionLabel size="sidebar">Achievements</SectionLabel>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {achievements.map((item, i) => {
          const Icon = iconMap[item.icon] ?? Trophy;
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              style={{ display: "flex", gap: "13px" }}
            >
              <div
                style={{
                  flex: "none",
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "var(--accent-soft)",
                  color: "var(--accent)",
                  display: "grid",
                  placeItems: "center",
                  marginTop: "1px",
                }}
                aria-hidden="true"
              >
                <Icon size={13} aria-hidden="true" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", lineHeight: 1.35 }}>
                  {item.title}
                </div>
                <div
                  style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: "3px", lineHeight: 1.45 }}
                >
                  {renderDetail(item.detail)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CircleDot } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { presentations } from "@/data/presentations";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
};

export function PresentationsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <SectionLabel>Presentations</SectionLabel>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
        {presentations.map((talk) => (
          <motion.span
            key={talk}
            variants={itemVariants}
            style={{
              fontSize: "13px",
              fontWeight: 500,
              background: "var(--bg)",
              border: "1px solid var(--line)",
              borderRadius: "8px",
              padding: "8px 13px",
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <CircleDot size={11} style={{ color: "var(--accent)" }} aria-hidden="true" />
            {talk}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}

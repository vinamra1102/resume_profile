"use client";

import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { SectionLabel } from "@/components/SectionLabel";
import { profile } from "@/data/profile";

const socials = [
  {
    href: profile.github,
    icon: IconBrandGithub,
    label: "GitHub",
    sub: "vinamra1102",
  },
  {
    href: profile.linkedin,
    icon: IconBrandLinkedin,
    label: "LinkedIn",
    sub: "vinamra-bhonsle",
  },
];

export function SocialSection() {
  return (
    <section style={{ marginBottom: "38px" }}>
      <SectionLabel size="sidebar">Connect</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {socials.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} — ${s.sub}`}
            whileHover={{
              borderColor: "var(--accent)",
              backgroundColor: "var(--accent-soft)",
              x: 2,
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "11px 14px",
              border: "1px solid var(--line)",
              borderRadius: "10px",
              fontSize: "13.5px",
              fontWeight: 500,
              background: "var(--paper)",
              transition: "all .16s ease",
              color: "var(--text)",
            }}
          >
            <s.icon size={16} aria-hidden="true" />
            {s.label}
            <span
              style={{
                color: "var(--muted)",
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: "11.5px",
                marginLeft: "auto",
              }}
            >
              {s.sub}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

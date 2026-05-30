"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";

const contacts = [
  { href: `tel:${profile.phone.replace(/\s/g, "")}`, icon: Phone, label: profile.phone },
  { href: `mailto:${profile.email}`, icon: Mail, label: profile.email },
  {
    href: profile.github,
    icon: Github,
    label: "github.com/vinamra1102",
    external: true,
  },
  {
    href: profile.linkedin,
    icon: Linkedin,
    label: "linkedin.com/in/vinamra-bhonsle",
    external: true,
  },
];

export function ContactBar() {
  return (
    <nav
      aria-label="Contact"
      style={{
        position: "relative",
        background: "var(--ink-2)",
        color: "#cdcfc8",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        paddingLeft: "230px",
        borderTop: "1px solid rgba(255,255,255,.06)",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          position: "absolute",
          left: "56px",
          bottom: "18px",
          width: "142px",
          height: "142px",
          borderRadius: "50%",
          background: "linear-gradient(150deg,#2a3a2c,#1a1f1a)",
          border: "5px solid var(--ink-2)",
          boxShadow: "0 10px 30px -10px rgba(0,0,0,.6)",
          display: "grid",
          placeItems: "center",
          zIndex: 5,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: "absolute",
            inset: "-5px",
            borderRadius: "50%",
            border: "1px solid var(--accent-line)",
            opacity: 0.5,
          }}
        />
        <span
          style={{
            fontWeight: 800,
            fontSize: "46px",
            color: "#fff",
            letterSpacing: ".02em",
          }}
        >
          VB
        </span>
      </div>

      {contacts.map((c, i) => (
        <motion.a
          key={i}
          href={c.href}
          target={c.external ? "_blank" : undefined}
          rel={c.external ? "noopener noreferrer" : undefined}
          aria-label={c.label}
          whileHover={{ backgroundColor: "rgba(255,255,255,.045)", color: "#fff" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "13px",
            padding: "22px 20px",
            fontSize: "13.5px",
            borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,.07)",
            color: "#cdcfc8",
            minWidth: 0,
            transition: "background .18s ease, color .18s ease",
          }}
        >
          <c.icon
            size={16}
            style={{ color: "var(--accent-bright)", flex: "none" }}
            aria-hidden="true"
          />
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              letterSpacing: "-.01em",
            }}
          >
            {c.label}
          </span>
        </motion.a>
      ))}
    </nav>
  );
}

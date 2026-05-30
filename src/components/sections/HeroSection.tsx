"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const letters = profile.name.split("");

export function HeroSection() {
  const [firstName, lastName] = profile.name.split(" ");

  return (
    <header
      style={{
        position: "relative",
        background: "var(--ink)",
        color: "#fff",
        padding: "72px 56px 84px",
        overflow: "hidden",
        isolation: "isolate",
      }}
      aria-label="Hero"
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400')",
          backgroundSize: "cover",
          backgroundPosition: "center 38%",
          opacity: 0.42,
          filter: "saturate(.85) brightness(.85)",
          zIndex: -2,
        }}
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(16,18,15,.55) 0%, rgba(16,18,15,.30) 45%, rgba(16,18,15,.80) 100%)",
          zIndex: -1,
        }}
      />

      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          fontSize: "12px",
          letterSpacing: ".32em",
          textTransform: "uppercase",
          color: "var(--accent-line)",
          fontWeight: 600,
          marginBottom: "18px",
        }}
      >
        Resume — 2026
      </motion.div>

      {/* Name: letter-by-letter reveal */}
      <h1
        style={{
          margin: 0,
          fontWeight: 900,
          fontSize: "clamp(40px,7vw,76px)",
          lineHeight: 0.96,
          letterSpacing: "-.01em",
          textTransform: "uppercase",
          color: "#fff",
        }}
      >
        <span style={{ display: "block" }}>
          {firstName.split("").map((char, i) => (
            <motion.span
              key={`f-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.04, ease: "easeOut" }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
        <span style={{ display: "block" }}>
          {lastName.split("").map((char, i) => (
            <motion.span
              key={`l-${i}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.2 + firstName.length * 0.04 + i * 0.04,
                ease: "easeOut",
              }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      </h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        style={{
          marginTop: "20px",
          fontSize: "clamp(14px,1.6vw,18px)",
          color: "#d8dad4",
          fontWeight: 500,
          maxWidth: "760px",
        }}
      >
        {profile.title.split(" · ").map((part, i, arr) => (
          <span key={i}>
            {part}
            {i < arr.length - 1 && (
              <span style={{ color: "var(--accent-line)", margin: "0 .5em" }}>·</span>
            )}
          </span>
        ))}
      </motion.p>
    </header>
  );
}

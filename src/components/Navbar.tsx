"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav
      aria-label="Site navigation"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 100,
        padding: "12px 20px",
      }}
    >
      {mounted && (
        <button
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          style={{
            background: "rgba(26,26,26,0.7)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "10px",
            color: "#d4d6cf",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 14px",
            fontSize: "13px",
            fontFamily: "var(--font-public-sans), sans-serif",
            fontWeight: 500,
            backdropFilter: "blur(8px)",
            transition: "all 0.18s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(255,255,255,0.12)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(26,26,26,0.7)";
          }}
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      )}
    </nav>
  );
}

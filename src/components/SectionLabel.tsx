import type { ReactNode } from "react";

export function SectionLabel({
  children,
  size = "main",
}: {
  children: ReactNode;
  size?: "main" | "sidebar";
}) {
  return (
    <h2
      style={{
        fontSize: size === "main" ? "13px" : "12px",
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
        style={{
          height: "1px",
          flex: 1,
          background: "var(--line-strong)",
          display: "block",
        }}
        aria-hidden="true"
      />
    </h2>
  );
}

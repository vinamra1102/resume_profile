import type { Metadata } from "next";
import { Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Vinamra Bhonsle — Full-Stack Developer",
  description:
    "Full-stack developer and cybersecurity enthusiast with hands-on experience in digital forensics, open source contribution, and security engineering. Merged fixes into TanStack Query (★49k) reviewed by the primary maintainer.",
  openGraph: {
    title: "Vinamra Bhonsle — Full-Stack Developer",
    description:
      "Full-stack developer and cybersecurity enthusiast with hands-on experience in digital forensics, open source contribution, and security engineering.",
    url: "https://vinamra.dev",
    siteName: "Vinamra Bhonsle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinamra Bhonsle — Full-Stack Developer",
    description:
      "Full-stack developer and cybersecurity enthusiast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body
        style={{
          fontFamily: "var(--font-public-sans), system-ui, sans-serif",
        }}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

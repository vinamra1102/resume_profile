import { HeroSection } from "@/components/sections/HeroSection";
import { ContactBar } from "@/components/sections/ContactBar";
import { SocialSection } from "@/components/sections/SocialSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { OpenSourceSection } from "@/components/sections/OpenSourceSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { PresentationsSection } from "@/components/sections/PresentationsSection";

export default function Home() {
  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        padding: "32px 0",
      }}
    >
      <main
        role="main"
        className="resume-sheet"
        style={{
          maxWidth: "1100px",
          margin: "32px auto",
          background: "var(--paper)",
          boxShadow: "var(--shadow)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
        }}
      >
        <HeroSection />
        <ContactBar />

        {/* Two-column body */}
        <div
          className="body-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "35% 65%",
            alignItems: "start",
          }}
        >
          {/* Left sidebar */}
          <aside
            className="sidebar-col"
            aria-label="Sidebar"
            style={{
              padding: "44px 36px 48px",
              borderRight: "1px solid var(--line)",
            }}
          >
            <SocialSection />
            <AchievementsSection />
            <SkillsSection />
            <EducationSection />
          </aside>

          {/* Right main */}
          <div
            className="main-col"
            aria-label="Main content"
            style={{ padding: "44px 48px 56px" }}
          >
            <OpenSourceSection />
            <ExperienceSection />
            <ProjectsSection />
            <PresentationsSection />
          </div>
        </div>

        <footer
          style={{
            textAlign: "center",
            padding: "26px",
            color: "var(--muted-2)",
            fontSize: "12px",
            borderTop: "1px solid var(--line)",
            fontFamily: "var(--font-jetbrains-mono), monospace",
          }}
        >
          Vinamra Bhonsle &middot; Full-Stack Developer &amp; Cybersecurity Enthusiast &middot; 2026
        </footer>
      </main>
    </div>
  );
}

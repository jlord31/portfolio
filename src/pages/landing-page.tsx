import { Squares } from "@/components";
import { Navbar } from "@/components/common";
import {
  HeroSection,
  AboutSection,
  ResearchSection,
  SkillsSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";
import { ScrollProvider } from "@/contexts/scroll-context";
import { RoleProvider } from "@/contexts/role-context";
import { useTheme } from "@/providers/theme-provider";

const LandingPage = () => {
  const { theme } = useTheme();
  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const squareProps = isDark
    ? {
        borderColor: "#1e2247",
        hoverFillColor: "#1a1e40",
        gradientColor: "#060010",
      }
    : {
        borderColor: "#c2c6e0",
        hoverFillColor: "#dddff4",
        gradientColor: "#eeeef8",
      };

  return (
    <RoleProvider>
      <ScrollProvider>
        <div
          className={`fixed inset-0 z-0 pointer-events-none overflow-hidden ${isDark ? "opacity-90" : "opacity-50"}`}
        >
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            {...squareProps}
          />
        </div>

        <div className="relative z-10 w-full">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ResearchSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </ScrollProvider>
    </RoleProvider>
  );
};

export default LandingPage;

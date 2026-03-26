import { ScrollReveal } from "@/components/react-bits";
import { useRole } from "@/contexts/role-context";
import { ExperienceTimeline } from ".";
import type { ExperienceDisplayItem, ExperienceProps } from "@/types/experience.types";

const Experience = ({ tag, title, items }: ExperienceProps) => {
  const { currentRole } = useRole();

  // Filter experience based on current role
  const filteredItems: ExperienceDisplayItem[] = items
    .filter((item) => !item.rolesRelevant || item.rolesRelevant.includes(currentRole))
    .map((item) => ({
      title: item.title,
      company: item.company,
      companyUrl: item.companyUrl,
      location: item.location,
      type: item.type,
      period: item.period,
      duration: item.duration,
      responsibilities:
        item.roleResponsibilities[currentRole] ??
        Object.values(item.roleResponsibilities)[0] ??
        [],
    }))
    .sort((a, b) => {
      if (currentRole !== "ai-software-engineer") return 0;

      if (a.title === "AI Software Engineer" && b.title !== "AI Software Engineer") {
        return -1;
      }

      if (b.title === "AI Software Engineer" && a.title !== "AI Software Engineer") {
        return 1;
      }

      return 0;
    });

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />

      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-title uppercase tracking-widest text-primary">
              {tag}
            </span>
            <div className="flex items-center gap-3">
              <h2 className="text-h1 font-title font-bold text-foreground">
                {title}
              </h2>
              <div className="w-3 h-3 bg-primary shrink-0" />
            </div>
            <div className="w-10 h-1 bg-primary" />
          </div>
        </ScrollReveal>

        <ExperienceTimeline items={filteredItems} />
      </div>
    </section>
  );
};

export default Experience;

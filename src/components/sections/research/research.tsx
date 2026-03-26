import { ScrollReveal } from "@/components/react-bits";
import { useRole } from "@/contexts/role-context";
import { researchInterestsData } from "@/data/research-interests-data";

const ResearchSection = () => {
  const { currentRole } = useRole();

  if (!researchInterestsData.rolesRelevant.includes(currentRole)) {
    return null;
  }

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />

      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-title uppercase tracking-widest text-primary">
              {researchInterestsData.tag}
            </span>
            <div className="flex items-center gap-3">
              <h2 className="text-h1 font-title font-bold text-foreground">
                {researchInterestsData.title}
              </h2>
              <div className="w-3 h-3 bg-primary shrink-0" />
            </div>
            <div className="w-10 h-1 bg-primary" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.1}>
          <ul className="grid gap-3">
            {researchInterestsData.items.map((item) => (
              <li
                key={item}
                className="border border-border bg-card/40 px-4 py-3 text-text-secondary leading-relaxed"
              >
                <span className="text-primary mr-2">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResearchSection;

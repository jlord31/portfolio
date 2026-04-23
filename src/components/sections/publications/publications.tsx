import { ScrollReveal } from "@/components/react-bits";
import { useRole } from "@/contexts/role-context";
import { publicationsData } from "@/data/publications-data";

const typeLabel: Record<string, string> = {
  chapter: "Book Chapter",
  conference: "Conference",
  journal: "Journal",
  workshop: "Workshop",
  preprint: "Preprint",
};

const typeBadgeClass: Record<string, string> = {
  chapter: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  conference: "bg-primary/10 text-primary border border-primary/20",
  journal: "bg-green-500/10 text-green-400 border border-green-500/20",
  workshop: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  preprint: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
};

const PublicationsSection = () => {
  const { currentRole } = useRole();

  if (!publicationsData.rolesRelevant.includes(currentRole)) {
    return null;
  }

  return (
    <section className="relative w-full py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="absolute top-0 left-6 right-6 md:left-12 md:right-12 lg:left-20 lg:right-20 h-px bg-border" />

      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-title uppercase tracking-widest text-primary">
              {publicationsData.tag}
            </span>
            <div className="flex items-center gap-3">
              <h2 className="text-h1 font-title font-bold text-foreground">
                {publicationsData.title}
              </h2>
              <div className="w-3 h-3 bg-primary shrink-0" />
            </div>
            <div className="w-10 h-1 bg-primary" />
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {publicationsData.items.map((pub, index) => (
            <ScrollReveal key={pub.title} direction="up" delay={index * 0.05}>
              <div className="border border-border bg-card/40 p-5 flex flex-col gap-3 hover:bg-card/60 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  {pub.url ? (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-foreground hover:text-primary transition-colors leading-snug"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    <span className="text-base font-semibold text-foreground leading-snug">
                      {pub.title}
                    </span>
                  )}

                  <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                    {pub.status === "under-review" && (
                      <span className="text-xs font-medium px-2 py-0.5 bg-orange-500/10 text-orange-400 border border-orange-500/20">
                        Under Review
                      </span>
                    )}
                    <span
                      className={`text-xs font-medium px-2 py-0.5 ${typeBadgeClass[pub.type]}`}
                    >
                      {typeLabel[pub.type]}
                    </span>
                  </div>
                </div>

                {pub.contributorRole ? (
                  <p className="text-sm text-text-secondary leading-relaxed">
                    <span className="text-primary font-medium">{pub.contributorRole}</span>
                    {" · not listed as author"}
                  </p>
                ) : (
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {pub.authors}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-primary font-medium">{pub.venue}</span>
                  <span className="text-text-secondary">·</span>
                  <span className="text-text-secondary">{pub.year}</span>
                </div>

                {/* {pub.abstract && (
                  <p className="text-sm text-text-secondary leading-relaxed border-t border-border pt-3">
                    {pub.abstract}
                  </p>
                )} */}

                {pub.tags && pub.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 border border-border text-text-secondary bg-background/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;

import { About } from "@/components/about";
import { useScroll } from "@/contexts/scroll-context";
import { useRole } from "@/contexts/role-context";
import { aboutData } from "@/data";

const AboutSection = () => {
  const { register } = useScroll();
  const { currentRole } = useRole();

  const roleAboutData = aboutData.find((about) =>
    about.rolesRelevant.includes(currentRole)
  );

  if (!roleAboutData) return null;

  return (
    <div ref={register("about")}>
      <About data={roleAboutData} />
    </div>
  );
};

export default AboutSection;

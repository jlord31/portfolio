import { useScroll } from "@/contexts/scroll-context";
import { useRole } from "@/contexts/role-context";
import { Skills } from "@/components/skills";
import { skillsData } from "@/data";

const SkillsSection = () => {
  const { register } = useScroll();
  const { currentRole } = useRole();

  // Filter categories and skills by current role
  const filteredData = {
    ...skillsData,
    categories: skillsData.categories
      .map((category) => ({
        ...category,
        skills: category.skills.filter((skill) =>
          skill.rolesRelevant.includes(currentRole)
        ),
      }))
      .filter((category) => category.skills.length > 0),
  };

  return (
    <div ref={register("skills")}>
      <Skills {...filteredData} />
    </div>
  );
};

export default SkillsSection;

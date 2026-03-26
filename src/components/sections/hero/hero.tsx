import { heroData } from "@/data";
import { useScroll } from "@/contexts/scroll-context";
import { useRole } from "@/contexts/role-context";
import { Hero } from "@/components/hero";

const HeroSection = () => {
  const { register } = useScroll();
  const { currentRole } = useRole();

  return (
    <div ref={register("hero")}>
      <Hero data={heroData[currentRole]} />
    </div>
  );
};

export default HeroSection;

import myself from "../../public/myself-modified.png";

import { CardContainer } from "@/components/shared";
import { CardContent } from "@/components/ui/card";
import { sectionIds } from "@/lib/sectionIds";

export const Home = () => {
  return (
    <CardContainer id={sectionIds.home}>
      <CardContent>
        <img src={myself} className="w-60 mb-1.5" />
        <p className="text-7xl font-bold">
          Hey there, I am <span className="italic text-cyan-300	">Chris.</span>
        </p>
        <p className="mb-6 mt-6 p-0">
          Welcome to my digital playground! I've always been captivated by the
          magic of technology. From my early days of tinkering with code to
          crafting complex web solutions today, I've been on an exhilarating
          journey of turning ideas into digital realities.
        </p>
        <p className="p-0">
          Ready to dive into the world of technology with me? Explore my
          portfolio to see how I bring ideas to life.
        </p>
      </CardContent>
    </CardContainer>
  );
};

import { CardContainer } from "@/components/shared";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionIds } from "@/lib/sectionIds";

type ExperienceSectionProps = {
  key: number;
  title: string;
  content: string;
};

const ExperienceSection = ({ title, content }: ExperienceSectionProps) => {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="font-bold text-4xl mb-4">{title}</h3>
      {content}
    </div>
  );
};

const experienceSectionContent: ExperienceSectionProps[] = [
  {
    key: 1,
    title: "🌍 Navigating the Nexus of Functionality and Aesthetics 🌍",
    content:
      "Collaboration is the heartbeat of innovation. As a bridge between Product Management, UI/UX engineers, and development managers, I've orchestrated symphonies of creativity and feasibility. I've danced through discussions with Product Owners, ensuring that every feature requirement harmonizes with our overarching goals. I've donned the hat of a design advocate, partnering with UI/UX engineers to weave user-centric aesthetics into the fabric of functionality.",
  },
  {
    key: 2,
    title: "🏗️ Architecting the Future, One Feature at a Time 🏗️",
    content:
      " In the realm of web engineering, each feature is a masterpiece waiting to be painted. Armed with a keen eye for detail and a strategic mindset, I've analyzed feature requirements with forensic precision. With each stroke of my keyboard, I've crafted meticulous technical designs that seamlessly integrate into our existing architecture. The art of integration isn't just about code – it's about creating a symphony of services that dance in harmony.",
  },
  {
    key: 3,
    title: "🎯 Decomposing Dreams into Achievable Milestones 🎯",
    content:
      "The roadmap to innovation is paved with smaller stones – each a story waiting to be told. I've embraced the challenge of breaking down grand visions into tangible milestones. Armed with my toolkit of analytical skills and a dash of creativity, I've turned intricate features into a mosaic of small, achievable stories, each a stepping stone towards excellence.",
  },
  {
    key: 4,
    title: "🌱 Cultivating Excellence through Development Methodologies 🌱",
    content:
      "In my realm, quality isn't an afterthought; it's the guiding star. With the banners of Behaviour Driven and Test Driven Development unfurled, I've embarked on the quest for perfection. Each line of code is not just a creation but a testament to the power of precision. Through the crucible of development methodologies, I've not just crafted code – I've crafted assurance, resilience, and user delight.",
  },
  {
    key: 5,
    title: "🌐 A Global Expedition of Teams 🌐 ",
    content:
      "As the tides of projects ebb and flow, I've had the privilege of sailing with teams of diverse cultural backgrounds. With each new horizon, I've adapted swiftly, imbibing the strengths of each culture into the fabric of our collaboration. In the waves of diversity, I've found unity – a unity that fuels our pursuit of excellence.",
  },
  {
    key: 6,
    title: "🌟 Guiding the Next Generation of Innovators 🌟 ",
    content:
      "As a core member of my current team, I've embraced a mantle of mentorship. Guiding junior colleagues isn't just about imparting knowledge; it's about igniting the spark of innovation. With each mentorship session, I empower fellow engineers to tread the path of progress, fostering an environment where growth isn't just a goal – it's a way of life.",
  },
];

export const Experience = () => {
  return (
    <CardContainer id={sectionIds.experience}>
      <CardHeader>
        <CardTitle className="text-6xl italic">Experience</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <p className="font-bold text-5xl my-2">
          March 2020 - Present: Fullstack Web Engineer at Travelport (via
          Outsourcing Company)
        </p>
        <p className="my-4">
          {" "}
          Embarking on a journey through the dynamic travel industry, I've had
          the privilege of steering the development of a groundbreaking Point of
          Sale web application. At the heart of this venture, I've immersed
          myself in the art of fullstack engineering, working hand-in-hand with
          diverse teams and weaving together the intricate threads of
          micro-frontend and micro-services architecture.
        </p>
        {experienceSectionContent.map((section) => (
          <ExperienceSection
            key={section.key}
            title={section.title}
            content={section.content}
          />
        ))}
      </CardContent>
    </CardContainer>
  );
};

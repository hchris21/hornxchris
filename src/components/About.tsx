import { CardContainer } from "@/components/shared";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionIds } from "@/lib/sectionIds";

type AboutSectionProps = {
  key: number;
  title: string;
  content: string;
};

const AboutSection = ({ title, content }: AboutSectionProps) => {
  return (
    <div className="mb-6 last:mb-0">
      <h2 className="font-bold text-4xl mb-4">{title}</h2>
      {content}
    </div>
  );
};

const aboutSectionContent: AboutSectionProps[] = [
  {
    key: 1,
    title: "🚀 Fueling a Passion for Technology 🚀",
    content:
      "From the mesmerizing dance of code to the exhilarating rush of problem-solving, technology has always captivated me. It's like embarking on a limitless adventure where the next discovery is just a line of code away. I find joy in unraveling complex challenges and piecing together elegant solutions that make lives easier, one algorithm at a time.",
  },
  {
    key: 2,
    title: "🎓 Education and Learning 🎓",
    content:
      "With a Bachelor's degree in Business Informatics and an ongoing Master's degree in e-Business, I've honed a unique blend of technical prowess and strategic thinking. My academic journey laid the foundation for my technical acumen, and I constantly seek new horizons to expand my skillset. It's not just about mastering the tools; it's about understanding how they fit into the grand tapestry of technology to shape a brighter future.",
  },
  {
    key: 3,
    title: "💻 Technical Toolkit 💻",
    content:
      "In the ever-evolving realm of technology, I've mastered an array of tools that allow me to craft dynamic web experiences. From React.js and Redux for crafting intricate front-end solutions, to Node.js and Express.js for building robust backends, I'm in my element when I'm architecting seamless user journeys. My coding adventures have led me through the landscapes of CSS/SCSS, GraphQL, and even testing with Jest and React Testing Library. Oh, and did I mention my knack for juggling databases? I've dabbled in MongoDB and SQL, ensuring my curiosity never stops exploring.",
  },
  {
    key: 4,
    title: "🚀 Guided by Values, Driven by Quality 🚀",
    content:
      "As a true advocate of quality engineering, I embrace methodologies that not only make the code work but make it shine. My devotion to Behaviour Driven Development and Test Driven Development isn't just about passing tests – it's about ensuring each line of code is a testament to excellence. Every project I undertake bears the mark of precision, robustness, and user-centric design.",
  },
  {
    key: 5,
    title: "🕹️ Beyond the Code 🕹️",
    content:
      "When I'm not immersed in lines of code, you might find me immersed in the world of gaming. Just as I approach coding challenges with strategic thinking, I tackle virtual realms with the same determination. And speaking of determination, the gym is my sanctuary – a place where I sculpt not just code, but also a healthier body and mind. So, whether I'm crafting a web experience or battling virtual dragons, one thing remains constant: my unwavering passion for technology. If you're looking for a fullstack engineer who thrives on challenges, embraces innovation, and never settles for mediocrity, you've come to the right place. Let's code the future together!",
  },
];

export const About = () => {
  return (
    <CardContainer id={sectionIds.about}>
      <CardHeader>
        <CardTitle className="text-6xl italic">About me</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        {aboutSectionContent.map((section) => (
          <AboutSection
            key={section.key}
            title={section.title}
            content={section.content}
          />
        ))}
      </CardContent>
    </CardContainer>
  );
};

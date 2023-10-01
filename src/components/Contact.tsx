import { CardContainer } from "@/components/shared";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionIds } from "@/lib/sectionIds";
import github from "../../public/github.svg";
import linkedin from "../../public/linkedin.svg";
import mail from "../../public/mail.svg";

export const Contact = () => {
  return (
    <CardContainer id={sectionIds.contact}>
      <CardHeader>
        <CardTitle className="text-6xl italic">Contact</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Feel free to reach out directly via email or social media. I try to
          respond as soon as possible, usually within 24 hours.
        </p>
        <div className="flex">
          <a
            href={`mailto:hornchris21@yahoo.com?subject=Let's talk business, Chris!`}
          >
            <img className="w-16 mr-4" src={mail}></img>
          </a>
          <a href="https://github.com/hchris21" target="_blank">
            <img className="w-16 mr-4 fill-black" src={github} />
          </a>
          <a
            href="https://www.linkedin.com/in/christopher-horn-a559b9175/"
            target="_blank"
          >
            <img className="w-16 mr-4" src={linkedin} width={50} />
          </a>
        </div>
      </CardContent>
    </CardContainer>
  );
};

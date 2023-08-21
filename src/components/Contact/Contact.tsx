import { css } from "@emotion/css";
import { Divider } from "..";
import commonStyles from "../commonStyles";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";

const styles = {
  img: css`
    width: 4rem;
    margin-right: 1rem;
  `,
};

const Mailto = ({ email, children }: { email: string; children: string }) => {
  return (
    <a href={`mailto:${email}?subject=Let's talk business, Chris!`}>
      {children}
    </a>
  );
};

export const Contact = () => {
  return (
    <div className={commonStyles.container} id="Contact">
      <h1>Contact</h1>
      <Divider />
      <p>
        Feel free to reach out directly via email or social media. I try to
        respond as soon as possible, usually within 24 hours.
      </p>
      <div>
        <h3>Email address: </h3>
        <Mailto email="hornchris21@yahoo.com">hornchris21@yahoo.com</Mailto>
        <h3>Social media: </h3>
        <a href="https://github.com/hchris21">
          <img className={styles.img} src={github} />
        </a>
        <a href="https://www.linkedin.com/in/christopher-horn-a559b9175/">
          <img className={styles.img} src={linkedin} width={50} />
        </a>
      </div>
    </div>
  );
};

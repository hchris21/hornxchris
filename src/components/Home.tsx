import { css } from "@emotion/css";
import myself from "../assets/myself-modified.png";
import commonStyles from "./commonStyles";

const styles = {
  introText: css`
    color: #ffffff;
    font-size: 5rem;
    font-weight: bold;
  `,
  text: css`
    margin: 0 0 1.5rem 0;
    padding: 0;
  `,
  name: css`
    color: #05f1f9;
    font-style: italic;
  `,
  img: css`
    width: 20rem;
    margin-bottom: 1.5rem;
  `,
};

export const Home = () => {
  return (
    <div className={commonStyles.container} id="Home">
      <img className={styles.img} src={myself} />
      <div className={styles.introText}>
        Hey there, I am <span className={styles.name}>Chris.</span>
      </div>
      <p className={styles.text}>
        I am a passionate fullstack web engineer, specializing in JavaScript
        technologies like React.js and Node.js. I love turning ideas into
        digital realities.
      </p>
      <p className={styles.text}>
        If you're interested in collaboration, contract work, or job
        opportunities, feel free to connect with me on LinkedIn. Let's bring
        your visions to life together.
      </p>
    </div>
  );
};

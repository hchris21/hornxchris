import { css } from "@emotion/css";
import myself from "../assets/myself-modified.png";
import commonStyles from "./commonStyles";

const styles = {
  introText: css`
    color: #ffffff;
    font-size: 5rem;
  `,
  text: css`
    font-size: 2rem;
    margin: 0 0 1.5rem 0;
    padding: 0;
  `,
  name: css`
    color: #05f1f9;
  `,
  imgContainer: css`
    height: 33%;
  `,
  img: css`
    width: 100%;
    height: 100%;
  `,
};

export const Home = () => {
  return (
    <div className={commonStyles.container}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={myself} />
      </div>
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
        opportunities, feel free to connect with me on LinkedIn and explore my
        projects on GitHub. Let's bring your visions to life together.
      </p>
    </div>
  );
};

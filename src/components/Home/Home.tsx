import { css } from "@emotion/css";
import myself from "../../assets/myself-modified.png";
import commonStyles from "../commonStyles";

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
  connect: css`
    color: #05f1f9;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
  `,
  img: css`
    width: 20rem;
    margin-bottom: 1.5rem;
  `,
};

export const Home = () => {
  return (
    <section className={commonStyles.container} id="Home">
      <img className={styles.img} src={myself} />
      <div className={styles.introText}>
        Hey there, I am <span className={styles.name}>Chris.</span>
      </div>
      <p className={styles.text}>
        Welcome to my digital playground! I've always been captivated by the
        magic of technology. From my early days of tinkering with code to
        crafting complex web solutions today, I've been on an exhilarating
        journey of turning ideas into digital realities.{" "}
      </p>
      <p className={styles.text}>
        Ready to dive into the world of technology with me? Explore my portfolio
        to see how I bring ideas to life.
      </p>
    </section>
  );
};

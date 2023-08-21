import { css } from "@emotion/css";

const commonStyles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 2%;
    color: #ffffff;
    border-radius: 1.5rem;
    background: #101820;
    padding: 5rem 5rem;
    font-size: 2rem;

    @media only screen and (max-width: 950px) {
      padding: 1rem;
      margin: 2% 0;
    }
  `,
};

export default commonStyles;

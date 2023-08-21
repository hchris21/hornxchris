import { css } from "@emotion/css";

const styles = {
  divider: css`
    width: 100%;
  `,
};

export const Divider = () => {
  return <hr className={styles.divider} />;
};

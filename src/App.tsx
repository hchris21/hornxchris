import { css } from "@emotion/css";
import { Home } from "./components";

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    margin: 0 15%;
    color: #ffffff;
  `,
};

const App = () => {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
};

export default App;

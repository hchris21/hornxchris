import { css } from "@emotion/css";
import { Link } from "react-scroll";

const styles = {
  listItem: css`
    cursor: pointer;
    margin: 0 5rem;
    font-size: 2rem;
  `,
  navBar: css`
    display: flex;
    justify-content: center;
    list-style: none;
    font-weight: bold;
  `,
  header: css`
    @media only screen and (max-width: 950px) {
      display: none;
    }
  `,
};

export const Header = () => {
  const navItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "About me" },
    { id: 3, title: "Experience" },
    { id: 4, title: "Contact" },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navBar}>
          {navItems.map((item) => (
            <li className={styles.listItem} key={item.id}>
              <Link to={item.title} smooth={true}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

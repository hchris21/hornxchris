import { Link } from "react-scroll";
import { sectionIds } from "@/lib/sectionIds";

export const Nav = () => {
  const navItems = [
    { id: 1, title: sectionIds.home },
    { id: 2, title: sectionIds.about },
    { id: 3, title: sectionIds.experience },
    { id: 4, title: sectionIds.contact },
  ];

  return (
    <header className="hidden sm:block">
      <nav>
        <ul className="flex justify-center font-bold list-none">
          {navItems.map((item) => (
            <li className="cursor-pointer lg:mx-20 sm:mx-8 mx-2" key={item.id}>
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

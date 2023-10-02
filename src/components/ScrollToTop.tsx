import { useEffect, useState } from "react";
import arrowup from "../assets/arrowup.svg";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  if (!isVisible) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <img
        src={arrowup}
        className="w-10 fixed bottom-2 sm:bottom-10 right-0 sm:right-6 z-20 cursor-pointer transition-all duration-500 ease-in-out"
        onClick={scrollToTop}
      />
    </div>
  );
};

import { useEffect, useState } from "react";
import style from "./style.module.css";
const { scrollTop, showButton } = style;
export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`${scrollTop} ${show ? showButton : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

import "./NavBar.css";
import logo from "./../../assets/ISOTIPO_BECHERGROUP.svg";
import { useState, useEffect } from "react";
import imgMenu from "./../../assets/menu_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavMobile, setShowNavMobile] = useState(false);

  const showNavBar = () => {
    if (!showNavMobile) setShowNavMobile(true);
    else {
      setShowNavMobile(false);
    }
  };

  function scrollTo(component) {
    if (component === "about") {
      const aboutElement = document.getElementById("about");
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (component === "projects") {
      const projectElement = document.getElementById("projects");
      if (projectElement) {
        projectElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (component === "hero") {
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      const contactElement = document.getElementById("contact");
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container-navbar">
      <div className={showNavMobile ? 'active-mobile' : ''}>
      <div className={isScrolled ? "hero-navbar-scrolled" : "hero-navbar"}>
        <div className="container-logo" onClick={() => scrollTo("hero")}>
          <img src={logo} alt="" />
        </div>
        <div className="bars-menu" onClick={showNavBar}>
          <img src={imgMenu} alt="" />
        </div>
        <div className={`container-links-navbar ${showNavMobile ? 'active' : ''}`}>
          <ul>
            <li onClick={() => scrollTo("about")}>Sobre nosotros</li>
            <li onClick={() => scrollTo("projects")}>Proyectos</li>
            <li onClick={() => scrollTo("contact")}>Contactanos</li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};
export default NavBar;

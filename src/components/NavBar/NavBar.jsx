import "./NavBar.css";
import logo from "./../../assets/ISOTIPO_BECHERGROUP.svg";
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="container-navbar">
      <div className={isScrolled ? 'hero-navbar-scrolled' : "hero-navbar"}>
        <div className="container-logo">
          <img src={logo} alt="" />
        </div>
        <div className="container-links-navbar">
          <span>¿Por que elegirnos?</span>
          <span>Proyectos</span>
          <span>Contactanos</span>
        </div>
      </div>
    </section>
  );
};
export default NavBar;

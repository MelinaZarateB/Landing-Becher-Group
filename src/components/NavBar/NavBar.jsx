import "./NavBar.css";
import logo from "./../../assets/ISOTIPO_BECHERGROUP.svg";

const NavBar = () => {
  return (
    <section className="container-navbar">
      <div className="hero-navbar">
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

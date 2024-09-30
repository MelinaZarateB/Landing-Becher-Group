import "./About.css";
import imgGroup from "./../../assets/icons8-grupo-de-usuario-64.png";
import imgPC from "./../../assets/icons8-imac-50.png";
import imgBussiness from "./../../assets/icons8-negocio-50.png";
import imgCode from "./../../assets/icons8-code-64.png";
import { useRef } from 'react';
import useNearScreen from "../../utils/useNearScreen";

const About = () => {
  const elementRef = useRef();
  const show = useNearScreen(elementRef)

  return (
    <section className="container-about" id="about">
      <div className="grid-about" >
        <div className={`card-grid ${show ? 'animate' : ''}`} ref={elementRef}>
          <img src={imgGroup} style={{ width: "50px" }} alt="" />
          <h3>Sobre nosotros</h3>
          <p>
          Nuestro compromiso con la excelencia nos ha permitido crecer y diversificarnos, posicionándonos como líderes en cada uno de los rubros que desarrollamos.
          </p>
        </div>
        <div className={`card-grid ${show ? 'animate' : ''}`} ref={elementRef}>
          <img src={imgPC} alt="" />
          <h3>¿Que hacemos?</h3>
          <p >
          En Becher Group ofrecemos soluciones integrales en diferentes industrias. Nuestro objetivo es mejorar la calidad de vida de nuestros clientes a través de productos y servicios eficientes y de alta calidad.
          </p>
        </div>
        <div className={`card-grid ${show ? 'animate' : ''}`} ref={elementRef}>
          <img src={imgCode} style={{ width: "50px" }} alt="" />
          <h3>¿Como lo hacemos?</h3>
          <p>
          Nos basamos en la integración de tecnología avanzada, procesos eficientes y un equipo altamente capacitado. Cada uno de nuestros negocios se desarrolla con un enfoque en la optimización, la sustentabilidad y la excelencia operativa.
          </p>
        </div>
        <div className={`card-grid ${show ? 'animate' : ''}`} ref={elementRef}>
          <img src={imgBussiness} style={{ width: "45px" }} alt="" />
          <h3>Nuestra experiencia</h3>
          <p>
          Tenemos amplia experiencia en el desarrollo de software y la comercialización de productos propios, hasta una fábrica embotelladora de agua y una estación de servicio
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

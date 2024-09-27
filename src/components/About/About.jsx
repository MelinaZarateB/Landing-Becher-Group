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
    <section className="container-about">
      <div className="grid-about">
        <div className={`card-grid ${show ? 'animate' : ''}`} ref={elementRef}>
          <img src={imgGroup} style={{ width: "50px" }} alt="" />
          <h3>Sobre nosotros</h3>
          <p>
          Somos una empresa especializada en desarrollo de software, con un equipo de profesionales comprometidos en crear soluciones a medida para nuestros clientes.
          </p>
        </div>
        <div className={`card-grid ${show ? 'animate' : ''}`} ref={elementRef}>
          <img src={imgPC} alt="" />
          <h3>¿Que hacemos?</h3>
          <p>
          Desarrollamos aplicaciones móviles y sistemas personalizados. Con un enfoque en el asesoramiento integral, apoyando a las empresas en cada etapa de su proceso de transformación digital.
          </p>
        </div>
        <div className={`card-grid ${show ? 'animate' : ''}`} ref={elementRef}>
          <img src={imgCode} style={{ width: "50px" }} alt="" />
          <h3>¿Como lo hacemos?</h3>
          <p>
          Utilizamos la metodología Scrum y aplicamos un conjunto de mejores prácticas para maximizar la eficiencia en cada proyecto.
          </p>
        </div>
        <div className={`card-grid ${show ? 'animate' : ''}`} ref={elementRef}>
          <img src={imgBussiness} style={{ width: "45px" }} alt="" />
          <h3>Nuestra experiencia</h3>
          <p>
          Tenemos amplia experiencia en sectores como sistemas de gestión, fintech, industria de bebidas y combustibles. 
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

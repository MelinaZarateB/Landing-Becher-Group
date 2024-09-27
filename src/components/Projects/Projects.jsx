import "./Projects.css";
import imgAdminiad from "./../../assets/Adminiad.svg";
import imgCDA from "./../../assets/CDA.svg";
import imgCombustibles from "./../../assets/Combustibles.svg";
import { useRef } from "react";
import useNearScreen from "../../utils/useNearScreen";

const Projects = () => {
    const adminiadRef = useRef();  // Referencia para Adminiad
    const combustiblesRef = useRef();  // Referencia para Combustibles
    const cdaRef = useRef();
    const showAdminiad = useNearScreen(adminiadRef);  
    const showCombustibles = useNearScreen(combustiblesRef);
    const showCda = useNearScreen(cdaRef);

    return (
        <section className="container-projects">
          <div className="container-titles-project" style={{ gap: "0px" }}>
            <h2 className="h2-projects">Empresas y proyectos</h2>
            <h3 className="h3-projects">Proyectos desarrollados y empresas pertenecientes a Becher Group</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          
            {/* Adminiad Project */}
            <div className="container-text-projects">
              <div className="presentation-project">
                <h2 style={{ fontSize: "60px", color: "#FF6B35", marginBottom: "5%" }}>01</h2>
                <h3 className="title-project">Adminiad - Sistema de gestión inteligente</h3>
                <p className="description-project">Software de gestión para administrar su negocio, controlar inventario y acceder a reportes inteligentes.</p>
                <a href="https://adminiad.com/" rel="noopener noreferrer" target="_blank">
                  <button className="btn-project" style={{ float: "left" }}>Ver trabajo</button>
                </a>
              </div>
              <div className={`container-img-project ${showAdminiad ? 'animate-fade-right' : ''}`} ref={adminiadRef}>
                <img src={imgAdminiad} alt="Adminiad" />
              </div>
            </div>
            {/* CDA SAN LUIS Project */}
            <div className="container-text-projects">
              <div className={`container-img-project ${showCda ? 'fadeLeft' : ''}`} ref={cdaRef}>
                <img src={imgCDA} alt="CDA" />
              </div>
              <div className="presentation-project">
                <h2 style={{ fontSize: "60px", color: "#FF6B35", marginBottom: "5%" }}>02</h2>
                <h3 className="title-project">CDA SAN LUIS</h3>
                <p className="description-project">Centro de distribución de agua - ofrecemos los mejores productos para vos y tu familia.</p>
                <a href="https://www.cdasanluis.com/" rel="noopener noreferrer" target="_blank">
                  <button className="btn-project" style={{ float: "left" }}>Ver empresa</button>
                </a>
              </div>
            </div>
            
            {/* Combustibles Argentinos Project */}
            <div className="container-text-projects">
              <div className="presentation-project">
                <h2 style={{ fontSize: "60px", color: "#FF6B35", marginBottom: "5%" }}>03</h2>
                <h3 className="title-project">CA - Combustibles Argentinos</h3>
                <p className="description-project">Combustibles Argentinos: tu fuente de energía en Villa Mercedes.</p>
                <a href="https://www.instagram.com/combustibles_argentinos?igsh=MXY5N2RpM2JxdmU2Nw==" rel="noopener noreferrer" target="_blank">
                  <button className="btn-project" style={{ float: "left" }}>Ver empresa</button>
                </a>
              </div>
              <div className={`container-img-project ${showCombustibles ? 'animate-fade-right' : ''}`} ref={combustiblesRef}>
                <img src={imgCombustibles} alt="Combustibles Argentinos" />
              </div>
            </div>
    
          </div>
        </section>
      );
    };
    export default Projects;
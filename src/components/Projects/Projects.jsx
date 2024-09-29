import "./Projects.css";
import imgAdminiad from "./../../assets/Adminiad.svg";
import imgCDA from "./../../assets/CDA.svg";
import imgCombustibles from "./../../assets/Combustibles.svg";
import imgPuntosBe from './../../assets/Puntosbe.svg';
import { useRef } from "react";
import useNearScreen from "../../utils/useNearScreen";

const Projects = () => {
  const adminiadRef = useRef();  // Referencia para Adminiad
  const combustiblesRef = useRef();  // Referencia para Combustibles
  const cdaRef = useRef();
  const puntosBe = useRef();
  
  // Referencias para los títulos y subtítulos
  const titleNumAdminiad = useRef();
  const subTitleAdminiad = useRef();
  const titleNumCda = useRef();
  const subTitleCda = useRef();
  const titleNumCombustibles = useRef();
  const subTitleCombustibles = useRef();
  
  // Uso de NearScreen hook para detectar cuando se deben mostrar los elementos
  const showAdminiad = useNearScreen(adminiadRef);  
  const showCombustibles = useNearScreen(combustiblesRef);
  const showCda = useNearScreen(cdaRef);
  const showPuntosBe = useNearScreen(puntosBe);
  
  const showTitleNumAdminiad = useNearScreen(titleNumAdminiad);
  const showSubTitleAdminiad = useNearScreen(subTitleAdminiad);
  
  const showTitleNumCda = useNearScreen(titleNumCda);
  const showSubTitleCda = useNearScreen(subTitleCda);
  
  const showTitleNumCombustibles = useNearScreen(titleNumCombustibles);
  const showSubTitleCombustibles = useNearScreen(subTitleCombustibles);
  
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
            <h2 className={`${showTitleNumAdminiad ? 'animate-fade-up' : ''}`} style={{ fontSize: "60px", color: "#FF6B35", marginBottom: "5%", visibility: 'hidden' }} ref={titleNumAdminiad}>01</h2>
            <div className={`container-description-titles-project ${showSubTitleAdminiad ? 'animate-fade-down' : ''}`} ref={subTitleAdminiad}>
            <h3 className="title-project">Adminiad - Sistema de gestión inteligente</h3>
            <p className="description-project">Software de gestión para administrar su negocio, controlar inventario y acceder a reportes inteligentes.</p>
            <a href="https://adminiad.com/" rel="noopener noreferrer" target="_blank">
              <button className="btn-project" style={{ float: "left" }}>Ver trabajo</button>
            </a>
            </div>
          </div>
          <div className={`container-img-project ${showAdminiad ? 'animate-fade-right' : ''}`} ref={adminiadRef}>
            <img src={imgAdminiad} alt="Adminiad" />
          </div>
        </div>
  
        {/* CDA SAN LUIS Project */}
        <div className="container-text-projects">
          <div className={`container-img-project ${showCda ? 'animation-fade-left' : ''}`} ref={cdaRef}>
            <img src={imgCDA} alt="CDA" />
          </div>
          <div className="presentation-project">
            <h2 className={`${showTitleNumCda ? 'animate-fade-up' : ''}`} style={{ fontSize: "60px", color: "#FF6B35", marginBottom: "5%", visibility: 'hidden' }} ref={titleNumCda}>02</h2>
            <div className={`container-description-titles-project ${showSubTitleCda ? 'animate-fade-down' : ''}`} ref={subTitleCda}>
            <h3 className="title-project">CDA SAN LUIS</h3>
            <p className="description-project">Centro de distribución de agua - ofrecemos los mejores productos para vos y tu familia.</p>
            <a href="https://www.cdasanluis.com/" rel="noopener noreferrer" target="_blank">
              <button className="btn-project" style={{ float: "left" }}>Ver empresa</button>
            </a>
            </div>
          </div>
        </div>
        
        {/* Combustibles Argentinos Project */}
        <div className="container-text-projects">
          <div className="presentation-project">
            <h2 className={`${showTitleNumCombustibles ? 'animate-fade-up' : ''}`} style={{ fontSize: "60px", color: "#FF6B35", marginBottom: "5%", visibility: 'hidden' }} ref={titleNumCombustibles}>03</h2>
            <div className={` container-description-titles-project ${showSubTitleCombustibles ? 'animate-fade-down' : ''}`} ref={subTitleCombustibles}>
            <h3 className="title-project">CA - Combustibles Argentinos</h3>
            <p className="description-project">Combustibles Argentinos: tu fuente de energía en Villa Mercedes.</p>
            <a href="https://www.instagram.com/combustibles_argentinos?igsh=MXY5N2RpM2JxdmU2Nw==" rel="noopener noreferrer" target="_blank">
              <button className="btn-project" style={{ float: "left" }}>Ver empresa</button>
            </a>
            </div>
          </div>
          <div className={`container-img-project ${showCombustibles ? 'animate-fade-right' : ''}`} ref={combustiblesRef}>
            <img src={imgCombustibles} alt="Combustibles Argentinos" />
          </div>
        </div>

        <div className="container-text-projects">
          <div className={`container-img-project ${showPuntosBe ? 'animation-fade-left' : ''}`} ref={puntosBe}>
            <img src={imgPuntosBe} alt="CDA" />
          </div>
          <div className="presentation-project" style={{width: '50%'}}>
            <h2 className={`${showTitleNumCda ? 'animate-fade-up' : ''}`} style={{ fontSize: "60px", color: "#FF6B35", marginBottom: "5%", visibility: 'hidden' }} ref={titleNumCda}>04</h2>
            <div className={`container-description-titles-project ${showSubTitleCda ? 'animate-fade-down' : ''}`} ref={subTitleCda}>
            <h3 className="title-project">Puntos Be</h3>
            <p className="description-project">Comunidad de ahorro y beneficios - Acumula puntos con cada compra en comercios participantes y canjéalos por descuentos en cualquier tienda de la red, sin importar la ubicación</p>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  );
  };
  export default Projects;
  
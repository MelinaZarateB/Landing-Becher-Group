import "./Projects.css";
import imgAdminiad from "./../../assets/Adminiad.svg";
import imgCDA from "./../../assets/CDA.svg";
import imgCombustibles from "./../../assets/Combustibles.svg";
import imgPuntosBe from "./../../assets/Puntosbe.svg";
import imgAguasBe from "./../../assets/aguasBE.svg";
import { useRef } from "react";
import useNearScreen from "../../utils/useNearScreen";

const Projects = () => {
  // Para mostrar las imagenes de ref
  const adminiadRef = useRef(); // Referencia para Adminiad
  const combustiblesRef = useRef(); // Referencia para Combustibles
  const cdaRef = useRef();
  const aguasBe = useRef(); // Ref para aguasBe
  const puntosBe = useRef(); // Ref para puntosBe

  // Referencias para los títulos y subtítulos
  const titleNumAdminiad = useRef();
  const subTitleAdminiad = useRef();
  const titleNumCda = useRef();
  const subTitleCda = useRef();
  const titleNumCombustibles = useRef();
  const subTitleCombustibles = useRef();
  const titleAguasBe = useRef();
  const subTitleAguasBe = useRef();
  const titlePuntosBe = useRef();
  const subTitlePuntosBe = useRef();

  // Uso de NearScreen hook para detectar cuando se deben mostrar los elementos
  const showAdminiad = useNearScreen(adminiadRef);
  const showCombustibles = useNearScreen(combustiblesRef);
  const showCda = useNearScreen(cdaRef);
  const showAguasBe = useNearScreen(aguasBe);
  const showPuntosBe = useNearScreen(puntosBe);

  const showTitleNumCda = useNearScreen(titleNumCda);
  const showSubTitleCda = useNearScreen(subTitleCda);
  const showTitleNumAdminiad = useNearScreen(titleNumAdminiad);
  const showSubTitleAdminiad = useNearScreen(subTitleAdminiad);
  const showTitleNumCombustibles = useNearScreen(titleNumCombustibles);
  const showSubTitleCombustibles = useNearScreen(subTitleCombustibles);
  const showTitleAguasBe = useNearScreen(titleAguasBe);
  const showSubTitleAguasBe = useNearScreen(subTitleAguasBe);
  const showTitlePuntosBe = useNearScreen(titlePuntosBe);
  const showSubTitlePuntosBe = useNearScreen(subTitlePuntosBe);

  return (
    <section className="container-projects">
      <div
        className="container-titles-project"
        style={{ gap: "0px" }}
        id="projects"
      >
        <h2 className="h2-projects">Nuestra Red de Empresas y Proyectos</h2>
        <h3 className="h3-projects">
          Soluciones Innovadoras y Empresas Diversificadas bajo el Sello de
          Becher Group
        </h3>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
        {/* Adminiad Project */}
        <div className="container-text-projects">
          <div className="presentation-project">
            <h2
              className={`${showTitleNumAdminiad ? "animate-fade-up" : ""}`}
              style={{
                fontSize: "60px",
                color: "#FF6B35",
                marginBottom: "5%",
                visibility: "hidden",
              }}
              ref={titleNumAdminiad}
            >
              01
            </h2>
            <div
              className={`container-description-titles-project ${
                showSubTitleAdminiad ? "animate-fade-down" : ""
              }`}
              ref={subTitleAdminiad}
            >
              <h3 className="title-project">
                Adminiad - Sistema de gestión inteligente
              </h3>
              <p className="description-project">
                Software de gestión para administrar su negocio, controlar
                inventario y acceder a reportes inteligentes.
              </p>
              <a
                href="https://adminiad.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn-project" style={{ float: "left" }}>
                  Ver trabajo
                </button>
              </a>
            </div>
          </div>
          <div
            className={`container-img-project ${
              showAdminiad ? "animate-fade-right" : ""
            }`}
            ref={adminiadRef}
          >
            <img src={imgAdminiad} alt="Adminiad" />
          </div>
        </div>

        {/* CDA SAN LUIS Project */}
        <div className="container-text-projects">
          <div
            className={`container-img-project ${
              showCda ? "animation-fade-left" : ""
            }`}
            ref={cdaRef}
          >
            <img src={imgCDA} alt="CDA" />
          </div>
          <div className="presentation-project">
            <h2
              className={`${showTitleNumCda ? "animate-fade-up" : ""}`}
              style={{
                fontSize: "60px",
                color: "#FF6B35",
                marginBottom: "5%",
                visibility: "hidden",
              }}
              ref={titleNumCda}
            >
              02
            </h2>
            <div
              className={`container-description-titles-project ${
                showSubTitleCda ? "animate-fade-down" : ""
              }`}
              ref={subTitleCda}
            >
              <h3 className="title-project">CDA SAN LUIS - Centro de distribución de agua San Luis</h3>
              <p className="description-project">
                Centro de distribución de agua - ofrecemos los mejores productos
                para vos y tu familia.
              </p>
              <a
                href="https://www.cdasanluis.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn-project" style={{ float: "left" }}>
                  Ver empresa
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Combustibles Argentinos Project */}
        <div className="container-text-projects">
          <div className="presentation-project" style={{width: '50%'}}>
            <h2
              className={`${showTitleNumCombustibles ? "animate-fade-up" : ""}`}
              style={{
                fontSize: "60px",
                color: "#FF6B35",
                marginBottom: "5%",
                visibility: "hidden",
              }}
              ref={titleNumCombustibles}
            >
              03
            </h2>
            <div
              className={` container-description-titles-project ${
                showSubTitleCombustibles ? "animate-fade-down" : ""
              }`}
              ref={subTitleCombustibles}
            >
              <h3 className="title-project">CA - Combustibles Argentinos</h3>
              <p className="description-project">
                Combustibles Argentinos: tu fuente de energía en Villa Mercedes.
              </p>
              <a
                href="https://www.instagram.com/combustibles_argentinos?igsh=MXY5N2RpM2JxdmU2Nw=="
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn-project" style={{ float: "left" }}>
                  Ver empresa
                </button>
              </a>
            </div>
          </div>
          <div
            className={`container-img-project ${
              showCombustibles ? "animate-fade-right" : ""
            }`}
            style={{width: '50%'}}
            ref={combustiblesRef}
          >
            <img src={imgCombustibles} alt="Combustibles Argentinos" />
          </div>
        </div>

        {/* Aguas Be Project */}
        <div className="container-text-projects">
          <div
            className={`container-img-project ${
              showAguasBe ? "animation-fade-left" : ""
            }`}
            style={{width: '50%'}}
            ref={aguasBe}
          >
            <img src={imgAguasBe} alt="Proyecto Aguas Be" />
          </div>
          <div className="presentation-project" style={{ width: "50%" }}>
            <h2
              className={`${showTitleAguasBe ? "animate-fade-up" : ""}`}
              style={{
                fontSize: "60px",
                color: "#FF6B35",
                marginBottom: "5%",
                visibility: "hidden",
              }}
              ref={titleAguasBe}
            >
              04
            </h2>
            <div
              className={`container-description-titles-project ${
                showSubTitleAguasBe ? "animate-fade-down" : ""
              }`}
              ref={subTitleAguasBe}
            >
              <h3 className="title-project">Aguas Be - Tu Solución Inteligente para Embotelladoras
              </h3>
              <p className="description-project">
              Revoluciona la gestión de embotelladoras de agua, optimizando procesos y asegurando la trazabilidad con facilidad.
              </p>
              <a
                href="https://aguasbe.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="btn-project" style={{ float: "left" }}>
                  Ver trabajo
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Puntos Be Project */}
        <div className="container-text-projects">
          <div className="presentation-project" style={{ width: "50%" }}>
            <h2
              className={`${showPuntosBe ? "animate-fade-up" : ""}`}
              style={{
                fontSize: "60px",
                color: "#FF6B35",
                marginBottom: "5%",
                visibility: "hidden",
              }}
              ref={titlePuntosBe}
            >
              05
            </h2>
            <div
              className={` container-description-titles-project ${
                showSubTitlePuntosBe ? "animate-fade-down" : ""
              }`}
              ref={subTitlePuntosBe}
            >
              <h3 className="title-project">Puntos BE - Comunidad de ahorro y beneficios</h3>
              <p className="description-project">
              Acumula puntos con cada compra en comercios participantes y canjéalos por descuentos en cualquier tienda de la red, sin importar la ubicación
              </p>
            </div>
          </div>
          <div
            className={`container-img-project ${
              showPuntosBe ? "animate-fade-right" : ""
            }`}
            style={{width: '50%'}}
            ref={puntosBe}
          >
            <img src={imgPuntosBe} alt="Combustibles Argentinos" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;

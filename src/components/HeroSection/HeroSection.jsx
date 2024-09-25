import "./HeroSection.css";
import image from "./../../assets/undraw_progressive_app_m-9-ms.svg";

const HeroSection = () => {
  return (
    <section className="container-hero">
    <div className="hero-principal">
        <div className="container-image animate">  {/* Aplica fadeIn */}
            <img src={image} alt="" />
        </div>
        <div className="container-text">
            <div >
              <div className="fadeLeft">
                <span className="span-hero-section ">Becher Group Solutions</span> 
              </div>
                <h1 className="fadeLeft">Transformamos tus ideas en soluciones digitales innovadoras</h1>
                <p className="fadeLeft">
                    Diseño, desarrollo y mantenimiento de software personalizado para
                    empresas de todos los tamaños
                </p>
            </div>
        </div>
    </div>
</section>


  );
};
export default HeroSection;

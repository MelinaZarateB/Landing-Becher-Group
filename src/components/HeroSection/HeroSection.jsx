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
                <span className="span-hero-section ">Becher Group</span> 
              </div>
                <h1 className="fadeLeft">Innovación y Diversidad Empresarial</h1>
                <p className="fadeLeft">
                Christian y Matias Becher, hermanos fundadores, lideran un grupo empresarial que abarca múltiples sectores. 
                <br />
                Explora nuestras áreas de negocio y descubre cómo integramos tecnología, eficiencia y calidad en todo lo que hacemos.
                </p>
            </div>
        </div>
    </div>
</section>


  );
};
export default HeroSection;

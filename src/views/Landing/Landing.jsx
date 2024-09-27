import HeroSection from "../../components/HeroSection/HeroSection";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/About/About";
import Footer from "../../Footer/Footer";
import Form from "../../components/Form/Form";
import Projects from "../../components/Projects/Projects";

const Landing = () => {
    return(
        <section>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <About></About>
            <Projects></Projects>
            <Form></Form>
            <Footer></Footer>
        </section>
    )
}
export default Landing;
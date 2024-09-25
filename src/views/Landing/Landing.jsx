import HeroSection from "../../components/HeroSection/HeroSection";
import NavBar from "../../components/NavBar/NavBar";
import About from "../../components/About/About";
import Footer from "../../Footer/Footer";
import Form from "../../components/Form/Form";

const Landing = () => {
    return(
        <section>
            <NavBar></NavBar>
            <HeroSection></HeroSection>
            <About></About>
            <Form></Form>
            <Footer></Footer>
        </section>
    )
}
export default Landing;
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import Particles from "react-particles-js";

//components
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import TitleHeadings from "./components/TitleHeadings";
import About from "./components/Pages/About/About";
import bgImage from "./assets/img/parallex/background.jpg";
import Skills from "./components/Pages/Skills/Skills";
import Projects from "./components/Pages/Projects/Projects";
import Contact from "./components/Pages/Contact/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleHeadings />

      <div>
        <Parallax bgImage={bgImage} bgImageAlt="" strength={600}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Projects />
          </Fade>
        </Container>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Contact />
          </Fade>
        </Container>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default App;

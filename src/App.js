import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
//components
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import TitleHeadings from "./components/TitleHeadings";
import About from "./components/Pages/About/About";
import bgImage from "./assets/img/parallex/background.png";

import "./App.css";
import Skills from "./components/Pages/Skills/Skills";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleHeadings />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={bgImage}
          bgImageAlt=""
          strength={-200}
        >
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
    </div>
  );
};

export default App;

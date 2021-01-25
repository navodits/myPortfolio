import logo from "./logo.svg";
import "./App.css";
//components
import MyNavbar from "./components/Navbar/MyNavbar";
import MyCarousel from "./components/Carousel/MyCarousel";
import TitleHeadings from "./components/TitleHeadings";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <MyCarousel />
      <TitleHeadings />
    </div>
  );
};

export default App;

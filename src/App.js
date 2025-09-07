
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Abour from "./components/Abour";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><Abour/></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;

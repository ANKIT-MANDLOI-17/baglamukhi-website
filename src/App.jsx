import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Gallery from "./components/Gallery";
import VideoSection from "./components/VideoSection";
import Contact from "./components/Contact";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Services />

        <About />

        <Gallery />

        <VideoSection />

        

        <Contact />

      </main>

      <FloatingActions />

      <Footer />
    </>
  );
}

export default App;
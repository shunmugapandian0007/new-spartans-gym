import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Transformations from "./pages/Transformations/Transformations";
import Gallery from "./pages/Gallery/Gallery";
import Trainer from "./pages/Trainer/Trainer";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/transformations" element={<Transformations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <WhatsAppButton />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
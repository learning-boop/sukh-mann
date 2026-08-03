import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import StickyCallBar from "./components/StickyCallBar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import DrSukh from "./pages/DrSukh.jsx";
import Care from "./pages/Care.jsx";
import NewPatients from "./pages/NewPatients.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="font-body bg-white text-gray-900 antialiased">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dr-sukh-mann" element={<DrSukh />} />
        <Route path="/care" element={<Care />} />
        <Route path="/new-patients" element={<NewPatients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <StickyCallBar />
    </div>
  );
}

import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "components/Header.jsx";
import Footer from "components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Introduction from "./pages/Introduction.jsx";
import Contract from "./pages/Contract.jsx";
import About from "./pages/About.jsx";

const PAGE_TITLES = {
  "/": "Malik Lawson's Mighty Lion || ITIS3135 || Home",
  "/introduction": "Malik Lawson's Mighty Lion || ITIS3135 || Introduction",
  "/contract": "Malik Lawson's Mighty Lion || ITIS3135 || Contract",
  "/about": "Malik Lawson's Mighty Lion || ITIS3135 || About"
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    document.title =
      PAGE_TITLES[location.pathname] ||
      "Malik Lawson's Mighty Lion || ITIS3135";
  }, [location.pathname]);

  return (
    <>
      <Header />
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/contract" element={<Contract />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <hr />
      <Footer />
    </>
  );
}
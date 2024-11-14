/* eslint-disable no-unused-vars */
import { useLocation } from "react-router";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <div>
        <div className="max-w-[1200px] m-auto px-6 xl:px-0">
          <Hero className="w-screen h-screen" />
        </div>
      </div>
      <div className="bg-[#111111]">
        <div className="max-w-[1200px] m-auto px-6 xl:px-0">
          <AboutUs />
        </div>
      </div>
      <Footer />
    </>
  );
}
/*




*/

import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import IntroMission from "./components/IntroMission";
import DeepFakeCases from "./components/DeepFakeCases";
import WhatWeOffer from "./components/WhatWeOffer";
import OurTeam from "./components/OurTeam";
import Footer from "./components/Footer";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Stats />
      <IntroMission />
      <DeepFakeCases />
      <WhatWeOffer />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;

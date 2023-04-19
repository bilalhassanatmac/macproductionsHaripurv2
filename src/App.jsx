import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroSection, SupportSection, ServiceSection, ProjectsSection, FooterSection, PortfolioSection, ServicePage } from "./containers/index";
import { Navbar } from "./components/index";
import { Fragment } from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Fragment>
          <Navbar/>
          <HeroSection/>
          <SupportSection/>
          <ServiceSection/>
          <PortfolioSection/>
          <ProjectsSection/>
          <FooterSection/>
        </Fragment>
        }/>
        <Route path="/about-us" element={
          <Fragment>
          <Navbar/>
          <SupportSection/>
          <FooterSection/>
        </Fragment>
        }/>
        <Route path="/portfolio" element={
          <Fragment>
          <Navbar/>
          <PortfolioSection/>
          <FooterSection/>
        </Fragment>
        }/>
        <Route path="/services" element={
          <Fragment>
          <Navbar/>
          <ServiceSection/>
          <FooterSection/>
        </Fragment>
        }/>
        <Route path="/contact-us" element={
          <Fragment>
          <Navbar/>
          <FooterSection/>
        </Fragment>
        }/>
        <Route path="/service" element={
          <Fragment>
          <Navbar/>
          <ServicePage/>
          <FooterSection/>
        </Fragment>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

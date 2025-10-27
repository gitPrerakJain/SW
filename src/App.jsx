import { useState } from 'react'
import './App.css'
import logo from './assets/jpgs.png';
import CardNav from '../App.jsx/CardNav/CardNav.jsx';
import DarkVeil from '../App.jsx/DarkVeil/DarkVeil.jsx';
import DomeGallery from '../App.jsx/DomeGallery/DomeGallery.jsx';
import SplitText from "../App.jsx/SplitText/SplitText.jsx";
import CountUp from '../App.jsx/CountUp/CountUp.jsx';
import CompoLogo from './MetallicLogo.jsx';

function App() {

  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "The Four Houses", ariaLabel: "The Four Houses" },
        { label: "Gallery", ariaLabel: "About Gallery" },
        { label: "Testimonials", ariaLabel: "Testimonials" },
        { label: "Clubs", ariaLabel: "Clubs" },
        { label: "Staff List", ariaLabel: "Our Team" },
        { label: "School Council", ariaLabel: "School Council" },
        { label: "Public Disclosure", ariaLabel: "Public Disclosure" },
        { label: "Mandatory Disclosure Policies", ariaLabel: "Mandatory Disclosure Policies" },
        { label: "TC", ariaLabel: "TC" },
        { label: "Privacy Policy", ariaLabel: "Privacy Policy" }
      ]
    },
    {
      label: "Academics",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "School Report", ariaLabel: "School Report" },
        { label: "Self-Affidavit", ariaLabel: "Self-Affidavit" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Facebook", ariaLabel: "Facebook" },
        { label: "Instagram", ariaLabel: "Instagram" },
        { label: "Youtube", ariaLabel: "Youtube" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    },

  ];
  return (
    <div>
      <div style={{ position: "relative", height: "180vh", width: "100%", backgroundColor: "#000" }}>
        <div style={{ position: "relative", height: "180vh", width: "100%", }}>
          <DarkVeil />
          <div style={{ position: "absolute", top: "150vh", marginLeft: "40%", transform: "translateX(-33%)", color: "red", border: "2px solid white  ", padding: "1rem", borderRadius: "0.5rem", zIndex: 99, fontSize: "3rem", backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
            <div className="counter-individual" style={{ display: "inline-block", margin: "2rem" }}>
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text oswald-bold"
                display={"block"}
              />
              <span style={{ display: "block", fontSize: "20px" }}>Trusted Educators</span>
            </div>
            <div className="counter-individual" style={{ display: "inline-block", margin: "2rem" }}>
              <CountUp
                from={0}
                to={687}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text oswald-bold"
              />
              <span style={{ display: "block", fontSize: "20px" }}>Success Stories</span>
            </div>
            <div className="counter-individual" style={{ display: "inline-block", margin: "2rem" }}>
              <CountUp
                from={0}
                to={347}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text oswald-bold"
              />
              <span style={{ display: "block", fontSize: "20px" }}>Scheduled Events</span>
            </div>
            <div className="counter-individual" style={{ display: "inline-block", margin: "2rem" }}>
              <CountUp
                from={0}
                to={1912}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text oswald-bold"
              />
              <span style={{ display: "block", fontSize: "20px" }}>Available Courses</span>
            </div>
          </div>

          <div style={{ position: "absolute", width: "100%", textAlign: 'center', top: "10rem", margin: "auto ", zIndex: 99, color: "white" }}>
            <SplitText
              text="&nbsp; Jayshree Periwal Global School &nbsp;"
              tag='h1'
              zIndex={99}
              className="oswald-bold"
              delay={100}
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="100px"
              textAlign="center"
            />
          </div>

          <div style={{ border: "1px solid #e8dfdfff", borderRadius: "0.5%", position: "absolute", top: "40vh", width: '95vw', height: '95vh', margin: '0 auto', left: 0, right: 0 }}>
            {/* <span className="chewy-regular" style={{ marginTop: "2px", marginBottom: "2px", display: "block", color: "white", marginLeft: "50%", transform: "translateX(-10%)" }}>Life @ JPGS</span> */}
            <DomeGallery fit={0.9} segments={25} grayscale={false} overlayBlurColor={"#060010"} maxVerticalRotationDeg={25} zIndex={99} />
          </div>
        </div>

        <div style={{ width: "100%", zIndex: 100, display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "2rem" }}>
          <CardNav
            logo={logo}
            logoAlt="Company Logo"
            items={items}
            baseColor="#fff"
            menuColor="#000"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
            zIndex={100}
          />
        </div>
      </div>
      <CompoLogo />
    </div>
  );
}

export default App

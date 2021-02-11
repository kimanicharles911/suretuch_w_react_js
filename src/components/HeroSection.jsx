import { Button } from "./Button.jsx";
import "./HeroSection.css";
/* import bgVid from "../videos/video-2.mp4"; */

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src={bgVid} autoPlay loop muted /> */}
      <h1>Sure-Tuch Creations</h1>
      <p>Art in the Product</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}
export default HeroSection;
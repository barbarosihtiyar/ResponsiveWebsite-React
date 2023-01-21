import React from "react";
import "./sass/stages.css";
import fitness from "../../images/fitness.webp";
import { useState } from "react";

function Stages() {

  const [change,setChange] = useState(false);
  const [displayText,setDisplayText] = useState(false);

  const changevalueonScrool = () => {
    const scrollvalue = document.documentElement.scrollTop;

    if(scrollvalue > 250){
      setChange(true);
    }
    if(scrollvalue > 650){
      setDisplayText(true) (true);
    }
  }

  window.addEventListener("scroll",changevalueonScrool);

  return (
    <div className="stage">
      <div className="stageContainer">
        <div className="stageWrapper">
          <div className={change ? "stageText opacity-Yposition" : "stageText"}>
            <span>GROW YOUR</span>
            <span>BUSINESS</span>
            <span>ONLINE</span>
          </div>
          <div className="image-stage">
            <div className="image">
              <img src={fitness} alt="" />
            </div>
            <div className="stages">
              <div className={displayText ? "partStages first" : "partStages"}>
                <span className="number">1</span>
                <div className="stagesText">
                  <span className="stagesTitle">Create a website</span>
                  <p className="stagesP">
                    Select from any of our industry-leading website templates,
                    designer fonts, and color palettes that best fit your
                    personal style and professional needs.
                  </p>
                </div>
              </div>
              <div className={displayText ? "partStages second" : "partStages"}>
                <span className="number">2</span>
                <div className="stagesText">
                  <span className="stagesTitle">Ecommerce made easy</span>
                  <p className="stagesP">
                    Explore which tools you want to add—whether it’s setting up
                    an online store, booking services, or adding your favorite
                    third-party extensions.{" "}
                  </p>
                </div>
              </div>
              <div className={displayText ? "partStages third" : "partStages"}>
                <span className="number">3</span>
                <div className="stagesText">
                  <span className="stagesTitle">Market your business</span>
                  <p className="stagesP">
                    Stand out in every inbox and social feed. On-brand email
                    campaigns and social tools make it easy to retain customers
                    and grow your audience.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stages;

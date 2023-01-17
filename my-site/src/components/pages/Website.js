import React from "react";
import "./sass/website.css";
import heroImage from "..//..//images/heroImage.jpg";
import blog from "..//..//images/blog.jpg";
import localBusiness from "..//..//images/localBusiness.jpg";
import onlineStore from "..//..//images/onlineStore.jpg";
import personalCv from "..//..//images/personalCv.jpg";
import portfolio from "..//..//images/portfolio.jpg";
import restaurant from "..//..//images/restaurant.jpg";
import services from "..//..//images/services.jpg";
import { useState } from "react";


function Website() {
    const [image,setImage] = useState([false,false,false,false,false,false,false]);

    const changeVal = (e) => {
        setImage[0](true);
    }
  return (
    <div className="website">
      <div className="websiteContainer">
        <div className="websiteWrapper">
          <div className="websiteTitle">
            <span>CREATE A</span>
            <span>WEBSITE</span>
          </div>
          <div className="websiteImage">
            <div className="websitePart">
              <div className="websiteHeader">
                <span className="companyName">Lolasana</span>
                <div className="companyLinks">
                  <span>About</span>
                  <span>Services</span>
                  <span>Coaching</span>
                  <span>Recipes</span>
                  <span>Contact</span>
                </div>
                <span className="companyButton">Book a Class</span>
              </div>
              <div className="image">
                <img src={heroImage} alt="" />
                <div className="absoluteText">
                  About / Services / Coaching <br />
                  Recipes / Contact Me
                </div>
              </div>
            </div>
          </div>

          <div className="websiteTemplates">
            <span>Website templates</span>
            <span>for every purpose</span>
            <p>
              Start with a flexible template, then customize to fit your style
              and professional needs with our website builder.
            </p>
          </div>
          <div className="websitesLink">
            <div className="links">
                <span onClick={changeVal}>Online Store</span>
                <span>Local Business</span>
                <span>Portfolio</span>
                <span>Blog</span>
                <span>Restaurant</span>
                <span>Services</span>
                <span>Personal & Cv</span>
            </div>
            <div className="linksPhoto">
            <img className={image[0] ? "active" : ""} src={blog} alt="" />
            <img  src={localBusiness} alt="" />
            <img  src={onlineStore} alt="" />
            <img  src={personalCv} alt="" />
            <img  src={portfolio} alt="" />
            <img  src={restaurant} alt="" />
            <img  src={services} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;

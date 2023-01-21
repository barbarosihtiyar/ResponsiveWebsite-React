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
import squarespaceImage from "..//..//images/squarespace.jpg";
import { useState } from "react";

function Website() {
  const [onlinestore, setOnlinestore] = useState(true);
  const [blogs, setBlogs] = useState(false);
  const [localbusiness, setLocalbusiness] = useState(false);
  const [personalcv, setPersonalcv] = useState(false);
  const [portfolios, setPortfolios] = useState(false);
  const [restaurants, setRestaurants] = useState(false);
  const [service, setService] = useState(false);

  const [change,setChange] = useState(false);
  const [displayText,setDisplayText] = useState(false);

  const changevalueonScrool = () => {
    const scrollvalue = document.documentElement.scrollTop;

    if(scrollvalue > 2150){
      setChange(true);
    }
    if(scrollvalue > 2650){
      setDisplayText(true) (true);
    }
  }
  window.addEventListener("scroll",changevalueonScrool);


  const changeValOnlineStore = () => {
    setOnlinestore(true);
    setBlogs(false);
    setLocalbusiness(false);
    setPersonalcv(false);
    setPortfolios(false);
    setRestaurants(false);
    setService(false);
  };
  const changeValBlog = () => {
    setOnlinestore(false);
    setBlogs(true);
    setLocalbusiness(false);
    setPersonalcv(false);
    setPortfolios(false);
    setRestaurants(false);
    setService(false);
  };
  const changeValLocalBusiness = () => {
    setOnlinestore(false);
    setBlogs(false);
    setLocalbusiness(true);
    setPersonalcv(false);
    setPortfolios(false);
    setRestaurants(false);
    setService(false);
  };
  const changeValPersonalCv = () => {
    setOnlinestore(false);
    setBlogs(false);
    setLocalbusiness(false);
    setPersonalcv(true);
    setPortfolios(false);
    setRestaurants(false);
    setService(false);
  };
  const changeValPortfolio = () => {
    setOnlinestore(false);
    setBlogs(false);
    setLocalbusiness(false);
    setPersonalcv(false);
    setPortfolios(true);
    setRestaurants(false);
    setService(false);
  };
  const changeValRestaurant = () => {
    setOnlinestore(false);
    setBlogs(false);
    setLocalbusiness(false);
    setPersonalcv(false);
    setPortfolios(false);
    setRestaurants(true);
    setService(false);
  };
  const changeValServices = () => {
    setOnlinestore(false);
    setBlogs(false);
    setLocalbusiness(false);
    setPersonalcv(false);
    setPortfolios(false);
    setRestaurants(false);
    setService(true);
  };

  return (
    <div className="website" id="website">
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

          <div className={change ? "websiteTemplates animate" : "websiteTemplates"}>
            <span>Website templates</span>
            <span>for every purpose</span>
            <p>
              Start with a flexible template, then customize to fit your style
              and professional needs with our website builder.
            </p>
          </div>
          <div className="websitesLink">
            <div className={displayText ? "links animate" : "links"}>
              <span onClick={changeValOnlineStore}>Online Store</span>
              <span onClick={changeValLocalBusiness}>Local Business</span>
              <span onClick={changeValPortfolio}>Portfolio</span>
              <span onClick={changeValBlog}>Blog</span>
              <span onClick={changeValRestaurant}>Restaurant</span>
              <span onClick={changeValServices}>Services</span>
              <span onClick={changeValPersonalCv}>Personal & Cv</span>
            </div>
            <div className="linksPhoto">
              <img className={onlinestore ? "active" : ""} src={blog} alt="" />
              <img
                className={localbusiness ? "active" : ""}
                src={localBusiness}
                alt=""
              />
              <img
                className={portfolios ? "active" : ""}
                src={onlineStore}
                alt=""
              />
              <img className={blogs ? "active" : ""} src={personalCv} alt="" />
              <img
                className={restaurants ? "active" : ""}
                src={portfolio}
                alt=""
              />
              <img
                className={service ? "active" : ""}
                src={restaurant}
                alt=""
              />
              <img
                className={personalcv ? "active" : ""}
                src={services}
                alt=""
              />
            </div>
          </div>
          <div className="madeSquareSpace">
            <div className="squareSpaceFlex">
              <div className="squareImage">
                <img src={squarespaceImage} alt="" />
              </div>
              <div className="squareSpaceText">
                <h2>Made with Squarespace</h2>
                <p>
                  Get inspired by a collection of websites made by Squarespace
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Website;

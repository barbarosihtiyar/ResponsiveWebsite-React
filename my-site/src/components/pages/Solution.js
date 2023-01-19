import React, { useState } from "react";
import "./sass/solution.css";
import solutionImage from "../../images/solutionImage.jpg";
import exploreFirst from "../../images/exploreFirst.jpg";
import exploreSecond from "../../images/exploreSecond.jpg";
import exploreThird from "../../images/exploreThird.jpg";
import learnImage from "../../images/learnImage.jpg";
import howToSell from "../../images/howToSell.jpg";
import howToStart from "../../images/howToStart.jpg";
import { BiPlus } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";



function Solution() {
    const [firstClick,setFirstClick] = useState(true);
    const [secondClick,setSecondClick] = useState(true);
    const [thirdClick,setThirdClick] = useState(true);
    const [fourthClick,setFourthClick] = useState(true);
    const [fivethClick,setFivethClick] = useState(true);
    const [sixthClick,setSixthClick] = useState(true);
    const [seventhClick,setSeventhClick] = useState(true);
    
    const changeIconFirst = () => {
        firstClick ? setFirstClick(false) : setFirstClick(true);
        setSecondClick(true);
        setThirdClick(true);
        setFourthClick(true);
        setFivethClick(true);
        setSixthClick(true);
        setSeventhClick(true)

    }
    const changeIconSecond = () => {
        secondClick ? setSecondClick(false) : setSecondClick(true);
        setFirstClick(true);
        setThirdClick(true);
        setFourthClick(true);
        setFivethClick(true);
        setSixthClick(true);
        setSeventhClick(true)
    }
    const changeIconThird = () => {
        thirdClick ? setThirdClick(false) : setThirdClick(true);
        setFirstClick(true);
        setSecondClick(true);
        setFourthClick(true);
        setFivethClick(true);
        setSixthClick(true);
        setSeventhClick(true)
    }
    const changeIconFourth = () => {
        fourthClick ? setFourthClick(false) : setFourthClick(true);
        setFirstClick(true);
        setSecondClick(true);
        setThirdClick(true);
        setFivethClick(true);
        setSixthClick(true);
        setSeventhClick(true)
    }
    const changeIconFiveth = () => {
        fivethClick ? setFivethClick(false) : setFivethClick(true);
        setFirstClick(true);
        setSecondClick(true);
        setThirdClick(true);
        setFourthClick(true);
        setSixthClick(true);
        setSeventhClick(true)
    }
    const changeIconSixth = () => {
        sixthClick ? setSixthClick(false) : setSixthClick(true);
        setFirstClick(true);
        setSecondClick(true);
        setThirdClick(true);
        setFourthClick(true);
        setFivethClick(true);
        setSeventhClick(true)
    }
    const changeIconSeventh = () => {
        seventhClick ? setSeventhClick(false) : setSeventhClick(true);
        setFirstClick(true);
        setSecondClick(true);
        setThirdClick(true);
        setFourthClick(true);
        setFivethClick(true);
        setSixthClick(true);
    }

    

  return (
    <div className="solution">
      <div className="solutionContainer">
        <div className="solutionWrapper">
          <div className="solutionTitle">
            <h1>MODERN</h1>
            <h1 className="text-left">SOLUTIONS</h1>
            <div className="solutionImageText">
              <div className="solutionImage">
                <img src={solutionImage} alt="" />
              </div>
              <div className="solutionText">
                <h3>Making it with Squarespace</h3>
                <p>
                  Stories and solutions to help you turn any idea into an online
                  reality.
                </p>
              </div>
            </div>
            <div className="solutionExplore">
              <h3>Explore how other entrepreneurs use Squarespace</h3>
              <div className="explorePhoto">
                <img src={exploreFirst} alt="" />
                <img src={exploreSecond} alt="" />
                <img src={exploreThird} alt="" />
              </div>
              <div className="absoluteTextExplore">
                <span className="firstPhotoText">Photographer </span>
                <span className="firstPhotoText2">Arienne Raquel</span>
                <span className="secondPhotoText">Creative Professional</span>
                <span className="secondPhotoText2">Altrock</span>
                <span className="thirdPhotoText">Photographer</span>
                <span className="thirdPhotoText2">Winona Ryder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="learnHowTo">
        <div className="learnHowToContainer">
          <div className="learnHowToWrapper">
            <div className="learnTitle">
              <h1>Learn how to get started</h1>
            </div>
            <div className="learnImageText">
              <div className="learnImage">
                <h3>How to create a website</h3>
                <img src={learnImage} alt="" />
              </div>
              <div className="learnStages">
                <div className="firstLearnStages commonStages">
                  <span>01.</span>
                  <span>Choose a template and start a free trial.</span>
                </div>
                <div className="secondLearnStages commonStages">
                  <span>02.</span>
                  <span>
                    Get a free custom domain name for the first year of an
                    annual website plan.
                  </span>
                </div>
                <div className="thirdLearnStages commonStages">
                  <span>03.</span>
                  <span>
                    Use our website builder to add your own text and photos.
                  </span>
                </div>
                <div className="fourthLearnStages commonStages">
                  <span>04.</span>
                  <span>
                    Customize the site to fit your brand with hundreds of fonts,
                    colors, and stock photos.
                  </span>
                </div>
                <div className="fivethLearnStages commonStages">
                  <span>05.</span>
                  <span>
                    Don’t have a logo? Make one for free with our online tool.
                  </span>
                </div>
                <div className="sixthLearnStages commonStages">
                  <span>06.</span>
                  <span>
                    Publish your site and promote it using social media and
                    email marketing tools.
                  </span>
                </div>
              </div>
            </div>
            <div className="learnImageText">
              <div className="learnImage">
                <h3>How to sell online</h3>
                <img src={howToSell} alt="" />
              </div>
              <div className="learnStages">
                <div className="firstLearnStages commonStages">
                  <span>01.</span>
                  <span>
                    Find an ecommerce template and start your free trial.
                  </span>
                </div>
                <div className="secondLearnStages commonStages">
                  <span>02.</span>
                  <span>Register or transfer your business’s domain name.</span>
                </div>
                <div className="thirdLearnStages commonStages">
                  <span>03.</span>
                  <span>
                    Set up your online store by adding products and connecting a
                    payment processor.
                  </span>
                </div>
                <div className="fourthLearnStages commonStages">
                  <span>04.</span>
                  <span>
                    If you sell services, set up appointments through
                    Squarespace scheduling.
                  </span>
                </div>
                <div className="fivethLearnStages commonStages">
                  <span>05.</span>
                  <span>
                    Customize online store categories and content with the
                    website builder.
                  </span>
                </div>
                <div className="sixthLearnStages commonStages">
                  <span>06.</span>
                  <span>
                    Grow your online store with email marketing and SEO tools.
                  </span>
                </div>
              </div>
            </div>
            <div className="learnImageText">
              <div className="learnImage">
                <h3>How to start a blog</h3>
                <img src={howToStart} alt="" />
              </div>
              <div className="learnStages">
                <div className="firstLearnStages commonStages">
                  <span>01.</span>
                  <span>Choose a website template to showcase your blog.</span>
                </div>
                <div className="secondLearnStages commonStages">
                  <span>02.</span>
                  <span>
                    Add a blog page and customize the layout and design with our
                    website builder.
                  </span>
                </div>
                <div className="thirdLearnStages commonStages">
                  <span>03.</span>
                  <span>
                    Create, publish, and manage content with blog and image
                    editing tools.
                  </span>
                </div>
                <div className="fourthLearnStages commonStages">
                  <span>04.</span>
                  <span>
                    Market your blog using Squarespace’s suite of integrated
                    marketing tools.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="covered">
        <div className="coveredContainer">
          <div className="coveredWrapper">
            <div className="coveredTitleText">
              <h3>We've got you covered,24/7</h3>
            </div>
            <div className="coveredCollapse">
            <div className="coveredText">
            <p>
                When you create a website with Squarespace, you get free
                unlimited hosting, top-of-the-line security, and dependable
                resources to help you succeed. You can count on personalized
                support around the clock by email, live chat, or by joining a
                live webinar.
              </p>
            </div>
              <div className="allCollapse">
                <div className="collapseFirst collapse" onClick={changeIconFirst}>
                  <div className="titleIcon firstTitleIcon">
                    <h4 className="firstTitle">Why should I have a website?</h4>
                    {firstClick ? <BiPlus className="plusIcon" /> : <AiOutlineMinus className="plusIcon" />}
                  </div>
                  <p  className={firstClick ? "none" : "block"}>
                    A website is the first step toward growing an online
                    presence for your business or passion project, whether
                    you’re looking to sell online or create a portfolio. With
                    Squarespace, you can get started with a best-in-class
                    website template for nearly any use case and customize it to
                    fit your brand. Our all-in-one platform also makes it easy
                    to add a blog, an online store, or appointment scheduling to
                    your website and leverage marketing tools to reach your
                    audience.
                  </p>
                </div>
                <div className="collapseSecond collapse" onClick={changeIconSecond}>
                  <div className="titleIcon">
                    <h4>What does a Squarespace subscription include?</h4>
                    {secondClick ? <BiPlus className="plusIcon" /> : <AiOutlineMinus className="plusIcon" />}
                  </div>
                  <p className={secondClick ? "none" : "block"}> 
                    Squarespace is an all-in-one content management system, or
                    CMS. With a single subscription, you can make a website,
                    host your content, register your own custom domain name,
                    sell products, track your site’s analytics, and much more.
                    Start with any template to create pages and organize your
                    site, then customize it to match your own style with our
                    industry-leading website builder.Explore the Help Center for guides on Squarespace's many
                    features.
                  </p>
                </div>
                <div className="collapseThird collapse" onClick={changeIconThird}>
                  <div className="titleIcon">
                    <h4>Is Squarespace right for me?</h4>
                    {thirdClick ? <BiPlus className="plusIcon" /> : <AiOutlineMinus className="plusIcon" />}
                  </div>
                  <p className={thirdClick ? "none" : "block"}>
                    Everyone has unique needs for their website, so there’s one
                    way to know if Squarespace is right for you: try it!
                  </p>
                </div>
                <div className="collapsFourth collapse" onClick={changeIconFourth}>
                  <div className="titleIcon">
                    <h4>How do I start building my website?</h4>
                    {fourthClick ? <BiPlus className="plusIcon" /> : <AiOutlineMinus className="plusIcon" />}
                  </div>
                  <p className={fourthClick ? "none" : "block"}>
                    Squarespace makes starting a beautifully-designed website
                    easy. Choose from our library of website templates to find a
                    starting point, then secure a custom domain that fits your
                    brand or idea. As you build out your website pages,
                    customize your template with colors, fonts, images, and
                    content. When you’re ready, publish your site and start
                    spreading the word.
                  </p>
                </div>
                <div className="collapseFiveth collapse" onClick={changeIconFiveth}>
                  <div className="titleIcon">
                    <h4>Can someone build my website for me?</h4>
                    {fivethClick ? <BiPlus className="plusIcon" /> : <AiOutlineMinus className="plusIcon" />}
                  </div>
                  <p className={fivethClick ? "none" : "block"}>
                    Yes. While Squarespace is a great website builder for a DIY
                    approach, many web designers specialize in building
                    Squarespace sites for clients.
                  </p>
                </div>
                <div className="collapseSixth collapse" onClick={changeIconSixth}>
                  <div className="titleIcon">
                    <h4>How do I get a custom domain for my website?</h4>
                    {sixthClick ? <BiPlus className="plusIcon" /> : <AiOutlineMinus className="plusIcon" />}
                  </div>
                  <p className={sixthClick ? "none" : "block"}>
                    When choosing an annual website plan, you can register your
                    first domain through Squarespace for free for its first
                    year. You can also transfer your domain to Squarespace if
                    you’ve already registered yours somewhere else.
                  </p>
                </div>
                <div className="collapseSeventh collapse" onClick={changeIconSeventh}>
                  <div className="titleIcon">
                    <h4>How do I start selling online?</h4>
                    {seventhClick ? <BiPlus className="plusIcon" /> : <AiOutlineMinus className="plusIcon" />}
                  </div>
                  <p className={seventhClick ? "none" : "block"}>
                    Set up and customize your online store with rich product
                    merchandising tools, designed to showcase your products at
                    their absolute best. Once you connect a payment processor to
                    enable online transactions, you’re ready to take orders with
                    shipping tools and built-in inventory management for your
                    products. As you grow, Squarespace also offers email
                    marketing tools and promotional discounts to keep your
                    customers coming back for more.
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

export default Solution;

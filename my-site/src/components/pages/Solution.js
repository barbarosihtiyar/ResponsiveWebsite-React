import React from 'react'
import "./sass/solution.css"
import solutionImage from "../../images/solutionImage.jpg"
import exploreFirst from "../../images/exploreFirst.jpg"
import exploreSecond from "../../images/exploreSecond.jpg"
import exploreThird from "../../images/exploreThird.jpg"


function Solution() {
  return (
    <div className="solution">
        <div className="solutionContainer">
            <div className="solutionWrapper">
                <div className="solutionTitle">
                    <h1>MODERN</h1>
                    <h1 className='text-left'>SOLUTIONS</h1>
                    <div className="solutionImageText">
                        <div className="solutionImage">
                            <img src={solutionImage} alt="" />
                        </div>
                        <div className="solutionText">
                            <h3>Making it with Squarespace</h3>
                            <p>Stories and solutions to help you turn any idea into an online reality.</p>
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
                            <span className='firstPhotoText'></span>
                            <span className='secondPhotoText'></span>
                            <span className='thirdPhotoText'></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Solution
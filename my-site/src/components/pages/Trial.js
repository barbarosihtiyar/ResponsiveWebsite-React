import React from 'react'
import trial from "../../images/trial.jpg"
import "./sass/trial.css"
function Trial() {
  return (
    <div className='trial'>
        <div className="trialContainer">
            <div className="trialWrapper">
                <div className="trialTextImage">
                    <div className="image">
                        <img src={trial} alt="" />
                    </div>
                    <div className="text">
                        <h2>
                            START A FREE TRIAL TODAY
                        </h2>
                        <span>No credit card required</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trial
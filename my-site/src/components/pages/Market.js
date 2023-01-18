import React from 'react'
import "./sass/market.css"
import marketFirst from "../../images/marketFirst.jpg"
import marketSecond from "../../images/marketSecond.jpg"

function Market() {
  return (
    <div className='market'>
        <div className="marketContainer">
            <div className="marketWrapper">
                <div className="marketTitle">
                    <h1>MARKET</h1>
                    <h1 className='text-rigth'>
                    YOUR BUSINESS
                    </h1>
                </div>
                <div className="marketFirst marketInfo">
                    <div className="marketImage">
                        <img src={marketFirst} alt="" />
                    </div>
                    <div className="marketText">
                        <h1>Reach and retain customers with email campaigns</h1>
                        <p>Set up email campaigns that pull in your site’s styles, products, and blog posts so your communications feel effortlessly on-brand.</p>
                    </div>
                </div>
                <div className="marketSecond marketInfo">
                    <div className="marketImage">
                        <img src={marketSecond} alt="" />
                    </div>
                    <div className="marketText">
                        <h1>Elevate your social presence</h1>
                        <p>Create stunning, professional-looking content for all your social channels and manage your link in bio with the Unfold app. Choose from hundreds of templates and unique filters, fonts, and animations.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Market
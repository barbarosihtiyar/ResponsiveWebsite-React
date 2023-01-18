import React from 'react'
import "./sass/product.css"
import SolarKind from "../../images/solarkind.jpg"
import productSecond from "../../images/productSecond.jpg"
import productThird from "../../images/productThird.jpg"
import productFourth from "../../images/productFourth.jpg"


function Product() {
  return (
    <div className='product'>
        <div className="productContainer">
            <div className="productContainer">
            <div className="productWrapper">
                <div className="productFirst">
                    <h1 className='productTitle'>
                    ECOMMERCE MADE EASY
                    </h1>
                    <p>Whether you’re just getting started or are an established brand, our powerful ecommerce website builder helps your business grow.</p>
                    <button>START SELLING</button>
                    <div className="image">
                        <img src={SolarKind} alt="" />
                    </div>
                </div>
                <div className="productSecond">
                <div className="productSecondText">
                <h4>Sell anything online</h4>
                    <p>Get everything you need to power your online store, from merchandising to checkout, and showcase your products or services at their absolute best.</p>
                </div>
                <div className="productSecondImage">
                    <img src={productSecond} alt="" />
                </div>
                </div>
                <div className="productThird">
                <div className="productThirdText">
                <h4>Schedule appointments and sell classes</h4>
                    <p>Allow clients to quickly view your availability and book appointments through your website.</p>
                </div>
                <div className="productThirdImage">
                    <img src={productThird} alt="" />
                </div>
                </div>
                <div className="productFourth">
                <div className="productFourthText">
                <h4>Gate your community with membership sites</h4>
                    <p>From virtual classes and workshops to newsletters, podcasts, and video series, Member Areas help you build, harness, and monetize the power of your online community.</p>
                </div>
                <div className="productFourthImage">
                    <img src={productFourth} alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Product
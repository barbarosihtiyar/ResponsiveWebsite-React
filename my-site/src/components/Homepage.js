import React from 'react'
import Adverst from './pages/Adverst'
import Stages from './pages/Stages'
import Website from './pages/Website'
import Product from './pages/Product'
import Market from './pages/Market'
import Solution from './pages/Solution'

function Homepage() {
  return (
    <div className='main'>
        <Adverst />
        <Stages />
        <Website />
        <Product />
        <Market />
        <Solution />
    </div>
  )
}

export default Homepage
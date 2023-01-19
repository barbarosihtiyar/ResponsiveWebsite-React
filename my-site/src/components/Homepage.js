import React from 'react'
import Adverst from './pages/Adverst'
import Stages from './pages/Stages'
import Website from './pages/Website'
import Product from './pages/Product'
import Market from './pages/Market'
import Solution from './pages/Solution'
import Trial from './pages/Trial'

function Homepage() {
  return (
    <div className='main'>
        <Adverst />
        <Stages />
        <Website />
        <Product />
        <Market />
        <Solution />
        <Trial />
    </div>
  )
}

export default Homepage
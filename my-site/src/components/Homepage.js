import React from 'react'
import Adverst from './pages/Adverst'
import Stages from './pages/Stages'
import Website from './pages/Website'

function Homepage() {
  return (
    <div className='main'>
        <Adverst />
        <Stages />
        <Website />
    </div>
  )
}

export default Homepage
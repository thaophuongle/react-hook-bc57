import React, { useState } from 'react'
import { Rate } from 'antd'

const AntDemo = () => {

    const [state, setState] = useState(1)
    console.log(state)
  return (
    <div className='container'>
        <h3>Ant Demo</h3>
        Point: {state} 
        <br />
        <Rate allowHalf value={state} onChange={(value) => {
            setState(value)
        }}/>
    </div>
  )
}

export default AntDemo
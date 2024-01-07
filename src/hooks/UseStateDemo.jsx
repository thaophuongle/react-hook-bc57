import React, { useState } from 'react'

const UseStateDemo = () => {
    const [number, setNumber] = useState(1)
    //     arr[0]   arr[1]
    //     state,   setState(newState)

    const [state, setState] = useState({like: 1,  view: 1})

  return (
    <div className='container'>
        <h3>Number: {number}</h3>
        <button className='btn btn-primary' onClick={()=> {
            setNumber(number + 1)
        }}>+</button>
        <br />
        <h3>Like: {state.like} - View: {state.view}</h3>
        <button className='btn btn-primary' onClick={()=> {
            setState({
                like: state.like + 1,
                view: state.view + 1
            })
        }}>Like</button>
    </div>
  )
}

export default UseStateDemo
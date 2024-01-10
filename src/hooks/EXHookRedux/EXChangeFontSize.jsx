import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFontSizeAction } from '../../redux/Reducers/ChangeFontSizeReducer'

const EXChangeFontSize = () => {
    const {fontSize} = useSelector((state) => state.changeFontSizeReducer)

    const dispatch = useDispatch()


  return (
    <div className='container'>
        <h3>Change font size</h3>
        <p style={{fontSize: fontSize}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic maxime quia vero qui repudiandae totam rerum laboriosam veritatis corporis iste.</p>
        <button className="btn btn-primary" onClick={() => {
            const action = changeFontSizeAction(1)
            dispatch(action)
        }}>+</button>
        <button className="btn btn-primary mx-2" onClick={() => {
            const action = changeFontSizeAction(-1)
            dispatch(action)
        }}>-</button>
    </div>
  )
}

export default EXChangeFontSize
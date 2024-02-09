import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomTab = () => {
  return (
    <div className='bg-dark text-white d-flex justify-content-around'>
        <div>
            <NavLink className={'/'}>
                <i className='fa fa-2x-home'></i>
            </NavLink>
        </div>

         
    </div>
  )
}

export default BottomTab
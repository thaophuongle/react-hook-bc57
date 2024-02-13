import React from 'react'
import { NavLink } from 'react-router-dom'

const BottomTab = () => {
  return (
    <div className='bg-dark text-white d-flex justify-content-around p-3' style={{position: 'fixed', bottom: 0, left: 0, width: '100%'}}>
        <div className='text-center'>
            <NavLink className={'text-white'} to={'/'}>
                <i className='fa fa-home'></i>
            </NavLink>
            <h3>Home</h3>
        </div>
        <div className='text-center'>
            <NavLink className={'text-white'} to={'/cart'}>
                <i className='fa fa-cart-plus'></i>
            </NavLink>
            <h3>Cart</h3>
        </div>
        <div className='text-center'>
            <NavLink className={'text-white'} to={'/login'}>
                <i className='fa fa-users'></i>
            </NavLink>
            <h3>Login</h3>
        </div>
         
    </div>
  )
}

export default BottomTab
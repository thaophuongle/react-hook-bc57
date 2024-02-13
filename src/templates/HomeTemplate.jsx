import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import DeviceTemplate from './DeviceTemplate'
import BottomTab from '../components/BottomTab'

const HomeTemplate = () => {
  return (
    <>
        <Header />
        <div className='content' style={{minHeight:'80vh'}}>
            <Outlet />
        </div>
        <DeviceTemplate Component={<footer className='p-5 bg-dark text-white text-center'>
            <h3>Footer</h3>
        </footer>} MobileComponent={<BottomTab/>}/>
        <footer className='p-5 bg-dark text-white text-center'>
            <h3>Footer</h3>
        </footer>
    </>
  )
}

export default HomeTemplate
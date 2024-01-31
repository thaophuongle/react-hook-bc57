import React, { useState } from 'react'
import ModalContainerComponet from './ModalContainerComponet'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const DemoContainerComponent = () => {
    const [component, setComponent] = useState(<Login/>)
  return (
    <div>
        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
          setComponent(<Login/>)
        }}>
          Login
        </button>

        <button type="button" className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
          setComponent(<Register/>)
        }}>
          Register
        </button>
        <ModalContainerComponet title='abc' Component={component}/>
    </div>
  )
}

export default DemoContainerComponent
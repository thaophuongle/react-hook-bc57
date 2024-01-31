import React, { Component } from 'react'
import HOCModal from './HOCModal'
import Login from '../pages/Login'
import ClassHOCModal from './ClassHOCModal'
import Register from '../pages/Register'


export default class DemoHOC extends Component {
  state = {
    component: Login
  }


  render() {
    const wrapLoginHOCModal = HOCModal("Login", Login)
    const stateComponent = ClassHOCModal('title',this.state.component)
    return (
      <div className='container'>
        <button type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
          this.setState({
            component: Login
          })
        }}>
          Login
        </button>

        <button type="button" className="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#modalId" onClick={() => {
          this.setState({
            component: Register
          })
        }}>
          Register
        </button>
      </div>
      
    )
  }
}

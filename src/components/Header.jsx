import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    //bs5=navbar-background
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">React Hook</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <a className="nav-link active" href="#" aria-current="page">Home <span className="visually-hidden">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId">
          <NavLink className="dropdown-item" to="use-state-demo">UseState</NavLink>
          <NavLink className="dropdown-item" to="use-state-change-profile">UseState Change Profile</NavLink>
          <NavLink className="dropdown-item" to="use-effect-didmount">UseEffect DidMount</NavLink>
          <NavLink className="dropdown-item" to="use-effect-didupdate">UseEffect DidUpdate</NavLink>
          <NavLink className="dropdown-item" to="use-effect-unmount">UseEffect Unmount</NavLink>
          <NavLink className="dropdown-item" to="use-callback">UseCallback</NavLink>
          <NavLink className="dropdown-item" to="use-memo">UseMemo</NavLink>
          <NavLink className="dropdown-item" to="use-ref">UseRef</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId1">
          <NavLink className="dropdown-item" to="use-redux-demo-chat">Redux Hook Chat Demo</NavLink>
          <NavLink className="dropdown-item" to="use-redux-demo-change-font-size">Redux Hook Change Font Size</NavLink>
          <NavLink className="dropdown-item" to="use-redux-crud">CRUD Form (Redux)</NavLink>
        </div>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0">
      <input className="form-control me-sm-2" type="text" placeholder="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>

    
  )
}

export default Header
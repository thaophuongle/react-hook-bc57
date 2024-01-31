import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { history } from '../index'

const Header = () => {

  // const [searchParams, setSearchParam] = useSearchParams()
  const {userLogin} = useSelector(state => state.userReducer)
  console.log(userLogin)

  const frm = useFormik({
    initialValues: {
      keyword: ''
    },
    onSubmit: ({keyword}) => {
      history.push(`/search?keyword=${keyword}`)
      //đưa keyword lên url
      // setSearchParam({
      //   //keyword: keyword
      //   keyword
      // })
    }
  })

  return (
    //bs5=navbar-background
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="/">React Hook</NavLink>
  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
  <div className="collapse navbar-collapse" id="collapsibleNavId">
    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <NavLink className="nav-link active" to="trang-chu" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        {(() => { //IIFE function
          if (userLogin.email != '') {
            return <NavLink className="nav-link" to="/profile">Hello {userLogin.email}</NavLink>
          }
           return <NavLink className="nav-link" to="login">Login</NavLink>
        })()}
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="search">Search</NavLink>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId2" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ant Design</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId2">
        <NavLink className="dropdown-item" to="ant-demo">Ant Design</NavLink>
        <NavLink className="dropdown-item" to="table-antd">Table Antd</NavLink>
        <NavLink className="dropdown-item" to="product-management">Product Management</NavLink>
        </div>
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
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="dropdownId1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lib Hook</a>
        <div className="dropdown-menu" aria-labelledby="dropdownId1">
          <NavLink className="dropdown-item" to="use-formik">UseFormik</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="hoc">HOC</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="container-component">Container Component</NavLink>
      </li>
    </ul>
    <form className="d-flex my-2 my-lg-0" onSubmit={frm.handleSubmit}>
      <input className="form-control me-sm-2" type="text" placeholder="Search" id='keyword' name='keyword' onChange={frm.handleChange}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>

    
  )
}

export default Header
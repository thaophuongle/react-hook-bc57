import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import useGetApi from '../customHooks/useGetApi'
import ChildComponent from '../hooks/EXHookUseRef/ChildComponent'

const TrangChu = () => {

    const data = useGetApi('https://shop.cyberlearn.vn/api/Product')

    const arrProduct = data.content
    console.log('arrProduct', arrProduct)


  return (
    <div className='container'>
      <h3>Home</h3>
      <div className="row">
      {
        arrProduct?.map((prod) => {
          return <div className="col-4 mt-2" key={prod.id}>
            <NavLink style={{textDecoration: 'none'}} to={`/detail/${prod.id}`} className="card">
              <img src={prod.image} alt="..." />
              <div className="card-body">
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <NavLink className='btn btn-dark' to={`/detail/${prod.id}`}>View Detail</NavLink>
              </div>
            </NavLink>
          </div>
        })
      }
      </div>
    </div>
  )
}

export default TrangChu
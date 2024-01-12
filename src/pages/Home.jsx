import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Home = () => {


  const [arrProduct, setArrProduct] = useState([])
  console.log(arrProduct)

  const getAllProductsAPI = async () => {
    const res = await axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: "GET"
    })

    setArrProduct(res.data.content)
  }

  useEffect(() => {
    //gọi api trong useEffect didmount
    getAllProductsAPI()
  }, [])


  return (
    <div className='container'>
      <h3>Home</h3>
      <div className="row">
      {
        arrProduct.map((prod) => {
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

export default Home
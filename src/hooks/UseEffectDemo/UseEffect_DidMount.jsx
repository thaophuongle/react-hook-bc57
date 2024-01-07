import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffect_DidMount = () => {
const [arrProduct, setArrProduct] = useState([])

    console.log('render abc')
    useEffect(() => {
        console.log('Lần 1: chạy sau khi giao diện render xong lần 1')
        console.log('Lần 2: sau mỗi lần component render lại (sau khi state thay đổi)')
        getApiProduct()
    }, []) //sử dụng tham số dependency là array rỗng thì chỉ chạy 1 lần sau render (tương tự didmount dùng để gọi api -api get all)

    const getApiProduct = () => {
        let promise = axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: "GET"
        })

        promise.then((res) => {
            console.log(res.data.content)
            //sau khi gọi api thành công thì đem dữ liệu đưa vào state => component render lại và binding với dữ liệu mới
            setArrProduct(res.data.content)
        })
    }

  return (
    <div className='container mt-3'>
        <h3>Product List</h3>
        <div className="row">
            {arrProduct.map((product) => {
                return <div className="col-md-3">
                <div className="card my-2">
                    <img src={product.image} alt="" />
                    <div className="card-body">
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button className="btn btn-dark">
                            <i className='fa fa-cart-plus'></i> Add to cart
                        </button>
                    </div>
                </div>
            </div>
            })}
        </div>
    </div>
  )
}

export default UseEffect_DidMount
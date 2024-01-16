import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Button, Space, Table } from "antd";
import { NavLink } from "react-router-dom";
import axios from 'axios'
import { setArrayProductAction } from "../redux/Reducers/ProductReducer";


//dữ liệu bên ngoài component


const ProductManagement = () => {
 //nội dung trong component
 const [filteredInfo, setFilteredInfo] = useState({});
 const [sortedInfo, setSortedInfo] = useState({});

 //Lấy dữ liệu từ redux về
 const {arrProduct} = useSelector(state => state.productReducer)
 console.log(arrProduct)
 const dispatch = useDispatch()
 console.log(arrProduct)

 const getAllProduct = async () => {
  const res = await axios({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET'
  })

  const action = setArrayProductAction(res.data.content)
  dispatch(action)
 }

useEffect(() => {
  getAllProduct()
}, [])


 const handleChange = (pagination, filters, sorter) => {
   console.log("Various parameters", pagination, filters, sorter);
   setFilteredInfo(filters);
   setSortedInfo(sorter);
 };
 const clearFilters = () => {
   setFilteredInfo({});
 };
 const clearAll = () => {
   setFilteredInfo({});
   setSortedInfo({});
 };
 const setAgeSort = () => {
   setSortedInfo({
     order: "descend",
     columnKey: "age",
   });
 };
 const columns = [
   {
    title: 'ID', //tiêu đề của column
    dataIndex: 'id',
    name: 'id',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.id - b.id,
   },
   {
    title: 'Name', //tiêu đề của column
    dataIndex: 'name',
    name: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.name.length - b.name.length,
    filters: [
      {
        text: 'Nike',
        value: 'Nike',
      },
      {
        text: 'Adidas',
        value: 'Adidas',
      },
      {
        text: 'Converse',
        value: 'Converse',
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.startsWith(value),
   },
   {
    title: 'Image', //tiêu đề của column
    dataIndex: 'image',
    name: 'image',
    render: function(text, record, index) {
      //text: nội dung, value của field đó
      //record: là 1 object
      //index: vị trí thứ tự column
      // console.log("text", text)
      // console.log("record", record)
      // console.log("index", index)
      return <div>
        <img src={text} alt="...." width={80} height={80} />
      </div>
    }
   },
   {
    title: 'Size', //tiêu đề của column
    dataIndex: 'size',
    name: 'size',
    render: function(text, record, index) {
      const sizes = JSON.parse(text) //đổi từ string về array

      return <div>
        {
          sizes?.map((number) => {
            return <span className="mx-2" key={number}>{number}</span>
          })
        }
      </div>
    }
   },
   {
    title: 'Action',
    dataIndex: 'action',
    name: 'action',
    render: (text, record, index) => {
      return <div>
        <NavLink to={`/detail/${record.id}`}>View Detail</NavLink>
      </div>
    }
   }

     
 ];
 return (
   <div className="container mt-5">
    <h3>Product Management</h3>
     <Table columns={columns} dataSource={arrProduct} onChange={handleChange} />
   </div>
 );
}

export default ProductManagement
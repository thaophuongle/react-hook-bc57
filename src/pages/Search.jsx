import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

//gõ text => url (setSearchParams)
//Get từ url => về component gọi api (searchParams.get('key'))

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);
  console.log(arrProduct);

  const key = searchParams.get("keyword"); //từ khóa lấy trên url

  const formSearch = useFormik({
    initialValues: {
      keyword: "",
    },
    onSubmit: ({ keyword }) => {
      console.log(keyword);
      //đưa từ khóa lên url
      setSearchParams({
        keyword: keyword,
      });
    },
  });

  const getProductByKeyword = async () => {
    //call api, render sản phẩm dựa trên keyword
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${key}`,
      method: "GET",
    });

    setArrProduct(res.data.content);
  };

  useEffect(() => {
    getProductByKeyword();
  }, [key]);
  return (
    <div className="container">
      <h3>Search</h3>
      <form className="frm-search mt-2" onSubmit={formSearch.handleSubmit}>
        <div className="input-group mb-3">
          <button className="input-group-button btn btn-success">Search</button>
          <div className="form-floating">
            <input
              className="form-control"
              id="keyword"
              name="keyword"
              placeholder="Username"
              onChange={formSearch.handleChange}
            />
            <label htmlFor="floatingInputGroup1">Enter the keyword</label>
          </div>
        </div>
      </form>

      <h3 className="my-2">Search results</h3>
      <div className="container">
        <div className="row">
          {arrProduct.map((prod) => {
            return (
              <div className="col-md-4 mt-2" key={prod.id}>
                <div className="card" key={prod.id}>
                  <img src={prod.image} alt="" />
                  <div className="card-body">
                    <h3>{prod.name}</h3>
                    <p>${prod.price}</p>
                    <NavLink className="btn btn-dark" to={`/detail/${prod.id}`}>
                      View Detail
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;

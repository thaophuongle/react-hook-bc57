import { useFormik } from "formik";
import React from "react";

//gõ text => url
//Get từ url => về component gọi api

const Search = () => {

    const formSearch = useFormik({
        initialValues: {
            keyword: ''
        },
        onSubmit: ({keyword}) => {
            console.log(keyword)
        }

    })
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
        Cannot find any result
      </div>
    </div>
  );
};

export default Search;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const HomeMobile = () => {
  const [arrProduct, setArrProduct] = useState([]);
  console.log(arrProduct);

  const getAllProductsAPI = async () => {
    const res = await axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });

    setArrProduct(res.data.content);
  };

  useEffect(() => {
    //gọi api trong useEffect didmount
    getAllProductsAPI();
  }, []);

  return (
    <div className="container">
      <div className="mt-2">
        {arrProduct.map((prod, index) => {
          return (
            <div className="d-flex mt-2" key={index}>
              <div className="w-25" style={{ border: "1px solid #999" }}>
                <img
                  src={prod.image}
                  width={"100%"}
                  style={{ objectFit: "cover" }}
                  alt="..."
                />
              </div>
              <div className="w-75 px-2">
                <div
                  className="prod-info d-flex flex-column"
                  style={{ justifyContent: "space-between" }}
                >
                  <div>
                    <h3>{prod.name}</h3>
                    <p>
                      {prod.description.length > 60
                        ? prod.description.substr(0, 100) + "..."
                        : prod.description}
                    </p>
                  </div>
                  <div className="text-end">
                    <NavLink to={`/detail/${prod.id}`} className="btn btn-dark">
                      <i className="fa fa-cart-plus p-2"></i>
                      View detail
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeMobile;

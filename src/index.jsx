import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

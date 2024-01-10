import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeTemplate from "./templates/HomeTemplate";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UseStateDemo from "./hooks/UseStateDemo";
import ChangeProfile from "./hooks/EXUseState/ChangeProfile";
import UseEffect_DidMount from "./hooks/UseEffectDemo/UseEffect_DidMount";
import UseEffect_DidUpdate from "./hooks/UseEffectDemo/UseEffect_DidUpdate";
import UseEffect_Unmount from "./hooks/UseEffectDemo/UseEffect_Unmount";
import ExChatDemo from "./hooks/EXHookRedux/ExChatDemo";
import EXChangeFontSize from "./hooks/EXHookRedux/EXChangeFontSize";
import CRUDProduct from "./hooks/EXHookRedux/CRUDProduct";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />

          <Route path="use-state-demo" element={<UseStateDemo />} />
          <Route path="use-state-change-profile" element={<ChangeProfile />} />
          <Route path="use-effect-didmount" element={<UseEffect_DidMount />} />
          <Route path="use-effect-didupdate" element={<UseEffect_DidUpdate />} />
          <Route path="use-effect-unmount" element={<UseEffect_Unmount />} />
          <Route path="use-redux-demo-chat" element={<ExChatDemo />} />
          <Route path="use-redux-crud" element={<CRUDProduct />} />
          v
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

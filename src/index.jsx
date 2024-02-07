import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
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
import HookUseCallback from "./hooks/EXUseCallback/HookUseCallback";
import HookUseMemo from "./hooks/EXHookUseMemo/HookUseMemo";
import EXHookUseRef from "./hooks/EXHookUseRef/EXHookUseRef";
import EXHookFormik from "./hooks/EXHookFormik/EXHookFormik";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import TrangChu from "./pages/TrangChu";
import AntDemo from "./pages/AntDemo";
import TableAntd from "./pages/TableAntd";
import ProductManagement from "./pages/ProductManagement";


//cấu hình chuyển hướng trang thông qua history
import {createBrowserHistory} from 'history'
import DemoHOC from "./HOC/DemoHOC";
import DemoContainerComponent from "./HOC/ContainerComponent/DemoContainerComponent";
import DrawerComponent from "./HOC/DrawerComponent/DrawerComponent";
import DemoTestDrawer from "./pages/DemoTestDrawer";

//history giúp chuyển hướng trang
export const history = createBrowserHistory()

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <DrawerComponent/>
    <HistoryRouter history={history}>
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
          <Route path="use-memo" element={<HookUseMemo />} />
          <Route path="use-ref" element={<EXHookUseRef />} />
          <Route path="use-formik" element={<EXHookFormik />} />
          <Route path="profile" element={<Profile />} />
          <Route path="forgot-pass" element={<ForgotPassword />} />
          <Route path="login" element={<Login />} />
          <Route path="detail">
            <Route path=":id" element={<Detail/>}></Route>
          </Route>
          <Route path="search" element={<Search />} />
          <Route path="trang-chu" element={<TrangChu />} />
          <Route path="ant-demo" element={<AntDemo />} />
          <Route path="table-antd" element={<TableAntd />} />
          <Route path="product-management" element={<ProductManagement />} />
          <Route path="hoc" element={<DemoHOC />} />
          <Route path="container-component" element={<DemoContainerComponent />} />
          <Route path="test-drawer" element={<DemoTestDrawer />} />

          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

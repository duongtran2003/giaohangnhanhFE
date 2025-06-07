import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import NotFound from "./notFound/NotFound";
import Login from "./login/Login";
import LoadingOverlay from "./share/components/LoadingOverlay";
import Register from "./register/Register";
import VerifyAccount from "./register/VerifyAccount";
import Home from "./guest/views/Home";
import OrderList from "./customer/views/OrderList";
import OrderStat from "./customer/views/OrderStat";
import CustomerLayout from "./layout/CustomerLayout";
import AdminLayout from "./layout/AdminLayout";
import AdminOrderList from "./admin/views/AdminOrderList";
import CreateOrder from "./customer/views/CreateOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/auth/verify-email/:token" element={<VerifyAccount />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route element={<CustomerLayout />}>
            <Route path="customer/my-orders" element={<OrderList />} />
            <Route path="customer/orders-stat" element={<OrderStat />} />
            <Route path="customer/create-order" element={<CreateOrder />} />
          </Route>
          <Route element={<AdminLayout />}>
            <Route path="admin/orders" element={<AdminOrderList />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        limit={5}
      />
      <LoadingOverlay />
    </>
  );
}

export default App;

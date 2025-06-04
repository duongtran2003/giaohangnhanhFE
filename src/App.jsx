import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import NotFound from "./notFound/NotFound";
import Login from "./login/Login";
import LoadingOverlay from "./share/components/LoadingOverlay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}></Route>
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

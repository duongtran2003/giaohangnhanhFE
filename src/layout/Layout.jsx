import { Outlet } from "react-router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <div className="h-[1500px] bg-gray-100">a</div>
      <Footer />
    </div>
  );
}

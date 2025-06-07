import { Outlet } from "react-router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function CustomerLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="w-full pb-80">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

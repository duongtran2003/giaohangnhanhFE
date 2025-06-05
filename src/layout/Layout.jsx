import { Outlet } from "react-router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuthStore } from "src/share/stores/authStore";

export default function Layout() {
  const user = useAuthStore((state) => state.user);

  return (
    <div>
      <Header />
      {user && <Navbar />}
      <div className="w-full pb-80 bg-gray-100">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

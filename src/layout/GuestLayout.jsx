import { Outlet } from "react-router";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuthStore } from "src/share/stores/authStore";
import { useEffect } from "react";
import { authApi } from "src/share/api";
import { useLoadingStore } from "src/share/stores/loadingStore";

export default function GuestLayout() {

  useEffect(() => {
    setLoading(true);
    authApi
      .getMe()
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        // void
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

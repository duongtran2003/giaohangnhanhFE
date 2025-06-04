import { Link, useLocation } from "react-router";
import { toast } from "react-toastify";
import { useAuthStore } from "src/share/stores/authStore";
import DeliveryIcon from "src/assets/headerdelivericon.svg";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();
  console.log(location);

  return (
    <div className="h-16 bg-red-500 px-8 shadow-md flex flex-row items-center justify-between">
      <div
        className="font-medium text-lg text-white flex flex-row gap-4 items-center"
        onClick={() => toast.success("test toaster")}
      >
        <img className="max-h-16" src={DeliveryIcon} alt="Your SVG" />
        <div>Giao hàng nhanh</div>
      </div>
      {user ? (
        <div>drop down goes here</div>
      ) : (
        <Link
          className="px-2 py-1 bg-gray-700 rounded-md text-white"
          to={`/login?redirect=${location.pathname}`}
        >
          Đăng nhập/Đăng kí
        </Link>
      )}
    </div>
  );
}

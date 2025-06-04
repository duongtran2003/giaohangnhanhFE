import { Link, useLocation } from "react-router";
import { toast } from "react-toastify";
import { useAuthStore } from "src/share/stores/authStore";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();
  console.log(location)

  return (
    <div className="h-16 bg-red-500 px-8 shadow-md flex flex-row items-center justify-between">
      <div className="font-bold text-lg text-white" onClick={() => toast.success("test toaster")}>some icon here</div>
      { user ? 
        <div>drop down goes here</div>
        :
        <Link className="px-2 py-1 bg-gray-700 rounded-md text-white" to={`/login?redirect=${location.pathname}`}>
          Đăng nhập/Đăng kí
        </Link>
      }
    </div>
  );
}

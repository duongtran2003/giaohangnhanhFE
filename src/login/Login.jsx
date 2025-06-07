import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Footer from "src/layout/components/Footer";
import { authApi } from "src/share/api";
import { useLoadingStore } from "src/share/stores/loadingStore";
import RiderImage from "src/assets/rider.jpg";

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const setLoading = useLoadingStore((state) => state.setLoading);

  const onSubmit = async (data) => {
    console.log("post this:", data);
    setLoading(true);
    try {
      const response = await authApi.login(data);
      console.log(response);
    } catch (err) {
      if (err?.response?.status == 401) {
        setError("username", {
          type: "custom",
          message: "Sai thông tin đăng nhập",
        });
      } else {
        toast.error(err?.response.data.message || "Có lỗi xảy ra");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 w-full pt-24 flex-col flex gap-80">
      <div className="bg-white w-[360px] pb-6 min-w-[360px] max-w-[360px] h-fit px-8 shadow-lg rounded-sm mx-auto">
        <div className="text-center w-full py-4 text-red-600">Đăng nhập</div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-0.5">
            <label className="text-sm">Tên đăng nhập</label>
            <input
              type="text"
              {...register("username", {
                required: "Vui lòng nhập tên đăng nhập",
              })}
              className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
            />
            {errors.username && (
              <span className="text-xs text-red-500 mt-0.5">
                {errors.username.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-0.5 mt-1">
            <label className="text-sm">Mật khẩu</label>
            <input
              type="password"
              {...register("password", { required: "Vui lòng nhập mật khẩu" })}
              className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
            />
            {errors.password && (
              <span className="text-xs text-red-500 mt-0.5">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-red-700 text-white w-full py-2 mt-4 rounded-sm hover:brightness-95 duration-100 cursor-pointer"
          >
            Đăng nhập
          </button>
        </form>
        <div className="text-right text-sm mt-2">
          <span>Chưa có tài khoản? </span>
          <Link to="/register" className="text-red-700 italic underline">
            Đăng kí ngay
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

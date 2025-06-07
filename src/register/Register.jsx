import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Footer from "src/layout/components/Footer";
import { authApi } from "src/share/api";
import accountType from "src/share/constants/accountType";
import { useLoadingStore } from "src/share/stores/loadingStore";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const setLoading = useLoadingStore((state) => state.setLoading);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const response = await authApi.register(data);
      toast.success(response.data?.message);
      navigate("/login");
    } catch (err) {
      toast.error(err?.response.data.message || "Có lỗi xảy ra");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 w-full pt-10 flex-col flex gap-80">
      <div className="bg-white pb-6 max-w-[720px] min-w-[720px] w-[720px] h-fit px-8 shadow-lg rounded-sm mx-auto">
        <div className="text-center w-full py-4 text-red-600">
          Tạo tài khoản
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row justify-between">
            <div className="w-[320px] flex flex-col gap-2">
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
              <div className="flex flex-col gap-0.5">
                <label className="text-sm">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Vui lòng nhập email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Email không hợp lệ",
                    },
                  })}
                  className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-0.5">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="text-sm">Mật khẩu</label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                  })}
                  className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
                />
                {errors.password && (
                  <span className="text-xs text-red-500 mt-0.5">
                    {errors.password.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-0.5">
                <label className="text-sm">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: "Vui lòng xác nhận mật khẩu",
                    validate: (value, { password }) =>
                      value === password || "Mật khẩu không khớp",
                  })}
                  className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
                />
                {errors.confirmPassword && (
                  <span className="text-xs text-red-500 mt-0.5">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col w-[320px] gap-2">
              <div className="flex flex-col gap-0.5">
                <label className="text-sm">Họ và tên</label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Vui lòng nhập tên của bạn",
                  })}
                  className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
                />
                {errors.fullName && (
                  <span className="text-xs text-red-500 mt-0.5">
                    {errors.fullName.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="text-sm">Số điện thoại</label>
                <input
                  type="text"
                  {...register("phone", {
                    required: "Vui lòng nhập số điện thoại",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Số điện thoại không hợp lệ",
                    },
                  })}
                  className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
                />
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-0.5">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <label className="text-sm">Địa chỉ</label>
                <input
                  type="text"
                  {...register("address", {
                    required: "Vui lòng nhập địa chỉ",
                  })}
                  className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
                />
                {errors.address && (
                  <span className="text-xs text-red-500 mt-0.5">
                    {errors.address.message}
                  </span>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-700 text-white w-fit py-2 px-6 self-end mt-4 rounded-sm hover:brightness-95 duration-100 cursor-pointer"
          >
            Tạo tài khoản
          </button>
        </form>
        <div className="text-right text-sm mt-2">
          <span>Đã có tài khoản? </span>
          <Link to="/login" className="text-red-700 italic underline">
            Đăng nhập ngay
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import { useForm } from "react-hook-form";

export default function CreateOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-8">
      <div class="mb-4 text-lg font-medium text-left">Tạo đơn hàng mới</div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row gap-2 flex-wrap gap-y-8">
          <div className="flex-1 min-w-[420px] max-w-[420px]">
            <div className="flex flex-col gap-0.5">
              <label className="text-sm">Kích thước kiện hàng</label>
              <input
                type="text"
                {...register("pacakgeSize", {
                  required: "Vui lòng nhập kích thước kiện hàng",
                })}
                className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
              />
              {errors.pacakgeSize && (
                <span className="text-xs text-red-500 mt-0.5">
                  {errors.pacakgeSize.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-0.5 mt-1">
              <label className="text-sm">Trọng lượng kiện hàng (Kg)</label>
              <input
                {...register("packageWeigth", {
                  required: "Vui lòng nhập trọng lượng kiện hàng",
                })}
                className="bg-gray-100 border border-gray-300 flex-1 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
              />
              {errors.packageWeigth && (
                <span className="text-xs text-red-500 mt-0.5">
                  {errors.packageWeigth.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-0.5 mt-1">
              <label className="text-sm">Giá tiền hàng (VNĐ)</label>
              <input
                type="text"
                {...register("packagePrice", {
                  required: "Vui lòng nhập giá tiền hàng",
                  pattern: {
                    value: /^\d+$/,
                    message: "Giá tiền không hợp lệ",
                  },
                })}
                className="bg-gray-100 border border-gray-300 flex-1 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
              />
              {errors.packagePrice && (
                <span className="text-xs text-red-500 mt-0.5">
                  {errors.packagePrice.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-0.5 mt-1">
              <label className="text-sm">Địa chỉ lấy hàng</label>
              <input
                {...register("pickupAddress", {
                  required: "Vui lòng nhập địa chỉ lấy hàng",
                })}
                className="bg-gray-100 border border-gray-300 flex-1 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
              />
              {errors.pickupAddress && (
                <span className="text-xs text-red-500 mt-0.5">
                  {errors.pickupAddress.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex-1 min-w-[420px] max-w-[420px]">
            <div className="flex flex-col gap-0.5">
              <label className="text-sm">Tên người nhận</label>
              <input
                type="text"
                {...register("recipentName", {
                  required: "Vui lòng nhập tên người nhận",
                })}
                className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
              />
              {errors.recipentName && (
                <span className="text-xs text-red-500 mt-0.5">
                  {errors.recipentName.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-0.5 mt-1">
              <label className="text-sm">SĐT người nhận</label>
              <input
                type="text"
                {...register("recipentPhone", {
                  required: "Vui lòng nhập số điện thoại người nhận",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Số điện thoại không hợp lệ",
                  },
                })}
                className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
              />
              {errors.recipentPhone && (
                <span className="text-xs text-red-500 mt-0.5">
                  {errors.recipentPhone.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-0.5 mt-1">
              <label className="text-sm">Địa chỉ nhận hàng</label>
              <input
                type="password"
                {...register("shippingAddress", {
                  required: "Vui lòng nhập địa chỉ nhận hàng",
                })}
                className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
              />
              {errors.shippingAddress && (
                <span className="text-xs text-red-500 mt-0.5">
                  {errors.shippingAddress.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[420px] max-w-[420px] mt-8">
          <div className="flex flex-col gap-0.5">
            <label className="text-sm">Mô tả đơn hàng</label>
            <textarea
              rows={4}
              {...register("description", {
                required: "Vui lòng nhập mô tả",
              })}
              className="bg-gray-100 border border-gray-300 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
            />
            {errors.description && (
              <span className="text-xs text-red-500 mt-0.5">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-0.5 mt-1">
            <label className="text-sm">Ghi chú (nếu có)</label>
            <textarea
              rows={4}
              className="bg-gray-100 border border-gray-300 flex-1 px-2 py-1 rounded-md outline-none hover:border-red-500/40 focus:border-red-500/40 duration-200"
            />
            {errors.note && (
              <span className="text-xs text-red-500 mt-0.5">
                {errors.note.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-700 max-w-[480px] text-white w-full py-2 mt-4 rounded-sm hover:brightness-95 duration-100 cursor-pointer"
        >
          Tạo mới
        </button>
      </form>
    </div>
  );
}

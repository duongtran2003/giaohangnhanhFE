import { useMemo } from "react";
import { useNavigate } from "react-router";
import Dropdown from "src/share/components/Dropdown";
import roles from "src/share/constants/roles";
import { useAuthStore } from "src/share/stores/authStore";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const commonNavbarItems = useMemo(() => {
    return [
      {
        text: "Tra cứu",
        isDropdown: true,
        handler: null,
        options: [
          {
            text: "Đơn hàng",
            handler: () => navigate("/"),
          },
          {
            text: "Cước phí",
            handler: () => navigate("/"),
          },
        ],
      },
    ];
  }, []);

  const customerNavbarItems = useMemo(() => {
    return [
      {
        text: "Đơn hàng",
        isDropdown: true,
        handler: null,
        options: [
          {
            text: "Danh sách",
            handler: () => navigate("customer/my-orders"),
          },
          {
            text: "Tạo mới",
            handler: () => navigate("customer/create-order"),
          },
          {
            text: "Thống kê",
            handler: () => navigate("customer/orders-stat"),
          },
        ],
      },
    ];
  }, []);

  const adminNavbarItems = useMemo(() => {
    return [
      {
        text: "Quản lí",
        isDropdown: true,
        handler: null,
        options: [
          {
            text: "Đơn hàng",
            handler: () => navigate("admin/orders"),
          },
        ],
      },
    ];
  }, []);

  const navbarItems = useMemo(() => {
    const items = [...commonNavbarItems];
    if (user?.roles[0] == roles.CUSTOMER) {
      items.push(...customerNavbarItems);
    }

    if (user?.roles[0] == roles.ADMIN) {
      items.push(...adminNavbarItems);
    }

    return items;
  }, [user, commonNavbarItems, customerNavbarItems, adminNavbarItems]);

  return (
    <div className="bg-white sticky left-0 w-full top-0 h-14 shadow-md gap-8 flex flex-row items-center px-8 z-10">
      {navbarItems.map((item, index) => (
        <div key={index}>
          {item.isDropdown ? (
            <div
              key={index}
              className="cursor-pointer duration-100 hover:text-red-600"
            >
              <Dropdown text={item.text} optionsList={item.options} />
            </div>
          ) : (
            <div
              key={index}
              className="cursor-pointer duration-100 hover:text-red-600"
            >
              <div onClick={item.handler}>{item.text}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

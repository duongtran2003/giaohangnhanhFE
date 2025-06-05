import { useNavigate } from "react-router";
import Dropdown from "src/share/components/Dropdown";
import { useAuthStore } from "src/share/stores/authStore";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  const optionList = [
    {
      text: "Đăng nhập AAAAAAAAAAAA",
      handler: () => navigate("/login"),
    },
    {
      text: "Đăng kí",
      handler: () => navigate("/register"),
    },
  ];

  return (
    <div className="bg-white sticky top-0 h-14 shadow-md flex flex-row items-center px-8 z-10">
      <div className="cursor-pointer duration-100 hover:text-red-600">
        <Dropdown text="Tra cứu" optionsList={optionList} />
      </div>
    </div>
  );
}

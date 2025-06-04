import { useAuthStore } from "src/share/stores/authStore";

export default function Navbar() {
  const user = useAuthStore((state) => state.user);

  return <div className="bg-white sticky top-0 h-14 shadow-md flex flex-row items-center px-8 z-10">this is the nav bar</div>;
}

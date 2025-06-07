import { useEffect } from "react";
import { useAuthStore } from "src/share/stores/authStore";
import { useLoadingStore } from "src/share/stores/loadingStore";
import { authApi } from "src/share/api";
import roles from "src/share/constants/roles";
import GuestLayout from "./GuestLayout";
import CustomerLayout from "./CustomerLayout";

export default function Layout() {
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);
  const setLoading = useLoadingStore((state) => state.setLoading);

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
    <>
      {!user ? (
        <GuestLayout />
      ) : (
        <>{user.roles[0] == roles.CUSTOMER && <CustomerLayout />}</>
      )}
    </>
  );
}

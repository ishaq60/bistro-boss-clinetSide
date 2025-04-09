import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user.email}`);
      console.log(res.data);
      return res.data?.admin;
    }
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;

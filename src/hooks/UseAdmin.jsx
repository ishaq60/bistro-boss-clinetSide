import { useQuery } from "@tanstack/react-query";
import UseAuth from "./UseAuth";
import UseAxiosSecure from "./UseAxiosSecure";

const useAdmin=()=>{
const {user}=UseAuth()
const axiosSecure=UseAxiosSecure()
const {data:isAdmin,isPending:isAdminloading}=useQuery({
    queryKey:[user?.email,'isAdmin'],
    queryFn:async()=>{
        const res =await axiosSecure.get(`/user/admin/${user.email}`)
        console.log(res.data);
        return res.data?.admin
    }

})
return [isAdmin,isAdminloading]
};
export default useAdmin
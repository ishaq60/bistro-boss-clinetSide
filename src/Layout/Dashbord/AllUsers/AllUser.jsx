import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaTrash } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";

const AllUser = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allusers");
      return res.data;
    },
  });
  const handaledelete=e=>{
    console.log('handale delete')
  }

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All users</h2>
        <h2 className="text-3xl">All users {users.length}: </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Role</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={user._id}>
                <th>
                  <label>
                   {index}
                  </label>
                </th>
                <td>
                 {
                  user.name
                 }
                </td>
                <td>
                  {user?.email}
                  <br />
                 
                </td>
                <td></td>
                <th>
                <RiAdminFill />
                </th>
                <th>
                   <button onClick={()=>handaledelete(user._id)} className="btn btn-ghost btn-lg"><span className="W-8 P-16 text-red-600"> <FaTrash/></span></button>
         
                </th>
              </tr>
            ))}

            {/* row 1 */}
           
            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default AllUser;

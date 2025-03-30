import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2";
import UseCart from "../../../hooks/UseCart";

const AllUser = () => {
  
  const axiosSecure = UseAxiosSecure();
  const { data: users = [] ,refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allusers");
      return res.data;
    },
  });
  const handaledelete =id=> {
    console.log('handale delete',id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/user/${id}`)
        .then(res=>{
          console.log(res);
        
          if(res.data.deletedCount>0){

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        refetch()
          }
 
        })



      }
    });
  }

  const handaleMakeAdmin=id=>{
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

      axiosSecure.patch(`/user/admin/${id}`)
         .then(res=>{
          console.log(res);
          if(res.data.modifiedCount>0){
            refetch()
            Swal.fire({
              title: `${users.name}is admin now`,
              icon: "success",
              draggable: true
            });
            refetch()
          }
         })


        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
    });
  }




  return (
    <div>
      <div className="flex w-full my-4">
        <h2 className="text-3xl">All users</h2>
        <h2 className="text-3xl">All users {users.length}: </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead  className="bg-yellow-600 overflow-x-auto">
            <tr >
              <th>index</th>
              <th>image</th>
              <th>Name</th>
              <th>Email</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>
                  <label>
                    {index+1}
                  </label>
                </td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    
                  </div>
                <td>
                  {
                    user.name
                  }
                </td>
                <td>
                  {user?.email}
                  <br />

                </td>
              
              {
                user.role==='admin'?'Admin':<button onClick={() => handaleMakeAdmin(user._id)} className="btn btn-ghost btn-lg"><span className="W-8 P-16 text-base"> <FaUsers /></span></button>
               
              }
                <td>
                  <button onClick={() => handaledelete(user._id)} className="btn btn-ghost btn-lg"><span className="W-8 P-16 text-red-600"> <FaTrash /></span></button>

                </td>
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

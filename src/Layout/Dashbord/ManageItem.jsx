import React from "react";
import SectionTitle from "../../Components/sectionTitle/SectionTitle";
import useMenu from "../../hooks/Usehokks";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";
import { data, Link } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const ManageItem = () => {
  const axiosSecure = UseAxiosSecure();
  const [menu,loading,refetch] = useMenu();
  console.log(menu);
  const handaleEdit = () => {};
 

  const handleDelete = async (id) => {
    // Show confirmation alert
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
  
    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/menu/${id}`);
        console.log("Delete response:", res.data);
  
        if (res.data.deletedCount > 0) {
          // Refetch the updated menu list
          refetch();
  
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Failed to delete item.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Delete failed:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong while deleting.",
          icon: "error",
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        heading="Manage ALL Item "
        subheading="Harry.up"
      ></SectionTitle>
      <div>
        <div className="flex w-full my-4">
          <h2 className="text-3xl">All items {menu.length}: </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className="bg-yellow-600 overflow-x-auto">
              <tr>
                <th>index</th>
                <th>image</th>
                <th>Name</th>
                <th>Email</th>
                <th>item</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>
                    <label>{index + 1}</label>
                  </td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                  <td>{item.name}</td>
                  <td>
                    ${item?.price}
                    <br />
                  </td>

                  {
                    <Link to= {`/dashboard/admin/updateItem/${item._id}`}>
                    
                    <button
                   
                   className="btn shadow-md bg-[#D1A054] btn-ghost btn-lg"
                 >
                   <span className="W-8 P-16 bg-[#D1A054] text-base">
                     {" "}
                     <FaEdit className=" px-4w-[30px]"></FaEdit>
                   </span>
                 </button>
                    </Link>
                   
                  }
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-ghost btn-lg"
                    >
                      <span className="W-8 P-16 text-red-600">
                        {" "}
                        <FaTrash />
                      </span>
                    </button>
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
    </div>
  );
};

export default ManageItem;

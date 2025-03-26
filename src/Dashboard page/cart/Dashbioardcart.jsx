import React from "react";
import UseCart from "../../hooks/UseCart";
import { key } from "localforage";
import { FaTrash } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const Dashbioardcart = () => {
    const axiosSecure=UseAxiosSecure()
  const [cart,refetch] = UseCart();
  console.log(cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handaledelete=id=>{
    console.log(id)
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
      
        axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
            console.log(res)
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
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Items: {cart.length}</h2>
        <h2 className="text-4xl">total Price :{totalPrice}</h2>
        <button className="btn px-8 btn-primary">Pay</button>
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
              <th>Item Image</th>
              <th>Item Name</th>
              <th>price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item,index) => (
              <tr key={item._id}>
                <th>
                  <label>
                   {index}
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    
                  </div>
                </td>
                <td>
                  {item.name}
                  <br />
                 
                </td>
                <td>${item.price}</td>
                <th>
              <button className="text-yellow-500 btn-lg btn"><FaRegEdit  /></button>
                </th>
                <th>
                <button onClick={()=>handaledelete(item._id)} className="btn btn-ghost btn-lg"><FaTrash className="W-8 P-16 text-red-600"></FaTrash></button>
         
                </th>
              </tr>
            ))}

            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            {/* row 2 */}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Dashbioardcart;

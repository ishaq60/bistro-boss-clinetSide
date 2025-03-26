import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { data, Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseCart from "../../hooks/UseCart";

const Card = ({ item }) => {
  const { _id, name, image, category, price, recipe } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { cart, refetch } = UseCart();

  const handaleCart = (food) => {
    if (user && user.email) {
      console.log(food, user.email);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      const addToCart = async () => {
        try {
          const { data } = await axiosSecure.post("/carts", cartItem);
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: `${food.name} added to your cart`,
              icon: "success",
              draggable: true
            });
            refetch();  // ✅ Call refetch only after successful insertion
          }
        } catch (error) {
          console.error("Error adding to cart:", error);
        }
      };
      addToCart();
    } else {
      Swal.fire({
        title: "You are Not login ",
        text: "please login add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 ">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handaleCart(item)}
            className="btn btn-outline  justify-center items-center border-0 border-b-4 border-b-[#BB8506] mb-8"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

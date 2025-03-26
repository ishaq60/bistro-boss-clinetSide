import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import UseCart from "../../hooks/UseCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=UseCart()
  const handleLogout = () => {
    console.log("Logging out...");

    logOut()
      .then(() => {
        console.log("User logged out successfully");
        Swal.fire("LogOut successfully");
      })
      .catch((error) => console.log("Logout error:", error));
  };

  const navoption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      <li>
        <Link to='/dashboard/cart' >
          <button  className="btn">
          <FaCartShopping className=" w-4 mr-2"></FaCartShopping> <div className="badge badge-sm badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <div className="flex gap-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-green-500 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 bg-opacity-30 max-w-screen-xl mx-auto bg-black text-white fixed z-10 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navoption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro-Boss</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navoption}</ul>
      </div>
    </div>
  );
};

export default Navbar;

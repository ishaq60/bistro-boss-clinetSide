import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaAddressBook, FaCalendar, FaList, FaTowerObservation } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../hooks/UseCart";

const Dashboard = () => {
    const [cart]=UseCart()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 p-4">
        <ul className="list-none menu menu-active  space-y-4">
        <li  >
            <NavLink   to="/dashboard" className="flex active: items-center gap-2">
              <FaShoppingCart />User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="flex items-center gap-2">
              <FaShoppingCart /> My Cart <span className="text-red-600">({cart.length})</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reserve" className="flex items-center gap-2">
              <FaCalendar/> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment" className="flex items-center gap-2">
              <MdOutlinePayment /> Payment
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="flex items-center gap-2">
              <FaList /> Review
            </NavLink>
          </li>
          <div className="divider menu-horizontal"></div>
          <li  >
            <NavLink   to="/" className="flex active: items-center gap-2">
              <FaShoppingCart /> Home
            </NavLink>
          </li>
          <li  >
            <NavLink   to="/order/salad" className="flex active: items-center gap-2">
              <FaSearch />Menu
            </NavLink>
          </li>
        </ul>
      </div>
     
      
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

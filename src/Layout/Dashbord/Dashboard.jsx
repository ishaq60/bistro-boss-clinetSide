import React from "react";
import { FaBook, FaHome, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaAddressBook, FaCalendar, FaList, FaTowerObservation, FaVoicemail } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../../hooks/UseCart";

const Dashboard = () => {
    const [cart]=UseCart()
    //TODO:get isadmin value from the database
    const isAdmin=true
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400 p-4">
        <ul className="list-none menu menu-active  space-y-4">
       {
        isAdmin ? <>
         <li  >
            <NavLink   to="/dashboard/admin/home" className="flex active: items-center gap-2">
              <FaHome />Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/admin/addItem" className="flex items-center gap-2">
              <FaShoppingCart /> Add Item <span className="text-red-600"></span>
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/dashboard/admin/mangeitem" className="flex items-center gap-2">
              <FaList />Manage Item
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/admin/managebookings" className="flex items-center gap-2">
              <FaBook/> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/admin/alluser" className="flex items-center gap-2">
              <FaUsers/> All Users
            </NavLink>
          </li>

        </>:
        <>
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

        
        </>
       }
          <div className="divider menu-horizontal"></div>
          {/* share components */}
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
          <li  >
            <NavLink   to="/dashboard/contact" className="flex active: items-center gap-2">
              <FaVoicemail />Contact
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

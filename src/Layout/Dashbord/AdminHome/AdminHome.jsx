import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { FaBook, FaDollarSign, FaJediOrder, FaUsers } from "react-icons/fa6";

const AdminHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: sats } = useQuery({
    queryKey: ["admin-sats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-sats");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi,wlecome</span>
        {user?.displayName ? user.displayName : "back"}
      </h2>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl"></FaDollarSign>
          </div>
          <div className="stat-title">Revinue</div>
          <div className="stat-value">{sats?.revinue}</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Total users</div>
          <div className="stat-value">{sats?.users}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaJediOrder></FaJediOrder>
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{sats?.orders}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
           <FaBook></FaBook>
          </div>
          <div className="stat-title">Menu Item</div>
          <div className="stat-value">{sats?.menuItems}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

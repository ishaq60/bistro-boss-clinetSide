import React, { useState, useEffect } from "react";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";

const PaymentHistory = () => {
  const [history, setHistory] = useState([]);
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/history/${user.email}`)
        .then((res) => {
          console.log(res.data);
          setHistory(res.data);
        })
        .catch((err) => {
          console.error("Error fetching payment history:", err);
        });
    }
  }, [user?.email, axiosSecure]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
           
            <th> </th>
            <th>Email</th>
            <th>Category</th>
            <th>Totalprice</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={item._id}>
             
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar"></div>
                </div>
              </td>
              <td>
                {item.email}
                <br />
              </td>
              <td>
                {item.category}
                <br />
              </td>
              <td>${item.price}</td>
              <td>{item.date}</td>
            </tr>
          ))}

          {/* row 1 */}

          {/* row 2 */}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default PaymentHistory;

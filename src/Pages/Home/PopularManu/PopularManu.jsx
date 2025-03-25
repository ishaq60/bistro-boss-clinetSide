import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import MenuItem from "../../share/MenuItem";
import useMenu from "../../../hooks/Usehokks";

const PopularManu = () => {

  const [menu]=useMenu()
  const popularmenu=menu.filter(item=>item.category==='popular')
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("Menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularmenu = data.filter((item) => item.category === "popular");
  //       setMenu(popularmenu);
  //       console.log(popularmenu);
  //     });
  // }, []);
  return (
    <section>
      <SectionTitle heading="From Our Manu" subheading="Popular Items" />

      <div className="grid md:grid-cols-2 m-2 gap-y-4 p-4">
        {popularmenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn btn-outline border-0 border-b-4 text-center">View Full Menu</button>
    </section>
  );
};

export default PopularManu;

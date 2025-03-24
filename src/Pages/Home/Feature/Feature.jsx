import React from "react";
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import feauterImage from "../../../assets/home/featured.jpg";
import './Feature.css'
const Feature = () => {
  return (
    <div className="featured-item bg-fixed">
      <SectionTitle subheading="cheaked it Out" heading="Featured Item" />
      <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center text-white pt-12 py-20 px-36" >
        <div>
          <img src={feauterImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug,2029</p>
          <p className="uppercase">where i get some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            modi ut pariatur. Cumque sapiente quis veritatis ab mollitia dolor,
            facilis omnis veniam quaerat praesentium officiis ad, nemo a minus
            porro illo culpa distinctio tempora amet quia vel,placeat hic id. Ab
            alias numquam sed perspiciatis eligendi tempore incidunt sapiente
            nesciunt.
          </p>
          <button className="btn btn-outline border-0 border-b-4">OrderNow</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;

import React from "react";
import SectionTitle from "../../../Components/sectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../../../hooks/UseAxiosPublic";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const Additem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = UseAxiosSecure();
  const axiosPublic = UseAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    //image upload to imgbb and then get an  url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      //now send the manu item data to the server
      const menuItem = {
        name: data.recipeName,
        image: res.data.data.display_url,
        category: data.category,
        price: data.price,
      };
      const menuRus = await axiosSecure.post("/menu", menuItem);
      console.log(menuRus);
      if (menuRus.data.insertedId){
        reset()
        Swal.fire({
            title: `${data.recipeName}is added to the menu`,
            icon: "success",
            draggable: true
          });
      }
    }
  };

  return (
    <div>
      <SectionTitle heading="Add an item" subheading="What's new?" />
      <div className="w-[980px] ml-24 h-auto bg-[#F3F3F3] p-10 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="mb-6">
            <label className="text-gray-700 block mb-2">Recipe Name*</label>
            <input
              {...register("recipeName", { required: true })}
              type="text"
              placeholder="Enter recipe name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Category & Price */}
          <div className="flex space-x-6 mb-6">
            {/* Category */}
            <div className="w-1/2">
              <label className="text-gray-700 block mb-2">Category</label>
              <select
                {...register("category", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="Salad">Salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="dissert">dissert</option>
                <option value="dirnks">Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="w-1/2">
              <label className="text-gray-700 block mb-2">Price*</label>
              <input
                {...register("price", { required: true })}
                type="number"
                step="0.01"
                placeholder="Enter price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="text-gray-700 block mb-2">Description</label>
            <textarea
              {...register("description")}
              rows="5"
              placeholder="Enter item description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <input {...register("image")} type="file" className="file-input" />

          {/* Submit Button */}
          <div className=" mt -2 text-start">
            <button
              type="submit"
              className="px-6 py-2 bg-[#835D23]  text-white rounded-md hover:bg-gray-600 transition"
            >
              Add item <span></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Additem;

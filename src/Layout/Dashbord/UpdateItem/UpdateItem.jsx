import React from 'react';
import SectionTitle from '../../../Components/sectionTitle/SectionTitle';

import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router-dom';
import UseAxiosPublic from '../../../hooks/UseAxiosPublic';
import UseAxiosSecure from '../../../hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const item = useLoaderData();
  const navigate = useNavigate();

  const { name, category, price, description } = item;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    let imageUrl = item.image;

    // Upload new image only if selected
    if (data.image && data.image.length > 0) {
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          'content-type': 'multipart/form-data',
        },
      });

      if (res.data.success) {
        imageUrl = res.data.data.display_url;
      }
    }

    const updatedItem = {
      name: data.recipeName,
      image: imageUrl,
      category: data.category,
      price: parseFloat(data.price),
      description: data.description || '',
    };

    const menuRes = await axiosSecure.patch(`/menu/${item._id}`, updatedItem);

    if (menuRes.data.modifiedCount > 0) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item updated successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/dashboard/manage-items');
    }
  };

  return (
    <div>
      <SectionTitle heading="Update Item"></SectionTitle>
      <div className="w-[980px] ml-24 h-auto bg-[#F3F3F3] p-10 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="mb-6">
            <label className="text-gray-700 block mb-2">Recipe Name*</label>
            <input
              defaultValue={name}
              {...register('recipeName', { required: true })}
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
                defaultValue={category}
                {...register('category', { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="Salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            {/* Price */}
            <div className="w-1/2">
              <label className="text-gray-700 block mb-2">Price*</label>
              <input
                defaultValue={price}
                {...register('price', { required: true })}
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
              defaultValue={description || ''}
              {...register('description')}
              rows="5"
              placeholder="Enter item description"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          {/* File Input */}
          <div className="mb-6">
            <label className="text-gray-700 block mb-2">Image (optional)</label>
            <input
              {...register('image')}
              type="file"
              className="file-input file-input-bordered"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-2 text-start">
            <button
              type="submit"
              className="px-6 py-2 bg-[#835D23] text-white rounded-md hover:bg-gray-600 transition"
            >
              Update Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;

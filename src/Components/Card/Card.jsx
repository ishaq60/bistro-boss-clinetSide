import React from 'react';

const Card = ({item}) => {
    const {_id,name,image,category,price,recipe}=item
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className='bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 '>${price}</p>
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
         < button className="btn btn-outline  justify-center items-center border-0 border-b-4 border-b-[#BB8506] mb-8">Add to Cart</button>
        
  


          </div>
        </div>
      </div>
    );
};

export default Card;
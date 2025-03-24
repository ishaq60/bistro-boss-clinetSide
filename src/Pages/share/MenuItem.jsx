import React from 'react';

const MenuItem = ({item}) => {
    console.log(item)
    const {_id,name,image,category,price,recipe}=item
    return (
        <div className='flex space-x-4 mb-12 space-y-8'>
           <img style={{borderRadius:" 0 200px 200px 200px"}} className='w-[100px]' src={image} alt="" />
           <div>
            <h3 className='uppercase'>{name}...........</h3>
            <p>{recipe}</p>
           </div>
           <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;
import React from 'react';
import MenuItem from '../../share/MenuItem';
import Cover from '../../share/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div>
            {
                title && <Cover img={coverImg} title={title} ></Cover>
            }
               <div className="grid md:grid-cols-2 m-2 mt-16 gap-y-4  p-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className='justify-center flex'>
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline  justify-center items-center border-0 border-b-4 mb-8">ORDER YOUR FAVOURITE FOOD</button>
        </Link>
      
      </div>
        </div>
    );
};

export default MenuCategory;
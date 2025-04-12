import React from 'react';
import UseAuth from '../../../hooks/UseAuth';

const UserHome = () => {
    const{user}=UseAuth()
    return (
        <div>
            <div>
          <h2 className='text-3xl'>
            <span>Hi,wlecome-- </span>
            {
                user?.displayName ?user.displayName:'back'
            }
          </h2>
        </div>
        </div>
    );
};

export default UserHome;
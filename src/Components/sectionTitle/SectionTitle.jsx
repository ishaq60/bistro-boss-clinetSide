import React from 'react';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className=' mx-auto md:w-3/12 my-8 '>
            <p className='text-yellow-600 text-center'>{subheading}</p>
            <h3 className='text-center uppercase text-4xl py-4 border-y-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;
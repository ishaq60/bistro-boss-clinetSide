import React from 'react';
import SectionTitle from '../../Components/sectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutfORM from './CheckOutfORM.JSX';
//TODO:add publishable key
const  stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway_pk)

const UsePayment = () => {

 
    return (
        <div>
            <SectionTitle heading='Payment' subheading='user' ></SectionTitle>
           <div>
            <Elements stripe={stripePromise}>
             <CheckOutfORM></CheckOutfORM>
            </Elements>
           </div>
        </div>
    );
};

export default UsePayment;
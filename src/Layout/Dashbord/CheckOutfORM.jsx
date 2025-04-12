import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import UseCart from "../../hooks/UseCart";
import UseAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const CheckOutfORM = () => {
  const {user}=UseAuth()
  const [error, setError] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const[transectionid,settrancetionid]=useState('')
  const axiosSecure = UseAxiosSecure();
  const [cart, refetch] = UseCart();
  console.log(cart);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price: totalPrice })
    .then(res=>{
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

//confirm payment
const {paymentIntent,error:confirmerror}=await stripe.confirmCardPayment(clientSecret,{
  payment_method:{
    card:card,
    billing_details:{
      email:user?.email||'anonymous',
      name:user?.displayName ||'anonymous'
    }
  }
})
if(confirmerror){
  console.log('confirm errro')
}
else{
  console.log('payment inted',paymentIntent)
  if(paymentIntent.status==='succeeded'){
    console.log('transcation id',paymentIntent.id)
    settrancetionid(paymentIntent.id)
    //now save to the payment in the databse
    const payment = {
      email: user.email,
      transectionid: paymentIntent.id, // Fixed the typo here too
      price: totalPrice,
      date: new Date(),
      cartids: cart.map(item => item._id), 
       // Corrected the key name to match backend
       menuItemsIds:cart.map(item=>item.menuId),
      status: 'pending'
    };
    
    const res = await axiosSecure.post('/payments', payment);
    console.log('payment status', res.data);
    refetch()
    if(res.data.paymentResult?.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment successfully",
        showConfirmButton: false,
        timer: 2500
      });
    }
    
  }
}
  };
  return (
    <div>
      <h1 className="text-green-600 text-3xl mb-8">Total Price:${totalPrice}</h1>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn mt-4 btn-sm btn-primary"
          type="submit"
          disabled={!stripe||!clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {
          transectionid && <p className="text-green-500">Your tanscation id :{transectionid}</p>
        }

      </form>
    </div>
  );
};

export default CheckOutfORM;

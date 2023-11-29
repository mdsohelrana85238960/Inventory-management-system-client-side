// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import useAxios from "../hooks/useAxios";
// import useCarts from "../hooks/useCarts";
// import useAuth from "../hooks/useAuth";
// import swal from "sweetalert";
// import { useNavigate } from "react-router-dom";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({value}) => {
    const {sellingPrice} = value;
    console.log(sellingPrice)
    const price = parseFloat(sellingPrice);
    const [transaction,setTransaction] = useState();
    const [error,setError] = useState();
    const [clientSecret,setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements(); 
    const axiosSecure = useAxiosSecure();
    // const [cart, refetch] = useCarts();
    const {user} = useAuth();
    const navigate = useNavigate();




    useEffect( () =>{
     if (price > 0) {
        axiosSecure.post('/create-payment-intent', {price:price})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res?.data?.clientSecret)
        })
     }
    },[axiosSecure,price])

    const handleSubmit = async(e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod)
            setError('')
        }

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error')
        }
        else{
            console.log('success',paymentIntent)
            if (paymentIntent?.status === "succeeded") {
                setTransaction(paymentIntent?.id);
                
                const payment = {
                    email: user?.email,
                    price:price,
                    transaction: paymentIntent?.id,
                    data: new Date(),
                    status: 'pending'
                }
                const res =await axiosSecure.post('/payment', payment)
                console.log('payment save',res.data)
                // refetch();
                if (res.data.insertedId) {
                    swal("Good job!", "Payment Successfully!", "success");
                }
                navigate('/dashboard/saleSummary')
            }
        }
    }

    
    return (
        <div>

          <div className="text-center mt-8 mb-20">
            <h1 className="text-4xl">Payments</h1>
          </div>
              <form onSubmit={handleSubmit}  >
      <CardElement
        options={{
          
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
                
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn mt-4 btn-primary btn-md" type="submit" >
        Pay
      </button>
      <p className="text-red-700"> {error} </p>
      {transaction && <p className="text-green-700"> Your transaction id : {transaction}</p>}
    </form>

    
        </div>
    );
};

export default CheckoutForm;
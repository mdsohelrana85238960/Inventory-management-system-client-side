import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

const Payment = () => {
const data = useLoaderData();
    return (
        <div>
           <Elements stripe={stripePromise}  >
            
             <CheckoutForm value={data} />

             </Elements>
        </div>
    );
};

export default Payment;
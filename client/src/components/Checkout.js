import React from 'react'
import {useDispatch , useSelector} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Error from '../components/Error';
import Loading from '../components/Loading';
import Success from '../components/Success';

export default function Checkout({subtotal}) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const {loading , error , success} = orderstate
    const dispatch = useDispatch()

    function tokenHander(token)
    {
        console.log(token);
        dispatch(placeOrder(token , subtotal))
    }

    return (
        <div>
            
            {loading && (<Loading/>)}
            {error && (<Error error='Something Went Wrong'/>)}
            {success && (<Success success='Your Order Placed Successfully'/>)}

            <StripeCheckout 
            amount={subtotal*100}
            shippingAddress
            token={tokenHander}
            stripeKey='pk_test_51JFYoPSDRucKckuzA2Ymg9PDeze5VKuQpup8uTuA5kCWZk6UQe2ipE2rXagxEx4L7H9wXsnXjTZlJZcNeboEjv3q00cGceiU0C'
            currency='INR'
            
            >

                <button className='btn' >Pay Now</button>

            </StripeCheckout>

        </div>
    )
}

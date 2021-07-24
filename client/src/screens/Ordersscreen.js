import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import AOS from 'aos'
import 'aos/dist/aos.css';

export default function Ordersscreen() {
    AOS.init()

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrderReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {

        dispatch(getUserOrders())
    }, [])

    return (
        <div>
            <h2 style={{ fontSize: '45px' }} > My Orders </h2>
            <hr />
            <div className="row justify-content-center "  >
                {loading && (<Loading />)}
                {error && (<Error error='Something Went Wrong' />)}
                {orders && orders.map((order) => {
                    return (
                    <div className="col-md-8 m-2 p-1" data-aos='fade-down' style={{ backgroundColor: 'red', color: 'white' }}>

                        <div className="flex-container">

                            {/* display items */}
                            <div className='text-left w-100 m-1 mr-1'>
                                <h3 style={{ fontSize: '15 px ' }} >Items</h3>
                                <hr />
                                {order.orderItems.map((item) => {
                                    return (
                                        <div>
                                            <p>{item.name} [{item.varient}] * {item.quantity} = {item.price} </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* address */}
                            <div className='text-left w-100 m-1'>
                                <h3 style={{ fontSize: '15 px' }} >Address</h3>
                                <hr />
                                <p>Street : {order.shippingAddress.street}</p>
                                <p>City : {order.shippingAddress.city}</p>
                                <p>Country : {order.shippingAddress.country}</p>
                                <p>Pincode : {order.shippingAddress.pincode}</p>
                            </div>

                            {/* order information */}
                            <div className='text-left w-100 m-1'>
                                <h3 style={{ fontSize: '15 px' }} >Order Info</h3>
                                <hr />
                                <p> Order Amount : {order.orderAmount} </p>
                                <p> Date : {order.createdAt.substring(0, 10)} </p>
                                <p> Transaction Id : {order.transactionId} </p>
                                <p> Order Id : {order._id} </p>
                                <p>Delivery Status : {order.isDelivered?(<p>Delivered</p>):(<p>On The Way...</p>)}</p>
                            </div>
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    );
}

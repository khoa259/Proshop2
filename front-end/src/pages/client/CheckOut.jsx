import React from 'react'
import { useSelector } from 'react-redux'
import {useForm} from "react-hook-form"


const CheckOut = () => {
    const cart = useSelector(state => state.cart)
    const {register, handleSubmit , formState: {error}} = useForm()
    const onSubmit = (data) => {
        console.log(data, cart)
    }
    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Check Out</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <a href="./shop.html">Shop</a>
                                    <span>Check Out</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Checkout Section Begin */}
            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <h6 className="coupon__code"><span className="icon_tag_alt" /> Have a coupon? <a href="#">Click
                                        here</a> to enter your code</h6>
                                    <h6 className="checkout__title">Billing Details</h6>
                                    <div className="checkout__input">
                                        <p>Name<span>*</span></p>
                                        <input type="text" {...register('name',  {required: true})} />
                                    </div>
                                    <div className="checkout__input">
                                        <p>Address<span>*</span></p>
                                        <input  {...register('address',  {required: true})} type="text" placeholder="Street Address" className="checkout__input__add" />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Phone<span>*</span></p>
                                                <input  {...register('phone',  {required: true})} type="text" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="text"  {...register('email',  {required: true})}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4 className="order__title">Your order</h4>
                                        <div className="checkout__order__products">Product <span>Total</span></div>
                                        {cart?.cart?.map((item, index) => (
                                        <ul key={index} className="checkout__total__products">
                                            <li>{index + 1}.  {item.productName} <span>$ {item.productPrice}</span></li>
                                            {/* <li>02. German chocolate <span>$ 170.0</span></li>
                                            <li>03. Sweet autumn <span>$ 170.0</span></li>
                                            <li>04. Cluten free mini dozen <span>$ 110.0</span></li> */}
                                        </ul>
                                        ))}
                                        <ul className="checkout__total__all">
                                            <li>Subtotal <span>$ {cart?.total}</span></li>
                                            <li>Total <span>$ {cart?.total}</span></li>
                                        </ul>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="acc-or">
                                                Create an account?
                                                <input type="checkbox" id="acc-or" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                            ut labore et dolore magna aliqua.</p>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="payment">
                                                Check Payment
                                                <input type="checkbox" id="payment" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="paypal">
                                                Paypal
                                                <input type="checkbox" id="paypal" />
                                                <span className="checkmark" />
                                            </label>
                                        </div>
                                        <button type="submit" className="site-btn">PLACE ORDER</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {/* Checkout Section End */}
        </>
    )
}

export default CheckOut
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../redux/cartSlice';
import { NavLink} from 'react-router-dom';

const Cart = () => {
    const dispath = useDispatch()
    const cart = useSelector((state) => state.cart);
    console.log(cart)
    const increaseProduct = (data) => {
        dispath(increase(data))
    }
    const decreaseProduct = (data) => {
        dispath(decrease(data))
    }
    return (
        <>
            {/* Breadcrumb Section Begin */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <a href="./shop.html">Shop</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Section End */}
            {/* Shopping Cart Section Begin */}
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Name</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart?.cart?.map((item) => (
                                            <tr>
                                                <td className="product__cart__item">
                                                    <div style={{width: 20, height: 20}} className="product__cart__item__pic">
                                                        <img src={item.file} />
                                                    </div>
                                                </td>
                                                <td className="cart__price">{item.productName}</td>
                                                <td className="cart__price">{item.quantity}</td>
                                                <td className="cart__price">${item.productPrice}</td>
                                                <td className="cart__close"><i className="fa fa-plus" onClick={() => increaseProduct(item)}/><i className="fa fa-minus" onClick={() => decreaseProduct(item)}/></td>
                                                
                                            </tr>
                                        ))}
                                        
                                        {/* <tr>
                                            <td className="product__cart__item">
                                                <div className="product__cart__item__pic">
                                                    <img src="img/shopping-cart/cart-2.jpg" />
                                                </div>
                                                <div className="product__cart__item__text">
                                                    <h6>Diagonal Textured Cap</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td className="quantity__item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                        <input type="text" defaultValue={1} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart__price">$ 32.50</td>
                                            <td className="cart__close"><i className="fa fa-close" /></td>
                                        </tr>
                                        <tr>
                                            <td className="product__cart__item">
                                                <div className="product__cart__item__pic">
                                                    <img src="img/shopping-cart/cart-3.jpg" />
                                                </div>
                                                <div className="product__cart__item__text">
                                                    <h6>Basic Flowing Scarf</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td className="quantity__item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                        <input type="text" defaultValue={1} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart__price">$ 47.00</td>
                                            <td className="cart__close"><i className="fa fa-close" /></td>
                                        </tr>
                                        <tr>
                                            <td className="product__cart__item">
                                                <div className="product__cart__item__pic">
                                                    <img src="img/shopping-cart/cart-4.jpg" />
                                                </div>
                                                <div className="product__cart__item__text">
                                                    <h6>Basic Flowing Scarf</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td className="quantity__item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                        <input type="text" defaultValue={1} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart__price">$ 30.00</td>
                                            <td className="cart__close"><i className="fa fa-close" /></td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <a href="#">Continue Shopping</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn update__btn">
                                        <a href="#"><i className="fa fa-spinner" /> Update cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart__discount">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div className="cart__total">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>$ {cart?.total}</span></li>
                                    <li>Total <span>$ {cart?.total}</span></li>
                                </ul>
                                <NavLink to="/checkout" className="primary-btn">Proceed to checkout</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shopping Cart Section End */}
        </>
    )
}

export default Cart
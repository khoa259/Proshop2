import React from 'react'
import { Outlet, Link, useLocation  } from 'react-router-dom'
import Cart from '../public/img/icon/cart.png'
import Search from '../public/img/icon/search.png'
import Heart from '../public/img/icon/heart.png'
import Logo from '../public/img/icon/logo.png'
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'


const WebsiteLayout = () => {
    const cart = useSelector(state => state.cart)
  return (
    <>
           <div className="offcanvas-menu-overlay" />
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        <a href="#">Sign in</a>
                        <a href="#">FAQs</a>
                    </div>
                    <div className="offcanvas__top__hover">
                        <span>Usd <i className="arrow_carrot-down" /></span>
                        <ul>
                            <li>USD</li>
                            <li>EUR</li>
                            <li>USD</li>
                        </ul>
                    </div>
                </div>
                <div className="offcanvas__nav__option">
                    <a href="#" className="search-switch"><img src={Search}  /></a>
                    <a href="#"><img src="../public/img/icon/compare.png"  /></a>
                    <img src={Cart}  /> <Link to='/cart'>cart</Link><span>0</span>
                    <div className="price">$0.00</div>
                </div>
                <div id="mobile-menu-wrap" />
                <div className="offcanvas__text">
                    <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
            </div>
            {/* Offcanvas Menu End */}
            {/* Header Section Begin */}
            <header className="header">
                {/* <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="header__top__left">
                                    <p>Free shipping, 30-day return or refund guarantee.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-5">
                                <div className="header__top__right">
                                    <div className="header__top__links">
                                        <a href="#">Sign in</a>
                                        <a href="#">FAQs</a>
                                    </div>
                                    <div className="header__top__hover">
                                        <span>Usd <i className="arrow_carrot-down" /></span>
                                        <ul>
                                            <li>USD</li>
                                            <li>EUR</li>
                                            <li>USD</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3">
                            <div className="header__logo">
                                <a href="./index.html"><img src={Logo}  /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <nav className="header__menu mobile-menu">
                                <ul>
                                    <li className="active"><a href="/cart">Home</a></li>
                                    <li><a href="./shop.html">Shop</a></li>
                                    <li><a href="#">Pages</a>
                                        <ul className="dropdown">
                                            <li><a href="./cart">About Us</a></li>
                                            <li><a href="./shop-details.html">Shop Details</a></li>
                                            <li><a href="./shopping-cart.html">Shopping Cart</a></li>
                                            <li><a href="./checkout.html">Check Out</a></li>
                                            <li><a href="./blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./blog.html">Blog</a></li>
                                    <li><NavLink  to="/admin/product">Admin</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div className="header__nav__option">
                                <a href="#" className="search-switch"><img src={Search}  /></a>
                                <a href="#"><img src={Heart}  /></a>
                                <NavLink to="/cart"><img src={Cart} /> <span style={{paddingBottom: 10}}>{cart?.amount}</span></NavLink>
                                <div className="price">${cart?.total}</div>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open"><i className="fa fa-bars" /></div>
                </div>
            </header>
            {/* Header Section End */}
            {/* Hero Section Begin */}
            <Outlet/>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer__about">
                                <div className="footer__logo">
                                    <a href="#"><img src="img/footer-logo.png"  /></a>
                                </div>
                                <p>The customer is at the heart of our unique business model, which includes design.</p>
                                <a href="#"><img src="img/payment.png"  /></a>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h6>Shopping</h6>
                                <ul>
                                    <li><a href="#">Clothing Store</a></li>
                                    <li><a href="#">Trending Shoes</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Sale</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="footer__widget">
                                <h6>Shopping</h6>
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Delivary</a></li>
                                    <li><a href="#">Return &amp; Exchanges</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                            <div className="footer__widget">
                                <h6>NewLetter</h6>
                                <div className="footer__newslatter">
                                    <p>Be the first to know about new arrivals, look books, sales &amp; promos!</p>
                                    <form action="#">
                                        <input type="text" placeholder="Your email" />
                                        <button type="submit"><span className="icon_mail_alt" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="footer__copyright__text">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                <p>Copyright ©
                                    2020
                                    All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </p>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}
            {/* Search Begin */}
            <div className="search-model">
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <div className="search-close-switch">+</div>
                    <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* Search End */}
    </>
  )
}

export default WebsiteLayout
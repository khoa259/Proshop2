import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumb from '../../component/common/Breadcrumb'
import {read} from "../../api/product"
import { useDispatch } from 'react-redux'
import { addTocart } from '../../redux/cartSlice'
import toastr from 'toastr'
import "toastr/build/toastr.min.css";

const ShopDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const [product, setProduct] = useState([])
    
    React.useEffect(() => {
        read(id).then(({data}) => setProduct(data))
    },[id])

    const handleCart = (item) =>{
        dispatch(addTocart(item))
        toastr.success('Thêm vào giỏ hàng thành công')
    }
    return (
        <>  
            <Breadcrumb/>
            {/* Shop Details Section Begin */}
            <section className="shop-details">
                <div className="product__details__pic">
                <img src={product?.file} alt />
                </div>
                <div className="product__details__content">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <div className="product__details__text">
                                    <h4>{product?.productName}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star-o" />
                                        <span> - 5 Reviews</span>
                                    </div>
                                    <h3>${product?.productPrice} <span>$100</span></h3>
                                    <p>A Pocket PC is a handheld computer, which features many of the same
                                        capabilities as a modern PC. These handy little devices allow
                                        individuals to retrieve and store e-mail messages, create a contact
                                        file, coordinate appointments, surf the internet, exchange text messages
                                        and more. Every product that is labeled as a Pocket PC must be
                                        accompanied with specific software to operate the unit and must feature
                                        a touchscreen and touchpad.</p>
                                    <div className="product__details__option">
                                        <div className="product__details__option__size">
                                            <span>Size:</span>
                                            <label htmlFor="xxl">xxl
                                                <input type="radio" id="xxl" />
                                            </label>
                                            <label className="active" htmlFor="xl">xl
                                                <input type="radio" id="xl" />
                                            </label>
                                            <label htmlFor="l">l
                                                <input type="radio" id="l" />
                                            </label>
                                            <label htmlFor="sm">s
                                                <input type="radio" id="sm" />
                                            </label>
                                        </div>
                                        <div className="product__details__option__color">
                                            <span>Color:</span>
                                            <label className="c-1" htmlFor="sp-1">
                                                <input type="radio" id="sp-1" />
                                            </label>
                                            <label className="c-2" htmlFor="sp-2">
                                                <input type="radio" id="sp-2" />
                                            </label>
                                            <label className="c-3" htmlFor="sp-3">
                                                <input type="radio" id="sp-3" />
                                            </label>
                                            <label className="c-4" htmlFor="sp-4">
                                                <input type="radio" id="sp-4" />
                                            </label>
                                            <label className="c-9" htmlFor="sp-9">
                                                <input type="radio" id="sp-9" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="product__details__cart__option">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="text" defaultValue={1} />
                                            </div>
                                        </div>
                                        <a onClick={() => handleCart(product)} href="#" className="primary-btn">add to cart</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopDetail
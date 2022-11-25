import React, { useMemo } from 'react'
import { useEffect,useState } from 'react'
import Breadcrumb from '../../component/common/Breadcrumb'
import axios from 'axios'
import { Debounce } from '../../hooks/UseDebounce'
import { Pagination } from '../../component/Panagation'
import { Link, useLocation } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addTocart } from '../../redux/cartSlice'


const Shop = () => {
    const [data, setData] = useState([]);

    const [searchValue, setSearchValue] = useState([])
    const [page , setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [sort, setSort] = useState();
    const { search } = useLocation()
    const debou = Debounce(searchValue, 1000)
    const dispath = useDispatch()
    useEffect(() => {
        const page = new URLSearchParams(search).get('page') || '1';
        setPage(Number(page))
    }, [search])
    const handleCart = (item) =>{
        console.log(item)
        dispath(addTocart(item))
    }
    useEffect(() => {
        const getProducts = async () => {
            const {data} = await axios.get(`http://localhost:5000/api/products`,
            {
                params: {
                    search:debou,
                    limit:limit,
                    page:page,
                    sort: sort
                }
            })
            setData(data)
        };
        getProducts()
    },[debou,page,sort])

    const cart = useSelector((state) => state.cart);
    console.log(cart)

    const totalPages = useMemo(() => {
        if(!data?.count) return 0;
        return Math.ceil(data.count / limit)
    }, [data?.count])

    const handlerSort = (e) => {
        setSort(e.target.value)
    }
    return (
    <>
    <Breadcrumb/>
     {/* Shop Section Begin */}
     <h1>{cart?.total}</h1>
     <h1>{cart?.amount}</h1>
     {cart?.cart?.map(item => (
        <tr>
            <td>{item.productName}</td>
            <td>{item.productPrice}</td>
            <td>quantity{item.quantity}</td>
        </tr>
     ))}
      <img src="img/icon/cart.png" /> <Link to='/cart'>cart</Link><span>0</span>
    <section className="shop spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="shop__sidebar">
                        <div className="shop__sidebar__search">
                            <form action="#">
                                <input
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Search..." />
                                <button onClick={() => setSearchValue('')}><span className="icon_search" /></button>
                            </form>
                        </div>
                        <div className="shop__sidebar__accordion">
                            <div className="accordion" id="accordionExample">
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__categories">
                                                <ul className="nice-scroll">
                                                    <li><a href="#">Men (20)</a></li>
                                                    <li><a href="#">Women (20)</a></li>
                                                    <li><a href="#">Bags (20)</a></li>
                                                    <li><a href="#">Clothing (20)</a></li>
                                                    <li><a href="#">Shoes (20)</a></li>
                                                    <li><a href="#">Accessories (20)</a></li>
                                                    <li><a href="#">Kids (20)</a></li>
                                                    <li><a href="#">Kids (20)</a></li>
                                                    <li><a href="#">Kids (20)</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseTwo">Branding</a>
                                    </div>
                                    <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__brand">
                                                <ul>
                                                    <li><a href="#">Louis Vuitton</a></li>
                                                    <li><a href="#">Chanel</a></li>
                                                    <li><a href="#">Hermes</a></li>
                                                    <li><a href="#">Gucci</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseThree">Filter Price</a>
                                    </div>
                                    <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__price">
                                                <ul>
                                                    <li><a href="#">$0.00 - $50.00</a></li>
                                                    <li><a href="#">$50.00 - $100.00</a></li>
                                                    <li><a href="#">$100.00 - $150.00</a></li>
                                                    <li><a href="#">$150.00 - $200.00</a></li>
                                                    <li><a href="#">$200.00 - $250.00</a></li>
                                                    <li><a href="#">250.00+</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFour">Size</a>
                                    </div>
                                    <div id="collapseFour" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__size">
                                                <label htmlFor="xs">xs
                                                    <input type="radio" id="xs" />
                                                </label>
                                                <label htmlFor="sm">s
                                                    <input type="radio" id="sm" />
                                                </label>
                                                <label htmlFor="md">m
                                                    <input type="radio" id="md" />
                                                </label>
                                                <label htmlFor="xl">xl
                                                    <input type="radio" id="xl" />
                                                </label>
                                                <label htmlFor="2xl">2xl
                                                    <input type="radio" id="2xl" />
                                                </label>
                                                <label htmlFor="xxl">xxl
                                                    <input type="radio" id="xxl" />
                                                </label>
                                                <label htmlFor="3xl">3xl
                                                    <input type="radio" id="3xl" />
                                                </label>
                                                <label htmlFor="4xl">4xl
                                                    <input type="radio" id="4xl" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseFive">Colors</a>
                                    </div>
                                    <div id="collapseFive" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__color">
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
                                                <label className="c-5" htmlFor="sp-5">
                                                    <input type="radio" id="sp-5" />
                                                </label>
                                                <label className="c-6" htmlFor="sp-6">
                                                    <input type="radio" id="sp-6" />
                                                </label>
                                                <label className="c-7" htmlFor="sp-7">
                                                    <input type="radio" id="sp-7" />
                                                </label>
                                                <label className="c-8" htmlFor="sp-8">
                                                    <input type="radio" id="sp-8" />
                                                </label>
                                                <label className="c-9" htmlFor="sp-9">
                                                    <input type="radio" id="sp-9" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseSix">Tags</a>
                                    </div>
                                    <div id="collapseSix" className="collapse show" data-parent="#accordionExample">
                                        <div className="card-body">
                                            <div className="shop__sidebar__tags">
                                                <a href="#">Product</a>
                                                <a href="#">Bags</a>
                                                <a href="#">Shoes</a>
                                                <a href="#">Fashio</a>
                                                <a href="#">Clothing</a>
                                                <a href="#">Hats</a>
                                                <a href="#">Accessories</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="shop__product__option">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__left">
                                    <p>Showing 1–12 of 126 results</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <select onChange={handlerSort}>
                                        <option value="">All</option>
                                        <option value="createdAt">The Old</option>
                                        <option value="-createdAt">The New</option>
                                        <option value="productName">Name A-Z</option>
                                        <option value="-productName">Name Z-A</option>
                                        <option value="-productPrice">Price Big - Price Small</option>
                                        <option value="productPrice">Price Small - Price Big</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data?.products?.map((item,index) =>(
                            <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" style={{backgroundImage: `url(${item.file})`}}>
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" /> <span>Compare</span></a>
                                        </li>
                                        <li><a href="#"><img src="img/icon/search.png" /></a></li>
                                    </ul>
                                </div>
                                
                                 <div className="product__item__text">
                                    <h6>{item.productName}</h6>
                                    <a onClick={() => handleCart(item)} className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>${item.productPrice}</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-4">
                                            <input type="radio" id="pc-4" />
                                        </label>
                                        <label className="active black" htmlFor="pc-5">
                                            <input type="radio" id="pc-5" />
                                        </label>
                                        <label className="grey" htmlFor="pc-6">
                                            <input type="radio" id="pc-6" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                         {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg" data-setbg="img/product/product-11.jpg">
                                    <ul className="product__hover">
                                        <li><a href="#"><img src="img/icon/heart.png" /></a></li>
                                        <li><a href="#"><img src="img/icon/compare.png" /> <span>Compare</span></a>
                                        </li>
                                        <li><a href="#"><img src="img/icon/search.png" /></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6>Diagonal Textured Cap</h6>
                                    <a href="#" className="add-cart">+ Add To Cart</a>
                                    <div className="rating">
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <h5>$60.9</h5>
                                    <div className="product__color__select">
                                        <label htmlFor="pc-31">
                                            <input type="radio" id="pc-31" />
                                        </label>
                                        <label className="active black" htmlFor="pc-32">
                                            <input type="radio" id="pc-32" />
                                        </label>
                                        <label className="grey" htmlFor="pc-33">
                                            <input type="radio" id="pc-33" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div> */}  
                        
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product__pagination">
                            <Pagination totalPages={totalPages} page={page} />
                                {/* <a className="active" href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <span>...</span>
                                <a href="#">21</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* Shop Section End */}
    </>
  )
}

export default Shop
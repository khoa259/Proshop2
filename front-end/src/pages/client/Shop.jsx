import React, { useMemo } from 'react'
import { useEffect,useState } from 'react'
import Breadcrumb from '../../component/common/Breadcrumb'
import axios from 'axios'
import { Debounce } from '../../hooks/UseDebounce'
import { Pagination } from '../../component/Panagation'
import { Link, useLocation } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addTocart } from '../../redux/cartSlice'
import Search from '../../public/img/icon/search.png'
import Heart from '../../public/img/icon/heart.png'
import toastr from 'toastr'
import "toastr/build/toastr.min.css";


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
        dispath(addTocart(item))
        toastr.success('Thêm vào giỏ hàng thành công')
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
                                        <a data-toggle="collapse" >Categories</a>
                                    </div>
                                    <div id="collapseOne" className="collapse show" >
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
                            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
                                <div className="product__item">
                                    <Link to={`/shop/detail/${item._id}`}><div className="product__item__pic set-bg" style={{backgroundImage: `url(${item.file})`}}>
                                        <ul className="product__hover">
                                            <li><a href="#"><img src={Heart} /></a></li>
                                            <li><a href="#"><img src={Heart}/></a>
                                            </li>
                                            <li><a href="#"><img src={Search} /></a></li>
                                        </ul>
                                    </div>
                                    </Link>
                                    <div className="product__item__text">
                                        <Link to={`/shop/detail/${item._id}`}><h6>{item.productName}</h6></Link>
                                        <a onClick={() => handleCart(item)} style={{color: 'rgb(254 89 89)'}} className="add-cart">+ Add To Cart</a>
                                        <div className="rating">
                                            
                                            <i style={{color: '#ffc107', padding: '0 4px'}} className="fa fa-star-o" />
                                            <i style={{color: '#ffc107', padding: '0 4px'}} className="fa fa-star-o" />
                                            <i style={{color: '#ffc107', padding: '0 4px'}} className="fa fa-star-o" />
                                            <i style={{color: '#ffc107', padding: '0 4px'}} className="fa fa-star-o" />
                                            <i style={{color: '#ffc107', padding: '0 4px'}} className="fa fa-star-o" />
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
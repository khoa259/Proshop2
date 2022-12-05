import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteMany, list, remove } from '../../../api/product'
import toastr from 'toastr'
import "toastr/build/toastr.min.css";
import axios from 'axios';

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    const [check, setCheck] = useState([])
    console.log(check)
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await list();
            setProducts(data.products);
        }
        getProduct()
    }, []);
    
    const onRemove = (id) => {
        if(window.confirm('Bạn thực sự muốn xóa')){
            remove(id).then(() =>{
                toastr.success('Xóa thành công')
            }).catch(() => {
                toastr.error('Xóa thất bại')
            });
            setProducts(products.filter((i) => i._id !== id));
        }
    }

    const handleRemoveMany = (e) => {
        const {checked, value} = e.target;
        if (checked) {
            setCheck([...check, value])
        }
        else{
            setCheck(check?.filter(item => item != value))
        }
    }
    const handleDeleteMany = async () => {
        await axios.delete(`http://localhost:5000/api/products`, {
            params: {
                id: check
            }
        })
        setProducts(products.filter((x) => check.every((x2) => x2 !== x._id)));
        toastr.success('Xóa thành công')
        // deleteMany({params: {id: check}}).then(() => {
        //     toastr.success('Xóa thành công')
        // });
    }
    return (
        <div>
            <main className="app-content">
                <div className="app-title">
                    <ul className="app-breadcrumb breadcrumb side">
                        <li className="breadcrumb-item active"><a href="#"><b>Danh sách sản phẩm</b></a></li>
                    </ul>
                    <div id="clock" />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="tile">
                            <div className="tile-body">
                                <div className="row element-button">
                                    <div className="col-sm-2">
                                        <Link to="/admin/product/add">
                                            <a className="btn btn-add btn-sm" href="form-add-san-pham.html" title="Thêm"><i className="fas fa-plus" />
                                                Tạo mới sản phẩm</a>
                                        </Link>
                                    </div>
                                    <div className="col-sm-2">
                                        <a className="btn btn-delete btn-sm nhap-tu-file" type="button" title="Nhập" ><i className="fas fa-file-upload" /> Tải từ file</a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a className="btn btn-delete btn-sm print-file" type="button" title="In" ><i className="fas fa-print" /> In dữ liệu</a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a className="btn btn-delete btn-sm print-file js-textareacopybtn" type="button" title="Sao chép"><i className="fas fa-copy" /> Sao chép</a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a className="btn btn-excel btn-sm" href title="In"><i className="fas fa-file-excel" /> Xuất Excel</a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a className="btn btn-delete btn-sm pdf-file" type="button" title="In"><i className="fas fa-file-pdf" /> Xuất PDF</a>
                                    </div>
                                    <div className="col-sm-2">
                                        <a className="btn btn-delete btn-sm" type="button" title="Xóa"><i className="fas fa-trash-alt" /> Xóa tất cả </a>
                                    </div>
                                </div>
                                <table className="table table-hover table-bordered" id="sampleTable">
                                    <thead>
                                        <tr>
                                            <th> 
                                                <button style={{color: 'red', marginRight: 10}}  
                                                className="btn btn-primary btn-sm trash" type="button" title="Xóa" 
                                                onClick={handleDeleteMany}><i className="fas fa-trash-alt" />
                                                </button>
                                            </th>
                                            <th>Tên sản phẩm</th>
                                            <th>Ảnh</th>
                                            <th>Số lượng</th>
                                            <th>Giá tiền</th>
                                            <th style={{textAlign: 'center'}}>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products?.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td width={10}><input type="checkbox" onChange={handleRemoveMany} value={item._id} /></td>
                                                    <td>{item.productName}</td>
                                                    <td style={{width: 233, height: 100 }} ><img style={{height: 100}} src={item.file} alt /></td>
                                                    <td>{item.productQty}</td>
                                                    <td>{item.productPrice}</td>
                                                    <td style={{textAlign: 'center'}}>
                                                        <button style={{color: 'red', marginRight: 10}}  className="btn btn-primary btn-sm trash" type="button" title="Xóa" onClick={() => onRemove(item._id)}><i className="fas fa-trash-alt" />
                                                        </button>
                                                        <Link to={`/admin/product/${item._id}/edit`}style={{color: '#e8c52f'}} className="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal" data-target="#ModalUP"><i className="fas fa-edit" /></Link>
                                                        </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* EndMain */}
        </div>
    )
}

export default ListProduct
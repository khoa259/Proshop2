import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { list } from '../../../api/product'

const ListProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await list();
            setProducts(data);
        }
        getProduct()
    }, []);
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
                                        <Link to="add">
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
                                            <th width={10}><input type="checkbox" id="all" /></th>
                                            <th>Mã sản phẩm</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Ảnh</th>
                                            <th>Số lượng</th>
                                            <th>Giá tiền</th>
                                            <th>Danh mục</th>
                                            <th>Chức năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.length > 0 ? products.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td width={10}><input type="checkbox" name="check1" /></td>
                                                    <td>{item.id}</td>
                                                    <td>{item.productName}</td>
                                                    <td><img src={item.file} alt width="50px;" /></td>
                                                    <td>{item.productQty}</td>
                                                    <td>{item.productPriceSale}</td>
                                                    <td>Bàn ăn</td>
                                                    <td><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" />
                                                    </button>
                                                        <button className="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal" data-target="#ModalUP"><i className="fas fa-edit" /></button>
                                                    </td>
                                                </tr>
                                            )
                                        }) : "Khong Co Gi"}
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
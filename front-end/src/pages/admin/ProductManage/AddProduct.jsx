import React from 'react'
import {useForm} from "react-hook-form"
import { add } from '../../../api/product'
import "./index.css"

const AddProduct = () => {
  const {register, handleSubmit, formState: {error}} = useForm();
  const [preview, setPreview] = React.useState(null)
  console.log(preview)
  const handlePicture = (e) => {
    const objectUrl = URL.createObjectURL(e.target.files[0])
    setPreview(objectUrl)
  }

  const onSubmit = async (data) => {
    const formdata = new FormData()
    formdata.append('productName', data.productName)
    formdata.append('productQty', data.productQty)
    formdata.append('productPrice', data.productPrice)
    // Array.from(data.file).map(item => {
      formdata.append('file', data.file[0])
      console.log(data.file[0])
    // })
    add(formdata)
  }
  return (
    <div>
        <div>
  <main className="app-content">
    <div className="app-title">
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item">Danh sách sản phẩm</li>
        <li className="breadcrumb-item"><a href="#">Thêm sản phẩm</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tile">
          <h3 className="tile-title">Tạo mới sản phẩm</h3>
          <div className="tile-body">
            <div className="row element-button">
              <div className="col-sm-2">
              </div>
              <div className="col-sm-2">
                <a className="btn btn-add btn-sm" data-toggle="modal" data-target="#adddanhmuc"><i className="fas fa-folder-plus" /> Thêm danh mục</a>
              </div>
              <div className="col-sm-2">
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="row">
              <div className="form-group col-md-3">
                <label className="control-label">Tên sản phẩm</label>
                <input {...register('productName', {required: true})} className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-3">
                <label className="control-label">Số lượng</label>
                <input {...register('productQty', {required: true})} className="form-control" type="number" />
              </div>
              {/* <div className="form-group col-md-3">
                <label htmlFor="exampleSelect1" className="control-label">Danh mục</label>
                <select className="form-control" id="exampleSelect1">
                  <option>-- Chọn danh mục --</option>
                  <option>Bàn ăn</option>
                  <option>Bàn thông minh</option>
                  <option>Tủ</option>
                  <option>Ghế gỗ</option>
                  <option>Ghế sắt</option>
                  <option>Giường người lớn</option>
                  <option>Giường trẻ em</option>
                  <option>Bàn trang điểm</option>
                  <option>Giá đỡ</option>
                </select>
              </div> */}
              <div className="form-group col-md-3">
                <label className="control-label">Giá bán</label>
                <input {...register('productPrice', {required: true})} className="form-control" type="number" />
              </div>
              <div className="form-group col-md-3">
                <label className="control-label">Ảnh sản phẩm</label>
                <div id="myfileupload">
                  <input type="file" style={{color: 'white'}}{...register('file')} multiple onChange={handlePicture}/>
                </div>
                {preview ? (
                  <div style={{display: 'flex'}}>
                  <img src={preview} style={{width: 200, height: 220, marginTop:10}} /> <button onClick={() => setPreview(null)} className="btn btn-primary btn-sm trash preview">xóa</button>
                </div>
                ): (
                  <div id="boxchoice">
                  <a href="javascript:" className="Choicefile"><i className="fas fa-cloud-upload-alt" /> Chọn ảnh</a>
                  <p style={{clear: 'both'}} />
                </div>
                )}
                
               
              </div>
              <div className="form-group col-md-12">
                <label className="control-label">Mô tả sản phẩm</label>
                <textarea  {...register('productDesc', {required: true})}  className="form-control" />
              </div>
              {/* <div className="form-group col-md-12">
              <label className="control-label">Mô tả sản phẩm</label>
                <input  {...register('productDesc', {required: true})} className="form-control" type="text" />
              </div> */}
              <div style={{padding: 17}}>
              <button className="btn btn-primary" style={{background: '#31b633', border: '1px solid #31b633'}}>Lưu lại</button>
              <a className="btn btn-cancel" style={{
                    background: '#f2ca39',
                    color: 'white',
                    border: '1px solid #f2ca39',
                    marginLeft: 16
              }} href="table-data-product.html">Hủy bỏ</a>
              </div>
            </form></div>
        </div>
      </div></div></main>
  {/*
  MODAL CHỨC VỤ 
*/}
  <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" data-keyboard="false">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="form-group  col-md-12">
              <span className="thong-tin-thanh-toan">
                <h5>Thêm mới nhà cung cấp</h5>
              </span>
            </div>
            <div className="form-group col-md-12">
              <label className="control-label">Nhập tên chức vụ mới</label>
              <input className="form-control" type="text" required />
            </div>
          </div>
          <br />
          <button className="btn btn-save" type="button">Lưu lại</button>
          <a className="btn btn-cancel" data-dismiss="modal" href="#">Hủy bỏ</a>
          <br />
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  </div>
  {/*
MODAL
*/}
  {/*
  MODAL DANH MỤC
*/}
  <div className="modal fade" id="adddanhmuc" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" data-keyboard="false">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="form-group  col-md-12">
              <span className="thong-tin-thanh-toan">
                <h5>Thêm mới danh mục </h5>
              </span>
            </div>
            <div className="form-group col-md-12">
              <label className="control-label">Nhập tên danh mục mới</label>
              <input className="form-control" type="text" required />
            </div>
            <div className="form-group col-md-12">
              <label className="control-label">Danh mục sản phẩm hiện đang có</label>
              <ul style={{paddingLeft: 20}}>
                <li>Bàn ăn</li>
                <li>Bàn thông minh</li>
                <li>Tủ</li>
                <li>Ghế gỗ</li>
                <li>Ghế sắt</li>
                <li>Giường người lớn</li>
                <li>Giường trẻ em</li>
                <li>Bàn trang điểm</li>
                <li>Giá đỡ</li>
              </ul>
            </div>
          </div>
          <br />
          <button className="btn btn-save" type="button">Lưu lại</button>
          <a className="btn btn-cancel" data-dismiss="modal" href="#">Hủy bỏ</a>
          <br />
        </div>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  </div>
  {/*
MODAL
*/}
  {/*
  MODAL TÌNH TRẠNG
*/}
</div>

    </div>
  )
}

export default AddProduct
import React from 'react'

const AddProduct = () => {
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
                <a className="btn btn-add btn-sm" data-toggle="modal" data-target="#exampleModalCenter"><i className="fas fa-folder-plus" /> Thêm nhà cung cấp</a>
              </div>
              <div className="col-sm-2">
                <a className="btn btn-add btn-sm" data-toggle="modal" data-target="#adddanhmuc"><i className="fas fa-folder-plus" /> Thêm danh mục</a>
              </div>
              <div className="col-sm-2">
                <a className="btn btn-add btn-sm" data-toggle="modal" data-target="#addtinhtrang"><i className="fas fa-folder-plus" /> Thêm tình trạng</a>
              </div>
            </div>
            <form className="row">
              <div className="form-group col-md-3">
                <label className="control-label">Mã sản phẩm </label>
                <input className="form-control" type="number" placeholder />
              </div>
              <div className="form-group col-md-3">
                <label className="control-label">Tên sản phẩm</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-3">
                <label className="control-label">Số lượng</label>
                <input className="form-control" type="number" />
              </div>
              <div className="form-group col-md-3 ">
                <label htmlFor="exampleSelect1" className="control-label">Tình trạng</label>
                <select className="form-control" id="exampleSelect1">
                  <option>-- Chọn tình trạng --</option>
                  <option>Còn hàng</option>
                  <option>Hết hàng</option>
                </select>
              </div>
              <div className="form-group col-md-3">
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
              </div>
              <div className="form-group col-md-3 ">
                <label htmlFor="exampleSelect1" className="control-label">Nhà cung cấp</label>
                <select className="form-control" id="exampleSelect1">
                  <option>-- Chọn nhà cung cấp --</option>
                  <option>Phong vũ</option>
                  <option>Thế giới di động</option>
                  <option>FPT</option>
                  <option>Võ Trường</option>
                </select>
              </div>
              <div className="form-group col-md-3">
                <label className="control-label">Giá bán</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group col-md-3">
                <label className="control-label">Giá vốn</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group col-md-12">
                <label className="control-label">Ảnh sản phẩm</label>
                <div id="myfileupload">
                  <input type="file" id="uploadfile" name="ImageUpload" onchange="readURL(this);" />
                </div>
                <div id="thumbbox">
                  <img height={450} width={400} alt="Thumb image" id="thumbimage" style={{display: 'none'}} />
                  <a className="removeimg" href="javascript:" />
                </div>
                <div id="boxchoice">
                  <a href="javascript:" className="Choicefile"><i className="fas fa-cloud-upload-alt" /> Chọn ảnh</a>
                  <p style={{clear: 'both'}} />
                </div>
              </div>
              <div className="form-group col-md-12">
                <label className="control-label">Mô tả sản phẩm</label>
                <textarea className="form-control" name="mota" id="mota" defaultValue={""} />
              </div>
            </form></div>
          <button className="btn btn-save" type="button">Lưu lại</button>
          <a className="btn btn-cancel" href="table-data-product.html">Hủy bỏ</a>
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
  <div className="modal fade" id="addtinhtrang" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" data-backdrop="static" data-keyboard="false">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="form-group  col-md-12">
              <span className="thong-tin-thanh-toan">
                <h5>Thêm mới tình trạng</h5>
              </span>
            </div>
            <div className="form-group col-md-12">
              <label className="control-label">Nhập tình trạng mới</label>
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
</div>

    </div>
  )
}

export default AddProduct
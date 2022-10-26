import React from 'react'

const AddBill = () => {
  return (
    <div>
  <main className="app-content">
    <div className="app-title">
      <ul className="app-breadcrumb breadcrumb">
        <li className="breadcrumb-item">Danh sách đơn hàng</li>
        <li className="breadcrumb-item"><a href="#">Thêm đơn hàng</a></li>
      </ul>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="tile">
          <h3 className="tile-title">Tạo mới đơn hàng</h3>
          <div className="tile-body">
            <form className="row">
              <div className="form-group  col-md-4">
                <label className="control-label">ID đơn hàng ( Nếu không nhập sẽ tự động phát sinh )</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Tên khách hàng</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Số điện thoại khách hàng</label>
                <input className="form-control" type="number" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Địa chỉ khách hàng</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Tên người bán</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Số hiệu người bán</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Ngày làm đơn hàng</label>
                <input className="form-control" type="date" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Tên sản phẩm cần bán</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Mã sản phẩm</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Số lượng</label>
                <input className="form-control" type="number" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="exampleSelect1" className="control-label">Tình trạng</label>
                <select className="form-control" id="exampleSelect1">
                  <option>-- Chọn tình trạng --</option>
                  <option>Đã xử lý</option>
                  <option>Đang chờ</option>
                  <option>Đã hủy</option>
                </select>
              </div>
              <div className="form-group  col-md-4">
                <label className="control-label">Ghi chú đơn hàng</label>
                <textarea className="form-control" rows={4} defaultValue={""} />
              </div>  
            </form></div>
          <button className="btn btn-save" type="button">Lưu lại</button>
          <a className="btn btn-cancel" href="/doc/table-data-oder.html">Hủy bỏ</a>
        </div>
      </div></div></main>
</div>

  )
}

export default AddBill
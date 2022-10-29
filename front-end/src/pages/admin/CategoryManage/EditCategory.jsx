import React from 'react'


const EditCategory = () => {
  return (
    <div>
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item">Danh sách danh mục</li>
          <li className="breadcrumb-item"><a href="#">Cập nhật danh mục</a></li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Cập nhật danh mục</h3>
            <div className="tile-body">
              <form className="row">
                <div className="form-group  col-md-4">
                  <label className="control-label">ID danh mục</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group  col-md-4">
                  <label className="control-label">Tên danh mục</label>
                  <input className="form-control" type="text" />
                </div>
                <div className="form-group  col-md-4">
                  <label className="control-label">Mô tả</label>
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
              </form></div>
            <button className="btn btn-save" type="button">Lưu lại</button>
            <a className="btn btn-cancel" href="/doc/table-data-oder.html">Hủy bỏ</a>
          </div>
        </div></div></main>
  </div>
  )
}

export default EditCategory
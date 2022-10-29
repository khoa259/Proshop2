import React from 'react'

const ListCategory = () => {
  return (
    <div>
    <main className="app-content">
      <div className="app-title">
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item active"><a href="#"><b>Danh sách danh mục</b></a></li>
        </ul>
        <div id="clock" />
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="row element-button">
                <div className="col-sm-2">
                  <a className="btn btn-add btn-sm" href="form-add-don-hang.html" title="Thêm"><i className="fas fa-plus" />
                    Tạo mới danh mục</a>
                </div>
                <div className="col-sm-2">
                  <a className="btn btn-delete btn-sm nhap-tu-file" type="button" title="Nhập" onclick="myFunction(this)"><i className="fas fa-file-upload" /> Tải từ file</a>
                </div>
                <div className="col-sm-2">
                  <a className="btn btn-delete btn-sm print-file" type="button" title="In" onclick="myApp.printTable()"><i className="fas fa-print" /> In dữ liệu</a>
                </div>
                <div className="col-sm-2">
                  <a className="btn btn-delete btn-sm print-file js-textareacopybtn" type="button" title="Sao chép"><i className="fas fa-copy" /> Sao chép</a>
                </div>
                <div className="col-sm-2">
                  <a className="btn btn-excel btn-sm" href title="In"><i className="fas fa-file-excel" /> Xuất Excel</a>
                </div>
                <div className="col-sm-2">
                  <a className="btn btn-delete btn-sm pdf-file" type="button" title="In" onclick="myFunction(this)"><i className="fas fa-file-pdf" /> Xuất PDF</a>
                </div>
                <div className="col-sm-2">
                  <a className="btn btn-delete btn-sm" type="button" title="Xóa" onclick="myFunction(this)"><i className="fas fa-trash-alt" /> Xóa tất cả </a>
                </div>
              </div>
              <table className="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                    <th width={10}><input type="checkbox" id="all" /></th>
                    <th>ID danh mục</th>
                    <th>Tên danh mục</th>
                    <th>Mô tả</th>
                    <th>Tình trạng</th>
                    <th>Tính năng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                    <td>MD0837</td>
                    <td>Quần áo nam</td>
                    <td>Cũng ra gì đấy</td>
                    <td><span className="badge bg-success">Hoàn thành</span></td>
                    <td><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" /> </button>
                      <button className="btn btn-primary btn-sm edit" type="button" title="Sửa"><i className="fa fa-edit" /></button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}

export default ListCategory
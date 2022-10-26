import React from 'react'



const ListBill = () => {
  return (
   <div>
  <main className="app-content">
    <div className="app-title">
      <ul className="app-breadcrumb breadcrumb side">
        <li className="breadcrumb-item active"><a href="#"><b>Danh sách đơn hàng</b></a></li>
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
                  Tạo mới đơn hàng</a>
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
                  <th>ID đơn hàng</th>
                  <th>Khách hàng</th>
                  <th>Đơn hàng</th>
                  <th>Số lượng</th>
                  <th>Tổng tiền</th>
                  <th>Tình trạng</th>
                  <th>Tính năng</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                  <td>MD0837</td>
                  <td>Triệu Thanh Phú</td>
                  <td>Ghế làm việc Zuno, Bàn ăn gỗ Theresa</td>
                  <td>2</td>
                  <td>9.400.000 đ</td>
                  <td><span className="badge bg-success">Hoàn thành</span></td>
                  <td><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" /> </button>
                    <button className="btn btn-primary btn-sm edit" type="button" title="Sửa"><i className="fa fa-edit" /></button></td>
                </tr>
                <tr>
                  <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                  <td>MĐ8265</td>
                  <td>Nguyễn Thị Ngọc Cẩm</td>
                  <td>Ghế ăn gỗ Lucy màu trắng</td>
                  <td>1</td>
                  <td>3.800.000 đ</td>                 
                  <td><span className="badge bg-success">Hoàn thành</span></td>
                  <td><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" /> </button>
                    <button className="btn btn-primary btn-sm edit" type="button" title="Sửa"><i className="fa fa-edit" /></button></td>
                </tr>
                <tr>
                  <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                  <td>MT9835</td>
                  <td>Đặng Hoàng Phúc</td>
                  <td>Giường ngủ Jimmy, Bàn ăn mở rộng cao cấp Dolas, Ghế làm việc Zuno</td>
                  <td>3 </td>
                  <td>40.650.000 đ</td>
                  <td><span className="badge bg-success">Hoàn thành</span></td>
                  <td><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" /> </button>
                    <button className="btn btn-primary btn-sm edit" type="button" title="Sửa"><i className="fa fa-edit" /></button></td>
                </tr>
                <tr>
                  <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                  <td>ER3835</td>
                  <td>Nguyễn Thị Mỹ Yến</td>
                  <td>Bàn ăn mở rộng Gepa</td>
                  <td>1 </td>
                  <td>16.770.000 đ</td>
                  <td><span className="badge bg-info">Chờ thanh toán</span></td>
                  <td><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" /> </button>
                    <button className="btn btn-primary btn-sm edit" type="button" title="Sửa"><i className="fa fa-edit" /></button></td>
                </tr>
                <tr>
                  <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                  <td>AL3947</td>
                  <td>Phạm Thị Ngọc</td>
                  <td>Bàn ăn Vitali mặt đá, Ghế ăn gỗ Lucy màu trắng</td>
                  <td>2 </td>
                  <td>19.770.000 đ</td>
                  <td><span className="badge bg-warning">Đang giao hàng</span></td>
                  <td><button className="btn btn-primary btn-sm trash" type="button" title="Xóa"><i className="fas fa-trash-alt" /> </button>
                    <button className="btn btn-primary btn-sm edit" type="button" title="Sửa"><i className="fa fa-edit" /></button></td>
                </tr>
                <tr>
                  <td width={10}><input type="checkbox" name="check1" defaultValue={1} /></td>
                  <td>QY8723</td>
                  <td>Ngô Thái An</td>
                  <td>Giường ngủ Kara 1.6x2m</td>
                  <td>1 </td>
                  <td>14.500.000 đ</td>
                  <td><span className="badge bg-danger">Đã hủy</span></td>
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

export default ListBill
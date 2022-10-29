import React from 'react'

const HeaderAdmin = () => {
    return (
        <div>
            <div>
                <header className="app-header">
                    {/* Sidebar toggle button*/}<a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar" />
                    {/* Navbar Right Menu*/}
                    <ul className="app-nav">
                        {/* User Menu*/}
                        <li><a className="app-nav__item" href="/index.html"><i className="bx bx-log-out bx-rotate-180" /> </a>
                        </li>
                    </ul>
                </header>
                {/* Sidebar menu*/}
                <div className="app-sidebar__overlay" data-toggle="sidebar" />
                <aside className="app-sidebar">
                    <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="/images/hay.jpg" width="50px" alt="User Image" />
                        <div>
                            <p className="app-sidebar__user-name"><b>Võ Trường</b></p>
                            <p className="app-sidebar__user-designation">Chào mừng bạn trở lại</p>
                        </div>
                    </div>
                    <hr />
                    <ul className="app-menu">
                        <li><a className="app-menu__item haha" href="phan-mem-ban-hang.html"><i className="app-menu__icon bx bx-cart-alt" />
                            <span className="app-menu__label">POS Bán Hàng</span></a></li>
                        <li><a className="app-menu__item active" href="index.html"><i className="app-menu__icon bx bx-tachometer" /><span className="app-menu__label">Bảng điều khiển</span></a></li>
                        <li><a className="app-menu__item " href="table-data-table.html"><i className="app-menu__icon bx bx-id-card" /> <span className="app-menu__label">Quản lý nhân viên</span></a></li>
                        <li><a className="app-menu__item" href="#"><i className="app-menu__icon bx bx-user-voice" /><span className="app-menu__label">Quản lý khách hàng</span></a></li>
                        <li><a className="app-menu__item" href="table-data-product.html"><i className="app-menu__icon bx bx-purchase-tag-alt" /><span className="app-menu__label">Quản lý sản phẩm</span></a>
                        </li>
                        <li><a className="app-menu__item" href="table-data-oder.html"><i className="app-menu__icon bx bx-task" /><span className="app-menu__label">Quản lý đơn hàng</span></a></li>
                        <li><a className="app-menu__item" href="table-data-oder.html"><i className="app-menu__icon bx bx-category" /><span className="app-menu__label">Quản lý danh mục</span></a></li>

                        <li><a className="app-menu__item" href="table-data-banned.html"><i className="app-menu__icon bx bx-run" /><span className="app-menu__label">Quản lý nội bộ
                        </span></a></li>
                        <li><a className="app-menu__item" href="table-data-money.html"><i className="app-menu__icon bx bx-dollar" /><span className="app-menu__label">Bảng kê lương</span></a></li>
                        <li><a className="app-menu__item" href="quan-ly-bao-cao.html"><i className="app-menu__icon bx bx-pie-chart-alt-2" /><span className="app-menu__label">Báo cáo doanh thu</span></a>
                        </li>
                        <li><a className="app-menu__item" href="page-calendar.html"><i className="app-menu__icon bx bx-calendar-check" /><span className="app-menu__label">Lịch công tác </span></a></li>
                        <li><a className="app-menu__item" href="#"><i className="app-menu__icon bx bx-cog" /><span className="app-menu__label">Cài
                            đặt hệ thống</span></a></li>
                    </ul>
                </aside>
            </div>

        </div>
    )
}

export default HeaderAdmin
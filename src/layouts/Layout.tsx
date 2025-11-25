import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <header className="app-header">
        <div className="inner">
          <div className="brand">Lab 4</div>
          <nav className="nav">
            <NavLink to="/lab">Trang chủ</NavLink>
            <NavLink to="/lab/about">Giới thiệu</NavLink>
            <NavLink to="/lab/users/123">Người dùng 123</NavLink>
            <NavLink to="/">Đăng nhập</NavLink>
            <NavLink to="/dashboard">Bảng điều khiển</NavLink>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}
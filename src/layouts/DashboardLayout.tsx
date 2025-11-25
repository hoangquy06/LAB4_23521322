import { Outlet, NavLink } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div>
      <header className="app-header">
        <div className="inner">
          <div className="brand">BlogDash</div>
          <nav className="nav">
            <NavLink to="/dashboard">Nội dung</NavLink>
            <NavLink to="/dashboard/posts">Bài viết</NavLink>
            <NavLink to="/dashboard/section/1">Phần 1</NavLink>
            <NavLink to="/dashboard/section/2">Phần 2</NavLink>
            <NavLink to="/dashboard/section/3">Phần 3</NavLink>
            <NavLink to="/dashboard/section/4">Phần 4</NavLink>
            <NavLink to="/dashboard/section/5">Phần 5</NavLink>
            <NavLink to="/dashboard/section/6">Phần 6</NavLink>
            <NavLink to="/dashboard/section/7">Phần 7</NavLink>
            <NavLink to="/dashboard/section/8">Phần 8</NavLink>
          </nav>
        </div>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}
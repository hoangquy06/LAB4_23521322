import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

type Post = { id: number; title: string; body: string }

const viPosts: Record<number, { title: string; body: string }> = {
  1: { title: 'Giới thiệu về React Router', body: 'React Router cho phép cấu hình đường dẫn, nested routes, và điều hướng linh hoạt. Bài viết này giúp bạn khởi đầu nhanh với v6.' },
  2: { title: 'Hướng dẫn sử dụng useEffect', body: 'useEffect là “cửa thoát” để đồng bộ với hệ thống bên ngoài. Hãy nhớ cleanup để tránh rò rỉ và hiểu Strict Mode.' },
  3: { title: 'Quản lý form trong React', body: 'Controlled giúp kiểm soát dữ liệu nhập, Uncontrolled nhẹ hơn về hiệu năng. Chọn tuỳ ngữ cảnh.' },
  4: { title: 'So sánh fetch và axios', body: 'fetch cần kiểm tra res.ok, axios tự bắt lỗi HTTP. Hiểu khác biệt để chọn đúng công cụ.' },
  5: { title: 'Xây dựng Protected Route', body: 'Dùng wrapper với Outlet/Navigate để bảo vệ trang. Tránh race với loader bằng cách đồng bộ nguồn xác thực.' },
  6: { title: 'Hiểu về Context API', body: 'Giảm prop drilling, nhưng lưu ý hiệu năng khi trạng thái lớn và thường xuyên thay đổi.' },
  7: { title: 'Tạo custom hook useLocalStorage', body: 'Chia sẻ logic đọc/ghi localStorage, trả về cặp [value, setValue] giống useState.' },
  8: { title: 'Chi tiết bài viết và useParams', body: 'Đọc tham số từ URL để fetch chi tiết theo ID. Tối ưu UI khi tải/ lỗi/ không có dữ liệu.' },
  9: { title: 'Tối ưu hoá UI theo thực tiễn', body: 'Sử dụng card, grid, badge đếm; nội dung ngắn gọn, dễ đọc, tránh overload.' },
  10: { title: 'Tổng kết dự án BlogDash', body: 'Kết hợp các khái niệm: router, context, hooks, và bảo vệ route để tạo dashboard hoàn chỉnh.' },
}

export default function PostDetail() {
  const { postId } = useParams()
  const { data, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
  )

  if (loading)
    return (
      <div className="container">
        <article className="card skeleton skeleton-card" />
        <div className="skeleton skeleton-line" style={{ width: '80%' }} />
        <div className="skeleton skeleton-line" style={{ width: '95%' }} />
        <div className="skeleton skeleton-line" style={{ width: '60%' }} />
      </div>
    )
  if (error) return <div className="container">Lỗi: {error.message}</div>
  if (!data) return <div className="container">Không có dữ liệu</div>

  const id = Number(postId)
  const vi = viPosts[id]
  const title = vi?.title ?? data.title
  const body = vi?.body ?? data.body

  return (
    <article className="container">
      <h1>📄 {title}</h1>
      <p>{body}</p>
    </article>
  )
}
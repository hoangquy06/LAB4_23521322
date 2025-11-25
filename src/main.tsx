import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/Login.tsx'
import DashboardLayout from './layouts/DashboardLayout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import PostDetail from './pages/PostDetail.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import Layout from './layouts/Layout.tsx'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import UserProfile from './components/UserProfile.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import PostsIndex from './pages/PostsIndex.tsx'
import Section1 from './pages/sections/Section1.tsx'
import Section2 from './pages/sections/Section2.tsx'
import Section3 from './pages/sections/Section3.tsx'
import Section4 from './pages/sections/Section4.tsx'
import Section5 from './pages/sections/Section5.tsx'
import Section6 from './pages/sections/Section6.tsx'
import Section7 from './pages/sections/Section7.tsx'
import Section8 from './pages/sections/Section8.tsx'

const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'posts', element: <PostsIndex /> },
      { path: 'section/1', element: <Section1 /> },
      { path: 'section/2', element: <Section2 /> },
      { path: 'section/3', element: <Section3 /> },
      { path: 'section/4', element: <Section4 /> },
      { path: 'section/5', element: <Section5 /> },
      { path: 'section/6', element: <Section6 /> },
      { path: 'section/7', element: <Section7 /> },
      { path: 'section/8', element: <Section8 /> },
      { path: 'post/:postId', element: <PostDetail /> },
    ],
  },
  {
    path: '/lab',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'users/:userId', element: <UserProfile /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

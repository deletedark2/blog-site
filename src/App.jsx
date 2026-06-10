import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PostGrid from './components/PostGrid'
import PostDetail from './components/PostDetail'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage'
import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <PostGrid />
      <Newsletter />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar /><main><Home /></main><Footer /></>} />
        <Route path="/post/:id" element={<><Navbar /><main><PostDetail /></main><Footer /></>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

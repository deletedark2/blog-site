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
import StaticPage from './pages/StaticPage'
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

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/post/:id" element={<Layout><PostDetail /></Layout>} />
        <Route path="/babaniz" element={<Layout><StaticPage slug="babaniz" /></Layout>} />
        <Route path="/burda" element={<Layout><StaticPage slug="burda" /></Layout>} />
        <Route path="/ayik" element={<Layout><StaticPage slug="ayik" /></Layout>} />
        <Route path="/olun" element={<Layout><StaticPage slug="olun" /></Layout>} />
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

import { Routes, Route } from 'react-router-dom';
import BlogIndex from './Pages/Blog/BlogIndex';
import BlogPost from './Pages/Blog/BlogPost';
import Navbar from './components/Navbar/Navbar'
import AuthProvider from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <>
        <Navbar />
        <Routes>
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

      </>
    </AuthProvider>
  )
}
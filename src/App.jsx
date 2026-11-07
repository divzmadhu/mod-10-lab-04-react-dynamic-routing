import { Routes, Route } from 'react-router-dom';
import BlogIndex from './Pages/Blog/BlogIndex';
import BlogPost from './Pages/Blog/BlogPost';
import Navbar from './components/Navbar/Navbar'
import AuthProvider from './context/AuthContext';
import Login from './Pages/Login';
import Admin from './Pages/Admin';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './App.css'

export default function App() {
  return (
    <AuthProvider>
      <div className="app-container">

        <Navbar />
        <Routes>
          <Route path="/blog" element={<BlogIndex />} />

          <Route
            path="/blog/:slug"
            element={
              <ProtectedRoute>
                <BlogPost />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          {/* Display a message for undefined routes */}
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>


      </div>
    </AuthProvider>
  )
}
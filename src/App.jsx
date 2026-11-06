import { Routes, Route } from 'react-router-dom';
import BlogIndex from './Pages/Blog/BlogIndex';

export default function App(){
  return(
    <Routes>
      <Route path="/blog" element={<BlogIndex/>} />
    </Routes>
  )
}
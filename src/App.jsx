import { Routes, Route } from 'react-router-dom';
import BlogIndex from './Pages/Blog/BlogIndex';
import BlogPost from './Pages/Blog/BlogPost';

export default function App(){
  return(
    <Routes>
      <Route path="/blog/" element={<BlogIndex/>} />
       <Route path="/blog/:slug" element={<BlogPost/>} />
    </Routes>
  )
}
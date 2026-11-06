import { Routes, Route } from 'react-router-dom'

export default function App(){
  return(
    <Routes>
      <Route path="/blog" element={<h1>Blog Home</h1>} />
    </Routes>
  )
}
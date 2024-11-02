
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'



function App() {

  return (
    <>
    <div>
      <Navbar />
      <Home />
        {/*<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
        </Routes>*/}
      </div>
    </>
  )
}

export default App

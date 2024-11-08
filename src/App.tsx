
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import { Casestudy_page } from './components/casestudy/page'
import Aboutus_page from './components/aboutus/page'



function App() {

  return (
    <>
    <div>
    
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus_page />} />
          <Route path="/casestudy" element={<Casestudy_page />} />
          {/*<Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />*/}
        </Routes>
      </div>
    </>
  )
}

export default App

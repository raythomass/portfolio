import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

function App() {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
    <div className='pages'>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/about'
          element={<About/>}
        />
        <Route
          path='/projects'
          element={<Projects/>}
        />
        <Route
          path='/contact'
          element={<Contact/>}
        />
        <Route
          path='/resume'
          element={<Resume/>}
        />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/Projects" element={<Projects />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App

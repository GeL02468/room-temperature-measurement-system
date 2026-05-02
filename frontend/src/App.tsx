import { BrowserRouter as BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import * as word from '../word.json'
import InsideInfo from './InsideInfo.tsx'

function App() {
  return (
    <>
      <h1>
        <span></span>
        {word.title}
      </h1>
      <BrowserRouter>
        <div className="header-items">
          <nav>
            <Link to="/Inside" className="header-item">気温情報</Link>
            <Link to="/Inside" className="header-item">湿度情報</Link>
            <Link to="/Inside" className="header-item">気圧情報</Link>
            <Link to="/Inside" className="header-item">設定</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/Inside" element={<InsideInfo />} />
        </Routes>  
      </BrowserRouter>
    </>
  )
}
export default App

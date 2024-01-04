import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import KondisiFisik from './pages/kondisi_fisik';
import Kesadaran from './pages/kesadaran';
import Mobilitas from './pages/mobilitas';
import Aktivitas from './pages/aktivitas';
import Inkontinesia from './pages/inkontinesia';
import Result from './pages/result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/kondisi-fisik" element={<KondisiFisik />}/>
        <Route path="/kesadaran" element={<Kesadaran />}/>
        <Route path="/mobilitas" element={<Mobilitas />}/>
        <Route path="/aktivitas" element={<Aktivitas />}/>
        <Route path="/inkontinesia" element={<Inkontinesia />}/>
        <Route path="/result" element={<Result />}/>
      </Routes>
    </Router>
  )
}

export default App;

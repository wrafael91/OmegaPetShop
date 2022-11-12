import './App.css';
import Home from './pages/admin/home';
import {Routes, Route, Link} from "react-router-dom"
import Login from './pages/auth/login';

function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;

import './App.css';
import Home from './pages/admin/home';
import {Routes, Route, Link} from "react-router-dom"
import Login from './pages/auth/login';
import PrivateRoute from './config/auth';

function App() {
  return (
    <Routes>
      <Route path="" element={<PrivateRoute><Home/></PrivateRoute>} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;

import './App.css';
import Home from './pages/admin/home';
import {Routes, Route, Link} from "react-router-dom"
import PrivateRoute from './config/auth';
import Admin from './pages/admin';
import UpdateUsuario from './pages/admin/update-usuario';
import Login from './pages/login';

function App() {
  return (
    <Routes>
      {/* <Route path="" element={<PrivateRoute><Home/></PrivateRoute>} /> */}
      <Route 
        path="/admin" 
        element={<Admin />} 
      >
        
        <Route path='usuario' element={<UpdateUsuario/>}/>
      </Route>  
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
}

export default App;

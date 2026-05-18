 import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';

    function setToken(userToken){
      sessionStorage.setItem('token', JSON.stringify(userToken));
    }
    function getToken(){
  const tokenString = sessionStorage.getItem('token');
  if (!tokenString) {
    return null;
  }
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
    }

function App() {
    // const [token, setToken] = useState();
    const token = getToken();


  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// export default function App() {
//   return <h1>Hello World</h1>
// }

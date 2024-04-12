import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DashBord from './pages/DashBord';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

export const LoginContext = React.createContext();

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return (
    <div className="App">
      <LoginContext.Provider value={{ isLogIn: isLogIn, setIsLogIn: setIsLogIn }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate replace to="/login" />} />
            <Route path='/' element={<MainPage />}>
              <Route path='login' element={<LoginPage isLogIn={isLogIn} />} />
              <Route path='signin' element={<SignUpPage />} />
              <Route path='dashbord' element={<DashBord />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>

    </div>
  );
}

export default App;

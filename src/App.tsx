import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import LoginPage from './components/login/login-form';
import Header from './components/layout/Header';
import Main from './components/Main/main';

function App() {
  const atk = localStorage.getItem('atk')
  // useEffect(() => {
  //   if (atk && location.pathname !== '/login' && location.pathname !== '/') {
  //     navigate("/menu-items"); 
  //   } else {
  //     navigate("/login");
  //     localStorage.clear();
  //   }
  // }, [atk, location.pathname, navigate]);
  return (
    <main className="App">
      <Main />
      <Suspense fallback={<div><div className="loader-wrapper">
        <div className="lds-dual-ring"></div>
      </div></div>}>
        <BrowserRouter>
          {/* <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes> */}
        </BrowserRouter>
      </Suspense>

    </main>

  );
}

export default App;

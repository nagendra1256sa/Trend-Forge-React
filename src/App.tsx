import React, { Suspense } from 'react';
import './App.css';
import { Navigate, Route, Routes, } from 'react-router-dom';
import LoginPage from './components/login/login-form';
import Main from './components/Main/main';
import Dashboard from './components/dashboard/dashboardPage';
import { ClientList } from './components/client-engagement/client-engagement-list';

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
          <Suspense fallback={<div><div className="loader-wrapper">
        <div className="lds-dual-ring"></div>
      </div></div>}>
          <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/client-engagement" element={<Main><ClientList/></Main>}/>
          </Routes>
          </Suspense>
       
        </main>
  );
}

export default App;

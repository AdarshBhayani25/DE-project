import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Department from './pages/Department';
import DepartmentDetail from './pages/DepartmentDetail';
// import Campus from './pages/Campus';
import Faculty from './pages/Faculty';
import FacultyProfile from './pages/FacultyProfile';
// import AboutUs from './pages/AboutUs';
// import Profile from './pages/Profile';
import Layout from './components/Layout';
import Campus from './pages/Campus';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="department">
            <Route index element={<Department />} />
            <Route path=":deptId" element={<DepartmentDetail />} />
          </Route>
          <Route path="faculty">
            <Route index element={<Faculty />} />
            <Route path=":id" element={<FacultyProfile />} />
          </Route>
          <Route path="campus">
            <Route index element={<Campus />} />
            
          </Route>
        </Route>
      </Routes>
  );
}

export default App;

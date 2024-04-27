import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Department from './pages/Department';
import DepartmentDetail from './pages/DepartmentDetail';
// import Campus from './pages/Campus';
import Faculty from './pages/Faculty';
import FacultyProfile from './pages/FacultyProfile';
// import AboutUs from './pages/AboutUs';
// import Profile from './pages/Profile';
import Layout from './components/Layout';
import AdminPage from './pages/AdminPage';
import DepartmentPage from './pages/DepartmentPage';
import FacultyPage from './pages/FacultyPage';

const App = () => {
  const departments = [
    { id: 'A', name: 'Administrative Block', image: '/images/admin-block.jpg' },
    { id: 'B', name: 'Information Technology', image: '/images/it-block.jpg' },
    { id: 'C', name: 'Electrical Engineering', image: '/images/mechanical-block.jpg' },
    { id: 'D', name: 'Computer Science', image: '/images/electrical-block.jpg', tour: 'https://www.vgecg.ac.in/virtual_tour/computer/computer.html' },
    { id: 'E', name: 'Gym Khana', image: '/images/civil-block.jpg' },
    { id: 'F', name: 'Electronics & Communication', image: '/images/chemical-block.jpg' },
    { id: 'G', name: 'Aerospace Engineering', image: '/images/aerospace-block.jpg' },
    { id: 'H', name: 'Environmental Engineering', image: '/images/environmental-block.jpg' },
    { id: 'I', name: 'Biotechnology', image: '/images/biotech-block.jpg' },
    { id: 'J', name: 'Nuclear Engineering', image: '/images/nuclear-block.jpg' },
    { id: 'K', name: 'Materials Science', image: '/images/materials-block.jpg' },
    { id: 'L', name: 'Robotics', image: '/images/robotics-block.jpg' },
    { id: 'M', name: 'Mechanical Engineering', image: '/images/physics-block.jpg' },
    { id: 'N', name: 'Mathematics and Statistics', image: '/images/math-block.jpg' },
    { id: 'Library', name: 'Central Library', image: '/images/library.jpg' }
  ];

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Admin'>
            <Route index element={<AdminPage />} />
            <Route path='add-department' element={<DepartmentPage />} />
            <Route path='add-faculty' element={<FacultyPage />} />
          </Route>
          <Route path="department">
            <Route index element={<Department departments={departments}/>} />
            <Route path=":deptId">
              <Route index element={<DepartmentDetail departments={departments} />} />
            </Route>
          </Route>
          <Route path="faculty">
            <Route index element={<Faculty />} />
            <Route path=":id" element={<FacultyProfile />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;

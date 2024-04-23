import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Department from './pages/Department';
import DepartmentDetail from './pages/DepartmentDetail';
// import Campus from './pages/Campus';
import Faculty from './pages/Faculty';
// import AboutUs from './pages/AboutUs';
// import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/department" element={<Department />} />
          <Route path="/department/:deptId" element={<DepartmentDetail />} />
          <Route path="/faculty" element={<Faculty />} />
          {/* <Route path="/campus" element={<Campus />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Department from './pages/Department';
import DepartmentDetail from './pages/DepartmentDetail';
import Faculty from './pages/Faculty';
import FacultyProfile from './pages/FacultyProfile';
// import Profile from './pages/Profile';
import Layout from './components/Layout';
import AdminPage from './pages/AdminPage';
import DepartmentPage from './pages/DepartmentPage';
import FacultyPage from './pages/FacultyPage';
import Campus from './pages/Campus';
import RequireAuth from './pages/RequireAuth';
import Missing from './pages/Missing';
import Login from './pages/Login';
import Register from './pages/Register';
import PersistLogin from './pages/PersistLogin';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

const App = () => {
  return (
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="/" element={<Layout />}>
          <Route element={<PersistLogin />} >
            <Route element={<RequireAuth allowedRoles={[ROLES.User,ROLES.Faculty]} />} >
              <Route path='/' element={<Home />} />

              <Route path="/department">
                <Route index element={<Department />} />
                <Route path=":deptId">
                  <Route index element={<DepartmentDetail />} />
                </Route>
              </Route>

              <Route path="/faculty">
                <Route index element={<Faculty />} />
                <Route path=":id" element={<FacultyProfile />} />
              </Route>

              <Route path="/campus" element={<Campus />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path='/Admin'>
                <Route index element={<AdminPage />} />
                <Route path='add-department' element={<DepartmentPage />} />
                <Route path='add-faculty' element={<FacultyPage />} />
              </Route>
            </Route>

            <Route path="*" element={<Missing />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;

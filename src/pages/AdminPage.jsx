import React from 'react';
import { Link } from 'react-router-dom';

const AdminPage = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Page</h2>
      <Link to="add-department" className="text-blue-500 hover:underline mr-4">Add Department</Link>
      <Link to="add-faculty" className="text-blue-500 hover:underline">Add Faculty</Link>
    </div>
  );
};

export default AdminPage;

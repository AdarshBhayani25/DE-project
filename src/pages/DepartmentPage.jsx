import React, { useState } from 'react';
import axios from 'axios';

const DepartmentPage = () => {
  const [department, setDepartment] = useState({
    id: '',
    name: '',
    image: ''
  });

  const handleDepartmentSubmit = async () => {
    try {
      await axios.post('http://localhost:3001/api/departments', department);
      alert('Department created successfully');
    } catch (err) {
      alert('Failed to create department');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create Department</h2>
      <input
        type="text"
        placeholder="Department ID"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        onChange={(e) => setDepartment({ ...department, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department Name"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        onChange={(e) => setDepartment({ ...department, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        onChange={(e) => setDepartment({ ...department, image: e.target.value })}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleDepartmentSubmit}
      >
        Submit Department
      </button>
    </div>
  );
};

export default DepartmentPage;

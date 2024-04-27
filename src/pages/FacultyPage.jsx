import React, { useState } from 'react';
import axios from 'axios';

const FacultyPage = () => {
  const [faculty, setFaculty] = useState();

  const handleFacultySubmit = async () => {
    try {
      await axios.post('http://localhost:3001/api/faculties', faculty);
      alert('Faculty created successfully');
    } catch (err) {
      alert('Failed to create faculty');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create Faculty</h2>
      <input
        type="text"
        placeholder="Faculty Name"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        onChange={(e) => setFaculty({ ...faculty, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Department"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        onChange={(e) => setFaculty({ ...faculty, department: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image URL"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
        onChange={(e) => setFaculty({ ...faculty, image: e.target.value })}
      />
      {/* Add other input fields for faculty details */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleFacultySubmit}
      >
        Submit Faculty
      </button>
    </div>
  );
};

export default FacultyPage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import departments from '../Data/DepartmentData';

function Department() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12"> {/* Added pb-12 for bottom padding */}
      <h1 className="text-3xl font-bold text-left pt-6 pb-4">Departments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {departments.map((dept) => (
          <div key={dept.id} className="border border-gray-200 shadow-lg p-4 cursor-pointer"
               onClick={() => navigate(`/department/${dept.id.toLowerCase()}`)}>
            <img src={dept.image} alt={dept.name} className="w-full h-48 object-cover" />
            <h2 className="text-xl mt-2">{`Block ${dept.id} - ${dept.name}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Department;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Department() {
  const navigate = useNavigate();
  const departments = [
    { id: 'A', name: 'Administrative Block', image: '/images/admin-block.jpg' },
    { id: 'B', name: 'Information Technology', image: '/images/it-block.jpg' },
    { id: 'C', name: 'Electrical Engineering', image: '/images/mechanical-block.jpg' },
    { id: 'D', name: 'Computer Science', image: '/images/electrical-block.jpg' },
    { id: 'E', name: 'Civil Engineering', image: '/images/civil-block.jpg' },
    { id: 'F', name: 'Chemical Engineering', image: '/images/chemical-block.jpg' },
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
    <div className="max-w-7xl mx-auto px-4">
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

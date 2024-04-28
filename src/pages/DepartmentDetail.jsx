import React from 'react';
import { useParams } from 'react-router-dom';
import Faculty from '../components/Faculty_dept';
import BlockInfo from '../components/BlockInfo';
import VirtualTour from '../components/VirtualTour';
import departments from '../Data/DepartmentData';

function DepartmentDetail() {
  const { deptId } = useParams();
  const department = departments.find((dept) => dept.id.toLowerCase() === deptId.toLowerCase());

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Block {department.id.toUpperCase()}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href={department.tour} target='_blank' className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Virtual Tour</h2>
          <VirtualTour />
        </a>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Faculty</h2>
          <Faculty />
        </div>
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Block Info</h2>
          <BlockInfo />
        </div>
      </div>
    </section>
  );
}

export default DepartmentDetail;

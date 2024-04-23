import React from 'react';
import { useParams } from 'react-router-dom';
import Faculty from './department/Faculty';
import BlockInfo from './department/BlockInfo';
import VirtualTour from './department/VirtualTour';

function DepartmentDetail() {
  const { deptId } = useParams();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Block {deptId.toUpperCase()}</h1>
      <div className="grid grid-row-3 gap-4">
        <div className="bg-blue-100 p-4">
          <Faculty />
        </div>
        <div className="bg-green-100 p-4">
          <BlockInfo />
        </div>
        <div className="bg-yellow-100 p-4">
          <VirtualTour />
        </div>
      </div>
    </div>
  );
}

export default DepartmentDetail;

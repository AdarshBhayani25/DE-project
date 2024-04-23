import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Horizontally Scrollable Row for College Photos */}
      <div className="flex overflow-x-auto py-8 gap-4 scrollbar-hide">
        <img src="/path/to/image1.jpg" alt="College View 1" className="min-w-[250px] sm:min-w-[300px] md:min-w-[340px]" />
        <img src="/path/to/image2.jpg" alt="College View 2" className="min-w-[250px] sm:min-w-[300px] md:min-w-[340px]" />
        <img src="/path/to/image3.jpg" alt="College View 3" className="min-w-[250px] sm:min-w-[300px] md:min-w-[340px]" />
        <img src="/path/to/image4.jpg" alt="College View 4" className="min-w-[250px] sm:min-w-[300px] md:min-w-[340px]" />
        <img src="/path/to/image5.jpg" alt="College View 5" className="min-w-[250px] sm:min-w-[300px] md:min-w-[340px]" />
      </div>

      {/* Three Columns for Faculty, College, Department */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
        <div className="bg-blue-100 p-4 text-center shadow-md cursor-pointer"
             onClick={() => navigate('/faculty')}>
          <h2 className="font-bold text-xl">Faculty</h2>
          <p>Details about the faculty, achievements, and more.</p>
        </div>
        <div className="bg-green-100 p-4 text-center shadow-md cursor-pointer"
             onClick={() => navigate('/campus')}>
          <h2 className="font-bold text-xl">College</h2>
          <p>General information about the college, history, and mission.</p>
        </div>
        <div className="bg-red-100 p-4 text-center shadow-md cursor-pointer"
             onClick={() => navigate('/department')}>
          <h2 className="font-bold text-xl">Department</h2>
          <p>Information on various departments, programs offered, and more.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

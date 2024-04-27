import { Link } from 'react-router-dom';

const ThreeSections = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
      {/* Department */}
      <div className="bg-red-100 p-8 text-center rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <Link to='/department' className="block"><h2 className="font-bold text-2xl mb-4">Department</h2></Link>
        <p className="text-gray-700">Find information on various departments, programs offered, and more.</p>
      </div>
      {/* Faculty */}
      <div className="bg-blue-100 p-8 text-center rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <Link to='/faculty' className="block"><h2 className="font-bold text-2xl mb-4">Faculty</h2></Link>
        <p className="text-gray-700">Explore details about the faculty, achievements, and more.</p>
      </div>
      {/* College Campus */}
      <div className="bg-green-100 p-8 text-center rounded-lg shadow-md transform transition duration-300 hover:scale-105">
        <Link to='/campus' className="block"><h2 className="font-bold text-2xl mb-4">College Campus</h2></Link>
        <p className="text-gray-700">Discover general information about the college, history, and mission.</p>
      </div>
    </section>
  )
}

export default ThreeSections;
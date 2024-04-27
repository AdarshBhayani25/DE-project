// import React, { useState, useEffect } from 'react';
// import facultyMembers from '../Data/facultyData'; // path might vary
// import { useParams } from 'react-router-dom';

// function FacultyProfile({ match }) {
//     const [faculty, setFaculty] = useState(null);
//     const [isAvailable, setIsAvailable] = useState(false);
//     const { id } = useParams();
//     useEffect(() => {
//         const facultyData = facultyMembers.find(f => f.id === parseInt(id));
//         if (facultyData) {
//             setFaculty(facultyData);
//             setIsAvailable(facultyData.availability);
//           }
//     }, [id]);

//     const toggleAvailability = () => {
//         setIsAvailable(!isAvailable);
//         // Update backend if used
//     };

//     if (!faculty) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container mx-auto p-6 bg-white shadow rounded-lg">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">{faculty.name}</h1>
//         <button onClick={toggleAvailability} className={`px-4 py-2 rounded text-white ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}>
//             {isAvailable ? 'Available' : 'Not Available'}
//         </button>

//         {/* First Row */}
//         <div className="grid grid-cols-3 gap-6 mt-6">
//             {/* Faculty Image */}
//             <div className="bg-gray-100 p-4 rounded shadow">
//                 <img src={faculty.image} alt={faculty.name} className="w-full h-64 object-cover rounded" />
//             </div>
//             {/* Faculty Information */}
//             <div className="col-span-1 bg-blue-100 p-4 rounded shadow">
//                 <h2 className="text-xl font-semibold mb-2">About</h2>
//                 <p>{faculty.bio}</p>
//             </div>
//             {/* Directions */}
//             <div className="col-span-1 bg-yellow-100 p-4 rounded shadow">
//                 <h2 className="text-xl font-semibold mb-2">Directions</h2>
//                 <p>Directions to {faculty.cabin} (Implement mapping if needed).</p>
//             </div>
//         </div>

//         {/* Second Row */}
//         <div className="grid grid-cols-2 gap-6 mt-6">
//             {/* Cabin Information */}
//             <div className="bg-green-100 p-4 rounded shadow">
//                 <img src={faculty.officeImg} alt={`Office ${faculty.cabin}`} className="w-full h-48 object-cover rounded mb-2" />
//                 <p className="font-bold">Cabin Number: {faculty.cabin}</p>
//             </div>
//             {/* Time Table */}
//             <div className="bg-purple-100 p-4 rounded shadow">
//                 <h3 className="text-xl font-semibold mb-2">Timetable</h3>
//                 <ul>
//                     {faculty.timetable.map((session, index) => (
//                         <li key={index} className="mb-1">{`${session.day}: ${session.time} - ${session.subject}`}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     </div>
//     );
// }

// export default FacultyProfile;





















import React, { useState, useEffect } from 'react';
import facultyMembers from '../Data/facultyData'; // path might vary
import { useParams } from 'react-router-dom';

function FacultyProfile() {
    const [faculty, setFaculty] = useState(null);
    const [isAvailable, setIsAvailable] = useState(false);
    const { id } = useParams();

    console.log('Rendering FacultyProfile component'); 

    useEffect(() => {
        console.log('id:', id);
    }, [id]);
    
    useEffect(() => {
        const facultyData = facultyMembers.find(f => f.id === parseInt(id));
        if (facultyData) {
            setFaculty(facultyData);
            setIsAvailable(facultyData.availability);
        }
    }, [id]);

    const toggleAvailability = () => {
        setIsAvailable(!isAvailable);
        // Update backend if used
    };

    if (!faculty) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6 bg-white shadow rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{faculty.name}</h1>
            <button onClick={toggleAvailability} className={`px-4 py-2 rounded text-white ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}>
                {isAvailable ? 'Available' : 'Not Available'}
            </button>

            {/* First Row */}
            <div className="grid grid-cols-3 gap-6 mt-6">
                {/* Faculty Image */}
                <div className="bg-gray-100 p-4 rounded shadow flex justify-center items-center">
                    <img src={faculty.image} alt={faculty.name} className="w-64 h-64 bg-center object-cover rounded " />
                </div>
                {/* Faculty Information */}
                <div className="col-span-1 bg-blue-100 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">About</h2>
                    <p>{faculty.bio}</p>
                </div>
                {/* Directions */}
                <div className="col-span-1 bg-yellow-100 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-2">Directions</h2>
                    <p>Directions to {faculty.cabin} (Implement mapping if needed).</p>
                </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 gap-6 mt-6">
                {/* Cabin Information */}
                <div className="bg-green-100 p-4 rounded shadow">
                    <img src={faculty.officeImg} alt={`Office ${faculty.cabin}`} className="w-full h-48 object-cover rounded mb-2" />
                    <p className="font-bold">Cabin Number: {faculty.cabin}</p>
                </div>
                {/* Time Table */}
                <div className="bg-purple-100 p-4 rounded shadow">
                    <h3 className="text-xl font-semibold mb-2">Timetable</h3>
                    <ul>
                        {faculty.timetable.map((session, index) => (
                            <li key={index} className="mb-1">{`${session.day}: ${session.time} - ${session.subject}`}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FacultyProfile;


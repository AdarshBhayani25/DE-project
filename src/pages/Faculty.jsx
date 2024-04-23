import React, { useState } from 'react';
import facultyMembers from '../Data/facultyData';

function FacultyPage() {
    const [selectedDept, setSelectedDept] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const departments = Array.from(new Set(facultyMembers.map(faculty => faculty.department)));

    const filteredFaculty = facultyMembers
        .filter(faculty => faculty.department.includes(selectedDept))
        .filter(faculty => faculty.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="flex p-4">
            <div className="w-3/4 pr-4">
                <input
                    type="text"
                    placeholder="Search faculty..."
                    className="mb-4 p-2 border border-gray-300"
                    onChange={e => setSearchQuery(e.target.value)}
                />
                {departments.map(dept => (
                    <div key={dept}>
                        <h3 className="font-bold text-lg">{dept}</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {filteredFaculty.filter(faculty => faculty.department === dept).map(faculty => (
                                <div key={faculty.id} className="p-2 border border-gray-200">
                                    <img src={faculty.image} alt={faculty.name} className="w-full h-32 object-cover" />
                                    <p className="mt-2">{faculty.name}</p>
                                    <p className="text-sm">{faculty.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-1/4">
                <h3 className="font-bold text-lg mb-4">Departments</h3>
                <ul>
                    {departments.map(dept => (
                        <li key={dept} className="cursor-pointer hover:text-blue-500"
                            onClick={() => setSelectedDept(dept)}>
                            {dept}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default FacultyPage;

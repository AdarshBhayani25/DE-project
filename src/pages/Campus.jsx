import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function Campus() {
    const navigate = useNavigate(); // Hook for navigation

    // Function to handle navigation
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-left mb-6">College Campus</h1>
            
            {/* Campus Map Image */}
            <div className="flex justify-center">
                <img src="https://www.vgecg.ac.in/images/sitemap.jpg" alt="Campus Map" className="md:w-1/2 mb-8 shadow-lg"/>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Photo Gallery */}
                <div className="bg-blue-200 p-4 text-center cursor-pointer" onClick={() => handleNavigate('/gallery')}>
                    <h2 className="font-bold text-xl">Photo Gallery</h2>
                    <p>A visual journey through our vibrant campus.</p>
                </div>

                {/* Hostel */}
                <div className="bg-green-200 p-4 text-center cursor-pointer" onClick={() => handleNavigate('/hostel')}>
                    <h2 className="font-bold text-xl">Hostel</h2>
                    <p>Comfortable and secure living for students.</p>
                </div>

                {/* Library */}
                <div className="bg-red-200 p-4 text-center cursor-pointer" onClick={() => handleNavigate('/library')}>
                    <h2 className="font-bold text-xl">Library</h2>
                    <p>Extensive collections and state-of-the-art study facilities.</p>
                </div>

                {/* Workshop */}
                <div className="bg-yellow-200 p-4 text-center cursor-pointer" onClick={() => handleNavigate('/workshop')}>
                    <h2 className="font-bold text-xl">Workshop</h2>
                    <p>Hands-on learning with cutting-edge tools and technology.</p>
                </div>
            </div>
        </div>
    );
}

export default Campus;

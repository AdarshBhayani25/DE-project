import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';

 // Import the Slider component

function Home() {
  // Settings for the slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true, // Ensures all slides have equal height
    responsive: [
      {
        breakpoint: 768, // Adjust as needed
        settings: {
          arrows: false,
        }
      }
    ]
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Slider {...settings}>
        <div className='p-4'>
          <img src="https://images.collegedunia.com/public/college_data/images/campusimage/1563873635camppus.jpg" alt="Image 1" className="mx-auto h-auto w-full" />
        </div>
        <div className='p-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonkQJB5BfyvNQ-alR44ZmkHFToYsgPnJGgQ&usqp=CAU" alt="Image 2" className="mx-auto h-auto w-full" />
        </div>
        <div className='p-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3w6nNMPApxFQbqyuCXY-27Dc74Hyghyw6kz17W_p6tuGFM5Tkvf7A8gtsxkTvUyUitBE&usqp=CAU" alt="Image 3" className="mx-auto h-auto w-full" />
        </div>
        <div className='p-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8FQPXd8dqVBbPZEVUrERbJEjdkwTt6Tj1g&usqp=CAU" alt="Image 4" className="mx-auto h-auto w-full" />
        </div>
      </Slider>


      {/* Three Columns for Faculty, College, Department */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
        {/* Department */}
        <div className="bg-red-100 p-4 text-center rounded-lg shadow-md">
          <Link to='/department' className="block"><h2 className="font-bold text-xl mb-2">Department</h2></Link>
          <p className="text-gray-700">Find information on various departments, programs offered, and more.</p>
        </div>
        {/* Faculty */}
        <div className="bg-blue-100 p-4 text-center rounded-lg shadow-md">
          <Link to='/faculty' className="block"><h2 className="font-bold text-xl mb-2">Faculty</h2></Link>
          <p className="text-gray-700">Explore details about the faculty, achievements, and more.</p>
        </div>
        {/* College Campus */}
        <div className="bg-green-100 p-4 text-center rounded-lg shadow-md">
          <Link to='/campus' className="block"><h2 className="font-bold text-xl mb-2">College Campus</h2></Link>
          <p className="text-gray-700">Discover general information about the college, history, and mission.</p>
         </div>
      </div>   
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-8">
        <div className="bg-blue-100 p-4 text-center shadow-md cursor-pointer"
             onClick={() => navigate('/faculty')}>
          <h2 className="font-bold text-xl">Faculty</h2>
          <p>Details about the faculty, achievements, and more.</p>
        </div>
        <div className="bg-green-100 p-4 text-center shadow-md cursor-pointer"
             onClick={() => navigate('/')}>
          <h2 className="font-bold text-xl">College</h2>
          <p>General information about the college, history, and mission.</p>
        </div>
        <div className="bg-red-100 p-4 text-center shadow-md cursor-pointer"
             onClick={() => navigate('/department')}>
          <h2 className="font-bold text-xl">Department</h2>
          <p>Information on various departments, programs offered, and more.</p>
        </div>
      </div>
      <AboutUs />
    </div>
  );
}

export default Home;

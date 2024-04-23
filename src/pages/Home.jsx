import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
 // Import the Slider component

function Home() {
  // Settings for the slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Adjust number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Smooth Image Carousel */}
      <div className="container mx-auto px-4 py-4">
      <Slider {...settings}>
        <div className='p-4'>
          <img src="https://images.collegedunia.com/public/college_data/images/campusimage/1563873635camppus.jpg" alt="Image 1" className="mx-auto" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className='p-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonkQJB5BfyvNQ-alR44ZmkHFToYsgPnJGgQ&usqp=CAU"></img>
        </div>
        <div className='p-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3w6nNMPApxFQbqyuCXY-27Dc74Hyghyw6kz17W_p6tuGFM5Tkvf7A8gtsxkTvUyUitBE&usqp=CAU" alt="Image 3" className="mx-auto" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className='p-4'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8FQPXd8dqVBbPZEVUrERbJEjdkwTt6Tj1g&usqp=CAU" alt="Image 4" className="mx-auto" style={{ width: "100%", height: "auto" }} />
        </div>
      </Slider>
    </div>

      {/* Three Columns for Faculty, College, Department */}
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
    </div>
  );
}

export default Home;

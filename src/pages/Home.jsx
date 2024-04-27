import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './ImageSlider';
import ThreeSections from './ThreeSections';
import AboutUs from './AboutUs';

const Home = () => {
  return (
<<<<<<< HEAD
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
      
     
=======
    <section className="max-w-7xl mx-auto px-4">
      <ImageSlider />
      <ThreeSections />
>>>>>>> 5251807844a156efc6669168b3ed4e3e11e0e814
      <AboutUs />
    </section>
  );
}

export default Home;

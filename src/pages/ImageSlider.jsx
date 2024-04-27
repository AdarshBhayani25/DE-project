import Slider from 'react-slick';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false, // Remove previous and next arrows
  };

  return (
    <Slider {...settings}>
      <section className="p-4">
        <img
          src="https://images.collegedunia.com/public/college_data/images/campusimage/1563873635camppus.jpg"
          alt="Image 1"
          className="mx-auto h-96 lg:h-80 object-cover"
        />
      </section>
      <section className="p-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonkQJB5BfyvNQ-alR44ZmkHFToYsgPnJGgQ&usqp=CAU"
          alt="Image 2"
          className="mx-auto h-96 lg:h-80 object-cover"
        />
      </section>
      <section className="p-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3w6nNMPApxFQbqyuCXY-27Dc74Hyghyw6kz17W_p6tuGFM5Tkvf7A8gtsxkTvUyUitBE&usqp=CAU"
          alt="Image 3"
          className="mx-auto h-96 lg:h-80 object-cover"
        />
      </section>
      <section className="p-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ8FQPXd8dqVBbPZEVUrERbJEjdkwTt6Tj1g&usqp=CAU"
          alt="Image 4"
          className="mx-auto h-96 lg:h-80 object-cover"
        />
      </section>
    </Slider>
  );
};

export default ImageSlider;

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './ImageSlider';
import ThreeSections from './ThreeSections';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto px-4">
      <ImageSlider />
      <ThreeSections />
      <AboutUs />
    </section>
  );
}

export default Home;

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from '../components/ImageSlider';
import ThreeSections from '../components/ThreeSections';
import AboutUs from '../components/AboutUs';

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

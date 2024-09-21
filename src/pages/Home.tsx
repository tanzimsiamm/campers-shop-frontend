import BestSellingProducts from "../components/ui/home/BestSellingProducts";
import CategoriesSection from "../components/ui/home/CategoriesSection";
import FaqSection from "../components/ui/home/FaqSection";
import FeaturedProducts from "../components/ui/home/FeaturedProducts";
import HeroSection from "../components/ui/home/HeroSection";
import TestimonialsSection from "../components/ui/home/TestimonialSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BestSellingProducts />
      <CategoriesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <FaqSection />
    </>
  );
};

export default Home;

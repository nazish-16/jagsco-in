import About from '@/Components/About';
import Accomplishments from '@/Components/Accomplishments';
import Brands from '@/Components/Brands';
import Context from '@/Components/Context';
import Homepage from '@/Components/Homepage';
import ImageSlider from '@/Components/ImageSlider';
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer';
import Contact from '@/Components/Contact';

export default function Home() {
  return (
    <div>
      <main className="background">
        <Navbar />
        <Homepage />
      </main>
      <Context />
      <About />
      <ImageSlider />
      <Brands />
      <Accomplishments />
      <Contact />
      <Footer />
    </div>
  );
}

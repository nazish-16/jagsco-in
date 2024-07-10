import About from '@/Components/About';
import Brands from '@/Components/Brands';
import Context from '@/Components/Context';
import Homepage from '@/Components/Homepage';
import Navbar from '@/Components/Navbar'

export default function Home() {
  return (
    <div>
      <main className="background">
        <Navbar />
        <Homepage />
      </main>
      <Context />
      <About />
      <Brands />
    </div>
  );
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';

export default function Home() {
  return (
    <div className="app">
      <div className="page-box">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
      <HowItWorks />
    </div>
  );
}

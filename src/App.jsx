import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Benchmarks from "./components/Benchmarks";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benchmarks />
      </main>
      <Footer />
    </div>
  );
}

export default App;

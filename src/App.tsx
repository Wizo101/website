import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/header/header';
import About from './components/about/about';
import Home from './components/home/home';
import Advertisement from './components/advertisement/Advertisement';
import Footer from './components/footer/Footer';
import PriceEstimator from './components/feature/PriceEstimator';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<HomePageWithScroll />} />
          <Route path="/about" element={<About />} />
          <Route path="/advertisement" element={<Advertisement />} />
          <Route path="/price-estimator" element={<PriceEstimator />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

function HomePageWithScroll() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>

      <section id="advertisement">
        <Advertisement />
      </section>

      <section id="about">
        <About />
      </section>
    </div>
  );
}

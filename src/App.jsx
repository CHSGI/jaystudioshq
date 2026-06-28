import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const titles = {
  '/': 'Jay Studios | Creative Multimedia Agency',
  '/about': 'About Us | Jay Studios',
  '/services': 'Our Services | Jay Studios',
  '/portfolio': 'Portfolio | Jay Studios',
  '/contact': 'Contact Us | Jay Studios',
};

function TitleSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] || 'Jay Studios';
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <TitleSync />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Home from './pages/home/home';
import HousingPage from './pages/housing/housing';
import About from './pages/about/about';
import ErrorPage from './pages/errorPage/errorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing/:id" element={<HousingPage />} />
        <Route  path="/about/" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
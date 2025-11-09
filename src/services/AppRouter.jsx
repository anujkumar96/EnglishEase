import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import DevOpsServices from "../pages/DevOpsServices";
import Portfolio from "../pages/Portfolio";
import Product from "../pages/Product";
import Blog from "../pages/Blog";
import GetInTouch from "../pages/GetInTouch";

export default function AppRouter() {
  return (
    <BrowserRouter basename="/EnglishEase">
  <Header />
  <main className="min-vh-100 bg-light">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/devops" element={<DevOpsServices />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/product" element={<Product />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/get-in-touch" element={<GetInTouch />} />
    </Routes>
  </main>
  <Footer />
</BrowserRouter>

  );
}

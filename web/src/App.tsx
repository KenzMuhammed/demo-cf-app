import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import AuthorizedService from "@/pages/AuthorizedService";
import AwardsAndRecognition from "@/pages/AwardsAndRecognition";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import BrandList from "@/pages/BrandList";
import Brands from "@/pages/Brands";
import CareerApply from "@/pages/CareerApply";
import Careers from "@/pages/Careers";
import Category from "@/pages/Category";
import Clients from "@/pages/Clients";
import Contact from "@/pages/Contact";
import EquipmentRental from "@/pages/EquipmentRental";
import Industries from "@/pages/Industries";
import LifeAtAsco from "@/pages/LifeAtAsco";
import Pdp from "@/pages/Pdp";
import Preventive from "@/pages/Preventive";
import Privacy from "@/pages/Privacy";
import RepairServices from "@/pages/RepairServices";
import Rfq from "@/pages/Rfq";
import Services from "@/pages/Services";
import Terms from "@/pages/Terms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/authorized-service" element={<AuthorizedService />} />
          <Route path="/awards-and-recognition" element={<AwardsAndRecognition />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/brand-list" element={<BrandList />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/career-apply" element={<CareerApply />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/category" element={<Category />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/equipment-rental" element={<EquipmentRental />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/life-at-asco" element={<LifeAtAsco />} />
          <Route path="/pdp" element={<Pdp />} />
          <Route path="/preventive" element={<Preventive />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/repair-services" element={<RepairServices />} />
          <Route path="/rfq" element={<Rfq />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

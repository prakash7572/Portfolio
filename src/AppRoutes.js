import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Portfolio from "./Components/Portfoliyo";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import About from "./Components/About";
import ServicesPricing from "./Components/ServicePricing";

const AppRoutes = () => {
  return (    
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ServicesPricing" element={<ServicesPricing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default AppRoutes;

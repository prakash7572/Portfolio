import React, { useEffect, useState } from "react";
import {BrowserRouter as Router,Routes,Route,Link,Navigate,} from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import Images from "./Images";
import Portfolio from "./Portfoliyo";
import Resume from "./Resume";
import Contact from "./Contact";
import About from "./About";
import ServicesPricing from "./ServicePricing";
import Loader from "./Loader";

function Sidebar() {
  const Image = Images();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.tagName === "A" || event.target.tagName === "LINK") {
        setLoading(true);
      }
    };
    document.addEventListener("click", handleLinkClick);
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setLoading(false), 1500); 
      return () => clearTimeout(timer);
    }
  }, [loading]);
  return (
    <>
      <Router>
      {loading && <Loader />}
        <div className="d-flex gap-6">
          <div className="main-content w-100">
            <div className="w-100 bgn1-color p-3 position-fixed z-3 top-0 d-lg-none d-flex align-items-center justify-content-between br-bottom-n5 box-shadow1">
              <div className="d-flex gap-3 align-items-center">
              </div>
            </div>
            <div className="w-100 bgn1-color p-3 position-fixed z-3 bottom-0 d-block d-lg-none br-top-n5 box-shadow1">
              <div className="header-bottom-menu w-full">
                <ul className="d-flex gap-1 align-items-center justify-content-between">
                  <li className="rounded-3 bg1-color p-2">
                    <Link
                      to="/about"
                      className="d-flex align-items-center gap-2 n11-color fs-eight p-2"
                    >
                      <span className="fs-five d-flex align-items-center justify-content-center">
                        <i className="ph-fill ph-user"></i>
                      </span>
                      <span className="d-none d-md-block">About Me</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portfolio"
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center gap-2 n5-color fs-eight p-2">
                        <span className="fs-five d-flex align-items-center justify-content-center">
                          <i className="ph-fill ph-code-block"></i>
                        </span>
                        <span className="d-none d-md-block">Portfolio</span>
                      </div>
                      <span className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3 d-none d-md-block">
                        16
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ServicesPricing"
                      className="d-flex align-items-center gap-2 n5-color fs-eight p-2"
                    >
                      <span className="fs-five d-flex align-items-center justify-content-center">
                        <i className="ph-fill ph-briefcase"></i>
                      </span>
                      <span className="d-none d-md-block">Pricing</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/resume"
                      className="d-flex align-items-center gap-2 n5-color fs-eight p-2"
                    >
                      <span className="fs-five d-flex align-items-center justify-content-center">
                        <i className="ph-fill ph-notebook fs-six"></i>
                      </span>
                      <span className="d-none d-md-block">Resume</span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/contact"
                      className="d-flex align-items-center gap-2 n5-color fs-eight p-2"
                    >
                      <span className="fs-five d-flex align-items-center justify-content-center">
                        <i className="ph-fill ph-envelope"></i>
                      </span>
                      <span className="d-none d-md-block">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
        
            {/* Side bar */}
            <div>
              <div className="side-menu">
                <div className="sidebar-btn close-btn cursor-pointer d-block d-lg-none">
                  <i className="ph ph-x fs-two p1-color"></i>
                </div>
                <div className="d-flex">
                  <div className="side-menu-right overflow-y-auto">
                    <div className="d-flex flex-column gap-6 justify-content-between py-10 px-5 bgn2-color h-100">
                      <div className="">
                        <div className="sidebar-profile">
                          <div className="position-relative">
                            <div className="profile-img1 d-flex justify-content-center overflow-hidden">
                              <img src={Image.praksh} alt="user" className="" />
                            </div>
                            <span className="thumb">👋</span>
                          </div>

                          <h5 className="n5-color fw-semibold fs-five mt-2 text-center">
                            Prakash Vishwakarma
                          </h5>
                          <span className="n5-color fs-nine d-block text-center">
                            Software Engineer
                          </span>
                          <div className="d-flex justify-content-center gap-2 align-items-center mt-4">
                            <a
                              href="https://github.com/prakash7572"
                              className="social-icon p1-color"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ "text-decoration-line": "none" }}
                            >
                              <i className="ph ph-github-logo"></i>
                            </a>
                            <a
                              href="https://x.com/PrakashVis85457"
                              className="social-icon p1-color"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ "text-decoration-line": "none" }}
                            >
                              <i className="ph ph-x-logo"></i>
                            </a>
                            <a
                              href="https://linkedin.com/in/prakashvishwakarma-4534b8249"
                              className="social-icon p1-color"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ "text-decoration-line": "none" }}
                            >
                              <i className="ph ph-linkedin-logo"></i>
                            </a>
                          </div>
                        </div>
                        <div className="line-divider my-4 my-md-8"></div>

                        <div className="menu-list">
                          <ul className="d-flex flex-column gap-3">
                            <li className="rounded-3 bg1-color p-2">
                              <Link
                                style={{
                                  textDecorationLine: "none",
                                  color: "white",
                                }}
                                to="/About"
                                classNameName="d-flex align-items-center gap-2 n11-color fs-eight px-3 py-2"
                              >
                                <i classNameName="ph ph-user fs-six "></i> About
                                Me
                              </Link>
                            </li>

                            <li className="rounded-3">
                              <Link
                                to="/portfolio"
                                style={{ textDecoration: "none" }}
                                className="d-flex justify-content-between align-items-center"
                              >
                                <div className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                                  <i className="ph ph-code-block fs-six"></i>{" "}
                                  Portfolio
                                </div>
                                <span className="n5-color bg2-color fs-ten px-1 pt-1 rounded-2 me-3">
                                  16
                                </span>
                              </Link>
                            </li>
                            <li className="rounded-3">
                              <Link
                                to="/servicesPricing"
                                style={{ textDecoration: "none" }}
                                className="d-flex justify-content-between align-items-center"
                              >
                                <div className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2">
                                  <i className="ph ph-code-block fs-six"></i>{" "}
                                  Service & Priceing
                                </div>
                              </Link>
                            </li>
                            <li className="rounded-3">
                              <Link
                                to="/resume"
                                style={{ textDecoration: "none" }}
                                className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"
                              >
                                <i className="ph ph-notebook fs-six"></i> Resume
                              </Link>
                            </li>
                            <li className="rounded-3">
                              <Link
                                to="/contact"
                                style={{ textDecoration: "none" }}
                                className="d-flex align-items-center gap-2 n5-color fs-eight px-3 py-2"
                              >
                                <i className="ph ph-envelope fs-six"></i>{" "}
                                Contact
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <Link
                        to="/contact"
                        className="primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 mx-auto"
                      >
                        <i className="ph ph-paper-plane-tilt"></i>Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <Routes>
                <Route path="/" element={<Navigate to="/about" />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/ServicesPricing" element={<ServicesPricing />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default Sidebar;

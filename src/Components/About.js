import React from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import Images from "./Images";
import { Link } from "react-router-dom";

function About() {
  const Image = Images();
  return (
    <>
      <div className="p-6 md:p-12 font-sans">
        <section className="pt-120 pb-50 br-bottom-n3 overflow-hidden mt-10 mt-lg-0">
          <div className="container">
            <div className="d-flex flex-wrap gap-10 gap-md-15 align-items-center justify-content-between">
              <div className="banner-content">
                <span className="n5-color fs-five">HI, I'M A </span>
                <h4 className="typing-text display-one p1-color mt-2 mb-3"></h4>
                <p className="fs-seven n5-color">
                  I'm a software engineer specializing in scalable web apps.
                  Explore my
                  <Link to="/portfolio" className="p1-color">
                    project portfolio
                  </Link>
                  and{" "}
                  <Link to="/resume" className="p1-color">
                    online resume
                  </Link>
                  .
                </p>
                <div className="d-flex flex-wrap align-itmes-center gap-3 gap-md-6 mt-4 mt-md-8">
                  <Link
                    to="/portfolio"
                    className="primary-btn px-3 px-md-6 py-2 py-md-4 fw-medium rounded-pill d-flex align-items-center gap-2"
                  >
                    <i className="ph ph-arrow-right"></i>View Portfolio
                  </Link>
                  <Link
                    to="/resume"
                    className="primary-btn2 fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2"
                  >
                    <img src={Image.resume} alt="icon" />
                    View Resume
                  </Link>
                </div>
              </div>

              <div className="position-relative profile-img">
                <div className="user-bg"></div>
                <div className="bg-white">
                  <img src={Image.user} alt="user" className="user-img" />
                </div>
              </div>
            </div>

            <div className="banner-counter d-flex flex-wrap flex-xl-nowrap align-items-center gap-3 gap-md-6 mt-10 mt-md-17">
              <div className="d-flex align-items-center gap-2 gap-xl-4">
                <h2 className="display-two fw-semibold p1-color">
                  <span className="counter">2</span>
                </h2>
                <div className="line"></div>
                <span className="n5-color">Years of Experience</span>
              </div>
              <div className="d-flex align-items-center gap-2 gap-xl-4">
                <h2 className="display-two fw-semibold p1-color">
                  <span className="counter">15</span>
                </h2>
                <div className="line"></div>
                <span className="n5-color">Projects Completed</span>
              </div>
              {/* <div className="d-flex align-items-center gap-2 gap-xl-4">
                <h2 className="display-two fw-semibold p1-color d-flex gap-1">
                  <span className="counter">6</span>k
                </h2>
                <div className="line"></div>
                <span className="n5-color">Clients Worldwide</span>
              </div> */}
            </div>
          </div>
        </section>

        <section className="pt-120 pb-50">
          <div className="container">
            <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end pb-60">
              <div data-aos="zoom-in-left" className="section-heading">
                <div className="d-flex align-items-center gap-2">
                  <div className="title-line"></div>
                  <h2 className="display-four n5-color fw-semibold">
                    What I do
                  </h2>
                </div>
                <p className="fs-seven n4-color mt-2 mt-md-4">
                  I have extensive experience building software solutions for
                  clients across the globe. Below is a quick overview of my
                  primary technical skills and the technologies I work with.
                  Want to learn more about my experience? Feel free to explore
                  my online resume and project portfolio.
                  <Link to="/resume" className="p1-color">
                    online resume
                  </Link>{" "}
                  and
                  <Link to="/portfolio" className="p1-color">
                    project portfolio
                  </Link>
                  .
                </p>
              </div>
              <Link
                to="/ServicesPricing"
                data-aos="zoom-in-right"
                className="primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
              >
                <i className="ph ph-arrow-right"></i>Services & Pricing
              </Link>
            </div>

            <div className="row g-3 g-md-6">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
              >
                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                  <img src={Image.js} alt="js" className="service-icon" />
                  <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                    Vanilla JavaScript
                  </h4>
                  <p className="fs-seven n4-color">
                    Skilled in modern JavaScript (ES6+), DOM manipulation, and
                    building dynamic interfaces with HTML5, Sass, and Bootstrap
                    5.{" "}
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
              >
                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={Image.angular}
                      alt="angular"
                      className="service-icon"
                    />
                    <img
                      src={Image.react}
                      alt="react"
                      className="service-icon"
                    />
                    <img src={Image.npm} alt="npm" className="service-icon" />
                  </div>
                  <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                    Angular, React
                  </h4>
                  <p className="fs-seven n4-color">
                    Proficient in Angular for dynamic web apps.
                    <br></br>
                    React
                    <br></br>
                    Skilled in React for interactive UIs.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
              >
                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                  <img
                    src={Image.ccharp}
                    alt="node"
                    className="service-icon"
                    style={{ height: "33px" }}
                  />
                  <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                    C#
                  </h4>
                  <p className="fs-seven n4-color">
                    Skilled in C# for robust application development.
                    Experienced in C# for building web and desktop applications.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
              >
                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                  <div className="d-flex gap-3">
                    <img
                      src={Image.aspdotnet}
                      alt="asp-dot-net"
                      className="service-icon"
                      style={{ height: "42px" }}
                    />
                    <img
                      src={Image.aspdotnetcore}
                      alt="asp-dot-net-core"
                      className="service-icon"
                      style={{ height: "38px" }}
                    />
                  </div>
                  <h5 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                    .NET Framework & .NET Core
                  </h5>
                  <p className="fs-seven n4-color">
                    Proficient in .NET Framework for building enterprise-level
                    applications. Skilled in .NET Core for cross-platform and
                    cloud-based solutions.{" "}
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
              >
                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                  <img
                    src={Image.sqlserver}
                    alt="sql-server"
                    className="service-icon"
                    style={{ height: "42px" }}
                  />
                  <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                    Sql Server
                  </h4>
                  <p className="fs-seven n4-color">
                    Proficient in SQL Server for database design and management.
                    Skilled in SQL Server for writing efficient queries and
                    stored procedures.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="600"
                className="col-sm-6 col-md-4 col-lg-6 col-xl-4 col-xxl-3"
              >
                <div className="service-card px-4 px-lg-8 py-5 py-lg-10">
                  <div className="d-flex gap-3">
                    <img src={Image.html} alt="html" className="service-icon" />
                    <img src={Image.css} alt="css" className="service-icon" />
                    <img
                      src={Image.bootstrap}
                      alt="bootstrap"
                      className="service-icon"
                      style={{ height: "27px" }}
                    />
                  </div>
                  <h4 className="fs-six n5-color fw-medium mt-3 mt-md-6 mb-2 mb-md-3">
                    HTML, CSS & Bootstrap
                  </h4>
                  <p className="fs-seven n4-color">
                    Proficient in HTML for creating structured web content.
                    Skilled in CSS for styling responsive web designs.
                    Experienced in Bootstrap for building mobile-first websites
                    quickly.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="next-project pt-120 pb-50">
          <div className="container d-flex gap-3 gap-md-6 flex-wrap justify-content-between align-items-center">
            <div data-aos="zoom-in-left" className="next-project-content">
              <h3 className="display-four n11-color fw-semibold mb-2 mb-md-4">
                Let’s Work together on your next Project
              </h3>
              <p className="fs-seven n11-color">
                I am available for freelance projects. Hire me and get your
                project done.
              </p>
            </div>
            <Link
              data-aos="zoom-in-right"
              to="/contact"
              className="primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100"
            >
              <i className="ph ph-arrow-right"></i>Let’s get in touch
            </Link>
          </div>
        </section>

        <section className="projects-section pt-120 pb-120 br-bottom-n3">
          <div className="container">
            <div className="d-flex gap-3 flex-wrap flex-xxl-nowrap justify-content-between align-items-end mb-8 mb-md-15">
              <div data-aos="zoom-in-left" className="section-heading">
                <div className="d-flex align-items-center gap-2">
                  <div className="title-line"></div>
                  <h2 className="display-four n5-color fw-semibold">
                    Featured Projects
                  </h2>
                </div>
                <p className="fs-seven n4-color mt-2 mt-md-4">
                  My step-by-step guide ensures a smooth project journey, from
                  the initial consultation to the final delivery. I take care of
                  every detail, allowing you to focus on what you do best.
                </p>
              </div>
              <Link
                data-aos="zoom-in-right"
                to="/portfolio"
                className="primary-btn fw-medium px-3 px-md-6 py-2 py-md-4 rounded-pill d-flex align-items-center gap-2 h-100 text-nowrap"
              >
                <i className="ph ph-arrow-right"></i>View Portfolio
              </Link>
            </div>

            <div className="row g-6 g-md-8">
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="col-xl-6"
              >
                <div className="project-card">
                  <a href="#" className="thumb d-block">
                    <div className="post-thumb">
                      <div className="post-thumb-inner">
                        <img
                          src={Image.project1}
                          alt="..."
                          className="w-100 p-2"
                        />
                      </div>
                    </div>
                    <div className="post-thumb">
                      <div className="post-thumb-inner">
                        <img
                          src={Image.project1}
                          alt="..."
                          className="w-100 p-2"
                        />
                      </div>
                    </div>
                  </a>

                  <div className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                    <div>
                      <div className="d-flex flex-wrap gap-2 align-items-center">
                        <a
                          href="javascript:void(0)"
                          style={{ "text-decoration-line": "none" }}
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                        >
                          JQuery
                        </a>
                        <a
                          href="javascript:void(0)"
                          style={{ "text-decoration-line": "none" }}
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                        >
                          ADO_Dot_Net
                        </a>
                        <a
                          href="javascript:void(0)"
                          style={{ "text-decoration-line": "none" }}
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                        >
                          SQL_Server
                        </a>
                      </div>
                      <a
                        href="https://github.com/prakash7572/Beauty-Parlour"
                        target="_blank"
                        className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                        style={{ "text-decoration-line": "none" }}
                      >
                        beauty parlour Website Development for Booking a Slot.
                      </a>
                    </div>
                    <a
                      href="#"
                      className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                    >
                      <i className="ph-bold ph-arrow-up-right n5-color"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="col-xl-6"
              >
                <div className="project-card">
                  <a href="#" className="thumb d-block">
                    <div className="post-thumb">
                      <div className="post-thumb-inner">
                        <img
                          src={Image.project2}
                          alt="..."
                          className="w-100 p-2"
                        />
                      </div>
                    </div>
                    <div className="post-thumb">
                      <div className="post-thumb-inner">
                        <img
                          src={Image.project2}
                          alt="..."
                          className="w-100 p-2"
                        />
                      </div>
                    </div>
                  </a>

                  <div className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <a
                          href="javascript:void(0)"
                          style={{ "text-decoration-line": "none" }}
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                        >
                          Dot_Net
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                          style={{ "text-decoration-line": "none" }}
                        >
                          JQuery
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium "
                          style={{ "text-decoration-line": "none" }}
                        >
                          SQL Server
                        </a>
                      </div>
                      <a
                        href="https://github.com/prakash7572/ContactManagement"
                        target="_blank"
                        className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                        style={{ "text-decoration-line": "none" }}
                      >
                        Contact Management
                      </a>
                    </div>
                    <a
                      href="#"
                      className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                    >
                      <i className="ph-bold ph-arrow-up-right n5-color"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                className="col-xl-6"
              >
                <div className="project-card">
                  <a href="#" className="thumb d-block">
                    <div className="post-thumb">
                      <div className="post-thumb-inner">
                        <img
                          src={Image.project3}
                          alt="..."
                          className="w-100 p-2"
                        />
                      </div>
                    </div>
                    <div className="post-thumb">
                      <div className="post-thumb-inner">
                        <img
                          src={Image.project3}
                          alt="..."
                          className="w-100 p-2"
                        />
                      </div>
                    </div>
                  </a>

                  <div className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <a
                          href="javascript:void(0)"
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium "
                          style={{ "text-decoration-line": "none" }}
                        >
                          Dot_Net_Core
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                          style={{ "text-decoration-line": "none" }}
                        >
                          SQL_Server
                        </a>
                        <a
                          href="javascript:void(0)"
                          style={{ "text-decoration-line": "none" }}
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium text-decoration-line: none "
                        >
                          Web_Development
                        </a>
                      </div>
                      <a
                        href="https://github.com/prakash7572/RentPlanet"
                        target="_blank"
                        className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block text-decoration: none"
                        style={{ "text-decoration-line": "none" }}
                      >
                        Room Rental App
                      </a>
                    </div>
                    <a
                      href="#"
                      className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                    >
                      <i className="ph-bold ph-arrow-up-right n5-color"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="col-xl-6"
              >
                <div className="project-card">
                  <a href="#" className="thumb d-block">
                    <div className="post-thumb">
                      <div className="post-thumb-inner">
                        <img
                          src={Image.project4}
                          alt="..."
                          className="w-100 p-2"
                        />
                      </div>
                    </div>
                    <div className="post-thumb">
                      <div className="post-thumb-inner">
                        <img
                          src={Image.project4}
                          alt="..."
                          className="w-100 p-2"
                        />
                      </div>
                    </div>
                  </a>

                  <div className="d-flex justify-content-between gap-2 align-items-center pt-4 pt-md-8 px-3 px-md-6">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <a
                          href="javascript:void(0)"
                          style={{ "text-decoration-line": "none" }}
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                        >
                          Dot_Net_MVC
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                          style={{ "text-decoration-line": "none" }}
                        >
                          JQuery
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="n5-color fs-nine px-2 px-md-4 py-1 py-md-2 brn3 rounded-pill fw-medium"
                          style={{ "text-decoration-line": "none" }}
                        >
                          SQL_Server
                        </a>
                      </div>
                      <a
                        href="https://github.com/prakash7572/ProductManagement"
                        target="_blank"
                        className="project-title fs-five fw-semibold n5-color mt-3 mt-md-5 d-block"
                        style={{ "text-decoration-line": "none" }}
                      >
                        Product management
                      </a>
                    </div>
                    <a
                      href="#"
                      className="project-link d-flex align-items-center justify-content-center flex-shrink-0"
                    >
                      <i className="ph-bold ph-arrow-up-right n5-color"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container d-flex flex-wrap gap-3 gap-md-6 justify-content-center justify-content-sm-between align-items-center pb-4 pb-md-8 text-center mb-16 mb-lg-0">
          <span className="fs-eight fw-medium n5-color order-sm-2">
            Designed by
            <a
              href="#"
              className="fs-eight fw-medium n5-color"
              style={{ "text-decoration-line": "none" }}
            >
              Prkash Vishwakarma
            </a>
          </span>
          <span className="fs-eight fw-medium n5-color order-sm-1">
            Copyright © 2024
            <a
              href="#"
              className="fs-eight fw-medium n5-color"
              style={{ "text-decoration-line": "none" }}
            >
              Portfolify
            </a>
            . All Rights Reserved.
          </span>
        </section>

        {/* End Section */}
      </div>
    </>
  );
}

export default About;

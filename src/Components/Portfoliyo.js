import React from "react";
import { Link } from "react-router-dom";
import Images from "./Images";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

const Portfolio = () => {
  const Image = Images();
  return (
    <div className="p-6 md:p-12 font-sans">
      <div className="bg-white text-gray-900 min-h-screen">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">
            A collection of my best projects
          </h1>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            With many years in web development, I acquired extensive experience
            working on projects across multiple industries and technologies. Let
            me show you my best creations.
          </p>
          <Link to="/contact">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Hire Me
            </button>
          </Link>
        </section>

        {/* Tabs Section */}
        <section className="text-center py-8">
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-blue-500 border-b-2 border-blue-500 font-semibold pb-2"
            >
              All
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              style={{ "text-decoration-line": "none" }}
            >
              Web App
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              style={{ "text-decoration-line": "none" }}
            >
              Frontend
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              style={{ "text-decoration-line": "none" }}
            >
              Backend
            </a>
          </div>
        </section>

        {/* Projects Section Placeholder */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 py-8">
          <div className="bg-gray-100 h-64 rounded-lg project-card">
            <a href="https://github.com/prakash7572/Beauty-Parlour"
            target="_blank"
            className="thumb d-block">
              <div className="post-thumb">
                <div className="post-thumb-inner">
                  <img src={Image.beauty1} alt="..." className="w-100 p-2" />
                </div>
              </div>
              <div className="post-thumb">
                <div className="post-thumb-inner">
                  <img src={Image.beauty2} alt="..." className="w-100 p-2" />
                </div>
              </div>
            </a>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg project-card">
            <a href="https://github.com/prakash7572/RentPlanet"
            target="_blank"
            className="thumb d-block">
              <div className="post-thumb">
                <div className="post-thumb-inner">
                  <img src={Image.rent1} alt="..." className="w-100 p-2" />
                </div>
              </div>
              <div className="post-thumb">
                <div className="post-thumb-inner">
                  <img src={Image.rent2} alt="..." className="w-100 p-2" />
                </div>
              </div>
            </a>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg project-card">
            <a href="https://github.com/prakash7572/ProductManagement"
            target="_blank"
            className="thumb d-block">
              <div className="post-thumb">
                <div className="post-thumb-inner">
                  <img src={Image.pdm2} alt="..." className="w-100 p-2" />
                </div>
              </div>
              <div className="post-thumb">
                <div className="post-thumb-inner">
                  <img src={Image.pdm1} alt="..." className="w-100 p-2" />
                </div>
              </div>
            </a>
          </div>
          <div className="bg-gray-100 h-64 rounded-lg project-card">
            <a href="https://github.com/prakash7572/TaskSync"
            target="_blank"
            className="thumb d-block">
              <div className="post-thumb">
                <div className="post-thumb-inner">
                  <img src={Image.task} alt="..." className="w-100 p-2" />
                </div>
              </div>
              <div className="post-thumb">
                <div className="post-thumb-inner">
                  <img src={Image.task} alt="..." className="w-100 p-2" />
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;

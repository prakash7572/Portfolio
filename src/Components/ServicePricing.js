import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";

function ServicesPricing() {
    return (
        <div className="p-6 md:p-12 font-sans">
            <div className="text-center">
                {/* Services & Pricing Section */}
                <section className="py-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Services & Pricing</h2>
                    <p className="text-gray-600 max-w-lg mx-auto mt-4"  >
                        I have 1+ years of development experience building software for the web and mobile devices.
                        You can take a look at my <Link to="/resume" style={{ "text-decoration-line": "none" }} className="text-blue-600 underline">online resume</Link> and <Link to="/portfolio" style={{ "text-decoration-line": "none" }} className="text-blue-600 underline">project portfolio</Link> to find out more about my skills and experiences.
                    </p>
                    <Link to="/contact"> 
                    <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
                        Hire Me
                    </button>
                    </Link>
                   
                </section>

                {/* Service Packages Section */}
                <section className="py-8 border-t-2 border-blue-600">
                    <h2 className="text-2xl md:text-3xl font-bold">Service Packages</h2>
                    <p className="text-gray-600 max-w-lg mx-auto mt-4">
                        Explore the range of services I provide to help bring your projects to life. From initial concept to
                        final delivery, I am committed to delivering high-quality results tailored to your needs.
                    </p>
                </section>

                {/* Custom Package Section */}
                <section className="py-8 border-t border-gray-300">
                    <h3 className="text-xl md:text-2xl font-bold">Want to hire me for a custom package?</h3>
                    <p className="text-gray-600 max-w-lg mx-auto mt-4">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <Link to="/contact"> 
                    <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700">
                        Hire Me
                    </button>
                    </Link>
                   
                </section>
            </div>
        </div>
    );
}

export default ServicesPricing;

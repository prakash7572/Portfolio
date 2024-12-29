import React from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import user from "../assets/images/prakashImg.png";
import resume from "../assets/prakash-resume.pdf";

const Resume = () => {
  const downloadResume = () => {
    // Replace this URL with the actual path to your resume file
    const resumeUrl = resume;
    
    // Create an anchor element to trigger the download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'prakash_Resume.pdf'; // The name of the file the user will download
    link.click();
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-5xl mx-auto p-11 sm:p-4">
        {/* Header Section */}
        <header className="text-center py-6 md:py-8 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Online Resume
          </h1>
          <button onClick={downloadResume}  className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md inline-flex items-center text-sm md:text-base">
            <i className="fas fa-file-pdf mr-2"></i> Download PDF Version
          </button>
        </header>

        {/* Profile Section */}
        <header className="bg-white shadow-lg rounded-lg p-6 md:flex md:items-center md:justify-between mb-6">
          <div className="flex items-center space-x-6">
            <img
              src={user}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-600 object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-blue-600">
                Prakash Vishwakarma
              </h1>
              <h2 className="text-lg text-gray-600">Software Engineer</h2>
            </div>
          </div>
          <div className="text-gray-600 space-y-2">
            <div className="flex items-center">
              <i className="ph ph-phone mr-2 text-blue-600"></i>
              <a href="tel:+917572007457" className="t-none">
                +91 7572007457
              </a>
            </div>
            <div className="flex items-center">
              <i className="ph ph-envelope mr-2 text-blue-600"></i>
              <a href="mailto:praksh5785@gmail.com" className="t-none">
                praksh5785@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <i className="ph ph-map-pin mr-2 text-blue-600"></i>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Delhi,India"
                target="_blank"
                rel="noopener noreferrer"
                className="t-none"
              >
                Delhi, India
              </a>
            </div>
          </div>
        </header>

        {/* Summary Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Summary</h3>
          <p className="text-gray-600">
            To pursue a challenging and growth-oriented career in a professional
            organisation that offers opportunities to learn and grow standing
            for what I believe in regardless of the odds and to work in
            conformance to global standards and achieve competence levels as per
            with the best in the industry.
          </p>
        </section>

        {/* Work Experience & Skills */}
        <div className="md:flex md:space-x-4 md:items-stretch">
          {/* Work Experience */}
          <section className="bg-white shadow-lg rounded-lg p-6 w-full md:w-2/3 mb-6 md:mb-0 h-full">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Work Experiences
            </h3>
            <div className="mb-4">
              <h4 className="font-semibold">Junior Software Engineer</h4>
              <p className="text-gray-500">
                <a
                  className="t-none"
                  href="https://www.careinsurance.com/"
                  target="_blank"
                >
                  Care Health Insurance
                </a>
              </p>
              <p className="text-gray-500">Sep 2024 - Present</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Software Developer</h4>
              <p className="text-gray-500">
                <a
                  className="t-none"
                  href="https://www.it4tsolutions.com/"
                  target="_blank"
                >
                  IT4T Solutions PVT LTD
                </a>
                <br></br>
                Mar 2023 - Jul 2024
              </p>
              {/* <p className="text-gray-500"></p> */}
            </div>

            <h3 className="text-xl font-bold text-blue-600 mt-6 mb-3">
              Qualification
            </h3>
            <p className="text-gray-500">
              Master of Computer Applications | 2024 - Present
            </p>
            <p className="text-gray-500">
              Bachelor of Computer Applications | 2021 - 2024
            </p>
            <p className="text-gray-500">
              Higher Secondary Certificate | 2019 - 2021
            </p>
            <p className="text-gray-500">
              Secondary School Certificate | 2018 - 2019
            </p>
          </section>

          {/* Skills & Languages */}
          <aside className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 h-full">
            {/* Skills */}
            <section className="mb-4">
              <h3 className="text-xl font-bold text-blue-600 mb-3">Skills</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Asp.NET / Asp.NET MVC</li>
                <li>Asp.NET Core / ADO.NET</li>
                <li>Web API / Rest API</li>
                <li>T-SQL / MySQL</li>
                <li>JavaScript / React / C# / Linq</li>
                <li>JQuery / Entity Framework</li>
                <li>HTML / CSS / Bootstrap</li>
              </ul>
            </section>

            {/* Professional Traits */}
            <section className="mb-4">
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                Professional Traits
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>Team player</li>
                <li>Strong problem solver</li>
                <li>Good time management</li>
              </ul>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                Languages
              </h3>
              <ul className="text-gray-600 space-y-1">
                <li>English / Hindi</li>
              </ul>
            </section>
          </aside>
        </div>

        {/* Footer Social Links */}
        <footer className="bg-white shadow-lg rounded-lg p-6 mt-0">
          <h4 className="text-xl font-bold text-blue-600 text-center mb-3">
            Connect with Me
          </h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/prakash-vishwakarma-4534b8249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl t-none"
              aria-label="LinkedIn"
            >
              <i className="ph ph-linkedin-logo"></i>
            </a>
            <a
              href="https://github.com/prakash7572"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl t-none"
              aria-label="GitHub"
            >
              <i className="ph ph-github-logo"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-2xl t-none"
              aria-label="Twitter"
            >
              <i className="ph ph-x-logo"></i>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Resume;

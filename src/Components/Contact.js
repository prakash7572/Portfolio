import  React, { useState } from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import Loader from "./Loader";
import { APIService } from "./APIService";

function Contact() {
const obj = {
  ID: 0,
  Name: '',
  Email: '',
  Mobile :'',
  Message :'',
  Location :'',
  IsEmailSend : false, 
}
const [loading, setLoading] = useState(false);
const [formData, setFormData] = useState(obj);
const [response,setResponse] = useState(null); 
const [errors, setErrors] = useState({});

// Handle input change
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const validateForm = () => {
  let formErrors = {};

  if (!formData.Name.trim()) formErrors.Name = "Name is required";
  if (!formData.Email.trim()) {
    formErrors.Email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
    formErrors.Email = "Email format is invalid";
  }
  if (!formData.Mobile.trim()) {
    formErrors.Mobile = "Mobile number is required";
  } else if (!/^\d{10}$/.test(formData.Mobile)) {
    formErrors.Mobile = "Mobile number must be 10 digits";
  }
  if (!formData.Message.trim()) formErrors.Message = "Message is required";
  if (!formData.Location.trim()) formErrors.Location = "Location is required";

  setErrors(formErrors);
  return Object.keys(formErrors).length === 0;
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try{
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    const result = await APIService(formData);
   
      if (result.success) {
        setResponse(result.data); 
        alert(result.data.message);
        setFormData(obj); 
      } else {
        console.error("Submission error:", result.error);
      }
  }catch(e){
    console.error(e);
  }finally {
    setLoading(false); 
  }
}
const inputStyle = (field) => ({
  border: errors[field] ? '1px solid red' : '1px solid #ccc'
});

  return (
    <>
    {loading && <Loader/>}
    <div className="p-6 md:p-12 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold" style={{ color: "rgba(var(--p1), 1)" }}>Contact</h2>
        <p className="text-accent mb-4">
          Interested in hiring me for your project or just want to say hi? You
          can fill in the contact form below or send me an email at
          <a
            href="mailto:praksh5785@gmail.com"
            className="text-primary hover:underline ml-1"
          >
            praksh5785@gmail.com
          </a>
          . Want to get connected? Follow me on the social channels below.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#">
            <i className="ph ph-facebook text-primary text-2xl"></i>
          </a>
          <a href="#">
            <i className="ph ph-instagram text-primary text-2xl"></i>
          </a>
          <a href="#">
            <i className="ph ph-twitter text-primary text-2xl"></i>
          </a>
          <a href="#">
            <i className="ph ph-linkedin text-primary text-2xl"></i>
          </a>
          <a href="#">
            <i className="ph ph-youtube text-primary text-2xl"></i>
          </a>
        </div>
      </div>
      <div className="mb-12">
        <h3 className="text-xl font-bold" style={{ color: "rgba(var(--p1), 1)" }}>
          Contact Details
        </h3>
        <p className="text-accent mb-8">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn’t anything embarrassing hidden in the middle of text.
        </p>
        <div className="flex flex-col md:flex-row justify-around text-center gap-6">
          <div className="flex flex-col items-center">
            <i className="ph ph-phone text-primary text-3xl mb-2"></i>
            <h4 className="text-lg font-bold" style={{ color: "rgba(var(--p1), 1)" }}>Phone</h4>
            <a href="tel:+917572007457" className="t-none"><p className="text-accent">+917572007457</p></a>
          </div>
          <div className="flex flex-col items-center">
            <i className="ph ph-map-pin text-primary text-3xl mb-2"></i>
            <h4 className="text-lg font-bold" style={{ color: "rgba(var(--p1), 1)" }}>Location</h4>
            <a
                href="https://www.google.com/maps/search/?api=1&query=Delhi,India"
                target="_blank"
                rel="noopener noreferrer"
                className="t-none"
              ><p className="text-accent">Delhi, India</p>
              </a>
          </div>
          <div className="flex flex-col items-center">
            <i className="ph ph-envelope text-primary text-3xl mb-2"></i>
            <h4 className="text-lg font-bold" style={{ color: "rgba(var(--p1), 1)" }}>Email</h4>
            <a href="mailto:praksh5785@gmail.com" className="t-none"><p className="text-accent">praksh5785@gmail.com</p></a>
          </div>
        </div>
      </div>
      <div className="w-full h-96 mt-8">
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d350289.8782589682!2d77.06830790000001!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff1c55cbf81%3A0x25bb8d222067e8c3!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1634042637644!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="mt-12">
        <h3 className="text-3xl font-bold" style={{ color: "rgba(var(--p1), 1)" }}>Get In Touch</h3>
        <p className="text-accent mb-8">
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn’t anything embarrassing hidden in the middle of text.
        </p>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name*"
                name="Name"
                value={formData.Name} onChange={handleChange}
                style={inputStyle('Name')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder:text-accent focus:border-primary focus:ring-2 focus:ring-primary outline-none"
              />
               {errors.Name && <p style={{ color: 'red' }}>{errors.Name}</p>}
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="Email address*"
                name="Email"
                value={formData.Email} onChange={handleChange}
                style={inputStyle('Email')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder:text-accent focus:border-primary focus:ring-2 focus:ring-primary outline-none"
              />
              {errors.Email && <p style={{ color: 'red' }}>{errors.Email}</p>}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Mobile*"
                name="Mobile"
                value={formData.Mobile} onChange={handleChange}
                style={inputStyle('Mobile')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder:text-accent focus:border-primary focus:ring-2 focus:ring-primary outline-none"
              />
               {errors.Mobile && <p style={{ color: 'red' }}>{errors.Mobile}</p>}
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Location*"
                name="Location"
                value={formData.Location} onChange={handleChange}
                style={inputStyle('Location')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder:text-accent focus:border-primary focus:ring-2 focus:ring-primary outline-none"
              />
              {errors.Location && <p style={{ color: 'red' }}>{errors.Location}</p>}
            </div>
          </div>
          <div>
            <textarea
              placeholder="Your Message:"
              rows="4"
              name="Message"
              value={formData.Message} onChange={handleChange}
              style={inputStyle('Message')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder:text-accent focus:border-primary focus:ring-2 focus:ring-primary outline-none"
            ></textarea>
            {errors.Location && <p style={{ color: 'red' }}>{errors.Location}</p>}
          </div>
          <div className="flex items-start">
            <input type="checkbox" className="mr-2" />
            <label className="text-accent">
              Save my name, email, and website in this browser for the next
              time.
            </label>
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Contact;

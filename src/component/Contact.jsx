import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 flex justify-center items-center">
      <div className="max-w-6xl w-full bg-white p-8 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-8">Have any questions? Feel free to reach out to us using the form below.</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg text-gray-700">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here"
                rows="4"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 cursor-pointer bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full h-96">
          <iframe
            className="w-full h-full rounded-md shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093704!2d144.9537353159048!3d-37.81627974202165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df0f3f3f3%3A0x5045675218ce740!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sus!4v1623840280047!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

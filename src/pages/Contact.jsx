import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-0 text-center">Contact</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-16 flex flex-col md:flex-row lg:px-24 ">
        <div className="w-full md:w-1/2 pr-4">
          <div className=" p-6 rounded shadow-md mb-6 bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
            <h2 className="text-2xl font-bold mb-6 text-center justify-center">
              Contact Us
            </h2>

            <div className="flex flex-col space-y-2">
              <div className="flex justify-between">
                <div className="flex-1">
                  <strong className="font-semibold">Email</strong>
                </div>
                <div className="flex-1 text-right">
                  <span>support@example.com</span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex-1">
                  <strong className="font-semibold">Phone</strong>
                </div>
                <div className="flex-1 text-right">
                  <span>+91 812 923 1248</span>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex-1">
                  <strong className="font-semibold">Address</strong>
                </div>
                <div className="flex-1 text-right">
                  <span>MF VOGUE, KANHANGAD, KASARAGOD, KERALA, INDIA</span>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className=" bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 p-6 rounded shadow-md mb-6"
          >
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-l-smlg bg-gray-800 border border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-l-smlg bg-gray-800 border border-gray-600"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 rounded-l-smlg bg-gray-800 border border-gray-600"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 pl-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092005!2d144.9537353153159!3d-37.81627997975182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0e60e7%3A0x50e8b6c633c0f0e5!2s123%20Shopping%20St%2C%20City%2C%20Country!5e0!3m2!1sen!2sus!4v1636628799398!5m2!1sen!2sus"
            class="w-full h-[740px] border-0 rounded-lg "
            allowfullscreen
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;

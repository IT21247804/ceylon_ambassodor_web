import React, { useState } from "react";
import axios from "axios";
import { backend_url } from "../../../url";

const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // State to store error messages

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Create validate function for form data
  const validate = () => {
    let errors = {};
    if (!form.name) {
      errors.name = "Name is required";
    }
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email address is invalid";
    }
    if (!form.message) {
      errors.message = "Message is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(); // Validate the form data
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
    } else {
      console.log("Form submitted:", form);
      const response = await axios.post(`${backend_url}/message/submit`, form);
      alert("Message sent successfully!");
      // Optionally reset form and errors after submission
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen mt-10 py-10 px-4 sm:px-6 lg:px-8 text-customBlue">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-5xl font-bold">
          Get in Touch with Ceylon Ambassador
        </h1>
        <p className="text-left mt-4">
          At Ceylon Ambassador, we believe in the power of meaningful
          connections. Whether you’re looking for more information about our
          services, need support, or are ready to embark on a new partnership,
          we’re here to help.
        </p>

        {/* Grid layout to divide screen into two equal pieces */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold">How Can We Assist You?</h2>
            <p className="mt-4">
              Have a question about our logistics solutions? Interested in
              exploring our aviation services or travel packages? Looking to
              enhance your brand with cutting-edge strategies? We’d love to hear
              from you!
            </p>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-4 gap-4">
              {/* Left Part: Phone number and email (3/4 part) */}
              <div className="lg:col-span-3">
                <h3 className="text-sm text-gray-600 mb-1">
                  Support Center 24/7
                </h3>
                <p className="text-5xl font-bold">+94 77 367 5054</p>
                <h3 className="text-sm text-gray-600 mt-10 mb-1">
                  Support Center 24/7
                </h3>
                <p className="">info@ceylonambassador.com</p>
              </div>

              {/* Right Part: Address (1/4 part) */}
              <div className="lg:col-span-1">
                <div className="mr-4">
                  <h3 className="text-sm text-gray-600 mb-4">
                    Support Center 24/7
                  </h3>
                  <p className="font-semibold text-lg">
                    No 91/ 1st Floor, Kandy Road, Dalugama, Kelaniya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto lg:max-w-full">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative border-b border-gray-700">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  className="peer block w-full appearance-none focus:outline-none bg-transparent py-2 text-gray-700"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-6 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:left-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Your Name
                </label>
                {errors.name && <p className="text-red-500">{errors.name}</p>}{" "}
                {/* Error message */}
              </div>

              {/* Email Field */}
              <div className="relative border-b border-gray-700">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  className="peer block w-full appearance-none focus:outline-none bg-transparent py-2 text-gray-700"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-6 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:left-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Your Email
                </label>
                {errors.email && <p className="text-red-500">{errors.email}</p>}{" "}
                {/* Error message */}
              </div>

              {/* Message Field */}
              <div className="relative border-b border-gray-700">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleInputChange}
                  className="peer block w-full appearance-none focus:outline-none bg-transparent py-2 text-gray-700 h-24 resize-none"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-6 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:left-0 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-gray-500"
                >
                  Message
                </label>
                {errors.message && (
                  <p className="text-red-500">{errors.message}</p>
                )}{" "}
                {/* Error message */}
              </div>

              {/* Add Button Icon */}
              <div className="relative flex items-center justify-start py-2 border-b border-gray-700">
                <span className="text-2xl text-gray-500">+</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-start  py-3 px-4 bg-[#c3a05f]  text-white"
                data-aos="fade-up" data-aos-duration="1000"
              >
                <span className="mr-2 text-lg">+</span>
                <span className="text-lg font-medium">Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;

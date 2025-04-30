import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch("https://formspree.io/f/xgvkvvny", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    }
  };

  return (
    <div className="flex items-center justify-center py-4 px-4">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-xl p-10">
        <h1 className="text-4xl font-extrabold text-orange-500 text-center mb-8">
          📬 Contact Me
        </h1>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center text-gray-700">
              <FaEnvelope className="text-orange-500 mr-3" />
              <span>yashgarg.co@gmail.com</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaPhone className="text-orange-500 mr-3" />
              <span>+91-9368959004</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaLinkedin className="text-blue-600 mr-3" />
              <a
                href="https://linkedin.com/in/yashgarg1466"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center text-gray-700">
              <FaGithub className="text-black mr-3" />
              <a
                href="https://github.com/yashgarg14"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
            >
              Send Message
            </button>

            {submitted && (
              <p className="text-green-500 font-semibold mt-2">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

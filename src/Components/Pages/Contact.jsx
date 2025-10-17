import React from "react";

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-10">
          We’d love to hear from you! Whether you have a question, feedback, or need support —
          our team is here to help you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📩 Get in Touch
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">📞 Phone</h3>
              <p className="text-gray-600">+1 (800) 234-5678</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">📧 Email</h3>
              <p className="text-gray-600">support@vegitableonline.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">📍 Address</h3>
              <p className="text-gray-600">
                Vegitable Online Office, Karachi, Pakistan
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                🌐 Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  🌍 Facebook
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  🐦 Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-green-600 transition"
                >
                  📸 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

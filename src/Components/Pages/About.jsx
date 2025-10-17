import React from "react";
import { ShoppingBag, Users, ShieldCheck, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-blue-600">OLX Marketplace</span> — 
          Pakistan’s trusted platform to buy, sell, and discover amazing products. 
          Whether you're looking for electronics, furniture, or home appliances, 
          we make trading fast, easy, and secure.
        </p>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-10 text-left mt-16">
          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-3">
              <Rocket className="text-blue-600 mr-2" /> Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To empower people across Pakistan to exchange goods and services 
              effortlessly. We aim to create a trusted digital marketplace 
              where everyone can buy and sell with confidence.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <h2 className="flex items-center text-2xl font-semibold text-gray-800 mb-3">
              <ShieldCheck className="text-blue-600 mr-2" /> Our Promise
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Security and trust are at the heart of what we do. 
              Every listing is monitored to ensure a safe buying and selling 
              experience, so you can focus on what matters — great deals!
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose OLX?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition-all">
              <ShoppingBag className="text-blue-600 mx-auto mb-3 w-10 h-10" />
              <h3 className="font-semibold text-gray-800 mb-2">Wide Product Range</h3>
              <p className="text-gray-600 text-sm">
                From electronics to vehicles — explore thousands of listings from verified users.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition-all">
              <Users className="text-blue-600 mx-auto mb-3 w-10 h-10" />
              <h3 className="font-semibold text-gray-800 mb-2">Community Driven</h3>
              <p className="text-gray-600 text-sm">
                Join millions of active users who buy and sell daily with trust and transparency.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition-all">
              <ShieldCheck className="text-blue-600 mx-auto mb-3 w-10 h-10" />
              <h3 className="font-semibold text-gray-800 mb-2">Secure Transactions</h3>
              <p className="text-gray-600 text-sm">
                We use multiple verification layers to make sure your experience is safe.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">📩 Get in Touch</h2>
          <p className="text-gray-600">
            Questions, feedback, or partnership inquiries? <br />
            Email us at{" "}
            <a
              href="mailto:support@olxmarketplace.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              support@olxmarketplace.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

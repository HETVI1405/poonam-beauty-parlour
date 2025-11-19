import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2b0f25] via-[#4a1633] to-[#d67ca3] text-gray-200 py-12 px-6 md:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-white tracking-wider">
            Poonam Beauty Parlour
          </h2>
          <p className="mt-4 text-sm text-gray-100 opacity-90">
            Luxury salon services — Makeup, Hair styling, Skin care, Bridal
            packages and more to bring out your natural beauty.
          </p>

          <div className="flex gap-4 mt-5">
            <FaFacebookF className="text-xl hover:text-pink-300 cursor-pointer transition" />
            <FaInstagram className="text-xl hover:text-pink-300 cursor-pointer transition" />
            <FaWhatsapp className="text-xl hover:text-pink-300 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 opacity-90">
            <li className="hover:text-pink-300 cursor-pointer">Home</li>
            <li className="hover:text-pink-300 cursor-pointer">Services</li>
            <li className="hover:text-pink-300 cursor-pointer">Packages</li>
            <li className="hover:text-pink-300 cursor-pointer">Gallery</li>
            <li className="hover:text-pink-300 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-200 opacity-90">
            <li className="hover:text-pink-300 cursor-pointer">Makeup</li>
            <li className="hover:text-pink-300 cursor-pointer">Hair Styling</li>
            <li className="hover:text-pink-300 cursor-pointer">Nail Art</li>
            <li className="hover:text-pink-300 cursor-pointer">Skin Treatment</li>
            <li className="hover:text-pink-300 cursor-pointer">Bridal Makeover</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-100 opacity-90">Phone: +91 98765 43210</p>
          <p className="text-gray-100 opacity-90 mt-2">Email: info@fivebeauty.com</p>
          <p className="text-gray-100 opacity-90 mt-2">Address: Five Fitness Road, Surat</p>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300/30 pt-6 text-center">
        <p className="text-gray-200 opacity-70 text-sm">
          © {new Date().getFullYear()} Poonam Beauty Parlour. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

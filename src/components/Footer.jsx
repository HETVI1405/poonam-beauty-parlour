import React from "react";
import {  FaInstagram, FaWhatsapp , FaPhoneAlt } from "react-icons/fa";
import Hero from "./Hero";
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
            <a href="tel:+919876543210">
            <FaPhoneAlt className="text-xl hover:text-pink-300 cursor-pointer transition" /></a>
          <a href="https://www.instagram.com/poonam_beautyparlour_/?hl=en">
            <FaInstagram className="text-xl hover:text-pink-300 cursor-pointer transition" /></a>
            <a href="https://wa.me/919824150609">
            <FaWhatsapp className="text-xl hover:text-pink-300 cursor-pointer transition" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 opacity-90">
           
            <li className="hover:text-pink-300 cursor-pointer"   onClick={() => document.getElementById("Hero").scrollIntoView({ behavior: "smooth" })}>Home</li>
            
            <li className="hover:text-pink-300 cursor-pointer"  onClick={() => document.getElementById("Services").scrollIntoView({ behavior: "smooth" })}>Services</li>
            <li className="hover:text-pink-300 cursor-pointer"
             onClick={() => document.getElementById("Packages").scrollIntoView({ behavior: "smooth" })} >Packages</li>
            <li className="hover:text-pink-300 cursor-pointer"  onClick={() => document.getElementById("Gallery").scrollIntoView({ behavior: "smooth" })}>Gallery</li>
                <a href="https://wa.me/919824150609"> <li className="hover:text-pink-300 cursor-pointer" >Contact Us</li></a>
           
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-200 opacity-90">
      <li
  className="hover:text-pink-300 cursor-pointer"
  onClick={() => {
    const card = document.getElementById("Facial");
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");

    setTimeout(() => {
      card.classList.remove("highlight-zoom");
    }, 1000); // remove after animation completes
  }}
>
  Facial
</li>
             <li
  className="hover:text-pink-300 cursor-pointer"
  onClick={() => {
    const card = document.getElementById("Hairstyle");
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");

    setTimeout(() => {
      card.classList.remove("highlight-zoom");
    }, 1000); // remove after animation completes
  }}
>
Hair-Style
</li>
  <li
  className="hover:text-pink-300 cursor-pointer"
  onClick={() => {
    const card = document.getElementById("Makeup");
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");

    setTimeout(() => {
      card.classList.remove("highlight-zoom");
    }, 1000); // remove after animation completes
  }}
>
  Make-Up
</li>
        <li
  className="hover:text-pink-300 cursor-pointer"
  onClick={() => {
    const card = document.getElementById("Spa");
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");

    setTimeout(() => {
      card.classList.remove("highlight-zoom");
    }, 1000); // remove after animation completes
  }}
>
 Spa
</li>
            
              <li
  className="hover:text-pink-300 cursor-pointer"
  onClick={() => {
    const card = document.getElementById("Keratin");
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");

    setTimeout(() => {
      card.classList.remove("highlight-zoom");
    }, 1000); 
  }}
>
 Keratin
</li>
            
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-100 opacity-90">Phone: +91 98765 43210</p>
          {/* <p className="text-gray-100 opacity-90 mt-2">Email: info@fivebeauty.com</p> */}
          <p className="text-gray-100 opacity-90 mt-2">Address: Megh Milap Vatika , Jahangirpura , Surat</p>
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

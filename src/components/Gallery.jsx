import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/img/c1.png";
import img2 from "../assets/img/c2.png";
import img3 from "../assets/img/c3.png";
import img4 from "../assets/img/c4.png";
import img5 from "../assets/img/c5.png";
import img6 from "../assets/img/c6.png";
import img7 from "../assets/img/c7.png";
import img8 from "../assets/img/c8.png";
import img9 from "../assets/img/c9.png";
import img10 from "../assets/img/c10.png";
import img11 from "../assets/img/c11.png";
import img12 from "../assets/img/c12.png";
import img13 from "../assets/img/c13.png";
import img14 from "../assets/img/c14.png";
import img15 from "../assets/img/c15.png";
import img16 from "../assets/img/c16.png";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images16 = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12,
    img13, img14, img15, img16,
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#fef8f3] py-10" id="Gallery">

      <h1
        className="text-4xl font-bold mb-10 mx-auto text-center text-[#8f4c49]"
        data-aos="zoom-out"
      >
        Popular Posts
      </h1>

      <div className="flex flex-col md:flex-row w-full px-6 gap-8">

        {/* ----------- LEFT image grid ----------- */}
        <div className="md:w-[70%] w-full" data-aos="zoom-out">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images16.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`photo-${i}`}
                onClick={() => setSelectedImage(src)}   // 🔥 Click handler
                className="rounded-xl cursor-pointer object-cover w-full h-[210px] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
              />
            ))}
          </div>
        </div>

        {/* ----------- RIGHT videos ----------- */}
        <div
          className="md:w-[30%] w-full flex flex-col items-center gap-6"
          data-aos="zoom-out"
          data-aos-delay="200"
        >
          <video autoPlay muted loop playsInline
            className="w-full h-[420px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-all">
            <source src="/video1.mp4" type="video/mp4" />
          </video>

          <video autoPlay muted loop playsInline
            className="w-full h-[450px] object-cover rounded-xl shadow-lg hover:scale-[1.02] transition-all">
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ===================== CUSTOM MODAL ===================== */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <img
              src={selectedImage}
              className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl"
            />

            {/* Close button */}
            <button
              className="absolute -top-5 -right-5 bg-white text-black font-bold rounded-full w-9 h-9 shadow-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

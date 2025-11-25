import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";

export default function Services() {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div id="Services">
      <h2
        className="text-3xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-[#8f4c49] to-[#6f3b38]"
        data-aos="fade-down"
      >
        Our Services
      </h2>

      <div className="flex flex-wrap gap-8 justify-center px-4 py-20">

        {/* CARD 1 */}
        <div
          className="card flip-container w-50 h-50" id="Facial"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="flip w-full h-full">
            <div
              className="front rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
              style={{ backgroundColor: "#ba886cff" }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/5732/5732044.png" alt="icon" className="w-20 h-20 mb-2" />
              <h4 className="text-white font-bold text-lg">Facial</h4>
            </div>
            <div className="back bg-yellow-700 rounded-xl flex items-center justify-center p-3 shadow-lg">
              <p className="text-white font-semibold text-center">Glow Boost & Relaxing Facial</p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="card flip-container w-50 h-50"
          id="Hairstyle"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="flip w-full h-full">
            <div
              className="front rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
              style={{ backgroundColor: "#99674aff" }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/6174/6174804.png" alt="icon" className="w-20 h-20 mb-2" />
              <h4 className="text-white font-bold text-lg">Hair Styling</h4>
            </div>
            <div className="back bg-yellow-800 rounded-xl flex items-center justify-center p-3 shadow-lg">
              <p className="text-white font-semibold text-center">Trending hairstyle & curls</p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className="card flip-container w-50 h-50"
          id="Makeup"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="flip w-full h-full">
            <div
              className="front rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
              style={{ backgroundColor: "#ba886cff" }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/6075/6075201.png" alt="icon" className="w-20 h-20 mb-2" />
              <h4 className="text-white font-bold text-lg">Makeup</h4>
            </div>
            <div className="back bg-yellow-700 rounded-xl flex items-center justify-center p-3 shadow-lg">
              <p className="text-white font-semibold text-center">Party & Bridal Makeup</p>
            </div>
          </div>
        </div>

        {/* CARD 4 */}
        <div
          className="card flip-container w-50 h-50"
          id="Spa"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="flip w-full h-full">
            <div
              className="front rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
              style={{ backgroundColor: "#99674aff" }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/3461/3461706.png" alt="icon" className="w-20 h-20 mb-2" />
              <h4 className="text-white font-bold text-lg">Spa</h4>
            </div>
            <div className="back bg-yellow-800 rounded-xl flex items-center justify-center p-3 shadow-lg">
              <p className="text-white font-semibold text-center">Stress Relief Body Spa</p>
            </div>
          </div>
        </div>

        {/* CARD 5 */}
        <div
          className="card flip-container w-50 h-50"
          id
          ="Keratin"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <div className="flip w-full h-full">
            <div
              className="front rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
              style={{ backgroundColor: "#ba886cff" }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/1312/1312113.png" alt="icon" className="w-20 h-20 mb-2" />
              <h4 className="text-white font-bold text-lg">Keratin</h4>
            </div>
            <div className="back bg-yellow-700 rounded-xl flex items-center justify-center p-3 shadow-lg">
              <p className="text-white font-semibold text-center">
                Popular method to make hair smooth & straight
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

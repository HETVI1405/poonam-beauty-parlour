import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Party from "../assets/img/img 1.png";
import Bride from "../assets/img/bride.png";
import eng from "../assets/img/eng.png";

export default function Package() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <div id="Package" className="bg-[#faddcd] py-10 px-20">
      <h2
        className="text-3xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-[#8f4c49] to-[#6f3b38]"
        data-aos="fade-down"
      >
        Luxury Make-up experience at your doorstep
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4 py-5">

        {/* CARD 1 */}
        <div
          className="card w-72 h-[360px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-full h-full">
            <div className="rounded-xl flex flex-col items-center justify-center p-2 shadow-xl  gap-2">
              <img src={Party} alt="icon" className="w-200 h-65 object-contain" />
              <h4 className="text-yellow-800 font-bold text-lg mt-1">Party Make-up</h4>

              <div className="product-price">
                <span className="text-lg font-semibold text-[#8f4c49]">₹4,500</span>&nbsp;
                <span className="line-through text-gray-600 text-sm">₹5,500</span>
              </div>

              <button className="bg-[#8f4c49] text-white px-3 py-1 rounded-lg hover:bg-[#6f3b38] transition text-xs mt-1">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div
          className="card w-72 h-[360px]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-full h-full">
            <div className="rounded-xl flex flex-col items-center justify-center p-2 shadow-xl gap-2">
              <img src={Bride} alt="icon" className="w-[200px] h-65 object-contain" />
              <h4 className="text-yellow-800 font-bold text-lg mt-1">Bridal Make-up</h4>

              <div className="product-price">
                <span className="text-lg font-semibold text-[#8f4c49]">₹9,560</span>&nbsp;
                <span className="line-through text-gray-600 text-sm">₹10,500</span>
              </div>

              <button className="bg-[#8f4c49] text-white px-3 py-1 rounded-lg hover:bg-[#6f3b38] transition text-xs mt-1">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div
          className="card w-72 h-[360px]"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="w-full h-full">
            <div className="rounded-xl flex flex-col items-center justify-center p-2 shadow-xl  gap-2">
              <img src={eng} alt="icon" className="w-200 h-65 object-contain" />
              <h4 className="text-yellow-800 font-bold text-lg mt-1">Engagement Make-up</h4>

              <div className="product-price">
                <span className="text-lg font-semibold text-[#8f4c49]">₹5,350</span>&nbsp;
                <span className="line-through text-gray-600 text-sm">₹6,500</span>
              </div>

              <button className="bg-[#8f4c49] text-white px-3 py-1 rounded-lg hover:bg-[#6f3b38] transition text-xs mt-1">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

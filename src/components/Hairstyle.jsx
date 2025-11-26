
import { useState } from "react";

import img1 from "../assets/img/imgg1.png";
import img2 from "../assets/img/imgg2.png";
import img3 from "../assets/img/imgg3.png";
import img4 from "../assets/img/imgg4.png";
import img5 from "../assets/img/imgg5.png";
import img6 from "../assets/img/imgg6.png";
import img7 from "../assets/img/imgg7.png";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Carousel3D() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const next = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  const prevIndex = index === 0 ? images.length - 1 : index - 1;
  const nextIndex = index === images.length - 1 ? 0 : index + 1;

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 bg-[#faddcd] select-none" id="Hair-style">
      <h2 className="text-3xl font-bold text-[#8f4c49] mb-6">
        Hair-Style
      </h2>

      <div className="relative flex items-center justify-center mt-6 w-full">

        {/* LEFT IMAGE - hidden on small screens */}
        <img
          src={images[prevIndex]}
          className="hidden md:block w-[180px] h-[240px] lg:w-[260px] lg:h-[350px] object-cover rounded-xl border-[10px] lg:border-[14px] border-white shadow-xl opacity-50 rotate-[-6deg] -translate-x-6 lg:-translate-x-16 cursor-pointer transition-all"
          onClick={prev}
        />

        {/* MAIN IMAGE */}
        <div className="relative w-[260px] h-[350px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] lg:w-[400px] lg:h-[500px] border-[10px] sm:border-[14px] md:border-[18px] border-white rounded-xl shadow-2xl z-30 bg-white">
          <img
            src={images[index]}
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Buttons */}
          <button
            onClick={prev}
            className="absolute left-[-35px] sm:left-[-45px] top-1/2 -translate-y-1/2 text-2xl sm:text-4xl lg:text-5xl bg-black/60 text-white px-2 py-1 rounded-xl hover:bg-black transition"
          >
            ❮
          </button>

          <button
            onClick={next}
            className="absolute right-[-35px] sm:right-[-45px] top-1/2 -translate-y-1/2 text-2xl sm:text-4xl lg:text-5xl bg-black/60 text-white px-2 py-1 rounded-xl hover:bg-black transition"
          >
            ❯
          </button>
        </div>

        {/* RIGHT IMAGE - hidden on small screens */}
        <img
          src={images[nextIndex]}
          className="hidden md:block w-[180px] h-[240px] lg:w-[260px] lg:h-[350px] object-cover rounded-xl border-[10px] lg:border-[14px] border-white shadow-xl opacity-50 rotate-[6deg] translate-x-6 lg:translate-x-16 cursor-pointer transition-all"
          onClick={next}
        />
      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-6">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm cursor-pointer ${
              i === index ? "bg-[#8f4c49]" : "bg-white/60"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

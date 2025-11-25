
// import { useState } from "react";

// import img1 from "../assets/img/imgg1.png";
// import img2 from "../assets/img/imgg2.png";
// import img3 from "../assets/img/imgg3.png";
// import img4 from "../assets/img/imgg4.png";
// import img5 from "../assets/img/imgg5.png";
// import img6 from "../assets/img/imgg6.png";
// import img7 from "../assets/img/imgg7.png";

// import img10 from "../assets/img/imgg10.png";
// import img11 from "../assets/img/imgg11.png";
// import img12 from "../assets/img/imgg12.png";
// import img13 from "../assets/img/imgg13.png";

// const images = [
//   { url: img5 },
//   { url: img3 },
//   { url: img2 },
//   { url: img11 },
//   { url: img1 },
//   { url: img6 },
//   { url: img7 },
 
 
//   { url: img10 },
//   { url: img4 },
//   { url: img12 },
//   { url: img13 },
// ];

// export default function Slider() {
//   const [index, setIndex] = useState(0);

//   const prevIndex = index === 0 ? images.length - 1 : index - 1;
//   const nextIndex = index === images.length - 1 ? 0 : index + 1;

//   const next = () => setIndex(nextIndex);
//   const prev = () => setIndex(prevIndex);

//   return (
//     <div className="flex flex-col justify-center items-center w-full py-10 bg-[#faddcd] select-none">
//       <h2 className="text-3xl font-bold text-center my-6 bg-clip-text text-transparent bg-gradient-to-r from-[#8f4c49] to-[#6f3b38]">
//         Hair-Style
//       </h2>

//       {/* Wrap All Images (Side + Main) */}
//       <div className="relative flex items-center justify-center gap-3">

//         {/* Left mini preview */}
//         <img
//           src={images[prevIndex].url}
//           className="w-[120px] h-[160px] rounded-xl object-cover opacity-50 hover:opacity-80 transition cursor-pointer"
//           onClick={prev}
//         />

//         {/* CENTER MAIN IMAGE */}
//         <div className="relative w-[380px] sm:w-[430px] md:w-[520px] h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-white/30">
//           <img
//             src={images[index].url}
//             alt=""
//             className="w-full h-full object-cover transition-all duration-700 ease-in-out animate-zoomFade"
//           />

//           {/* Arrows */}
//           <button
//             onClick={prev}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-4xl bg-white/30 hover:bg-white/60 backdrop-blur-md px-3 py-1 rounded-xl shadow-md transition"
//           >
//             ❮
//           </button>
//           <button
//             onClick={next}
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-4xl bg-white/30 hover:bg-white/60 backdrop-blur-md px-3 py-1 rounded-xl shadow-md transition"
//           >
//             ❯
//           </button>
//         </div>

//         {/* Right mini preview */}
//         <img
//           src={images[nextIndex].url}
//           className="w-[120px] h-[160px] rounded-xl object-cover opacity-50 hover:opacity-80 transition cursor-pointer"
//           onClick={next}
//         />
//       </div>

//       {/* THUMBNAILS */}
//       <div className="flex gap-2 mt-5 flex-wrap justify-center px-3">
//         {images.map((img, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             style={{ backgroundImage: `url(${img.url})` }}
//             className={`w-14 h-14 bg-cover bg-center rounded-md cursor-pointer border-2 transition-all ${
//               i === index ? "border-[#8f4c49] shadow-xl scale-110" : "opacity-50"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
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
    <div className=" w-full flex flex-col items-center justify-center py-10  bg-[#faddcd] select-none" id="Hair-style">
      <h2 className="text-3xl font-bold text-[#8f4c49] mb-6">
        Hair-Style
      </h2>

      <div className="relative flex items-center justify-center mt-6">
        
        {/* Left rotated image */}
        <img
          src={images[prevIndex]}
          className="w-[260px] h-[350px] object-cover rounded-xl border-[14px] border-white shadow-xl opacity-50 rotate-[-6deg] -translate-x-16 cursor-pointer"
          onClick={prev}
        />

        {/* Center main image */}
        <div className="relative w-[400px] h-[500px] border-[18px] border-white rounded-xl shadow-2xl z-30 bg-white">
          <img
            src={images[index]}
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-[-55px] top-1/2 -translate-y-1/2 text-5xl bg-black/60 text-white px-2 py-1 rounded-xl hover:bg-black"
          >
            ❮
          </button>
          <button
            onClick={next}
            className="absolute right-[-55px] top-1/2 -translate-y-1/2 text-5xl bg-black/60 text-white px-2 py-1 rounded-xl hover:bg-black"
          >
            ❯
          </button>
        </div>

        {/* Right rotated image */}
        <img
          src={images[nextIndex]}
          className="w-[260px] h-[350px] object-cover rounded-xl border-[14px] border-white shadow-xl opacity-50 rotate-[6deg] translate-x-16 cursor-pointer"
          onClick={next}
        />
      </div>

      {/* dots navigation */}
      <div className="flex gap-2 mt-6">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-sm cursor-pointer ${
              i === index ? "bg-[#8f4c49]" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}


import React from "react";
import "../components/Package.css";





export default function Package() {
  return (
//     <div id="Package" className="bg-[#faddcd] py-10 px-20">

//       <h2 className="text-3xl font-bold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-[#8f4c49] to-[#6f3b38] animate-slide-down">
//         Luxury Make-up experience at your doorstep
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4 py-5">

//         {/* CARD 1 */}
//       <div className="wrap-card">
//   <div className="image-card h-[450px]">
//     <img src="/party.png" className="h-[450px]" />
//   </div>
//   <div className="overlay-card">
//     <h1 className="card-title animate-pop">Party Make-up</h1>
//     <p className="price animate-slide-left">
//       ₹4,500  <br />
//       <span className="line-through text-gray-800">₹5,500</span>
//     </p>
//     <button className="book-btn">Book an Appointment</button>
//   </div>
// </div>


//         {/* CARD 2 */}
//         <div className="wrap-card">
//           <div className="image-card">
//             <img src="/mrg.png" className="w-full h-full object-contain" />
//           </div>

//           <div className="overlay-card">
//             <h1 className="card-title animate-pop">Bridal Make-up</h1>

//             <p className="price animate-slide-left">
//               ₹9,560<br></br>
//               <span className="line-through text-gray-800">₹10,500</span>
//             </p>

//             <button className="book-btn"  onClick={() => {
//     const card = document.getElementById("Appointment");
//     card.scrollIntoView({ behavior: "smooth", block: "center" });

//     card.classList.add("highlight-zoom");

//     setTimeout(() => {
//       card.classList.remove("highlight-zoom");
//     }, 1000); // remove after animation completes
//   }}>Book an Appointment</button>
//           </div>
//         </div>

//         {/* CARD 3 */}
//         <div className="wrap-card">
//           <div className="image-card">
//             <img src="/eng.png" className="w-full h-full object-contain" />
//           </div>

//           <div className="overlay-card">
//             <h1 className="card-title animate-pop">Engagement Make-up</h1>

//             <p className="price animate-slide-left">
//               ₹5,350<br></br>
//               <span className="line-through  text-gray-800">₹6,500</span>
//             </p>

//             <button className="book-btn"  onClick={() => {
//     const card = document.getElementById("Appointment");
//     card.scrollIntoView({ behavior: "smooth", block: "center" });

//     card.classList.add("highlight-zoom");

//     setTimeout(() => {
//       card.classList.remove("highlight-zoom");
//     }, 1000); 
//   }}>Book an Appointment</button>
//           </div>
//         </div>

//       </div>
//     </div>
<div id="Package" className="bg-[#faddcd] py-12 px-6 md:px-20">
  <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#8f4c49] to-[#6f3b38]">
    Luxury Make-up experience at your doorstep
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">

    {/* CARD 1 */}
    <div className="bg-white w-72 h-[390px] rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center">
      <img src="/party.png" className="w-[230px] h-[230px] object-contain" />
      <h4 className="text-[#8f4c49] font-bold text-lg mt-3">Party Make-up</h4>
      <div className="mt-1">
        <span className="text-xl font-semibold text-[#8f4c49]">₹4,500</span>&nbsp;
        <span className="line-through text-gray-600 text-sm">₹5,500</span>
      </div>
      <button className="bg-[#8f4c49] hover:bg-[#6f3b38] text-white font-medium px-4 py-2 rounded-lg mt-3 transition"  onClick={() => {
    const card = document.getElementById("Appointment");
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");

    setTimeout(() => {
      card.classList.remove("highlight-zoom");
    }, 1000); // remove after animation completes
  }}>
        Book an Appointment
      </button>
    </div>

    {/* CARD 2 */}
    <div className="bg-white w-72 h-[390px] rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center">
      <img src="/mrg.png" className="w-[230px] h-[230px] object-contain" />
      <h4 className="text-[#8f4c49] font-bold text-lg mt-3">Bridal Make-up</h4>
      <div className="mt-1">
        <span className="text-xl font-semibold text-[#8f4c49]">₹9,560</span>&nbsp;
        <span className="line-through text-gray-600 text-sm">₹10,500</span>
      </div>
      <button className="bg-[#8f4c49] hover:bg-[#6f3b38] text-white font-medium px-4 py-2 rounded-lg mt-3 transition" 
       onClick={() => {
    const card = document.getElementById("Appointment");
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");

    setTimeout(() => {
      card.classList.remove("highlight-zoom");
    }, 1000); // remove after animation completes
  }}>
        Book an Appointment
      </button>
    </div>

    {/* CARD 3 */}
    <div className="bg-white w-72 h-[390px] rounded-xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center" id="Packages">
      <img src="/eng.png" className="w-[230px] h-[230px] object-contain" />
      <h4 className="text-[#8f4c49] font-bold text-lg mt-3">Engagement Make-up</h4>
      <div className="mt-1">
        <span className="text-xl font-semibold text-[#8f4c49]">₹5,350</span>&nbsp;
        <span className="line-through text-gray-600 text-sm">₹6,500</span>
      </div>
      <button className="bg-[#8f4c49] hover:bg-[#6f3b38] text-white font-medium px-4 py-2 rounded-lg mt-3  transition my-6"
       onClick={() => {
    const card = document.getElementById("Appointment");
    card.scrollIntoView({ behavior: "smooth", block: "center" });

    card.classList.add("highlight-zoom");

    setTimeout(() => {
      card.classList.remove("highlight-zoom");
    }, 1000); // remove after animation completes
  }} >
        Book an Appointment
      </button>
    </div>

  </div>
</div>

  );
}

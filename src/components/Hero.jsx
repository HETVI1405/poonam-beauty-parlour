
// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import logo from "../assets/img/logo2.png";
// import img1 from "../assets/img/imgf2.png";
// import 'animate.css';
// import './Hero.css'
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


// const navigation = [
//   { name: 'Home', href: '#Hero' },
//   { name: 'Services', href: '#Services' },
//  { name: 'Package', href: '#Package' },
//   { name: 'Gallery', href: '#Gallery' },
//   { name: 'Hairstyle', href: '#hairstyle' },

//   { name: 'Appointment', href: '#Appointment' },
//   { name: 'About', href: '#About' },
// ]

// export default function Example() {
//   const [showModal, setShowModal] = useState(false);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <div id='Hero ' style={{backgroundColor:'#faddcd'}}>
//          <header className="absolute inset-x-0 top-0  ">
//         <nav aria-label="Global" className="flex items-center justify-between  lg:px-8">
//           <div className="flex lg:flex-1">
//             <a href="#" className=" ">
          
//               <img
//                 alt=""
//                 src={logo}
//                 className="h-27 w-auto"
//               />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//               <div className="modal fade" id="myModal"  aria-labelledby="myModalLabel" aria-hidden="true">
   
//     </div>
            
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-dark">
//                 {item.name}
//               </a>
//             ))}
//           </div>
         
//         </nav>
//         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
//           <div className="fixed inset-0 z-50" />
//           <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
                
//                <div className="flex justify-center">
//   <div className="relative">
//     <img
//       src={img1}
//       alt="Bridal Makeup"
//       className="rounded-full w-80 h-90 object-cover shadow-xl border-4 border-[#faddcd]"
//     />
//   </div>
// </div>

//               </a>
//               <button
//                 type="button"
//                 onClick={() => setMobileMenuOpen(false)}
//                 className="-m-2.5 rounded-md p-2.5 text-gray-200"
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon aria-hidden="true" className="size-6" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-white/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
               
//               </div>
//             </div>
//           </DialogPanel>
//         </Dialog>
//       </header> 
//       <section className="bg-[#faddcd] py-16" id="Hero">
//   <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//     {/* LEFT TEXT SECTION */}
//     <div className="text-center md:text-left animate__animated animate__fadeInLeft">
//       <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
//         Enhance Your <span className="italic text-[#c48c75]">Beauty</span> And Uniqueness
//       </h1>

//       <p className="mt-4 text-base md:text-lg text-gray-700">
//         We make every moment beautiful with professional bridal and party makeup.
//       </p>

//       <button
//         className="mt-6 bg-[#8f4c49] text-white px-6 py-3 rounded-lg hover:bg-[#6f3b38] transition font-medium"
//         onClick={() => document.getElementById("Appointment").scrollIntoView({ behavior: "smooth" })}
//       >
//         Book an Appointment
//       </button>
//     </div>

//     {/* RIGHT IMAGE SECTION */}
//     <div className="relative flex justify-center">
//       {/* <img
//         src="/model4.png"
//         className="rounded-full w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] object-cover border-4 border-[#faddcd] shadow-xl relative z-30"
//       /> */}

//       <svg
//         viewBox="0 0 970 500"
//         className="absolute bottom-[-30px] w-[240px] md:w-[350px] lg:w-[480px] opacity-80 z-0"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         {/* Floral curve */}
//         <g transform="translate(300,250) scale(1.25)">
//           <path
//             d="M 0 180 C -170 160, -240 80, -300 -20 C -200 -90, -340 -170, -280 -240 C -20 -300, -120 -330, 0 -330"
//             stroke="#d7a18f"
//             strokeWidth="10"
//             fill="none"
//             strokeLinecap="round"
//           />
//         </g>
//       </svg>
//     </div>

//   </div>
// </section>

//     {/* <section className="bg-[##faddcd]">
//   <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-1 items-center py-35 ">

//   <div
//   className="fade-slide-up"
//   style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
// >
//   <div className="explode-text animate__animated animate__fadeInLeft">
//     <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//       Enhance Your <span className="italic text-[#c48c75]">Beauty</span>
//       And Uniqueness
//     </h1>


//       <p className="mt-4 text-lg text-gray-700">
//         We make every moment beautiful with professional bridal and party makeup.
//       </p></div>

//    <button
//   className="mt-6 bg-[#8f4c49] text-white px-6 py-3 rounded-lg hover:bg-[#6f3b38] transition font-medium"
//   onClick={() => document.getElementById("Appointment").scrollIntoView({ behavior: "smooth" })}
// >
//   Book an Appointment
// </button>

     
   

 

//     </div>

// <div className="relative w-[470px] h-[330px] mx-auto floral-wrapper">
//   <img
//     src="/model4.png"
//     className="rounded-full w-[350px] h-[320px] object-cover border-4 border-[#faddcd] shadow-xl relative z-30 left-18 floral-center-image"
//   />

// <svg
//   viewBox="0 0 600 500"
//   className="absolute bottom-[-40px] left-0 right-0 w-full h-[300px] pointer-events-none z-0 floral-svg"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <g transform="translate(300,250) scale(1.25)" className="floral-group">

//     <g>
//       <path
//         d="
//           M 0 180
//           C -170 160, -240 80, -300 -20
//           C -200 -90, -340 -170, -280 -240
//           C -20 -300, -120 -330, 0 -330
//         "
//         stroke="#d7a18f"
//         strokeWidth="10"
//         fill="none"
//         strokeLinecap="round"
//         className="branch"
//       />

    
//       <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-40" y="150" width="45" height="45" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-110" y="130" width="40" height="40" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-180" y="95" width="35" height="35" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-240" y="50" width="50" height="50" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-290" y="-10" width="45" height="45" className="flower" />
//       <image href="https://www.pngplay.com/wp-content/uploads/9/Leaf-Background-PNG-Image.png" x="-330" y="-50" width="89" height="85" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-300" y="-120" width="52" height="40" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-320" y="-210" width="50" height="77" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-180" y="-290" width="45" height="49" className="flower" />
//     </g>

   
//     <g transform="scale(-1,1)">
//       <path
//         d="
//           M 0 180
//           C -110 160, -240 80, -300 -20
//           C -220 -90, -340 -170, -280 -240
//           C -210 -300, -120 -330, 0 -330
//         "
//         stroke="#d7a18f"
//         strokeWidth="10"
//         fill="none"
//         strokeLinecap="round"
//         className="branch"
//       />


//       <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-40" y="150" width="45" height="40" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-110" y="130" width="40" height="40" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-180" y="95" width="35" height="35" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-240" y="50" width="50" height="50" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-290" y="-10" width="45" height="45" className="flower" />
//       <image href="https://www.pngplay.com/wp-content/uploads/9/Leaf-Background-PNG-Image.png" x="-330" y="-50" width="89" height="85" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-300" y="-150" width="40" height="90" className="flower" />
//       <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-330" y="-200" width="80" height="97" className="flower" />
      
//     </g>

//   </g>
// </svg>

// </div>



//   </div>

// </section> */}
// </div>
//   )
// }
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/img/logo2.png";
import img1 from "../assets/img/imgf2.png";
import "animate.css";

const navigation = [
  { name: "Home", href: "#Hero" },
  { name: "Services", href: "#Services" },
  { name: "Package", href: "#Package" },
  { name: "Gallery", href: "#Gallery" },
  { name: "Hairstyle", href: "#Hair-style" },
  { name: "Appointment", href: "#Appointment" },
  { name: "About", href: "#About" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="Hero" style={{ backgroundColor: "#faddcd" }}>
      {/* ---------------- NAVBAR ---------------- */}
      <header className="fixedtop-0 z-10 bg-[#faddcd] shadow-md">
        <nav className="mx-auto flex  items-center justify-between p-4 h-20">
          {/* LOGO */}
          <a href="#" className="">
            <img src="/logo2.png" alt="Logo" className="h-25 w-[90px]" />
          </a>

          {/* HAMBURGER BUTTON */}
          <div className="lg:hidden">
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="w-7 h-7 text-black" />
            </button>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-black hover:text-[#8f4c49]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* MOBILE MENU */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <DialogPanel className="fixed inset-y-0 right-0 w-40 bg-[#8f4c49] text-white p-6 z-50">
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="w-7 h-7 text-white" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium hover:text-black"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12  sm:gap-3 items-center">

          {/* LEFT TEXT */}
          <div className="text-center md:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Enhance Your <span className="italic text-[#8f4c49]">Beauty</span> And Uniqueness
            </h1>
            <p className="mt-5 text-gray-700 text-lg">
              We make every moment beautiful with professional bridal and party makeup.
            </p>

            <button
              className="mt-6 bg-[#8f4c49] text-white px-8 py-3 rounded-lg hover:bg-[#6f3b38] transition font-medium"
              onClick={() =>
                document.getElementById("Appointment").scrollIntoView({ behavior: "smooth" })
              }
            >
              Book an Appointment
            </button>
          </div>

          {/* RIGHT IMAGE + SVG */}
          {/* <div className="relative flex justify-center animate__animated animate__fadeInRight">
             <img
              src={img1}
              alt="Makeup"
              className="rounded-full w-[260px] h-[260px] md:w-[330px] md:h-[330px] lg:w-[380px] lg:h-[380px] object-cover border-4 border-[#faddcd] shadow-xl z-10"
            /> 

            <svg
              viewBox="0 0 600 500"
              className="absolute bottom-[-30px] w-[60px] h-[460px] md:w-[350px] lg:w-[450px] opacity-60"
            >
              <g transform="translate(200,250) scale(1.2)">
                <path
                  d="M 0 180 C -170 160, -240 80, -300 -20 C -200 -90, -340 -170, -280 -240 C -20 -300, -120 -330, 0 -330"
                  stroke="#d7a18f"
                  strokeWidth="12"
                  fill="none"
                  strokeLinecap="round"
                />
              </g>
            </svg>
          </div> */}
          {/* RIGHT IMAGE + FLORAL SVG */}
<div className=" floral-svg  relative xs:w-[370px] h-[380px] lg:w-[360px]  lg:relative mx-auto ">
<img
  src={img1}
  alt="Makeup Model"
  className="
    rounded-full
    w-[400px] h-[400px]          /* Default - mobile */
    sm:w-[260px] sm:h-[260px]    /* small screens */
    md:w-[300px] md:h-[300px]    /* medium screens */
    lg:w-[330px] lg:h-[330px]    /* large screens */
    xl:w-[360px] xl:h-[360px]    /* extra large screens */
    object-cover 
    border-4 border-[#faddcd]
    shadow-xl
    relative z-30
  "
/>
  {/* FLORAL SVG DECORATION */}
  

</div>

        </div>
      </section>
    </div>
  );
}

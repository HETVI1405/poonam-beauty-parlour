
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../assets/img/logo2.png";
import img1 from "../assets/img/imgf2.png";
import 'animate.css';
import './Hero.css'


const navigation = [
  { name: 'Home', href: '#Hero' },
  { name: 'Services', href: '#Services' },
 { name: 'Package', href: '#Package' },
  { name: 'Gallery', href: '#Gallery' },
  { name: 'Hairstyle', href: '#hairstyle' },

  { name: 'Appointment', href: '#Appointment' },
  { name: 'About', href: '#About' },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id='Hero ' style={{backgroundColor:'#faddcd'}}>
         <header className="absolute inset-x-0 top-0  ">
        <nav aria-label="Global" className="flex items-center justify-between  lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className=" ">
          
              <img
                alt=""
                src={logo}
                className="h-27 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center  rounded-md p-2.5 text-black-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-dark">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-dark">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                
               <div className="flex justify-center">
  <div className="relative">
    <img
      src={img1}
      alt="Bridal Makeup"
      className="rounded-full w-80 h-90 object-cover shadow-xl border-4 border-[#faddcd]"
    />
  </div>
</div>

              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header> 
    <section class="bg-[##faddcd]">
  <div class="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-1 items-center py-35 ">

  <div
  className="fade-slide-up"
  style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
>
  <div className="explode-text animate__animated animate__fadeInLeft">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Enhance Your <span className="italic text-[#c48c75]">Beauty</span>
      And Uniqueness
    </h1>


      <p class="mt-4 text-lg text-gray-700">
        We make every moment beautiful with professional bridal and party makeup.
      </p></div>

      <button
        class="mt-6 bg-[#8f4c49] text-white px-6 py-3 rounded-lg hover:bg-[#6f3b38] transition font-medium">
        Book an Appointment
      </button>
    </div>

<div className="relative w-[470px] h-[330px] mx-auto floral-wrapper">
  <img
    src="/model4.png"
    className="rounded-full w-[350px] h-[320px] object-cover border-4 border-[#faddcd] shadow-xl relative z-30 left-18 floral-center-image"
  />

<svg
  viewBox="0 0 600 500"
  className="absolute bottom-[-40px] left-0 right-0 w-full h-[300px] pointer-events-none z-0 floral-svg"
  xmlns="http://www.w3.org/2000/svg"
>
  <g transform="translate(300,250) scale(1.25)" className="floral-group">

    {/* ================= LEFT ARC WITH MANY FLOWERS ================= */}
    <g>
      <path
        d="
          M 0 180
          C -170 160, -240 80, -300 -20
          C -200 -90, -340 -170, -280 -240
          C -20 -300, -120 -330, 0 -330
        "
        stroke="#d7a18f"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        className="branch"
      />

      {/* MULTIPLE FLOWERS ALONG CURVE */}
      <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-40" y="150" width="45" height="45" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-110" y="130" width="40" height="40" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-180" y="95" width="35" height="35" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-240" y="50" width="50" height="50" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-290" y="-10" width="45" height="45" className="flower" />
      <image href="https://www.pngplay.com/wp-content/uploads/9/Leaf-Background-PNG-Image.png" x="-330" y="-50" width="89" height="85" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-300" y="-120" width="52" height="40" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-320" y="-210" width="50" height="77" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-180" y="-290" width="45" height="49" className="flower" />
    </g>

    {/* ================= RIGHT ARC MIRROR ================= */}
    <g transform="scale(-1,1)">
      <path
        d="
          M 0 180
          C -110 160, -240 80, -300 -20
          C -220 -90, -340 -170, -280 -240
          C -210 -300, -120 -330, 0 -330
        "
        stroke="#d7a18f"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        className="branch"
      />

      {/* MIRRORED FLOWERS */}
      <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-40" y="150" width="45" height="40" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-110" y="130" width="40" height="40" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-180" y="95" width="35" height="35" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-240" y="50" width="50" height="50" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-290" y="-10" width="45" height="45" className="flower" />
      <image href="https://www.pngplay.com/wp-content/uploads/9/Leaf-Background-PNG-Image.png" x="-330" y="-50" width="89" height="85" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20240204/ourmid/pngtree-simple-pink-flower-png-image_11607032.png" x="-300" y="-150" width="40" height="90" className="flower" />
      <image href="https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-cute-3d-flower-leaves-decoration-png-image_9959492.png" x="-330" y="-200" width="80" height="97" className="flower" />
      
    </g>

  </g>
</svg>

</div>



  </div>

</section>
</div>
  )
}

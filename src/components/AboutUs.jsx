import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="About" className="w-full bg-[#fef8f3] py-16 px-4">
      <h2
        data-aos="zoom-out"
        className="text-4xl font-bold text-center mb-12 py-4 text-transparent bg-clip-text bg-gradient-to-r from-[#8f4c49] to-[#6f3b38]"
      >
        About Us
      </h2>

      {/* MAIN TEXT */}
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-5xl mx-auto text-center text-lg leading-relaxed text-[#6b3837] mb-16 px-3"
      >
        Welcome to <span className="font-bold">Poonam Beauty Parlour</span>,
        where beauty meets perfection! We specialize in luxury bridal, engagement
        and party makeup with premium hairstyling services. Our passion is
        enhancing natural beauty using professional techniques and top-quality
        products. With years of excellence and recognition, we continue to
        deliver confidence and elegance to every client.
      </p>

      {/* OWNER CARDS */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">

        <div
          data-aos="flip-left"
          data-aos-delay="300"
          className="w-[300px] text-center bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-2 transition-all duration-500"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-[#6f3b38] text-white flex justify-center items-center text-4xl font-bold mb-4">
            A
          </div>
          <h3 className="text-xl font-bold text-[#6f3b38]">Sangita Patel</h3>
          <p className="text-sm text-gray-700 mt-2">
            Certified Professional Makeup Artist & Hairstylist with
            7+ years experience & international expertise.
          </p>
        </div>

        <div
          data-aos="flip-right"
          data-aos-delay="450"
          className="w-[300px] text-center bg-white rounded-2xl shadow-xl p-6 hover:-translate-y-2 transition-all duration-500"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-[#6f3b38] text-white flex justify-center items-center text-4xl font-bold mb-4">
            B
          </div>
          <h3 className="text-xl font-bold text-[#6f3b38]">Shivani Patel</h3>
          <p className="text-sm text-gray-700 mt-2">
            Makeup Expert & Bridal Specialist recognized for modern beauty trends.
          </p>
        </div>

      </div>

      {/* AWARDS SECTION */}
      <h3
        data-aos="zoom-in"
        className="text-3xl font-bold text-center text-[#6f3b38] mb-8"
      >
        Awarded & Honored By
      </h3>

      <div className="flex flex-col md:flex-row gap-10 justify-center items-center">

        <div
          data-aos="fade-up-right"
          data-aos-delay="300"
          className="w-[390px] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-all duration-500"
        >
          <img src="/award2.png" className="w-full h-[430px] object-cover" />
          <p className="text-center text-lg mt-3 font-semibold px-6 py-3 text-[#6f3b38]">
            Awarded by Bollywood Actress Amisha Patel
          </p>
        </div>

        <div
          data-aos="fade-up-left"
          data-aos-delay="450"
          className="w-[390px] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.03] transition-all duration-500"
        >
          <img src="/award1.png" className="w-full h-[430px] object-cover" />
          <p className="text-center text-lg mt-3 font-semibold px-6 py-3 text-[#6f3b38]">
            Awarded by Actress & Model Sana Sultan Khan
          </p>
        </div>

      </div>
    </section>
  );
}

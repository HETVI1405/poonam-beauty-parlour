import React from "react";

const FitnessNameSlide = () => {
  const items = [ "Follow us on Instagram :- ", "poonam_beautyparlour_ ", "8401050626"];

  return (
    <div className="w-full overflow-hidden bg-[#8f4c49] py-2">
      <div className="flex gap-15 animate-slide  whitespace-nowrap">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-md md:text-md font-bold text-white uppercase tracking-wide"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        {items.map((item, index) => (
          <span
            key={index + "dup"}
            className="text-md md:text-md font-bold text-white uppercase tracking-wide"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FitnessNameSlide;

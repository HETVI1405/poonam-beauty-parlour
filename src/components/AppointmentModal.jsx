import { useState } from "react";

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Submitted:", formData);
    alert("Appointment Confirmed!");
  };

  return (
    <div style={{backgroundColor:'#faddcd'}} className=" flex  justify-center py-6 my-7 ">
    <div className="max-w-xl mx-auto mt-10 bg-white p-10 rounded-2xl shadow-xl " id ="Appointment">
      <h2 className="text-3xl font-bold text-center mb-6">Book Your Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="font-semibold">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            value={formData.name}
            onChange={handleChange}
            className="form-control border w-full p-2 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="form-control border w-full p-2 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="form-control border w-full p-2 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold">Select Service</label>
          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="form-control border w-full p-2 rounded-lg"
          >
            <option value="" disabled>Select</option>
            <option>Haircut</option>
            <option>Facial</option>
            <option>Makeup</option>
            <option>Pedicure & Manicure</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="font-semibold">Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="form-control border w-full p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="font-semibold">Time</label>
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="form-control border w-full p-2 rounded-lg"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 rounded-xl font-semibold text-white"
          style={{ backgroundColor: "#b47b4a" }}
        >
          Confirm Appointment
        </button>
      </form>
    </div>
    </div>
  );
}

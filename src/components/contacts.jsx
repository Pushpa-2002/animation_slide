// components/contacts.js
"use client";

import { useInView } from "react-intersection-observer";
import "../styles/contacts.css";

export default function Contacts() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0 });

  return (
    <div
      ref={ref}
      className={`contacts-section p-10 flex gap-5 justify-around bg-white text-black transition-opacity duration-1000 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-[60%] mx-auto text-left space-y-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-600">
          Contact us using the form below. The form is fully working and easy to customize.
        </p>
        {/* Add your form or contact details here */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded w-full mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded w-full mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="border p-3 rounded w-full mb-4"
            rows="4"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-2 rounded">
            Send Message
          </button>
        </div>
      </div>

      <div className="w-[40%] p-6 mx-auto text-left space-y-6">
        <h2 className="text-3xl font-bold">Contact Info</h2>
        <p className="text-gray-600 ">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, architecto beatae vitae dicta sunt explicabo.
        </p>
        
      </div>
    </div>
  );
}

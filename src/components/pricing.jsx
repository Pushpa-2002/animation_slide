import { Globe, User, Users2 } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import "../styles/pricing.css";

export default function Pricing() {
  // Use intersection observer hook for animation trigger
  const { ref, inView } = useInView({
    triggerOnce: true, // animate once only
    threshold: 0.2, // when 20% is visible
  });

  // Local state to trigger animation class once inView is true
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  return (
   <section className="relative flex justify-center text-center bg-gray-100 py-10" ref={ref}>
  {/* Background layer for blur effect */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500 to-blue-500"></div>

  <div className="w-[1000px] text-center space-y-4 z-10">
    <h4 className="text-4xl leading-relaxed ">Pricing</h4>
    <p className="text-xl">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam.
    </p>

    <div className="flex justify-around items-center p-10 m-15 text-black text-xl gap-6">
      {/* FIRST BOX - Single */}
      <div
        className={`first-box border p-10 rounded-xl shadow-lg backdrop-blur-md bg-white/20 ${
          animate ? "animate-slide-up" : ""
        }`}
        style={{ animationDelay: "0.5s" }}
      >
        <div className="flex justify-center items-center mb-4">
          <User />
        </div>
        <ul className="space-y-3">
          <li className="font-bold text-xl">Single</li>
          <li className="border-t border-b ">$12/month</li>
          <li>5 Domains</li>
          <li>100MB Disk Space</li>
          <li>1 MySQL Database</li>
          <li>1 User</li>
          <li>2 Projects</li>
          <li>1 Email Account</li>
        </ul>
        <button className="bg-purple-600 text-white rounded-2xl p-3 mt-4">
          Purchase Now
        </button>
      </div>

      {/* SECOND BOX - Multiple */}
      <div
        className={`second-box border p-10 rounded-xl shadow-lg backdrop-blur-md bg-white/20 ${
          animate ? "animate-slide-up" : ""
        }`}
        style={{ animationDelay: "1s" }}
      >
        <div className="flex justify-center items-center mb-4">
          <Users2 />
        </div>
        <ul className="space-y-3">
          <li className="font-bold text-xl">Multiple</li>
          <li className="border-t border-b ">$59/month</li>
          <li>5 Domains</li>
          <li>100MB Disk Space</li>
          <li>1 MySQL Database</li>
          <li>1 User</li>
          <li>2 Projects</li>
          <li>1 Email Account</li>
        </ul>
        <button className="bg-purple-600 text-white rounded-2xl p-3 mt-4">
          Purchase Now
        </button>
      </div>

      {/* THIRD BOX - Agency */}
      <div
        className={`third-box border p-10 rounded-xl shadow-lg backdrop-blur-md bg-white/20 ${
          animate ? "animate-slide-up" : ""
        }`}
        style={{ animationDelay: "1.5s" }}
      >
        <div className="flex justify-center items-center mb-4">
          <Globe />
        </div>
        <ul className="space-y-3">
          <li className="font-bold text-xl">Agency</li>
          <li className="border-t border-b ">$199/month</li>
          <li>5 Domains</li>
          <li>100MB Disk Space</li>
          <li>1 MySQL Database</li>
          <li>1 User</li>
          <li>2 Projects</li>
          <li>1 Email Account</li>
        </ul>
        <button className="bg-purple-600 text-white rounded-2xl p-3 mt-4">
          Purchase Now
        </button>
      </div>
    </div>
  </div>
</section>

  );
}

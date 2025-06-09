import { Expand } from "lucide-react";
import Image from "next/image";
import "../styles/features.css";
import { useInView } from "react-intersection-observer";

export default function Features() {
     const [firstRef, firstInView] = useInView({ triggerOnce: true, threshold: 0 });
  const [secondRef, secondInView] = useInView({ triggerOnce: true, threshold: 0 });
  return (
    <>
      <div
  ref={firstRef}
  className={`text-center p-9 m-5 bg-white text-black text-xl space-y-3`}
>
  <h1>Your Customers are Your Business!</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
  </p>
  <div className="flex justify-around items-center p-[70px] m-15">
    <div className={`flex flex-col items-center justify-center gap-5 left-fadeIn ${firstInView ? 'animate' : ''}`}>
      <div className="flex items-center justify-center w-[70px] h-[70px] rounded-full border-1 p-2 text-center ">
        <Expand />
      </div>
      <div className="text-center space-y-7">
        <h2 className="text-xl font-bold">Responsive</h2>
        <p className="text-gray-500 text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>
    </div>
    <div className={`right-fadeIn ${firstInView ? 'animate' : ''}`}>
      <Image src="/images/responsive@2x.png" alt="secound" width="1300" height="240" />
    </div>
  </div>
</div>

      <hr />
     <section
      ref={secondRef}
      className="flex items-center justify-around p-[80px] m-15 bg-white text-black text-xl"
    >
      <div className={`left space-y-10 ${secondInView ? "third-part-left" : ""}`}>
        <div className="space-y-5">
          <h2 className="text-lg font-bold">18 color variants</h2>
          <p className="text-gray-500 text-lg w-[250px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-lg font-bold">18 color variants</h2>
          <p className="text-gray-500 text-lg w-[250px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
        </div>
      </div>

     <div className={`third-part-middle base-opacity ${secondInView ? "slideInMiddle" : ""}`}>
        <Image src="/images/3@2x.png" alt="third" width="450" height="300" />
      </div>

      <div className={`right space-y-10 ${secondInView ? "third-part-right" : ""}`}>
        <div className="space-y-5">
          <h2 className="text-lg font-bold">18 color variants</h2>
          <p className="text-gray-500 w-[250px] text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
        </div>
        <div className="space-y-5">
          <h2 className="text-lg font-bold">18 color variants</h2>
          <p className="text-gray-500 w-[250px] text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
          </p>
        </div>
      </div>
    </section>

    </>
  );
}

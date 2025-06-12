'use client';
import Image from "next/image";
import "../styles/screenshots.css";
import { useInView } from "react-intersection-observer";

export default function Screenshots() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <>
      <section className="flex justify-center bg-gray-100 py-10" ref={ref}>
        <div className="w-[1000px] text-center space-y-4">
          <h4 className="text-4xl leading-relaxed">Screenshots</h4>
          <p className="text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 items-center justify-center">
            <div className={`screenshot-image ${inView ? 'fade-up' : ''}`}>
              <Image src="/images/1@2x.jpg" alt="image" width={300} height={300} />
            </div>
            <div className={`screenshot-image 
            
            ${inView ? 'fade-up' : ''}`}>
              <Image src="/images/6@2x.jpg" alt="image" width={300} height={300} />
            </div>
            <div className={`screenshot-image ${inView ? 'fade-up' : ''}`}>
              <Image src="/images/1@2x.jpg" alt="image" width={300} height={300} />
            </div>
            <div className={`screenshot-image ${inView ? 'fade-up' : ''}`}>
              <Image src="/images/6@2x.jpg" alt="image" width={300} height={300} />
            </div>
            <div className={`screenshot-image ${inView ? 'fade-up' : ''}`}>
              <Image src="/images/1@2x.jpg" alt="image" width={300} height={300} />
            </div>
            <div className={`screenshot-image ${inView ? 'fade-up' : ''}`}>
              <Image src="/images/6@2x.jpg" alt="image" width={300} height={300} />
            </div>
            <div className={`screenshot-image ${inView ? 'fade-up' : ''}`}>
              <Image src="/images/1@2x.jpg" alt="image" width={300} height={300} />
            </div>
            <div className={`screenshot-image ${inView ? 'fade-up' : ''}`}>
              <Image src="/images/6@2x.jpg" alt="image" width={300} height={300} />
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

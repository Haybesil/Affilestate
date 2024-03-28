import React, { useRef } from 'react';
import Jude from '../../assets/images/slider/Jude.png';

const data = [
  {
    src: Jude,
    name: 'Jude Henry',
    address: 'Lekki, Phase 2',
    comment:
      'This is the platform you need if you ever want to venture i to the real estate business. Thanks to Blues for helping me in the process of selling my property.',
  },
  {
    src: Jude,
    name: 'Jude Henry',
    address: 'Lekki, Phase 2',
    comment:
      'This is the platform you need if you ever want to venture i to the real estate business. Thanks to Blues for helping me in the process of selling my property.',
  },
  {
    src: Jude,
    name: 'Jude Henry',
    address: 'Lekki, Phase 2',
    comment:
      'This is the platform you need if you ever want to venture i to the real estate business. Thanks to Blues for helping me in the process of selling my property.',
  },
  {
    src: Jude,
    name: 'Jude Henry',
    address: 'Lekki, Phase 2',
    comment:
      'This is the platform you need if you ever want to venture i to the real estate business. Thanks to Blues for helping me in the process of selling my property.',
  },
];

const Slider = ({ items }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    const newPosition = slider.scrollLeft + slider.offsetWidth;
    if (newPosition >= slider.scrollWidth) {
      // If reaching the end, scroll to the beginning
      slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      slider.scrollLeft += slider.offsetWidth;
    }
  };

  return (
    <>
      <div className="mt-[20vh] mx-[8vw]">
        <div className="flex md:flex-row flex-col gap-[10px]" ref={sliderRef}>
          {data.map((data, index) => (
            <div key={index} className="">
              <div className="border border-gray-800 p-[20px]">
                <p className="comment">{data.comment}</p>
                <div className="flex mt-[2vh] gap-[20px] items-center">
                  <div>
                    <img
                      className="h-[60px] w-[60px] rounded-full"
                      src={data.src}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[12px] font-[700]">{data.name}</p>
                    <p className="text-[10px] font-[400]">{data.address}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;

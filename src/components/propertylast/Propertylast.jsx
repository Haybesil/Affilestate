import React, { useEffect, useRef } from 'react';
import { GoDotFill } from 'react-icons/go';
import { Link } from 'react-router-dom'
import '../propertyhero/Propertyhero.css'
import Image1 from '../../assets/images/propertylast/best1.png'
import Image2 from '../../assets/images/propertylast/best2.png'
import Image3 from '../../assets/images/propertylast/best3.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Propertylast = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const Property = (prop) => {
        return (
          <>
            <div>
              <div className="relative">
                {prop.discount && (
                  <p className="absolute left-[20px] top-[30px] text-white bg-primary-AffilestateBlue60 h-[60px]  w-[60px] rounded-full pt-[20px] text-center text-[12px]">
                    {prop.discount}
                  </p>
                )}
                <img src={prop.src} alt="" className="md:w-[350px] md:h-[350px]  h-[300px]" />
                <p className="text-[16px] text-primary-Black40  bg-primary-Black30 pl-[2vw] p-[15px]">
                  {prop.sale}
                </p>
              </div>
              <div className="flex gap-[20px] bg-primary-Black30 px-[2vw]">
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[20px] text-primary-Black60 font-[600]">
                    {prop.description}
                  </p>
                  <p className="text-[16px] text-primary-Black50 font-[500]">
                    {prop.address}
                  </p>
                  <p className="text-[12px] text-primary-Black40 mb-[23px]">
                    {prop.owner}
                  </p>
                </div>
                <div className="flex flex-col gap-[20px]">
                  <p className="text-[22px] text-primary-AffilestateBlue60 whitespace-nowrap">
                    {prop.price}
                  </p>
                  <Link to='/detail' className="text-[11px] font-[400] pl-[15px] bg-primary-AffilestateBlue60 p-[10px] tracking-[1px] text-white hover:cursor-[pointer]">
                    {prop.button}
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      };

    const sliderRef = useRef(null);

    const scrollLeft = () => {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    };
  
    const scrollRight = () => {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    };

  return (
    <div className="flex flex-col gap-[20px] mainbody-container mx-[8vw]">
      <h1
        className="text-primary-Black60 text-[20px] font-[500] text-left"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Best Selling Properties
      </h1>
      <div className="slider-container">
        <div className="slider" ref={sliderRef}>
          <div
            className="property-item"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
          >
            <Property
              discount="20% off"
              src={Image1}
              sale="sale"
              description="2 Bedroom Flat Apartment"
              address="Lekki-Ajah Axis"
              owner="Joan Properties"
              price="N 300,000"
              button="View Details"
            />
          </div>
          <div
            className="property-item"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Property
              src={Image2}
              sale="sale"
              description="2 Bedroom Flat Apartment"
              address="Lekki-Ajah Axis"
              owner="Joan Properties"
              price="N 300,000"
              button="View Details"
            />
          </div>
          <div
            className="property-item"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <Property
              src={Image3}
              sale="sale"
              description="2 Bedroom Flat Apartment"
              address="Lekki-Ajah Axis"
              owner="Joan Properties"
              price="N 300,000"
              button="View Details"
            />
          </div>

          <div
            className="property-item"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <Property
              src={Image2}
              sale="sale"
              description="2 Bedroom Flat Apartment"
              address="Lekki-Ajah Axis"
              owner="Joan Properties"
              price="N 300,000"
              button="View Details"
            />
          </div>

          <div
            className="property-item"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <Property
              src={Image3}
              sale="sale"
              description="2 Bedroom Flat Apartment"
              address="Lekki-Ajah Axis"
              owner="Joan Properties"
              price="N 300,000"
              button="View Details"
            />
          </div>
        </div>
      </div>
      <div className='flex'>
        <button className="nav-btn prev-btn" onClick={scrollLeft}>
          <GoDotFill size={30} className='text-primary-AffilestateBlue10 hover:text-primary-AffilestateBlue60'/>
        </button>
        <button className="nav-btn prev-btn" onClick={scrollLeft}>
          <GoDotFill size={30} className='text-primary-AffilestateBlue10 hover:text-primary-AffilestateBlue60'/>
        </button>
        <button className="nav-btn next-btn" onClick={scrollRight}>
          <GoDotFill size={30} className='text-primary-AffilestateBlue10 hover:text-primary-AffilestateBlue60'/>
        </button>
        <button className="nav-btn next-btn" onClick={scrollRight}>
          <GoDotFill size={30} className='text-primary-AffilestateBlue10 hover:text-primary-AffilestateBlue60'/>
        </button>
      </div>
    </div>
  )
}

export default Propertylast

import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';
import Image1 from '../../assets/images/mainbody/image(1).png';
import Image2 from '../../assets/images/mainbody/image(2).png';
import Image3 from '../../assets/images/mainbody/image(3).png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Mainbody = () => {
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
            <img src={prop.src} alt="" className="w-[350px] h-[350px]" />
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
              <Link
                to="/detail"
                className="text-[11px] font-[400] pl-[15px] bg-primary-AffilestateBlue60 p-[10px] tracking-[1px] text-white hover:cursor-[pointer]"
              >
                {prop.button}
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="mt-[18vh]">
        <h1
          className="text-[16px] font-[700] text-primary-AffilestateBlue60 text-center"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          FEATURED PROPERTIES
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-[50px] mx-[8vw] mt-[5vh]">
        <div
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
      <div className='mt-[1rem] flex justify-center'>
        <Link
          to="/property"
          className="text-[20px] text-center font-[200] mx-auto bg-primary-AffilestateBlue60 p-[10px] mt-[8vh] md:w-[20%] w-[60%]  text-white hover:cursor-[pointer] items-center"
        >
          View all Properties{' '}
          <FaArrowRight size={20} className="inline pl-[5px] font-[200]" />
        </Link>
      </div>
    </>
  );
};

export default Mainbody;

import { React, useEffect } from 'react';
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6';
import { GoDotFill } from 'react-icons/go';
import Image1 from '../../assets/images/heroheader/image1.png';
import Image2 from '../../assets/images/heroheader/image2.png';
import Image3 from '../../assets/images/heroheader/image3.png';
import Image4 from '../../assets/images/heroheader/image4.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Heroheader = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const List = (prop) => {
    return (
      <div>
        <p className="flex items-center text-[11px] font-[500] whitespace-nowrap">
          <GoDotFill size={40} className="text-primary-AffilestateBlue60" />
          {prop.content}
        </p>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row mx-[8vw] mt-[5rem] my-[5vh] gap-[5px] md:gap-[2vw]">
        <div
          className="w-[89%] flex flex-col gap-[20px] my-[13vh]"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <p className="text-16px font-[700] text-primary-AffilestateBlue60">
            YOUR ALL-IN-ONE STOP
          </p>
          <div className="flex gap-[10px]">
            <p className="md:text-[54px] text-[45px]">
              Buy<span className="text-primary-AffilestateBlue60">.</span>
            </p>
            <p className="md:text-[54px] text-[45px]">
              Sell<span className="text-primary-AffilestateBlue60">.</span>
            </p>
            <p className="md:text-[54px] text-[45px]">
              Rent<span className="text-primary-AffilestateBlue60">.</span>
            </p>
          </div>
          <p className="text-[15px] leading-[30px] font-[500]">
            Finding the perfect home or property is now easier than ever with
            Blues. We are your one-stop platform that connects home renters,
            buyers, sellers, agents, and service providers, creating a cohesive
            and efficient real estate ecosystem. Whether you're looking to rent,
            buy, sell, or invest, we've got you covered!
          </p>

          <Link to ='/property' className="bg-primary-AffilestateBlue60 text-[15px] md:w-[45%] w-[55%] py-[10px] pl-[3vw] text-white hover:cursor-[pointer]">
            Find Property <FaArrowRight size={20} className="inline pl-[5px]" />
          </Link>

          <div className="flex gap-[20px]">
            <p className="text-[28px] text-center font-[700]">
              300+{' '}
              <span className="block text-[16px] font-[100]">Property</span>
            </p>
            <p className="text-[28px]  text-center font-[700]">
              21k+{' '}
              <span className="block text-[16px] font-[100]">
                Satisfied Customer
              </span>
            </p>
            <p className="text-[28px]  text-center font-[700]">
              50+ <span className="block text-[16px] font-[100]">Agents</span>
            </p>
          </div>
        </div>

        <div
          className="w-[100%] flex flex-col md:flex-row gap-[20px] my-[11vh]"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <div>
            <img src={Image1} alt="" className="h-[450px] w-[650px]" />
          </div>
          <div className="flex flex-col gap-[20px]">
            <img src={Image2} alt="" className="h-[260px] md:w-[460px]" />
            <img src={Image3} alt="" className="h-[170px] md:w-[260px] w-[30]" />
          </div>
        </div>
      </div>

      <div className="flex-col md:flex md:flex-row  mx-[8vw] my-[5vh] gap-[7vw]">
        <div className="" data-aos="fade-up-right" data-aos-duration="2000">
          <img src={Image4} alt="" className="h-[500px] w-[220vw]" />
        </div>

        <div
          className=" flex flex-col gap-[10px] my-[20px]"
          data-aos="fade-up-left"
          data-aos-duration="2000"
        >
          <h1 className="text-[32px] font-[700] leading-[40px] whitespace-no-wrap">
            We offer only quality housing solutions
          </h1>
          <p className="text-[20px] font-[400] leading-[32px]">
            Experience a refreshing and stress-free real estate journey by
            joining the Blues community. Whether you're a first-time homebuyer
            or an experienced investor, our platform is designed to cater to all
            your needs, fostering a sense of trust, reliability, and
            convenience.
          </p>
          <div className="flex md:flex-row flex-col gap-[50px]">
            <div className="flex flex-col gap-[1px] mr-[20px]">
              <List content="Extensive Property Listings" />
              <List content="Trusted Real Estate Agents " />
              <List content="Seamless Rental Process" />
              <List content="Expert Selling Assistance" />
            </div>

            <div className="flex flex-col gap-[1px]">
              <List content="Exclusive Buyers Benefits" />
              <List content="Quality Service Providers" />
              <List content="Ethical Practices" />
              <List content="Transparent and Secure Transactions" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroheader;

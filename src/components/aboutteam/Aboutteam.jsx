import { React, useEffect } from 'react';
import Image1 from '../../assets/images/aboutteam/image1.png';
import Image2 from '../../assets/images/aboutteam/image2.png';
import Image3 from '../../assets/images/aboutteam/image3.png';
import Image4 from '../../assets/images/aboutteam/image4.png';
import Image5 from '../../assets/images/aboutteam/image5.png';
import Image6 from '../../assets/images/aboutteam/image6.png';
import { FaInstagram } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Aboutteam = () => {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-[100px] mx-[8vw] mt-[16vh]">
        <div>
          <div className="flex flex-col gap-[10px]" data-aos="flip-left" data-aos-duration='2000'> 
            <h1 className="text-[38px] text-center font-[700] text-primary-Black60">
              Our Team
            </h1>
            <p className="text-[15px] font-[500] text-primary-Black40 text-center">
              Our team comprises of professionals from different branches and
              specializations
            </p>
          </div>
        </div>

        <div className="grid-container">
          <div className="md:grid flex flex-col gap-[20px] grid-cols-3 md:gap-6">
            <div className="relative">
              <img
                src={Image1}
                alt=""
                className="w-full h-auto opacity-100 hover:opacity-80"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              />
              <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-[10px] items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary-AffilestateBlue60 bg-opacity-80">
                <p className="text-white text-lg font-[400]">John Jude John</p>
                <p className="text-white text-lg font-[300]">CEO/Founder</p>
                <div className="flex gap-[20px]">
                  <FaInstagram size={20} color='white' className="white" />
                  <LuFacebook size={20} color='white' className="white" />
                  <RiTwitterXLine size={20} color='white' className="white" />
                  <FaLinkedin size={20} color='white' className="white" />
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Image2}
                alt=""
                className="w-full h-auto"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />
               <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-[10px] items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary-AffilestateBlue60 bg-opacity-80">
                <p className="text-white text-lg font-[400]">Jane Shannon Chandler</p>
                <p className="text-white text-lg font-[300]">Manager</p>
                <div className="flex gap-[20px]">
                  <FaInstagram size={20} color='white' className="white" />
                  <LuFacebook size={20} color='white' className="white" />
                  <RiTwitterXLine size={20} color='white' className="white" />
                  <FaLinkedin size={20} color='white' className="white" />
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Image3}
                alt=""
                className="w-full h-auto"
                data-aos="zoom-in-down"
                data-aos-duration="2000"
              />
               <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-[10px] items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary-AffilestateBlue60 bg-opacity-80">
                <p className="text-white text-lg font-[400]">Toby Emmanuel Bakare</p>
                <p className="text-white text-lg font-[300]">IT</p>
                <div className="flex gap-[20px]">
                  <FaInstagram size={20} color='white' className="white" />
                  <LuFacebook size={20} color='white' className="white" />
                  <RiTwitterXLine size={20} color='white' className="white" />
                  <FaLinkedin size={20} color='white' className="white" />
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Image4}
                alt=""
                className="w-full h-auto"
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              />
               <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-[10px] items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary-AffilestateBlue60 bg-opacity-80">
                <p className="text-white text-lg font-[400]">Magret Amy Jack</p>
                <p className="text-white text-lg font-[300]">Marketer</p>
                <div className="flex gap-[20px]">
                  <FaInstagram size={20} color='white' className="white" />
                  <LuFacebook size={20} color='white' className="white" />
                  <RiTwitterXLine size={20} color='white' className="white" />
                  <FaLinkedin size={20} color='white' className="white" />
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Image5}
                alt=""
                className="w-full h-auto"
                data-aos="zoom-in-down"
                data-aos-duration="3000"
              />
               <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-[10px] items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary-AffilestateBlue60 bg-opacity-80">
                <p className="text-white text-lg font-[400]">Ibrahim Jatau</p>
                <p className="text-white text-lg font-[300]">Developer</p>
                <div className="flex gap-[20px]">
                  <FaInstagram size={20} color='white' className="white" />
                  <LuFacebook size={20} color='white' className="white" />
                  <RiTwitterXLine size={20} color='white' className="white" />
                  <FaLinkedin size={20} color='white' className="white" />
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={Image6}
                alt=""
                className="w-full h-auto"
                data-aos="zoom-in-down"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out"
              />
               <div className="absolute top-0 left-0 w-full h-full flex flex-col gap-[10px] items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary-AffilestateBlue60 bg-opacity-80">
                <p className="text-white text-lg font-[400]">Lisa Davies</p>
                <p className="text-white text-lg font-[300]">HR</p>
                <div className="flex gap-[20px]">
                  <FaInstagram size={20} color='white' className="white" />
                  <LuFacebook size={20} color='white' className="white" />
                  <RiTwitterXLine size={20} color='white' className="white" />
                  <FaLinkedin size={20} color='white' className="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutteam;

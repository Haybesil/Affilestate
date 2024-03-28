import React, {useEffect, Fragment } from 'react';
import Footer from '../footer/Footer';
import { FaInstagram } from 'react-icons/fa6';
import { LuFacebook } from 'react-icons/lu';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedin } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Mainfooter = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  const List = (prop) => {
    return (
      <div>
        <h1 className="text-primary-AffilestateBlue10 text-[23px] font-[600] md:text-left text-center">
          {prop.title}
        </h1>
        <ul className="flex flex-col gap-[25px] mt-[15px]">
          <li className="lists">{prop.first}</li>
          <li className="lists">{prop.second}</li>
          <li className="lists">{prop.third}</li>
          <li className="lists">{prop.fourth}</li>
        </ul>
      </div>
    );
  };

  return (
    <Fragment>
      <div>
        <div>
          <Footer />
        </div>

        <div className="flex md:flex-row flex-col justify-around px-[8vw] mt-[19vh] py-[10vh] bg-primary-AffilestateBlue110" data-aos="zoom-in-down" data-aos-duration ="2000">
          <div className="flex flex-col gap-[21vh]">
            <h1 className="md:text-[23px] text-[40px] text-primary-Black20 font-[700] md:text-left text-center">BLUES</h1>
            <div>
              <div className="flex sm:justify-center gap-[20px] mx-[auto]">
                <FaInstagram size={25} className="white" />
                <LuFacebook size={25} className="white" />
                <RiTwitterXLine size={25} className="white" />
                <FaLinkedin size={25} className="white" />
              </div>
              <p className="text-primary-Black20 mt-[20px] md:text-left text-center">Copyright 2023 blues.com</p>
            </div>
          </div>
          <div>
            <List
              title="About"
              first="About Us"
              second="Features"
              third="News & Blog"
              fourth=""
            />
          </div>
          <div>
            <List
              title="Home"
              first="Rent"
              second="Buy"
              third="Sell"
              fourth="Agents"
            />
          </div>
          <div>
            <List
              title="Support"
              first="FAQs"
              second="Support Center"
              third="Contact Us"
              fourth=""
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Mainfooter;

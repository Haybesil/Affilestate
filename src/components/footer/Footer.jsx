import { React, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Footer = () => {

useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

  return (
    <div className='flex flex-col gap-[30px] mt-[16vh]' data-aos="zoom-in" data-aos-duration="2000">
      <div className="flex flex-col gap-[10px]">
        <h1 className='text-[25px] font-[700] text-center'>Get More Updates</h1>
        <p className='text-[17px] font-[300] text-center'>
          Want to be one of the first few to get updated about our new property listings and discounts? Subscribe to our email list today.
        </p>
      </div>

      <div className='flex justify-center'>
        <input type="text" className='border border-primary-Black20 border-solid w-[35%] px-[40px] py-[10px]' placeholder="Input email address" />
        <input className='text-white text-[20px] font-[100] px-[10px] bg-primary-AffilestateBlue60 border border-primary-AffilestateBlue60' type="button" value="Subscribe" />
      </div>
    </div>
  );
};

export default Footer;

import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FiPhone } from "react-icons/fi";
import Image1 from '../../../assets/images/detail/image1.png';
import Navbar from '../../navbar/Navbar';
import Mainfooter from '../../mainfooter/Mainfooter';
import Detailscomp from '../../detailscomp/Detailscomp';

const Details = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div className="mt-[10vh]">
        <img src={Image1} alt="" />
      </div>
      <div className='flex mx-[8vw] mt-[5vh]'>
        <div className="flex flex-col gap-[15px]">
          <div className='flex gap-8 items-center'>
            <h1 className='text-[35px] font-[500]'>3 Bedroom Apartment</h1>
            <p className='flex items-center text-[15px] text-primary-AffilestateBlue60 font-[400] bg-primary-AffilestateBlue10 py-[5px] px-[10px]'>For Sale</p>
          </div>
          <div>
            <p className='text-[30px] font-[300] w-[55%]'>
              Description: A 3 bedroom fully furnished apartment for sale.
              Located in the heart of Lagos Island , the hub of business
            </p>
          </div>
          <div>
            <p className='text-[18px] font-[300]'>Posted by Afriglobal estate</p>
          </div>
          <div className='flex gap-[10px] items-center'>
            <FaLocationDot size={25} className='text-primary-AffilestateBlue60' />
            <p className='text-[23px] text-primary-AffilestateBlue60'>Lekki, Ajah</p>
          </div>
          <div className='flex md:flex-row flex-col gap-10'>
            <p className='border'>I found this useful</p>
            <p className='border'>This is within my budget</p>
            <p className='border'>This is beyond my budge</p>
            <p className='border'>I love this location</p>
          </div>
        </div>

        <div className='flex flex-col gap-[10px] whitespace-nowrap'>
          <p className='text-[35px] font-[600]'>N 300,000.00</p>
          <p className='flex gap-[12px] items-center bg-primary-AffilestateBlue60 text-white w-[90%] px-[10px] py-[10px] ml-[18px] font-[300]'>
            <FiPhone  size={20} color='white'/>
            CONTACT AGENT
          </p>
        </div>
      </div>
      <Detailscomp/>
      <Mainfooter />
    </div>
  );
};

export default Details;

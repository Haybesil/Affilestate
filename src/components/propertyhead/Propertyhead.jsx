import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const Propertyhead = () => {
  const Search = () => {
    return (
      <div>
        <form action="" className="flex md:flex-row flex-col gap-[10px] items-center">
          <input
            type="text"
            placeholder="Search"
            className="text-[20px] font-[200] border border-3 md:w-[35%] w-[80%] h-[45px] px-[5px]"
          />
          <IoMdSearch
            size={25}
            className="text-primary-Black40 relative md:right-[40px] left-[100px] bottom-[43px] px-[5px]"
          />
          <select
            name=""
            id=""
            className="border border-3 md:w-[20%] w-[60%] h-[45px] p-[5px] text-primary-Black20 text-[20px] font-[200] pb-[5px]"
          >
            <option value="">Location</option>
            <option value="">Ikeja</option>
            <option value="">Ajah</option>
            <option value="">Yaba</option>
            <option value="">Lekki</option>
            <option value="">Epe</option>
          </select>
          <select
            name=""
            id=""
            className="border border-3 md:w-[20%] w-[60%] h-[45px] p-[5px] text-primary-Black20 text-[20px] font-[200] pb-[5px]"
          >
            <option value="">Price Range</option>
            <option value="">N10,000,000</option>
            <option value="">N5,000,000</option>
            <option value="">N3,000,000</option>
            <option value="">N300,000</option>
            <option value="">N20,000</option>
          </select>
          <select
            name=""
            id=""
            className="border border-3 md:w-[20%] w-[60%] h-[45px] p-[5px] text-primary-Black20 text-[20px] font-[200] pb-[5px] px-[5px]" 
          >
            <option value="">property Type</option>
            <option value="">Condo</option>
            <option value="">Flat</option>
            <option value="">Bungalow</option>
          </select>
        </form>
      </div>
    );
  };

  return (
  

    <div className='mx-[10vw] mt-[8vh]'>
      <Search />
    </div>
  );
};

export default Propertyhead;

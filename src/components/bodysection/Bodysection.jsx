import React, { Fragment } from 'react';
import '../../App.css'
import Slider from '../slider/Slider'

const Bodysection = () => {
  return (
    <Fragment>
      <div className='background flex flex-col mt-[16vh]'>
        <div className='flex flex-col gap-[12px] mt-[10vh]'>
          <h1 className='text-[24px] text-center font-[600]'>Let Our Reviews do the talking</h1>
          <p className='text-[20px] text-center font-[200]'>See What Our Clients Are Saying About us</p>
        </div>

        <div>
            <Slider/>
        </div>
      </div>
    </Fragment>
  );
};

export default Bodysection;

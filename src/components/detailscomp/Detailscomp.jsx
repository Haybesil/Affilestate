import React, { Fragment } from 'react';
import Image1 from '../../assets/images/detailscomp/image1.png';
import Image2 from '../../assets/images/detailscomp/image2.png';
import Image3 from '../../assets/images/detailscomp/image3.png';
import Image4 from '../../assets/images/detailscomp/image4.png';

const Detailscomp = () => {
  return (
    <Fragment>
      <div className="mt-[12vh]  mx-[8vw]">
        <h1 className='text-[20px] font-[500]'>Other images of the apartment</h1>
        <div className="flex gap-[20px]  mt-[3vh]">
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image2} alt="" />
          </div>
          <div>
            <img src={Image3} alt="" />
          </div>
          <div>
            <img src={Image4} alt="" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Detailscomp;

import React, {useEffect, Fragment } from 'react';
import {Link} from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6';
import About1 from '../../assets/images/abouthero/About1.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Abouthero = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Fragment>
      <div className='flex md:flex-row flex-col gap-[30px] px-[8vw] pt-[10rem]'>
        <div className='flex flex-col gap-[20px] justify-center md:w-[50%]'  data-aos="flip-up" data-aos-duration='2000'>
          <p className='md:text-[16px] text-[25px] font-[700] text-primary-AffilestateBlue60 text-left'>ABOUT US</p>
          <h1 className='text-[38px] font-[700] w-[90%]'>We are the best among the rest</h1>
          <p className='text-[15px] font-[500] leading-[28px] text-primary-Black40'>
            We are your No.1 stop for impeccable deals such as lands, houses,
            rents, lease and everything real estate. Affilestate is built to
            help you solve all your real estate problem from getting reasonable
            prices for your properties to buying affordable and secured
            properties.
          </p>

          <Link to='/property' className="bg-primary-AffilestateBlue60 text-[15px] w-[45%] py-[10px] pl-[3vw] text-white hover:cursor-[pointer]">
            Find Property <FaArrowRight size={20} className="inline pl-[5px]" />
          </Link>
        </div>

        <div  data-aos="zoom-out-up" data-aos-duration='2000'>
          <img src={About1} alt=""  className='md:w-[896px] md:h-[598px] w-[full] h-[300px]'/>

          <div className="relative left-[13vw] md:bottom-[9vh] bottom-[7vh] flex gap-[20px] bg-primary-AffilestateBlue60 md:w-[50%] w-[75%] px-[18px] py-[10px]">
            <p className="md:text-[28px] text-[25px] text-center text-primary-AffilestateBlue10 font-[700]">
              300+{' '}
              <span className="block md:text-[16px] text-[13px] font-[100]">Property</span>
            </p>
            <p className="md:text-[28px] text-[25px] text-primary-AffilestateBlue10  text-center font-[700]">
              21k+{' '}
              <span className="block md:text-[16px] text-[13px] font-[100]">
                Satisfied Customer
              </span>
            </p>
            <p className="md:text-[28px] text-[25px] text-primary-AffilestateBlue10  text-center font-[700]">
              50+ <span className="block md:text-[16px] text-[13px] font-[100]">Agents</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Abouthero;
